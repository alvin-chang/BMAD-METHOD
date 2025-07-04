# BMad Method Guide for Claude Code

This guide covers Claude Code-specific setup and usage with BMad Method. For the complete workflow, see the [BMad Workflow Guide](../bmad-workflow-guide.md).

## Installation

When running `npx bmad-method install`, select **Claude Code** as your IDE. This creates:

- `.bmad-core/` folder with all agents
- `.claude/commands/` folder with agent command files (`.md`)

## Using BMad Agents in Claude Code

Type `/agent-name` in your chat to activate an agent:

- `/bmad-master` - Universal task executor
- `/sm` - Scrum Master
- `/dev` - Full-stack developer
- `/architect` - Solution architect
- `/pm` - Product manager
- `/analyst` - Business analyst
- `/qa` - QA specialist
- `/po` - Product owner
- `/ux-expert` - UX specialist

## Claude Code-Specific Features

- **Command files**: Stored in `.claude/commands/` as `.md` files
- **Activation**: Use forward slash `/` prefix for all agents
- **Chat management**: Start new chats when switching agents for clean context

## Tips for Claude Code Users

- Commands are auto-suggested as you type `/`
- More coming soon...
