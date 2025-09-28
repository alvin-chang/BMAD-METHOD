# BMAD Agent Handoff Data Format

## Overview

This document defines the standardized data format for handoffs between BMAD agents. The format ensures consistent and complete transfer of context, instructions, and dependencies when one agent completes a task and another agent takes over.

## Handoff Data Structure

```yaml
handoff:
  # Metadata about the handoff
  metadata:
    id: "unique-handoff-id"
    source_agent: "agent-name"
    target_agent: "agent-name"
    timestamp: "ISO 8601 timestamp"
    workflow_id: "optional-workflow-id"
    task_id: "optional-task-id"
  
  # Context being transferred
  context:
    # Story file if applicable
    story_file: "path/to/story.md"
    
    # Relevant architecture context
    architecture_context: "path/to/architecture-section.md"
    
    # Relevant PRD context
    prd_context: "path/to/prd-section.md"
    
    # Any other relevant documents
    additional_context:
      - "path/to/document1.md"
      - "path/to/document2.md"
    
    # Key decisions made by source agent
    key_decisions:
      - decision: "Brief description of decision"
        rationale: "Reasoning behind the decision"
        impact: "Impact on downstream work"
  
  # Instructions for target agent
  instructions:
    primary: "Main task for target agent"
    secondary:
      - "Additional task or consideration"
      - "Another secondary task"
    constraints:
      - "Limitation or constraint to be aware of"
      - "Another constraint"
    success_criteria:
      - "Measurable criterion for success"
      - "Another success criterion"
  
  # Dependencies and prerequisites
  dependencies:
    required_files:
      - "path/to/required-file1.md"
      - "path/to/required-file2.md"
    generated_files:
      - "path/to/generated-file1.md"
      - "path/to/generated-file2.md"
    external_dependencies:
      - name: "Dependency name"
        version: "Version if applicable"
        url: "URL if applicable"
  
  # Validation information
  validation:
    # Checksums for generated files
    file_checksums:
      "path/to/file.md": "checksum-hash"
    
    # Status of source agent's work
    source_status:
      completed_tasks:
        - "task-id-1"
        - "task-id-2"
      pending_tasks:
        - "task-id-3"
      overall_status: "completed|in-progress|failed"
    
    # Quality checks
    quality_checks:
      tests_passed: true|false
      code_review_status: "passed|failed|pending"
      documentation_complete: true|false
  
  # Historical information
  history:
    # Previous handoffs in this workflow
    previous_handoffs:
      - source_agent: "previous-agent"
        target_agent: "current-source-agent"
        timestamp: "ISO 8601 timestamp"
        summary: "Brief summary of previous handoff"
    
    # Lessons learned
    lessons_learned:
      - "Key insight from this handoff"
      - "Another lesson learned"
```

## Example Handoff Data

```yaml
handoff:
  metadata:
    id: "handoff-2023-08-15-001"
    source_agent: "sm"
    target_agent: "dev"
    timestamp: "2023-08-15T14:30:00Z"
    workflow_id: "epic-1-implementation"
    task_id: "story-1.2-authentication"
  
  context:
    story_file: "docs/stories/epic-1-story-2-authentication.md"
    architecture_context: "docs/architecture/security/authentication.md"
    prd_context: "docs/prd/requirements.md"
    additional_context:
      - "docs/architecture/tech-stack.md"
    key_decisions:
      - decision: "Use JWT for authentication"
        rationale: "Aligns with architecture standards and provides stateless authentication"
        impact: "Dev agent should implement JWT-based authentication flow"
  
  instructions:
    primary: "Implement the user authentication feature as specified in the story"
    secondary:
      - "Follow the architecture guidelines for security implementation"
      - "Ensure all acceptance criteria are met before marking complete"
      - "Write unit tests for all authentication functions"
    constraints:
      - "Must use the JWT library specified in tech stack"
      - "Authentication must comply with OWASP security guidelines"
    success_criteria:
      - "All acceptance criteria in story are implemented and tested"
      - "Authentication flow works for login, logout, and token refresh"
      - "Unit tests achieve 80%+ code coverage"
  
  dependencies:
    required_files:
      - "docs/stories/epic-1-story-2-authentication.md"
      - "docs/architecture/security/authentication.md"
    generated_files:
      - "src/auth/service.js"
      - "src/auth/controller.js"
    external_dependencies:
      - name: "jsonwebtoken"
        version: "^9.0.0"
        url: "https://www.npmjs.com/package/jsonwebtoken"
  
  validation:
    file_checksums:
      "docs/stories/epic-1-story-2-authentication.md": "a1b2c3d4e5f6"
    source_status:
      completed_tasks:
        - "story-draft"
        - "acceptance-criteria-review"
      pending_tasks: []
      overall_status: "completed"
    quality_checks:
      tests_passed: true
      code_review_status: "pending"
      documentation_complete: true
  
  history:
    previous_handoffs:
      - source_agent: "pm"
        target_agent: "sm"
        timestamp: "2023-08-15T10:00:00Z"
        summary: "PRD and architecture review completed"
    lessons_learned:
      - "Ensure story files contain complete acceptance criteria before development"
      - "Cross-reference architecture documents early in story creation"
```

