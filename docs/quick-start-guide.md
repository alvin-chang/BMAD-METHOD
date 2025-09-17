# BMAD Quick Start Guide

## Welcome to BMAD!

BMAD (Breakthrough Method of Agile AI-driven Development) is a framework that combines AI agents with Agile development methodologies to help you build software more efficiently.

This quick start guide will get you up and running with BMAD in just a few minutes.

## Prerequisites

Before installing BMAD, make sure you have:

- **Node.js** version 12 or higher
- **npm** (comes with Node.js)
- A code editor or IDE that supports AI agents (or access to web-based AI tools)

## Installation

### Option 1: Quick Installation (Recommended)

1. Create a new project directory:
   ```bash
   mkdir my-bmad-project
   cd my-bmad-project
   ```

2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```

3. Install BMAD:
   ```bash
   npx bmad-method install
   ```

4. Verify installation:
   ```bash
   ls -la .bmad-core
   ```

### Option 2: Clone from GitHub

1. Clone the repository:
   ```bash
   git clone https://github.com/bmadcode/BMAD-METHOD.git
   ```

2. Navigate to the directory:
   ```bash
   cd BMAD-METHOD
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install BMAD in your project:
   ```bash
   npm run install:bmad
   ```

## Core Agents

BMAD comes with several specialized agents:

- **Analyst**: Market research and requirements gathering
- **PM**: Product requirements documents (PRDs)
- **Architect**: System architecture design
- **SM**: User story creation
- **Dev**: Code implementation
- **QA**: Code review and testing

## Basic Workflow

BMAD follows a two-phase workflow:

### 1. Planning Phase

1. **Create a project brief** (Analyst):
   ```bash
   # In an AI-enabled IDE:
   # @analyst Create a project brief for a todo list application
   ```

2. **Create a PRD** (PM):
   ```bash
   # @pm Create a PRD based on the project brief
   ```

3. **Design architecture** (Architect):
   ```bash
   # @architect Design the architecture for the application
   ```

### 2. Development Phase

1. **Create user stories** (SM):
   ```bash
   # @sm Create user stories from the PRD
   ```

2. **Implement stories** (Dev):
   ```bash
   # @dev Implement the first user story
   ```

3. **Review implementation** (QA):
   ```bash
   # @qa Review the implementation
   ```

## Using BMAD in Your IDE

If your IDE supports AI agents:

1. Load an agent by referencing its file:
   ```
   @.bmad-core/agents/pm.md
   ```

2. Use the agent's commands:
   ```
   @pm create-doc prd
   ```

## Using BMAD with Web-Based AI

1. Navigate to the `dist/teams/` directory
2. Choose a team file (e.g., `team-fullstack.txt`)
3. Copy the content
4. Create a new conversation with your AI tool
5. Paste the content and instruct the AI to follow the BMAD method

## Quick Example: Building a Todo List

Let's quickly go through building a simple todo list application:

### Planning Phase

1. **Project Brief**:
   ```
   @analyst Create a project brief for a simple todo list application with the ability to add, complete, and delete tasks.
   ```

2. **PRD**:
   ```
   @pm Create a PRD for the todo list application based on the brief.
   ```

3. **Architecture**:
   ```
   @architect Design a simple architecture for the todo list application using React and Node.js.
   ```

### Development Phase

1. **User Stories**:
   ```
   @sm Create user stories for the todo list application.
   ```

2. **Implementation**:
   ```
   @dev Implement the "Add todo item" story.
   ```

3. **Review**:
   ```
   @qa Review the implementation of the "Add todo item" story.
   ```

## Key Commands

Here are some essential commands for each agent:

### Analyst
- `*brainstorm {topic}` - Generate ideas
- `*create-project-brief` - Create project brief

### PM
- `*create-doc prd` - Create Product Requirements Document
- `*elicit` - Gather more requirements

### Architect
- `*create-full-stack-architecture` - Design system architecture
- `*research {topic}` - Research technical topics

### SM
- `*create` - Create next user story
- `*story-checklist` - Validate story completeness

### Dev
- `*develop-story` - Implement a user story
- `*run-tests` - Run tests
- `*explain` - Explain implementation details

### QA
- `*review {story}` - Review story implementation
- `*risk {story}` - Assess story risks
- `*test-design {story}` - Design test strategy

## Advanced Features

### Templates
BMAD includes customizable templates for common documents:
```bash
ls .bmad-core/templates
```

### Memory System
Agents can store and retrieve information:
```bash
# This is handled automatically by agents
# but you can also use it directly in some tools
```

### Expansion Packs
Add specialized agents for specific domains:
```bash
# Coming soon - installation via npm
```

## Troubleshooting

### Common Issues

1. **Installation fails**:
   - Make sure you have Node.js 12+ installed
   - Check your internet connection
   - Try running with `sudo` (Mac/Linux)

2. **Agents not loading**:
   - Verify the `.bmad-core` directory exists
   - Check file permissions
   - Ensure your IDE supports the agent format

3. **Performance issues**:
   - Close other applications
   - Use more powerful AI models when available
   - Break complex tasks into smaller stories

### Getting Help

- **Documentation**: Check the `docs/` directory
- **Community**: Join our Discord server
- **Issues**: Report bugs on GitHub
- **Tutorials**: Complete the interactive tutorials

## Next Steps

1. **Complete the interactive tutorial**: Run `bmad tutorial start "getting-started"` for a guided tour
2. **Build a real project**: Try implementing the todo list application
3. **Explore advanced features**: Learn about templates, memory, and workflows
4. **Join the community**: Connect with other BMAD users

## Resources

- **Documentation**: [docs/](docs/)
- **GitHub**: [https://github.com/bmadcode/BMAD-METHOD](https://github.com/bmadcode/BMAD-METHOD)
- **Discord**: [Join our community](https://discord.gg/gk8jAdXWmj)
- **Tutorials**: Interactive tutorials available via CLI

## Feedback

We'd love to hear your feedback on BMAD! Please:

1. Report issues on GitHub
2. Share your experiences in our Discord community
3. Contribute improvements via pull requests
4. Spread the word about BMAD

Happy coding with BMAD! 🚀