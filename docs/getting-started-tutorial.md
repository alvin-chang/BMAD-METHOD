# Getting Started with BMAD - Interactive Tutorial

## Tutorial Information

```yaml
tutorial:
  id: "bmad-getting-started"
  title: "Getting Started with BMAD"
  description: "Learn the basics of the BMAD method and how to use it for AI-assisted development"
  duration: "30 minutes"
  difficulty: "beginner"
  prerequisites:
    - "Basic understanding of software development"
    - "Node.js installed on your system"
  learning_objectives:
    - "Understand the core concepts of the BMAD method"
    - "Install BMAD in a project"
    - "Use basic BMAD agents"
    - "Complete a simple development workflow"
  tags:
    - "getting-started"
    - "basics"
    - "installation"
    - "workflow"
```

## Lesson 1: Introduction to BMAD

### Content

Welcome to the BMAD method! BMAD (Breakthrough Method of Agile AI-driven Development) is a framework that combines AI agents with Agile development methodologies to help you build software more efficiently.

In this tutorial, you'll learn:
- What BMAD is and how it works
- How to install BMAD in your project
- How to use BMAD agents to build software
- How to complete a simple development workflow

BMAD uses specialized AI agents to handle different aspects of software development:
- **Analyst**: Handles market research and requirements gathering
- **PM**: Creates product requirements documents (PRDs)
- **Architect**: Designs system architecture
- **SM**: Creates user stories from PRDs
- **Dev**: Implements stories
- **QA**: Reviews and tests code

### Exercise

Take a moment to think about a simple application you'd like to build. It could be anything - a todo list, a weather app, or a simple game. Keep this idea in mind as you work through the tutorial.

### Quiz

1. What does BMAD stand for?
   - a) Basic Method of Agile Development
   - b) Breakthrough Method of Agile AI-driven Development
   - c) Best Method for Agile Development
   - d) Better Method of AI Development

2. Which agent is responsible for creating user stories?
   - a) Analyst
   - b) PM
   - c) Architect
   - d) SM

## Lesson 2: Installing BMAD

### Content

To get started with BMAD, you'll need to install it in your project. BMAD requires Node.js version 12 or higher.

### Steps

1. **Create a new project directory**
   ```bash
   mkdir my-bmad-project
   cd my-bmad-project
   ```

2. **Initialize a new Node.js project**
   ```bash
   npm init -y
   ```

3. **Install BMAD**
   ```bash
   npx bmad-method install
   ```

4. **Verify installation**
   Check that the `.bmad-core` directory was created in your project.

### Exercise

Follow the steps above to install BMAD in a new project directory. When you're done, check that the installation was successful by looking for the `.bmad-core` directory.

### Validation

To verify your installation, run:
```bash
ls -la .bmad-core
```

You should see several directories including `agents`, `tasks`, and `templates`.

### Hints

- Make sure you have Node.js installed before running the installation command
- If you get permission errors, try running the command with `sudo` (on Mac/Linux)
- The installation may take a few minutes to complete

### Quiz

1. What is the minimum Node.js version required for BMAD?
   - a) Node.js 10
   - b) Node.js 12
   - c) Node.js 14
   - d) Node.js 16

2. What directory is created when you install BMAD?
   - a) `.bmad`
   - b) `bmad-core`
   - c) `.bmad-core`
   - d) `bmad`

## Lesson 3: Using BMAD Agents

### Content

BMAD uses specialized agents to handle different aspects of software development. Each agent has a specific role and set of capabilities.

To use an agent, you can either:
1. Use the agent directly in your IDE if it supports AI agents
2. Upload the agent to a web-based AI interface

### Steps

1. **Explore the agents directory**
   ```bash
   ls .bmad-core/agents
   ```

2. **Look at an agent file**
   ```bash
   cat .bmad-core/agents/dev.md
   ```

3. **Understand agent capabilities**
   Each agent file contains:
   - A description of the agent's role
   - A list of commands the agent can perform
   - Dependencies the agent needs

### Exercise

Explore the `.bmad-core/agents` directory and look at a few different agent files. Try to understand what each agent does and what commands it supports.

### Validation

List three agents you found and describe what each one does:
1. Agent: _____
   Purpose: _____
2. Agent: _____
   Purpose: _____
3. Agent: _____
   Purpose: _____

### Hints

- The agent files are written in Markdown format
- Look for the "commands" section to see what each agent can do
- The "dependencies" section shows what resources the agent needs

### Quiz

1. How many agents are included in the core BMAD installation?
   - a) 5
   - b) 8
   - c) 10
   - d) 12

2. Where are the agent files stored?
   - a) `.bmad/agents`
   - b) `bmad-core/agents`
   - c) `.bmad-core/agents`
   - d) `agents`

## Lesson 4: Creating a Simple Project

### Content

Now that you have BMAD installed and understand the agents, let's create a simple project using the BMAD workflow.

The basic BMAD workflow consists of:
1. Planning phase (using Analyst, PM, and Architect agents)
2. Development phase (using SM, Dev, and QA agents)

### Steps

