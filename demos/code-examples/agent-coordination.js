// BMAD™ Orchestrator - Agent Coordination Example
// Copyright © 2025 BMAD™. All rights reserved.

const { BMADOrchestrator } = require('../../bmad-core/orchestrator');

async function agentCoordination() {
  try {
    // Initialize the orchestrator
    console.log('Initializing BMAD™ Orchestrator...');
    const orchestrator = new BMADOrchestrator();
    
    // Register agents
    console.log('\n=== Registering Agents ===');
    orchestrator.agentCoordinator.registerAgent('analyst1', 'analyst', {
      skills: ['research', 'analysis', 'market-studies']
    });
    console.log('Registered analyst1');
    
    orchestrator.agentCoordinator.registerAgent('dev1', 'developer', {
      languages: ['javascript', 'python'],
      frameworks: ['react', 'nodejs']
    });
    console.log('Registered dev1');
    
    orchestrator.agentCoordinator.registerAgent('dev2', 'developer', {
      languages: ['java', 'python'],
      frameworks: ['spring', 'django']
    });
    console.log('Registered dev2');
    
    orchestrator.agentCoordinator.registerAgent('tester1', 'tester', {
      tools: ['jest', 'selenium', 'postman']
    });
    console.log('Registered tester1');
    
    // List registered agents
    console.log('\n=== Registered Agents ===');
    const agents = orchestrator.agents();
    agents.forEach(agent => {
      console.log(`- ${agent.id} (${agent.type}): ${agent.status} (${agent.workload} workloads, ${agent.utilization}% utilization)`);
    });
    
    // Delegate tasks to agents
    console.log('\n=== Delegating Tasks ===');
    const delegateResult1 = orchestrator.delegate(
      'Gather requirements for user authentication',
      'analyst',
      'E-commerce platform requirements'
    );
    console.log('Task delegated to:', delegateResult1.agentId);
    
    const delegateResult2 = orchestrator.delegate(
      'Implement user authentication module',
      'developer',
      'Frontend authentication component'
    );
    console.log('Task delegated to:', delegateResult2.agentId);
    
    // Check agent workloads after delegation
    console.log('\n=== Agent Workloads After Delegation ===');
    const updatedAgents = orchestrator.agents();
    updatedAgents.forEach(agent => {
      console.log(`- ${agent.id}: ${agent.workload} workloads, ${agent.utilization}% utilization`);
    });
    
    // Coordinate between agents
    console.log('\n=== Coordinating Agents ===');
    const coordinateResult = orchestrator.coordinate(
      ['dev1', 'tester1'],
      'Implement and test user authentication',
      '3 days'
    );
    console.log('Agents coordinated:', coordinateResult.agents.join(', '));
    console.log('Objective:', coordinateResult.objective);
    console.log('Timeline:', coordinateResult.timeline);
    
    // Balance workloads
    console.log('\n=== Balancing Workloads ===');
    const balanceResult = orchestrator.balanceLoad(
      ['dev1', 'dev2'],
      'even'
    );
    console.log('Workloads balanced for agents:', balanceResult.agents.join(', '));
    console.log('Criteria:', balanceResult.criteria);
    
    // Check agent workloads after balancing
    console.log('\n=== Agent Workloads After Balancing ===');
    const balancedAgents = orchestrator.agents();
    balancedAgents.forEach(agent => {
      console.log(`- ${agent.id}: ${agent.workload} workloads, ${agent.utilization}% utilization`);
    });
    
    // Handle agent handoff
    console.log('\n=== Handling Agent Handoff ===');
    const handoffResult = orchestrator.handoff(
      'dev1',
      'tester1',
      {
        taskId: 'auth-implementation',
        description: 'Completed authentication implementation ready for testing'
      }
    );
    console.log('Handoff completed from', handoffResult.fromAgent, 'to', handoffResult.toAgent);
    console.log('Context:', handoffResult.context.description);
    
    // Check agent workloads after handoff
    console.log('\n=== Agent Workloads After Handoff ===');
    const handoffAgents = orchestrator.agents();
    handoffAgents.forEach(agent => {
      console.log(`- ${agent.id}: ${agent.workload} workloads, ${agent.utilization}% utilization`);
    });
    
    // Resolve agent conflict
    console.log('\n=== Resolving Agent Conflict ===');
    const conflictResult = orchestrator.conflictResolution(
      ['dev1', 'dev2'],
      'Disagreement on authentication implementation approach'
    );
    console.log('Conflict resolution:', conflictResult.success ? 'Successful' : 'Failed');
    if (conflictResult.success) {
      console.log('Resolution method:', conflictResult.resolution.resolutionMethod);
      console.log('Notes:', conflictResult.resolution.notes);
    }
    
    console.log('\nAgent coordination example completed successfully!');
  } catch (error) {
    console.error('Error in agent coordination example:', error.message);
  }
}

// Run the example
agentCoordination();