## Handoff Validation Schema

```json
{
  "type": "object",
  "properties": {
    "handoff": {
      "type": "object",
      "properties": {
        "metadata": {
          "type": "object",
          "properties": {
            "id": {"type": "string"},
            "source_agent": {"type": "string"},
            "target_agent": {"type": "string"},
            "timestamp": {"type": "string", "format": "date-time"},
            "workflow_id": {"type": "string"},
            "task_id": {"type": "string"}
          },
          "required": ["id", "source_agent", "target_agent", "timestamp"]
        },
        "context": {
          "type": "object",
          "properties": {
            "story_file": {"type": "string"},
            "architecture_context": {"type": "string"},
            "prd_context": {"type": "string"},
            "additional_context": {
              "type": "array",
              "items": {"type": "string"}
            },
            "key_decisions": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "decision": {"type": "string"},
                  "rationale": {"type": "string"},
                  "impact": {"type": "string"}
                },
                "required": ["decision", "rationale", "impact"]
              }
            }
          }
        },
        "instructions": {
          "type": "object",
          "properties": {
            "primary": {"type": "string"},
            "secondary": {
              "type": "array",
              "items": {"type": "string"}
            },
            "constraints": {
              "type": "array",
              "items": {"type": "string"}
            },
            "success_criteria": {
              "type": "array",
              "items": {"type": "string"}
            }
          },
          "required": ["primary"]
        },
        "dependencies": {
          "type": "object",
          "properties": {
            "required_files": {
              "type": "array",
              "items": {"type": "string"}
            },
            "generated_files": {
              "type": "array",
              "items": {"type": "string"}
            },
            "external_dependencies": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {"type": "string"},
                  "version": {"type": "string"},
                  "url": {"type": "string"}
                },
                "required": ["name"]
              }
            }
          }
        },
        "validation": {
          "type": "object",
          "properties": {
            "file_checksums": {
              "type": "object",
              "additionalProperties": {"type": "string"}
            },
            "source_status": {
              "type": "object",
              "properties": {
                "completed_tasks": {
                  "type": "array",
                  "items": {"type": "string"}
                },
                "pending_tasks": {
                  "type": "array",
                  "items": {"type": "string"}
                },
                "overall_status": {"type": "string", "enum": ["completed", "in-progress", "failed"]}
              }
            },
            "quality_checks": {
              "type": "object",
              "properties": {
                "tests_passed": {"type": "boolean"},
                "code_review_status": {"type": "string", "enum": ["passed", "failed", "pending"]},
                "documentation_complete": {"type": "boolean"}
              }
            }
          }
        },
        "history": {
          "type": "object",
          "properties": {
            "previous_handoffs": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "source_agent": {"type": "string"},
                  "target_agent": {"type": "string"},
                  "timestamp": {"type": "string", "format": "date-time"},
                  "summary": {"type": "string"}
                },
                "required": ["source_agent", "target_agent", "timestamp", "summary"]
              }
            },
            "lessons_learned": {
              "type": "array",
              "items": {"type": "string"}
            }
          }
        }
      },
      "required": ["metadata", "context", "instructions", "dependencies"]
    }
  },
  "required": ["handoff"]
}