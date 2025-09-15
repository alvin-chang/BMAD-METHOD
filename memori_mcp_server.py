from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from memori import Memori
import uvicorn
import os
import logging
from typing import Dict, Any, Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Memori with enhanced search configuration
memory = Memori(
    database_connect="sqlite:///memori_memory.db",
    conscious_ingest=True,
    search_config={
        "preferred_backend": "lm_studio",
        "lm_studio_url": "http://localhost:1234/v1",
        "cache_embeddings": True,
        "cache_ttl": 3600
    }
)

# Debug information
print(f"LM Studio embedder: {memory.lm_studio_embedder}")
if memory.lm_studio_embedder:
    print(f"LM Studio available: {memory.lm_studio_embedder.available}")
print(f"Sentence transformer: {memory.llm_model is not None}")
print(f"Search backend: {memory.search_backend}")

memory.enable()

logger.info(f"Memori initialized with search backend: {memory.search_backend}")

class MCPRequest(BaseModel):
    jsonrpc: str = "2.0"
    id: Optional[int] = None
    method: str
    params: Optional[Dict[str, Any]] = None

class MCPSuccessResponse(BaseModel):
    jsonrpc: str = "2.0"
    id: Optional[int] = None
    result: Any

class MCPErrorResponse(BaseModel):
    jsonrpc: str = "2.0"
    id: Optional[int] = None
    error: Dict[str, Any]

def make_key(content: str, project_id: str, agent_role: str) -> str:
    return f"[{project_id}][{agent_role}] {content}"

def make_search_query(query: str, project_id: str, agent_role: str = None, scope: str = "project") -> str:
    if scope == "agent" and agent_role:
        return f"[{project_id}][{agent_role}] {query}"
    elif scope == "project":
        return f"[{project_id}] {query}"
    else:
        return query

@app.post("/mcp")
async def mcp_handler(request: MCPRequest):
    try:
        if request.method == "initialize":
            # Qwen expects "protocolVersion": "2024-11-05"
            return MCPSuccessResponse(
                id=request.id,
                result={
                    "protocolVersion": "2024-11-05",
                    "capabilities": {"tools": {}},
                    "serverInfo": {
                        "name": "bmad-memori-server",
                        "version": "1.0.0"
                    }
                }
            )
        elif request.method == "tools/list":
            return MCPSuccessResponse(
                id=request.id,
                result={
                    "tools": [
                        {
                            "name": "store_memory",
                            "description": "Store information with BMAD agent memory namespacing",
                            "inputSchema": {
                                "type": "object",
                                "properties": {
                                    "content": {
                                        "type": "string",
                                        "description": "Content with agent prefix"
                                    },
                                    "project_id": {
                                        "type": "string",
                                        "description": "Project identifier"
                                    },
                                    "agent_role": {
                                        "type": "string",
                                        "description": "Agent role for partitioning memory"
                                    }
                                },
                                "required": ["content", "project_id"]
                            }
                        },
                        {
                            "name": "search_memory",
                            "description": "Search stored memories by BMAD context",
                            "inputSchema": {
                                "type": "object",
                                "properties": {
                                    "query": {
                                        "type": "string",
                                        "description": "Search query (use agent prefixes for specific searches)"
                                    },
                                    "project_id": {
                                        "type": "string",
                                        "description": "Project identifier"
                                    },
                                    "agent_role": {
                                        "type": "string",
                                        "description": "Agent role for agent-isolated search"
                                    },
                                    "scope": {
                                        "type": "string",
                                        "description": "Scope: agent (default), project, or global",
                                        "default": "agent"
                                    },
                                    "limit": {
                                        "type": "integer",
                                        "description": "Maximum number of results",
                                        "default": 5
                                    }
                                },
                                "required": ["query", "project_id"]
                            }
                        }
                    ]
                }
            )
        elif request.method == "tools/call":
            params = request.params or {}
            tool_name = params.get("name")
            arguments = params.get("arguments", {})
            if tool_name == "store_memory":
                content = arguments.get("content", "")
                project_id = arguments.get("project_id", "default")
                agent_role = arguments.get("agent_role", "unknown")
                key = make_key(content, project_id, agent_role)
                # Actually store in Memori (dummy storage, adapt to API if needed)
                memory.memorize(key, content)
                return MCPSuccessResponse(
                    id=request.id,
                    result={
                        "content": [{
                            "type": "text",
                            "text": f"✅ Stored memory for [{agent_role}] in [{project_id}]: {content[:120]}{'...' if len(content) > 120 else ''}"
                        }]
                    }
                )
            elif tool_name == "search_memory":
                query = arguments.get("query", "")
                project_id = arguments.get("project_id", "default")
                agent_role = arguments.get("agent_role", "")
                scope = arguments.get("scope", "agent")
                limit = arguments.get("limit", 5)
                search_query = make_search_query(query, project_id, agent_role, scope)
                try:
                    context = memory.retrieve_context(search_query, limit=limit)
                    if context:
                        result_text = f"🔍 Found {len(context)} memory entries in [{project_id}] for: '{query}'\n\n{context}"
                    else:
                        result_text = f"🔍 No memories found in [{project_id}] for query: '{query}'"
                    return MCPSuccessResponse(
                        id=request.id,
                        result={
                            "content": [{
                                "type": "text",
                                "text": result_text
                            }]
                        }
                    )
                except Exception as e:
                    return MCPSuccessResponse(
                        id=request.id,
                        result={
                            "content": [{
                                "type": "text",
                                "text": f"❌ Memory search error: {str(e)}"
                            }]
                        }
                    )
            else:
                return MCPErrorResponse(
                    id=request.id,
                    error={"code": -32601, "message": f"Unknown tool: {tool_name}"}
                )
        else:
            return MCPErrorResponse(
                id=request.id,
                error={"code": -32601, "message": f"Method not found: {request.method}"}
            )
    except Exception as e:
        return MCPErrorResponse(
            id=request.id,
            error={"code": -32603, "message": f"Internal error: {str(e)}"}
        )

@app.get("/health")
async def health():
    return {"status": "healthy", "service": "BMAD Memori MCP Server"}

if __name__ == "__main__":
    print("BMAD Memori MCP server starting on http://localhost:4004/mcp ...")
    uvicorn.run(app, host="0.0.0.0", port=4004, log_level="info")

