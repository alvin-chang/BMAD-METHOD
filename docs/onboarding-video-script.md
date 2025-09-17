# BMAD Onboarding Video Script

## Video 1: Introduction to BMAD (5 minutes)

### Opening (0:00-0:30)
**Visual**: BMAD logo with animated elements
**Voiceover**: 
"Welcome to BMAD - the Breakthrough Method of Agile AI-driven Development. In this video, we'll introduce you to BMAD and show you how it can revolutionize your development workflow."

### What is BMAD? (0:30-2:00)
**Visual**: Split screen showing traditional development vs. BMAD
**Voiceover**:
"BMAD is a framework that combines AI agents with Agile development methodologies. Instead of doing all the work yourself, you direct a team of specialized AI agents, each with their own expertise.

On the left, we see traditional development where one person handles everything. On the right, we see BMAD where specialized agents handle different aspects of development."

**Visual**: Icons representing different agents
**Voiceover**:
"BMAD includes agents for:
- Business analysis and market research
- Product management and requirements
- System architecture and design
- Scrum mastery and story creation
- Development and implementation
- Quality assurance and testing"

### How BMAD Works (2:00-3:30)
**Visual**: Flowchart showing BMAD workflow
**Voiceover**:
"BMAD works in two main phases: Planning and Development.

In the Planning phase, agents work together to create detailed documents:
- Project briefs
- Product requirements documents
- System architecture designs

In the Development phase, agents implement the planned features:
- Scrum Master creates user stories
- Developer implements the stories
- QA agent reviews and tests the implementation"

### Benefits of BMAD (3:30-4:30)
**Visual**: Text overlays showing benefits
**Voiceover**:
"BMAD offers several key benefits:
- Faster development through parallel AI work
- Higher quality through specialized expertise
- Better documentation and planning
- Reduced cognitive load on developers
- Consistent implementation patterns"

### Closing (4:30-5:00)
**Visual**: Call to action with links
**Voiceover**:
"In the next video, we'll show you how to install BMAD and get started with your first project. Don't forget to subscribe for more tutorials!"

## Video 2: Installing BMAD (8 minutes)

### Opening (0:00-0:30)
**Visual**: Computer screen recording setup
**Voiceover**:
"Welcome to the BMAD installation tutorial. In this video, we'll walk you through installing BMAD in your project."

### Prerequisites (0:30-1:30)
**Visual**: Terminal showing Node.js version check
**Voiceover**:
"Before installing BMAD, make sure you have Node.js version 12 or higher installed. You can check your version with:
```bash
node --version
```

If you don't have Node.js installed, download it from nodejs.org."

### Installation Methods (1:30-3:00)
**Visual**: Terminal showing installation commands
**Voiceover**:
"There are two ways to install BMAD. The recommended method is using npx:

1. Create a new project directory
2. Initialize a Node.js project
3. Run the BMAD installer

```bash
mkdir my-bmad-project
cd my-bmad-project
npm init -y
npx bmad-method install
```

This will download and install BMAD in your project."

### Verifying Installation (3:00-4:30)
**Visual**: File explorer showing .bmad-core directory
**Voiceover**:
"After installation, you should see a `.bmad-core` directory in your project. This directory contains all the BMAD agents, templates, and tasks.

Let's explore what's inside:
- `agents/` - All the specialized AI agents
- `templates/` - Document templates
- `tasks/` - Automated workflows
- `checklists/` - Quality assurance checklists"

### IDE Setup (4:30-6:00)
**Visual**: IDE showing agent loading
**Voiceover**:
"To use BMAD in your IDE, you'll need an AI-powered editor like Cursor, Claude Code, or VS Code with AI extensions.

Load an agent by referencing its file:
```
@.bmad-core/agents/pm.md
```

Then you can use the agent's commands:
```
@pm create-doc prd
```

Different IDEs have different syntax for loading agents, so check your IDE's documentation."

### Web-Based Usage (6:00-7:00)
**Visual**: Web interface showing team file upload
**Voiceover**:
"You can also use BMAD with web-based AI tools like ChatGPT or Claude.

1. Navigate to the `dist/teams/` directory in your BMAD installation
2. Choose a team file like `team-fullstack.txt`
3. Copy the content
4. Create a new conversation with your AI tool
5. Paste the content and instruct the AI to follow the BMAD method"

