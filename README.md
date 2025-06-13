# The BMAD-Method V4 (Breakthrough Method of AgileAI Driven Development)

## 🚀 Quick Start (No Installation Required!)

### Option 1: Use Pre-built Web Bundles (Easiest)

**No Node.js needed! Just download and use:**

1. Go to the [`/web-bundles/`](web-bundles/) folder in this repo
2. Download a bundle file:
   - **Team bundles** in [`/web-bundles/teams/`](web-bundles/teams/) - Full agile teams with all roles
   - **Individual agents** in [`/web-bundles/agents/`](web-bundles/agents/) - Single role agents
3. Upload to your AI platform:

   - **Gemini**: Create a new Gem → Upload the bundle file → Start using!
   - **ChatGPT**: Create a custom GPT → Attach as knowledge → Start using!

   Wether you use Gemini or ChatGPT, you will want to set the instructions as follows: 'Your critical operating instructions are attached, you ARE the BMad Agent, and you are orchestrating the team attached as instructed. Do not deviate from the attached operating instructions.'

   Thanks it, you are now ready to go. I suggest starting with typing `/help` - and if you dont know what to do, select the option to hear about and select a workflow - and BMad will help you throughout the whole process guiding you agent to agent now!

That's it! You're ready to use BMAD agents. 🎉

### Option 2: IDE Agents (Also No Installation)

For Cursor, Windsurf, or other IDEs:

1. Copy the `bmad-core/` folder to your project root
2. Use agents from `bmad-core/ide-agents/`
3. Set up slash commands (see examples in `.cursor/` or `.claude/commands/`)

## What is BMAD?

BMAD is a framework that gives you a complete Agile development team powered by AI. Each agent specializes in a specific role:

- **🧠 Business Analyst** - Requirements gathering and project briefs
- **📋 Product Manager** - PRDs and product planning
- **👁️ UX Expert** - User experience design and UI specifications
- **🏗️ Architect** - System design and technical architecture
- **🔄 Fullstack Architect** - Holistic full-stack system design
- **🎨 Design Architect** - UI/UX and frontend architecture
- **✅ Product Owner** - Story validation and backlog management
- **📝 Scrum Master** - Story generation and sprint planning
- **💻 Developer** - Code implementation
- **🧪 QA Engineer** - Testing and quality assurance

The **BMAD Orchestrator** can transform into any role using slash commands!
The **BMAD Master** can do anything within the bmad-core without agent switching.

## 🛠️ Advanced: Build Custom Bundles

Only needed if you want to customize agents:

1. Clone this repository
2. Install Node.js and run `npm install`
3. Create or Modify agents in `/agents/` folder
4. Add your own custom templates, tasks, etc...
5. Run `npm run build`
6. Find your custom bundles in `/dist/` for the web agents
7. If it is for an ide, just copy them to the same folders from the bmad method that are already in your project.

### IDE Slash Commands

For Cursor, Windsurf, VSCode, and Claude Code: Check the `.cursor/` or `.claude/commands/` folders for example slash command setups. These let you quickly switch between agents in your IDE!

## 📚 Documentation

Updates to docs coming soon.

## Previous Versions

- [Version 3](https://github.com/bmadcode/BMAD-METHOD/tree/V3)
- [Version 2](https://github.com/bmadcode/BMAD-METHOD/tree/V2)
- [Version 1](https://github.com/bmadcode/BMAD-METHOD/tree/V1)

---

Thank you and enjoy! - BMad

[MIT License](docs/LICENSE)