1. **Create a project brief**
   Use the Analyst agent to create a brief for your project:
   ```bash
   # In an AI-enabled IDE, you would use:
   # @analyst Create a project brief for a simple todo list application
   ```

2. **Create a PRD**
   Use the PM agent to create a Product Requirements Document:
   ```bash
   # @pm Create a PRD based on the project brief
   ```

3. **Design architecture**
   Use the Architect agent to design the system architecture:
   ```bash
   # @architect Design the architecture for the todo list application
   ```

### Exercise

Since we're working in a tutorial environment, let's simulate this process. Think about how you would create a simple todo list application:

1. What are the main features a todo list should have?
2. What technology stack might you use?
3. How would you structure the application?

### Validation

Write a brief project description for your todo list application (3-5 sentences):

_____

### Hints

- Consider both basic and advanced features
- Think about user experience
- Consider technical constraints

### Quiz

1. What is the first step in the BMAD workflow?
   - a) Development phase
   - b) Planning phase
   - c) Testing phase
   - d) Deployment phase

2. Which agent creates the Product Requirements Document?
   - a) Analyst
   - b) PM
   - c) Architect
   - d) SM

## Lesson 5: Development Workflow

### Content

Once you have your planning documents, you can move to the development phase. This phase uses the Scrum Master (SM), Developer (Dev), and QA agents.

The development workflow is:
1. SM creates user stories from the PRD
2. Dev implements the stories
3. QA reviews the implementation

### Steps

1. **Create user stories**
   ```bash
   # @sm Create user stories for the todo list application
   ```

2. **Implement a story**
   ```bash
   # @dev Implement the "Add todo item" story
   ```

3. **Review the implementation**
   ```bash
   # @qa Review the implementation of the "Add todo item" story
   ```

### Exercise

Think about the user stories you would create for a todo list application. Write down 3-5 user stories in the format:
"As a [user type], I want to [action] so that [benefit]"

1. _____
2. _____
3. _____

### Validation

Write one user story for your todo list application:

_____

### Hints

- User stories should be small and focused
- Each story should deliver value to the user
- Consider different types of users

### Quiz

1. What is the correct format for a user story?
   - a) As a [user], I want [feature]
   - b) As a [user], I want to [action] so that [benefit]
   - c) I want [feature] because [reason]
   - d) Feature: [description]

2. Which agent reviews the implementation?
   - a) SM
   - b) Dev
   - c) QA
   - d) PM

## Lesson 6: Advanced Features

### Content

BMAD has several advanced features that can help you be more productive:

1. **Template System**: Create reusable document templates
2. **Memory System**: Store and retrieve context across sessions
3. **Expansion Packs**: Add specialized agents for specific domains
4. **Workflow System**: Create complex multi-agent workflows

### Steps

1. **Explore templates**
   ```bash
   ls .bmad-core/templates
   ```

2. **Look at a template**
   ```bash
   cat .bmad-core/templates/prd-tmpl.yaml
   ```

3. **Understand memory system**
   The memory system allows agents to store and retrieve information:
   ```bash
   # store_memory("PROJECT_DECISION: Using React for frontend")
   # search_memory("frontend frameworks")
   ```

### Exercise

Explore the `.bmad-core/templates` directory and look at a few templates. Try to understand how they work and how you might customize them.

### Validation

Name one template you found and describe what it's used for:

_____

### Hints

- Templates are written in YAML format
- Look for the "sections" part to see what the template includes
- Templates can be customized for your specific needs

### Quiz

1. What format are BMAD templates written in?
   - a) JSON
   - b) XML
   - c) YAML
   - d) Markdown

2. What does the memory system allow agents to do?
   - a) Store and retrieve information
   - b) Communicate with each other
   - c) Access the internet
   - d) Run tests

## Conclusion

### Content

Congratulations! You've completed the Getting Started with BMAD tutorial. You now understand:

- The core concepts of the BMAD method
- How to install BMAD in a project
- How to use BMAD agents
- The basic development workflow
- Some advanced features

### Next Steps

To continue learning BMAD:

1. **Try a real project**: Use BMAD to build the todo list application you planned
2. **Explore more agents**: Try using different agents for different tasks
3. **Learn advanced features**: Dive deeper into templates, memory, and workflows
4. **Join the community**: Connect with other BMAD users and share your experiences

### Final Exercise

Reflect on what you've learned and write 2-3 sentences about how you might use BMAD in your own projects:

_____

### Quiz

1. What is the main benefit of using specialized agents in BMAD?
   - a) It's cheaper than hiring developers
   - b) Each agent can focus on its area of expertise
   - c) It eliminates the need for planning
   - d) It works without an internet connection

2. What is the correct order of the BMAD workflow?
   - a) Development → Planning → Testing
   - b) Planning → Development → Testing
   - c) Testing → Planning → Development
   - d) Planning → Testing → Development

## Achievement

🎉 **Congratulations!** You've completed the "Getting Started with BMAD" tutorial.

You've earned the **BMAD Beginner** badge and 100 points.

**Next recommended tutorial**: "Creating Custom Templates"