### Troubleshooting (7:00-7:30)
**Visual**: Text showing common issues and solutions
**Voiceover**:
"If you encounter issues:
- Make sure you have the correct Node.js version
- Check your internet connection
- Try running with administrator privileges
- Verify file permissions"

### Closing (7:30-8:00)
**Visual**: Call to action with links
**Voiceover**:
"Now that BMAD is installed, you're ready to start your first project. In the next video, we'll build a simple todo list application using BMAD."

## Video 3: Building Your First Project (12 minutes)

### Opening (0:00-0:30)
**Visual**: Project planning whiteboard
**Voiceover**:
"Welcome to building your first project with BMAD. In this video, we'll create a simple todo list application from start to finish."

### Planning Phase (0:30-4:00)
**Visual**: IDE showing Analyst agent in use
**Voiceover**:
"Every BMAD project starts with the Planning phase. We'll use three agents: Analyst, PM, and Architect.

First, let's create a project brief with the Analyst agent:
```
@analyst Create a project brief for a simple todo list application with the ability to add, complete, and delete tasks.
```

The Analyst will ask questions to better understand your requirements. Answer them to provide more context."

**Visual**: IDE showing PM agent creating PRD
**Voiceover**:
"Next, the PM agent creates a Product Requirements Document:
```
@pm Create a PRD for the todo list application based on the brief.
```

This document will detail all the features and requirements for our application."

**Visual**: IDE showing Architect agent designing system
**Voiceover**:
"Finally, the Architect designs the system:
```
@architect Design a simple architecture for the todo list application using React and Node.js.
```

The architecture document will specify the technology stack and system design."

### Development Phase (4:00-9:00)
**Visual**: IDE showing SM agent creating stories
**Voiceover**:
"Now we move to the Development phase. The Scrum Master creates user stories:
```
@sm Create user stories for the todo list application.
```

Each story follows the format: 'As a [user], I want to [action] so that [benefit].'"

**Visual**: IDE showing Dev agent implementing story
**Voiceover**:
"The Developer implements the stories:
```
@dev Implement the 'Add todo item' story.
```

The Dev agent will create the necessary files and code to implement the feature."

**Visual**: IDE showing QA agent reviewing code
**Voiceover**:
"The QA agent reviews the implementation:
```
@qa Review the implementation of the 'Add todo item' story.
```

The QA agent checks for code quality, security, and adherence to requirements."

### Testing the Application (9:00-10:30)
**Visual**: Browser showing running todo list app
**Voiceover**:
"After implementing all stories, let's test our application. Navigate to your project directory and start the development server:

```bash
npm start
```

Open your browser and navigate to http://localhost:3000 to see your todo list application in action."

### Best Practices (10:30-11:30)
**Visual**: Text overlays showing best practices
**Voiceover**:
"Here are some best practices for BMAD projects:
- Keep user stories small and focused
- Review documents thoroughly before development
- Use the QA agent for every story
- Commit your code frequently
- Update documentation as you go"

### Closing (11:30-12:00)
**Visual**: Completed app with call to action
**Voiceover**:
"Congratulations! You've built your first BMAD application. In the next video, we'll explore advanced features like custom templates and the memory system."

## Video 4: Advanced Features (10 minutes)

### Opening (0:00-0:30)
**Visual**: BMAD dashboard interface concept
**Voiceover**:
"Welcome to advanced BMAD features. In this video, we'll explore templates, the memory system, and expansion packs."

### Custom Templates (0:30-3:00)
**Visual**: Code editor showing template file
**Voiceover**:
"BMAD uses YAML templates for consistent document creation. Let's look at a PRD template:

```yaml
template:
  id: prd-template
  name: Product Requirements Document
  sections:
    - id: goals
      title: Goals
      instruction: List the main goals for this product
```

You can customize templates for your specific needs. Copy an existing template and modify it:

```bash
cp .bmad-core/templates/prd-tmpl.yaml .bmad-core/templates/my-prd-tmpl.yaml
```

Then modify the copy to match your requirements."

### Memory System (3:00-5:30)
**Visual**: Diagram showing memory system
**Voiceover**:
"The memory system allows agents to store and retrieve information across sessions. This helps maintain context and learn from previous projects.

Agents automatically store important decisions:
```
store_memory("PROJECT_DECISION: Using React for frontend")
```

And can retrieve relevant information:
```
search_memory("React performance optimization")
```

