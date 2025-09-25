// BMAD™ Orchestrator - Basic Usage Example
// Copyright © 2025 BMAD™. All rights reserved.

const { BMADOrchestrator } = require('../../bmad-core/orchestrator');

async function basicUsage() {
  try {
    // Initialize the orchestrator
    console.log('Initializing BMAD™ Orchestrator...');
    const orchestrator = new BMADOrchestrator();
    
    // Check system status
    console.log('\n=== System Status ===');
    const status = orchestrator.status();
    console.log('Timestamp:', status.timestamp);
    console.log('Active Workflows:', status.summary.active_workflows);
    console.log('Total Agents:', status.summary.total_agents);
    console.log('Available Agents:', status.summary.available_agents);
    console.log('Allocated Resources:', status.summary.allocated_resources);
    console.log('Active Escalations:', status.summary.active_escalations);
    
    // List available agents
    console.log('\n=== Available Agents ===');
    const agents = orchestrator.agents();
    agents.forEach(agent => {
      console.log(`- ${agent.id} (${agent.type}): ${agent.status} (${agent.workload} workloads)`);
    });
    
    // View active workflows
    console.log('\n=== Active Workflows ===');
    const workflows = orchestrator.workflows();
    workflows.forEach(workflow => {
      console.log(`- ${workflow.name} (${workflow.id}): ${workflow.status}`);
      console.log(`  Agents: ${workflow.agents.join(', ')}`);
      console.log(`  Phases: ${workflow.phases.join(', ')}`);
    });
    
    console.log('\nBasic usage example completed successfully!');
  } catch (error) {
    console.error('Error in basic usage example:', error.message);
  }
}

// Run the example
basicUsage();