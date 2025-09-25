# BMAD™ Orchestrator Feature Reference

This document provides a comprehensive reference for all BMAD™ Orchestrator features, commands, and capabilities.

## Overview

The BMAD™ Orchestrator is a comprehensive system for managing multi-agent workflows, coordinating agent interactions, and optimizing resource allocation. It provides 22 distinct commands organized into three categories:

1. Core Commands (10 commands)
2. Workflow Management Commands (6 commands)
3. Agent Coordination Commands (6 commands)

The Enhanced BMAD Orchestrator provides additional features for advanced workflow visualization, performance analytics, and delivery prediction.

Additionally, the Enhanced BMAD Orchestrator provides advanced features including workflow visualization, performance analytics, and delivery prediction with 3 additional commands.

## Core Commands

### help
Show all available orchestrator commands and workflows.

**Usage:**
```bash
bmad-orchestrator help
```

**Description:**
Displays a comprehensive list of all available orchestrator commands with brief descriptions.

### status
Display current orchestration dashboard with all active workflows.

**Usage:**
```bash
bmad-orchestrator status
```

**Description:**
Provides a real-time dashboard view of the orchestrator's current state, including:
- Active workflows count
- Available agents count
- Allocated resources
- Active escalations

### agents
List all available agents, their status, and current assignments.

**Usage:**
```bash
bmad-orchestrator agents
```

**Description:**
Shows detailed information about all registered agents:
- Agent ID
- Agent type
- Current status (available, busy, coordinating, etc.)
- Workload count
- Utilization percentage

### workflows
Show active workflows, templates, and orchestration patterns.

**Usage:**
```bash
bmad-orchestrator workflows
```

**Description:**
Lists all active workflows with:
- Workflow ID
- Workflow name
- Current status
- Associated agents
- Defined phases

### delegate
Intelligently delegate tasks to appropriate agents.

**Usage:**
```bash
bmad-orchestrator delegate <task> <agent-type> <context>
```

**Arguments:**
- `task`: Task description
- `agent-type`: Type of agent to delegate to
- `context`: Context information for the task

**Description:**
Assigns a specific task to an available agent of the specified type, considering the provided context.

### coordinate
Set up coordination between specific agents.

**Usage:**
```bash
bmad-orchestrator coordinate <agents> <objective> <timeline>
```

**Arguments:**
- `agents`: Comma-separated list of agent IDs
- `objective`: Coordination objective
- `timeline`: Coordination timeline

**Description:**
Establishes coordination between multiple agents for a specific objective within a defined timeline.

### monitor
Monitor performance across agents or workflows.

**Usage:**
```bash
bmad-orchestrator monitor <scope> <metrics>
```

**Arguments:**
- `scope`: Monitoring scope (workflows, bottlenecks, health, risks)
- `metrics`: Comma-separated list of metrics to monitor

**Description:**
Tracks and reports on various performance metrics:
- System health (CPU, memory, disk, network)
- Workflow bottlenecks
- Risk assessment
- Delivery prediction

### optimize
Optimize resource allocation or workflow efficiency.

**Usage:**
```bash
bmad-orchestrator optimize <target> <constraints>
```

**Arguments:**
- `target`: Optimization target (resources, workflows)
- `constraints`: Optimization constraints (JSON string)

**Description:**
Improves resource allocation or workflow efficiency based on specified constraints.

### report
Generate orchestration reports for stakeholders.

**Usage:**
```bash
bmad-orchestrator report <type> <audience> <timeframe>
```

**Arguments:**
- `type`: Report type (status, performance, orchestrator)
- `audience`: Comma-separated list of target audience
- `timeframe`: Report timeframe

**Description:**
Creates detailed reports for stakeholders with information tailored to their needs.

### escalate
Escalate critical issues to appropriate stakeholders.

**Usage:**
```bash
bmad-orchestrator escalate <issue> <context> <urgency>
```

**Arguments:**
- `issue`: Issue description
- `context`: Issue context
- `urgency`: Issue urgency level

**Description:**
Routes critical issues through predefined escalation paths to appropriate stakeholders.

## Workflow Management Commands

### create-workflow
Design new multi-agent workflow.

**Usage:**
```bash
bmad-orchestrator create-workflow <name> <agents> <phases>
```

**Arguments:**
- `name`: Workflow name
- `agents`: Comma-separated list of agents involved
- `phases`: Comma-separated list of workflow phases

**Description:**
Creates a new workflow with specified agents and phases.

### modify-workflow
Adjust existing workflow parameters.

**Usage:**
```bash
bmad-orchestrator modify-workflow <workflow-id> <changes>
```

**Arguments:**
- `workflow-id`: Workflow ID
- `changes`: Changes to apply (JSON string)

**Description:**
Modifies parameters of an existing workflow.

### pause-workflow
Temporarily halt workflow execution.

**Usage:**
```bash
bmad-orchestrator pause-workflow <workflow-id> <reason>
```

**Arguments:**
- `workflow-id`: Workflow ID
- `reason`: Reason for pausing

**Description:**
Pauses execution of a workflow with a specified reason.

### resume-workflow
Restart paused workflows.

**Usage:**
```bash
bmad-orchestrator resume-workflow <workflow-id> <adjustments>
```

**Arguments:**
- `workflow-id`: Workflow ID
- `adjustments`: Adjustments to apply (JSON string)

**Description:**
Resumes execution of a paused workflow with optional adjustments.

### archive-workflow
Archive completed workflows.

**Usage:**
```bash
bmad-orchestrator archive-workflow <workflow-id> <lessons-learned>
```

**Arguments:**
- `workflow-id`: Workflow ID
- `lessons-learned`: Lessons learned

