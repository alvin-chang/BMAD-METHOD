# BMAD-METHOD™: Universal AI Agent Framework

[![Version](https://img.shields.io/npm/v/bmad-method?color=blue&label=version)](https://www.npmjs.com/package/bmad-method)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)
[![Discord](https://img.shields.io/badge/Discord-Join%20Community-7289da?logo=discord&logoColor=white)](https://discord.gg/gk8jAdXWmj)

Foundations in Agentic Agile Driven Development, known as the Breakthrough Method of Agile AI-Driven Development, yet so much more. Transform any domain with specialized AI expertise: software development, entertainment, creative writing, business strategy to personal wellness just to name a few.

**[Subscribe to BMadCode on YouTube](https://www.youtube.com/@BMadCode?sub_confirmation=1)**

**[Join our Discord Community](https://discord.gg/gk8jAdXWmj)** - A growing community for AI enthusiasts! Get help, share ideas, explore AI agents & frameworks, collaborate on tech projects, enjoy hobbies, and help each other succeed. Whether you're stuck on BMad, building your own agents, or just want to chat about the latest in AI - we're here for you! **Some mobile and VPN may have issue joining the discord, this is a discord issue - if the invite does not work, try from your own internet or another network, or non-VPN.**

⭐ **If you find this project helpful or useful, please give it a star in the upper right hand corner!** It helps others discover BMAD-METHOD™ and you will be notified of updates!

## Overview

**BMAD-METHOD™'s Key Innovations:**

**1. Agentic Planning:** Dedicated agents (Analyst, PM, Architect) collaborate with you to create detailed, consistent PRDs and Architecture documents. Through advanced prompt engineering and human-in-the-loop refinement, these planning agents produce comprehensive specifications that go far beyond generic AI task generation.

**2. Context-Engineered Development:** The Scrum Master agent then transforms these detailed plans into hyper-detailed development stories that contain everything the Dev agent needs - full context, implementation details, and architectural guidance embedded directly in story files.

**3. Enhanced Validation System:** Our new template validation system ensures your BMAD templates are correctly structured with real-time feedback and error recovery.

**4. Advanced Orchestration:** The enhanced BMAD Orchestrator provides workflow visualization, monitoring, and bottleneck detection.

**5. Improved Agent Communication:** Standardized handoff protocols ensure seamless transitions between agents.

This approach eliminates both **planning inconsistency** and **context loss** - the biggest problems in AI-assisted development. Your Dev agent opens a story file with complete understanding of what to build, how to build it, and why.

**📖 [See the complete workflow in the User Guide](docs/user-guide.md)** - Planning phase, development cycle, and all agent roles

## Recent Major Enhancements

BMAD has undergone a significant enhancement initiative that has improved the framework across all five key areas:

### 1. Template Validation Enhancement

- **Schema Validation**: Comprehensive JSON schema validation for all template components
- **Real-time Feedback**: Immediate validation results during template development
- **Graceful Error Recovery**: Continue working even when templates have errors
- **Template Linting**: Best practices enforcement and suggestions for improvement
- **CLI Tools**: Command-line interfaces for validation and linting

### 2. Orchestrator Agent Enhancement

- **Workflow Visualization**: Real-time Mermaid diagrams showing workflow status
- **Monitoring and Alerting**: Track workflow progress with automated alerts
- **Bottleneck Detection**: Identify and resolve workflow delays
- **Resource Optimization**: Balance workloads across agents
- **Conflict Resolution**: Mediate disagreements between agents

### 3. Agent Communication Enhancement

- **Standardized Handoff**: Structured data passing between agents
- **Context Preservation**: Maintain context during agent transitions
- **Conflict Resolution**: Automated detection and resolution of agent disagreements
- **Feedback Loops**: Agents learn from each other's outputs

### 4. Memory System Enhancement

- **Cross-Agent Sharing**: Agents can access relevant memories from other agent types
- **Pattern Recognition**: Automated detection of patterns in stored memories
- **Intelligent Compression**: Efficient storage for long-running projects
- **Usage Analytics**: Track memory effectiveness and quality

### 5. Documentation and Onboarding Enhancement

- **Interactive Tutorials**: Step-by-step guided learning experiences
- **Quick Start Guides**: Fast onboarding for new users
- **Video Documentation**: Planned video content for complex topics
- **Improved Navigation**: Better organization of documentation resources

These enhancements make BMAD significantly more powerful, user-friendly, and effective while maintaining its core strengths of modularity and specialization.

📖 **[Read the complete enhancement summary](docs/bmad-enhancement-initiative-complete-summary.md)** - Detailed information about all improvements

## Quick Navigation

### Understanding the BMad Workflow

**Before diving in, review these critical workflow diagrams that explain how BMad works:**

1. **[Planning Workflow (Web UI)](docs/user-guide.md#the-planning-workflow-web-ui)** - How to create PRD and Architecture documents
2. **[Core Development Cycle (IDE)](docs/user-guide.md#the-core-development-cycle-ide)** - How SM, Dev, and QA agents collaborate through story files

> ⚠️ **These diagrams explain 90% of BMad Method Agentic Agile flow confusion** - Understanding the PRD+Architecture creation and the SM/Dev/QA workflow and how agents pass notes through story files is essential - and also explains why this is NOT taskmaster or just a simple task runner!

### What would you like to do?

- **[Install and Build software with Full Stack Agile AI Team](#quick-start)** → Quick Start Instruction
- **[Learn how to use BMad](docs/user-guide.md)** → Complete user guide and walkthrough
- **[See available AI agents](/bmad-core/agents)** → Specialized roles for your team
- **[Explore validation and linting tools](#enhanced-template-validation-system)** → Template validation and linting tools
- **[Use enhanced orchestrator features](#enhanced-orchestrator-features)** → Workflow visualization and monitoring
- **[Explore non-technical uses](#-beyond-software-development---expansion-packs)** → Creative writing, business, wellness, education
- **[Create my own AI agents](docs/expansion-packs.md)** → Build agents for your domain
- **[Browse ready-made expansion packs](expansion-packs/)** → Game dev, DevOps, infrastructure and get inspired with ideas and examples
- **[Understand the architecture](docs/core-architecture.md)** → Technical deep dive
- **[Join the community](https://discord.gg/gk8jAdXWmj)** → Get help and share ideas

## Enhanced Template Validation System

BMAD now includes a comprehensive template validation system that ensures your templates are correctly structured and follow best practices:

- **Real-time Validation**: Get immediate feedback as you create templates
- **Schema Validation**: Comprehensive JSON schema validation for all template components
- **Graceful Error Recovery**: Continue working even when templates have errors
- **Template Linting**: Best practices enforcement and suggestions for improvement
- **CLI Tools**: Command-line interfaces for validation and linting

To validate your templates:

```bash
npm run validate:templates my-template.yaml
npm run lint:templates my-template.yaml
npm run validate:templates:watch my-template.yaml
```

## Enhanced Orchestrator Features

The BMAD Orchestrator has been significantly enhanced with new capabilities:

- **Workflow Visualization**: Real-time Mermaid diagrams of your workflows
- **Monitoring and Alerting**: Track workflow progress and get alerted to issues
- **Bottleneck Detection**: Identify and resolve workflow delays
- **Resource Optimization**: Balance workloads across agents
- **Conflict Resolution**: Mediate disagreements between agents

To use the enhanced orchestrator:

```bash
# In an AI-enabled IDE, load the enhanced orchestrator:
# @.bmad-core/agents/enhanced-bmad-orchestrator.md
```

## Recent Major Enhancements

BMAD has undergone a significant enhancement initiative that has improved the framework across all five key areas:

### 1. Template Validation Enhancement

- **Schema Validation**: Comprehensive JSON schema validation for all template components
- **Real-time Feedback**: Immediate validation results during template development
- **Graceful Error Recovery**: Continue working even when templates have errors
- **Template Linting**: Best practices enforcement and suggestions for improvement
- **CLI Tools**: Command-line interfaces for validation and linting

### 2. Orchestrator Agent Enhancement

- **Workflow Visualization**: Real-time Mermaid diagrams showing workflow status
- **Monitoring and Alerting**: Track workflow progress with automated alerts
- **Bottleneck Detection**: Identify and resolve workflow delays
- **Resource Optimization**: Balance workloads across agents
- **Conflict Resolution**: Mediate disagreements between agents

### 3. Agent Communication Enhancement

- **Standardized Handoff**: Structured data passing between agents
- **Context Preservation**: Maintain context during agent transitions
- **Conflict Resolution**: Automated detection and resolution of agent disagreements
- **Feedback Loops**: Agents learn from each other's outputs

### 4. Memory System Enhancement

- **Cross-Agent Sharing**: Agents can access relevant memories from other agent types
- **Pattern Recognition**: Automated detection of patterns in stored memories
- **Intelligent Compression**: Efficient storage for long-running projects
- **Usage Analytics**: Track memory effectiveness and quality

### 5. Documentation and Onboarding Enhancement

- **Interactive Tutorials**: Step-by-step guided learning experiences
- **Quick Start Guides**: Fast onboarding for new users
- **Video Documentation**: Planned video content for complex topics
- **Improved Navigation**: Better organization of documentation resources

These enhancements make BMAD significantly more powerful, user-friendly, and effective while maintaining its core strengths of modularity and specialization.

📖 **[Read the complete enhancement summary](docs/bmad-enhancement-initiative-complete-summary.md)** - Detailed information about all improvements

## Important: Keep Your BMad Installation Updated

**Stay up-to-date effortlessly!** If you already have BMAD-METHOD™ installed in your project, simply run:

```bash
npx bmad-method install
# OR
git pull
npm run install:bmad
```

This will:

- ✅ Automatically detect your existing v4 installation
- ✅ Update only the files that have changed and add new files
- ✅ Create `.bak` backup files for any custom modifications you've made
- ✅ Preserve your project-specific configurations

This makes it easy to benefit from the latest improvements, bug fixes, and new agents without losing your customizations!

## Quick Start

### One Command for Everything (IDE Installation)

**Just run one of these commands:**

```bash
npx bmad-method install
# OR if you already have BMad installed:
git pull
npm run install:bmad
```

This single command handles:

- **New installations** - Sets up BMad in your project
- **Upgrades** - Updates existing installations automatically
- **Expansion packs** - Installs any expansion packs you've added to package.json
- **Enhanced features** - Installs the new validation system, orchestrator enhancements, and other improvements

> **That's it!** Whether you're installing for the first time, upgrading, or adding expansion packs - these commands do everything.

**Prerequisites**: [Node.js](https://nodejs.org) v20+ required

### Fastest Start: Web UI Full Stack Team at your disposal (2 minutes)

1. **Get the bundle**: Save or clone the [full stack team file](dist/teams/team-fullstack.txt) or choose another team
2. **Create AI agent**: Create a new Gemini Gem or CustomGPT
3. **Upload & configure**: Upload the file and set instructions: "Your critical operating instructions are attached, do not break character as directed"
4. **Start Ideating and Planning**: Start chatting! Type `*help` to see available commands or pick an agent like `*analyst` to start right in on creating a brief.
5. **CRITICAL**: Talk to BMad Orchestrator in the web at ANY TIME (#bmad-orchestrator command) and ask it questions about how this all works!
6. **When to move to the IDE**: Once you have your PRD, Architecture, optional UX and Briefs - its time to switch over to the IDE to shard your docs, and start implementing the actual code! See the [User guide](docs/user-guide.md) for more details

### Using Enhanced Features

After installation, you can take advantage of BMAD's enhanced features:

**Template Validation:**

```bash
# Validate a template
npm run validate:templates my-template.yaml

# Lint a template for best practices
npm run lint:templates my-template.yaml

# Watch a template for changes with real-time validation
npm run validate:templates:watch my-template.yaml
```

**Enhanced Orchestrator:**
In an AI-enabled IDE, load the enhanced orchestrator agent:

```
@.bmad-core/agents/enhanced-bmad-orchestrator.md
```

The enhanced orchestrator provides:

- Workflow visualization with Mermaid diagrams
- Real-time monitoring and alerting
- Bottleneck detection and resolution
- Resource optimization
- Conflict mediation

### Using Enhanced Features

After installation, you can take advantage of BMAD's enhanced features:

**Template Validation:**

```bash
# Validate a template
npm run validate:templates my-template.yaml

# Lint a template for best practices
npm run lint:templates my-template.yaml

# Watch a template for changes with real-time validation
npm run validate:templates:watch my-template.yaml
```

**Enhanced Orchestrator:**
In an AI-enabled IDE, load the enhanced orchestrator agent:

```
@.bmad-core/agents/enhanced-bmad-orchestrator.md
```

The enhanced orchestrator provides:

- Workflow visualization with Mermaid diagrams
- Real-time monitoring and alerting
- Bottleneck detection and resolution
- Resource optimization
- Conflict mediation

### Alternative: Clone and Build

```bash
git clone https://github.com/bmadcode/bmad-method.git
npm run install:bmad # build and install all to a destination folder
```

## 🌟 Beyond Software Development - Expansion Packs

BMAD™'s natural language framework works in ANY domain. Expansion packs provide specialized AI agents for creative writing, business strategy, health & wellness, education, and more. Also expansion packs can expand the core BMAD-METHOD™ with specific functionality that is not generic for all cases. [See the Expansion Packs Guide](docs/expansion-packs.md) and learn to create your own!

## Documentation & Resources

### Essential Guides

- 📖 **[User Guide](docs/user-guide.md)** - Complete walkthrough from project inception to completion
- 🏗️ **[Core Architecture](docs/core-architecture.md)** - Technical deep dive and system design
- 🚀 **[Expansion Packs Guide](docs/expansion-packs.md)** - Extend BMad to any domain beyond software development
- 🔍 **[Template Validation Guide](docs/template-validation-implementation-summary.md)** - Comprehensive guide to the new template validation system
- 🎯 **[Orchestrator Enhancement Guide](docs/orchestrator-enhancement.md)** - Details on the enhanced orchestrator features
- 🤝 **[Agent Communication Guide](docs/agent-communication-enhancement.md)** - Improved agent handoff processes
- 🧠 **[Memory System Guide](docs/enhanced-memory-system.md)** - Enhanced memory system with cross-agent sharing
- 🎓 **[Quick Start Guide](docs/quick-start-guide.md)** - Fast onboarding for new users
- 🎥 **[Video Tutorials](docs/onboarding-video-script.md)** - Planned video content for learning BMad

### New Agent Roles

BMAD now includes additional specialized agents:

- **DevOps Agent** - Infrastructure and deployment expertise
- **Performance Agent** - Performance optimization and benchmarking
- **Security Agent** - Security auditing and vulnerability assessment
- **Technical Writer Agent** - Documentation creation and maintenance

## Support

- 💬 [Discord Community](https://discord.gg/gk8jAdXWmj)
- 🐛 [Issue Tracker](https://github.com/bmadcode/bmad-method/issues)
- 💬 [Discussions](https://github.com/bmadcode/bmad-method/discussions)

## Contributing

**We're excited about contributions and welcome your ideas, improvements, and expansion packs!** 🎉

📋 **[Read CONTRIBUTING.md](CONTRIBUTING.md)** - Complete guide to contributing, including guidelines, process, and requirements

🚀 **[BMAD Enhancement Initiative](docs/bmad-enhancement-initiative-complete-summary.md)** - Check out our recently completed comprehensive enhancement initiative and see how you can help improve BMAD!

### Working with Forks

When you fork this repository, CI/CD workflows are **disabled by default** to save resources. This is intentional and helps keep your fork clean.

#### Need CI/CD in Your Fork?

See our [Fork CI/CD Guide](.github/FORK_GUIDE.md) for instructions on enabling workflows in your fork.

#### Contributing Workflow

1. **Fork the repository** - Click the Fork button on GitHub
2. **Clone your fork** - `git clone https://github.com/YOUR-USERNAME/BMAD-METHOD.git`
3. **Create a feature branch** - `git checkout -b feature/amazing-feature`
4. **Make your changes** - Test locally with `npm test`
5. **Commit your changes** - `git commit -m 'feat: add amazing feature'`
6. **Push to your fork** - `git push origin feature/amazing-feature`
7. **Open a Pull Request** - CI/CD will run automatically on the PR

Your contributions are tested when you submit a PR - no need to enable CI in your fork!

## License

MIT License - see [LICENSE](LICENSE) for details.

## Trademark Notice

BMAD™ and BMAD-METHOD™ are trademarks of BMad Code, LLC. All rights reserved.

[![Contributors](https://contrib.rocks/image?repo=bmadcode/bmad-method)](https://github.com/bmadcode/bmad-method/graphs/contributors)

<sub>Built with ❤️ for the AI-assisted development community</sub>