The memory system is organized by prefixes:
- `DEV_` for development decisions
- `ARCH_` for architecture decisions
- `QA_` for quality assurance information"

### Expansion Packs (5:30-7:30)
**Visual**: Marketplace interface concept
**Voiceover**:
"Expansion packs add specialized agents for specific domains. For example:
- Game development agents
- Data science agents
- Mobile development agents
- Business strategy agents

To install an expansion pack:
```bash
npm install @bmad/game-dev-pack
npx bmad-method install
```

The installer will automatically integrate the new agents into your project."

### Workflow Automation (7:30-9:00)
**Visual**: Flowchart showing automated workflow
**Voiceover**:
"BMAD supports complex workflows that automate multi-step processes. For example, you can create a workflow that:
1. Generates a PRD
2. Creates architecture documents
3. Shards the documents
4. Creates user stories
5. Implements the first story

Create a workflow file in `.bmad-core/workflows/` and define the steps and agent interactions."

### Community and Contributing (9:00-9:30)
**Visual**: GitHub interface showing pull request
**Voiceover**:
"BMAD is open source and community-driven. You can:
- Report issues on GitHub
- Contribute improvements via pull requests
- Create your own expansion packs
- Share templates with the community"

### Closing (9:30-10:00)
**Visual**: Call to action with links
**Voiceover**:
"Now you know the advanced features of BMAD. Start exploring these capabilities in your own projects, and don't forget to share your experiences with the community!"

## Video 5: Troubleshooting and Best Practices (8 minutes)

### Opening (0:00-0:30)
**Visual**: Help desk interface concept
**Voiceover**:
"Welcome to troubleshooting and best practices for BMAD. In this video, we'll cover common issues and how to get the most out of BMAD."

### Common Installation Issues (0:30-2:00)
**Visual**: Terminal showing error messages and solutions
**Voiceover**:
"Here are common installation issues and their solutions:

1. **Node.js version too old**: Update to Node.js 12 or higher
2. **Permission denied**: Run with sudo (Mac/Linux) or as administrator (Windows)
3. **Network timeouts**: Check your internet connection and try again
4. **File not found errors**: Make sure you're in the correct directory

If you continue to have issues, check the BMAD documentation or ask for help in our Discord community."

### Agent Usage Tips (2:00-4:00)
**Visual**: IDE showing best practices
**Voiceover**:
"Here are tips for using BMAD agents effectively:

1. **Be specific with instructions**: Instead of 'Create a PRD', try 'Create a PRD for a todo list app with user authentication'

2. **Review outputs carefully**: Don't just accept everything the agents produce - review and refine as needed

3. **Use the right agent for the job**: Each agent has specific expertise - use them appropriately

4. **Iterate and refine**: BMAD works best with iterative refinement - don't expect perfection on the first try

5. **Provide context**: When switching agents, provide relevant context from previous work"

### Performance Optimization (4:00-5:30)
**Visual**: Performance dashboard concept
**Voiceover**:
"To optimize BMAD performance:

1. **Use powerful AI models**: More capable models produce better results
2. **Keep agents focused**: Don't overload agents with too many tasks at once
3. **Break complex tasks**: Split large stories into smaller, manageable pieces
4. **Cache results**: Store useful outputs to avoid regeneration
5. **Monitor resource usage**: Keep an eye on memory and processing requirements"

### Quality Assurance (5:30-7:00)
**Visual**: QA checklist interface
**Voiceover**:
"Maintain quality in your BMAD projects:

1. **Use the QA agent for every story**: Don't skip the review process
2. **Run tests regularly**: Execute automated tests after each implementation
3. **Update documentation**: Keep documents in sync with implementation
4. **Follow checklists**: Use BMAD's built-in checklists for quality gates
5. **Peer review**: Have team members review critical decisions"

### Community Resources (7:00-7:30)
**Visual**: Community links and resources
**Voiceover**:
"Take advantage of community resources:
- Join our Discord for real-time help
- Read the documentation thoroughly
- Check GitHub for examples and templates
- Attend community events and webinars"

### Closing (7:30-8:00)
**Visual**: Thank you message with links
**Voiceover**:
"Thanks for watching this BMAD tutorial series. You're now ready to use BMAD effectively in your projects. Remember, practice makes perfect - the more you use BMAD, the better your results will be!"