**Description:**
Archives a completed workflow and captures lessons learned.

### clone-workflow
Create workflow from existing template.

**Usage:**
```bash
bmad-orchestrator clone-workflow <source-id> <modifications>
```

**Arguments:**
- `source-id`: Source workflow ID
- `modifications`: Modifications to apply (JSON string)

**Description:**
Creates a new workflow based on an existing template with optional modifications.

## Agent Coordination Commands

### sync-agents
Coordinate synchronization between agents.

**Usage:**
```bash
bmad-orchestrator sync-agents <agent-list> <topic> <format>
```

**Arguments:**
- `agent-list`: Comma-separated list of agents to synchronize
- `topic`: Synchronization topic
- `format`: Synchronization format

**Description:**
Sets up synchronization between multiple agents on a specific topic.

### balance-load
Rebalance workloads across agents.

**Usage:**
```bash
bmad-orchestrator balance-load <agents> <criteria>
```

**Arguments:**
- `agents`: Comma-separated list of agents
- `criteria`: Balancing criteria

**Description:**
Redistributes workloads across agents based on specified criteria.

### handoff
Manage clean handoffs between agents.

**Usage:**
```bash
bmad-orchestrator handoff <from-agent> <to-agent> <context>
```

**Arguments:**
- `from-agent`: Source agent
- `to-agent`: Target agent
- `context`: Context to transfer (JSON string)

**Description:**
Manages the transfer of work context from one agent to another.

### conflict-resolution
Facilitate resolution of agent conflicts.

**Usage:**
```bash
bmad-orchestrator conflict-resolution <agents> <issue>
```

**Arguments:**
- `agents`: Comma-separated list of agents in conflict
- `issue`: Conflict issue

**Description:**
Mediates and resolves conflicts between agents.

### cross-training
Coordinate knowledge sharing between agents.

**Usage:**
```bash
bmad-orchestrator cross-training <agents> <skills>
```

**Arguments:**
- `agents`: Comma-separated list of agents
- `skills`: Comma-separated list of skills to share

**Description:**
Facilitates knowledge transfer between agents on specific skills.

### backup-assignment
Set up agent backup arrangements.

**Usage:**
```bash
bmad-orchestrator backup-assignment <primary-agent> <backup-agent>
```

**Arguments:**
- `primary-agent`: Primary agent
- `backup-agent`: Backup agent

**Description:**
Establishes backup arrangements between agents.

## Advanced Features

### Workflow Visualization
The orchestrator provides visualization capabilities for workflows, agents, and resources using Mermaid diagrams.

### Performance Monitoring
Comprehensive performance monitoring includes:
- Real-time system health metrics
- Bottleneck detection and analysis
- Delivery timeline prediction
- Risk assessment and reporting

### Resource Optimization
Advanced resource management features:
- Dynamic resource allocation
- Capacity planning
- Utilization optimization
- Resource lifecycle management

### Memory Integration
Cross-agent memory sharing with:
- Context persistence
- Historical analysis
- Pattern recognition
- Usage analytics

### Escalation Management
Robust escalation handling with:
- Configurable escalation paths
- Automated routing
- Resolution tracking
- Stakeholder communication

### Enhanced Orchestrator Capabilities
The Enhanced BMAD Orchestrator provides additional capabilities:
- Advanced workflow visualization with real-time status updates
- Performance analytics with detailed insights
- Delivery prediction with confidence scoring
- Enhanced memory integration with cross-agent communication

## Best Practices

### Workflow Design
1. Create detailed workflows with clear phases
2. Define specific agent roles and responsibilities
3. Establish measurable success criteria
4. Plan for contingencies and rollback procedures

### Agent Coordination
1. Regularly balance workloads to prevent overload
2. Use synchronization for complex multi-agent tasks
3. Implement clear handoff procedures
4. Establish conflict resolution protocols

### Performance Monitoring
1. Monitor system health continuously
2. Detect and resolve bottlenecks proactively
3. Predict delivery timelines regularly
4. Assess risks throughout the project lifecycle

### Resource Management
1. Plan capacity based on projected workloads
2. Optimize resource allocation for efficiency
3. Track resource utilization for future planning
4. Release resources when no longer needed

## Troubleshooting

### Common Issues

1. **Agent not found**: Verify agent type exists and is registered
2. **Workflow not found**: Check workflow ID is correct
3. **JSON parsing errors**: Ensure JSON arguments are properly formatted
4. **Permission denied**: Check file permissions and run with appropriate privileges
5. **Command not found**: Ensure orchestrator is properly installed

### Getting Help

1. Use the `help` command for command reference
2. Check the main BMAD™ documentation
3. Search community forums and support channels
4. File an issue on the GitHub repository for bugs

## Integration with BMAD Ecosystem

The orchestrator integrates seamlessly with other BMAD™ components:
- **Agents**: Works with all BMAD™ agent types
- **Memory System**: Leverages cross-agent memory sharing
- **Workflow Engine**: Extends core workflow capabilities
- **Reporting**: Integrates with BMAD™ reporting framework

## Enhanced BMAD Orchestrator

For advanced users, the Enhanced BMAD Orchestrator provides additional capabilities:
- **Advanced Visualization**: Real-time workflow status with Mermaid diagrams
- **Performance Analytics**: Detailed performance analysis and insights
- **Delivery Prediction**: Predictive delivery date estimation with confidence scoring
- **Enhanced Memory Integration**: Advanced cross-agent communication and coordination

This comprehensive feature reference provides everything needed to understand and effectively use the BMAD™ Orchestrator for managing complex multi-agent workflows and projects.