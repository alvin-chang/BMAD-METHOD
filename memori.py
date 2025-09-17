import json
import os
import logging
import time
from functools import lru_cache
from typing import List, Optional, Union

# Try to import sentence transformers for fallback
try:
    from sentence_transformers import SentenceTransformer
    import numpy as np
    from sklearn.metrics.pairwise import cosine_similarity
    LLM_AVAILABLE = True
except ImportError:
    LLM_AVAILABLE = False
    np = None
    cosine_similarity = None

# Try to import LM Studio embedder
try:
    from lm_studio_embedder import LMStudioEmbedder
    LM_STUDIO_AVAILABLE = True
except ImportError:
    LM_STUDIO_AVAILABLE = False
    LMStudioEmbedder = None

logger = logging.getLogger(__name__)

class Memori:
    """
    A smart implementation of the Memori class to work with the Memori MCP server.
    This version can optionally use an LLM for semantic search when available.
    """
    
    def __init__(self, database_connect=None, conscious_ingest=True, 
                 search_config=None):
        """
        Initialize the Memori instance.
        
        Args:
            database_connect: Database connection string
            conscious_ingest: Whether to use conscious ingestion
            search_config: Configuration for search backends
        """
        self.database_connect = database_connect
        self.conscious_ingest = conscious_ingest
        self.enabled = False
        
        # Search configuration
        self.search_config = search_config or {
            "preferred_backend": "lm_studio",
            "lm_studio_url": "http://localhost:1234/v1",
            "cache_embeddings": True,
            "cache_ttl": 3600
        }
        
        # Simple in-memory storage for demonstration
        # In a real implementation, this would connect to a database
        self._storage = {}
        
        # Initialize search backends
        self.llm_model = None
        self.embeddings = {}
        self.lm_studio_embedder = None
        
        # Initialize LM Studio embedder if available
        if LM_STUDIO_AVAILABLE:
            try:
                self.lm_studio_embedder = LMStudioEmbedder(
                    base_url=self.search_config.get("lm_studio_url", "http://localhost:1234/v1")
                )
            except Exception as e:
                logger.warning(f"Failed to initialize LM Studio embedder: {e}")
        
        # Initialize sentence transformer model for fallback
        if LLM_AVAILABLE:
            try:
                # Load a sentence transformer model for embeddings
                self.llm_model = SentenceTransformer('all-MiniLM-L6-v2')
            except Exception as e:
                logger.warning(f"Failed to initialize sentence transformer model: {e}")
        
        # Determine the best available search backend
        self.search_backend = self._determine_search_backend()
        
        # Initialize embedding cache
        self.embedding_cache = {}
        self.cache_ttl = self.search_config.get("cache_ttl", 3600)
    
    def enable(self):
        """Enable the memory system."""
        self.enabled = True
    
    def _determine_search_backend(self):
        """Determine the best available search backend."""
        preferred = self.search_config.get("preferred_backend", "lm_studio")
        
        # Check in order of preference
        if preferred == "lm_studio" and self.lm_studio_embedder and self.lm_studio_embedder.available:
            return "lm_studio"
        elif preferred == "sentence_transformers" and LLM_AVAILABLE and self.llm_model:
            return "sentence_transformers"
        elif preferred == "simple":
            return "simple"
        # Fallback checks
        elif self.lm_studio_embedder and self.lm_studio_embedder.available:
            return "lm_studio"
        elif LLM_AVAILABLE and self.llm_model:
            return "sentence_transformers"
        else:
            return "simple"
    
    def _get_cached_embedding(self, text):
        """Retrieve cached embedding if available and not expired."""
        if not self.search_config.get("cache_embeddings", True):
            return None
            
        text_hash = hash(text)
        current_time = time.time()
        
        if text_hash in self.embedding_cache:
            cached_embedding, timestamp = self.embedding_cache[text_hash]
            if current_time - timestamp < self.cache_ttl:
                return cached_embedding
        return None
    
    def _cache_embedding(self, text, embedding):
        """Cache an embedding for future use."""
        if not self.search_config.get("cache_embeddings", True) or embedding is None:
            return
            
        text_hash = hash(text)
        self.embedding_cache[text_hash] = (embedding, time.time())
    
    def _create_embedding(self, text):
        """Create an embedding for the given text using the best available method."""
        # Check cache first
        if self.search_config.get("cache_embeddings", True):
            cached = self._get_cached_embedding(text)
            if cached is not None:
                return cached
        
        embedding = None
        
        # Try to create embedding with the current backend
        try:
            if self.search_backend == "lm_studio" and self.lm_studio_embedder:
                embeddings = self.lm_studio_embedder.generate_embeddings([text])
                embedding = embeddings[0] if embeddings else None
            elif self.search_backend == "sentence_transformers" and self.llm_model and LLM_AVAILABLE:
                embedding = self.llm_model.encode(text)
        except Exception as e:
            logger.warning(f"Failed to create embedding with {self.search_backend}: {e}")
            # Try to fall back to another backend
            embedding = self._create_embedding_fallback(text)
        
        # Cache the result
        if self.search_config.get("cache_embeddings", True):
            self._cache_embedding(text, embedding)
        
        return embedding
    
    def _create_embedding_fallback(self, text):
        """Fallback method for creating embeddings."""
        # Try LM Studio if not already used
        if self.search_backend != "lm_studio" and self.lm_studio_embedder and self.lm_studio_embedder.available:
            try:
                embeddings = self.lm_studio_embedder.generate_embeddings([text])
                return embeddings[0] if embeddings else None
            except Exception:
                pass
        
        # Try sentence transformers if not already used
        if self.search_backend != "sentence_transformers" and LLM_AVAILABLE and self.llm_model:
            try:
                return self.llm_model.encode(text)
            except Exception:
                pass
        
        return None
    
    def memorize(self, key, content):
        """
        Store content in memory with the given key.
        
        Args:
            key: The key to store the content under
            content: The content to store
        """
        if not self.enabled:
            raise Exception("Memori is not enabled")
            
        self._storage[key] = content
        logger.info(f"Stored memory with key: {key}")
        
        # Create embedding for semantic search if any backend is available
        if self.search_backend != "simple":
            embedding = self._create_embedding(content)
            if embedding is not None:
                self.embeddings[key] = embedding
                logger.debug(f"Created and stored embedding for key: {key}")
            else:
                logger.warning(f"Failed to create embedding for key: {key}")
    
    def retrieve_context(self, query, limit=5):
        """
        Retrieve context based on a query.
        
        Args:
            query: The search query
            limit: Maximum number of results to return
            
        Returns:
            String containing matching memories
        """
        if not self.enabled:
            raise Exception("Memori is not enabled")
        
        logger.info(f"Retrieving context for query: '{query}' with limit: {limit}")
        
        # Use semantic search if any backend is available, otherwise fall back to simple search
        if self.search_backend != "simple" and self.embeddings:
            logger.info(f"Using semantic search with backend: {self.search_backend}")
            result = self._semantic_search(query, limit)
            if result is not None:
                logger.info(f"Semantic search returned {len(result) if result else 0} characters")
                return result
        
        # Fallback to simple search
        logger.info("Using simple search as fallback")
        result = self._simple_search(query, limit)
        logger.info(f"Simple search returned {len(result) if result else 0} characters")
        return result
    
    def _semantic_search(self, query, limit):
        """Perform semantic search using the best available embedding method."""
        if not self.embeddings:
            logger.info("No embeddings available for semantic search")
            return ""
        
        try:
            logger.info(f"Performing semantic search for query: '{query}'")
            # Create embedding for the query
            query_embedding = self._create_embedding(query)
            if query_embedding is None:
                logger.warning("Failed to create query embedding, falling back to simple search")
                return self._simple_search(query, limit)
            
            # Calculate similarities
            similarities = []
            for key, embedding in self.embeddings.items():
                try:
                    # Calculate cosine similarity
                    if self.search_backend == "lm_studio" or self.search_backend == "sentence_transformers":
                        # For both backends, we use cosine similarity
                        # Normalize vectors for cosine similarity
                        query_norm = np.linalg.norm(query_embedding)
                        embedding_norm = np.linalg.norm(embedding)
                        
                        if query_norm == 0 or embedding_norm == 0:
                            similarity = 0
                        else:
                            similarity = np.dot(query_embedding, embedding) / (query_norm * embedding_norm)
                        
                        similarities.append((key, similarity))
                except Exception as e:
                    logger.warning(f"Error calculating similarity for key {key}: {e}")
                    continue
            
            # Sort by similarity and get top results
            similarities.sort(key=lambda x: x[1], reverse=True)
            top_matches = similarities[:limit]
            logger.info(f"Found {len(top_matches)} matches with semantic search")
            
            # Format results
            matches = []
            for key, similarity in top_matches:
                content = self._storage.get(key, "")
                matches.append(f"Key: {key}\nContent: {content}\nSimilarity: {similarity:.4f}\n")
            
            if matches:
                return "\n---\n".join(matches)
            else:
                return ""
        except Exception as e:
            logger.error(f"Semantic search failed: {e}")
            # Fall back to simple search if semantic search fails
            return self._simple_search(query, limit)
    
    def _simple_search(self, query, limit):
        """Simple substring search as fallback."""
        logger.info(f"Performing simple search for query: '{query}'")
        # Simple implementation that searches for exact matches
        # A real implementation would use more sophisticated search
        matches = []
        for key, content in self._storage.items():
            if query in key or query in content:
                matches.append(f"Key: {key}\nContent: {content}\n")
                
        # Limit results
        matches = matches[:limit]
        logger.info(f"Simple search found {len(matches)} matches")
        
        if matches:
            return "\n---\n".join(matches)
        else:
            return ""