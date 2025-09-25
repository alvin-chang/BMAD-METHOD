#!/usr/bin/env node

/**
 * BMAD™ Orchestrator - Working Demo
 * 
 * This script demonstrates the orchestrator with actual functionality,
 * including registering mock agents and showing real interactions.
 */

const { BMADOrchestrator } = require('../bmad-core/orchestrator/index');

// Mock global store_memory function for demonstration
global.store_memory = function(memoryData) {
  console.log(`[MEMORY] ${memoryData.agent_role}: ${memoryData.content}`);
};

// Create orchestrator instance
const orchestrator = new BMADOrchestrator();

console.log('🚀 BMAD™ Orchestrator - Working Demo');
console.log('====================================\n');

// Demonstrate help
console.log('1. Available Commands:');
console.log(orchestrator.help());

// Register mock agents
console.log('\n2. Registering Mock Agents...');
orchestrator.agentCoordinator.registerAgent(
  'dev-agent-001', 
  'developer', 
  {
    languages: ['JavaScript', 'Python'],
    frameworks: ['React', 'Node.js']
  }
);

orchestrator.agentCoordinator.registerAgent(
  'qa-agent-001', 
  'qa', 
  {
    testingTypes: ['unit', 'integration'],
    tools: ['Jest', 'Cypress']
  }
);

orchestrator.agentCoordinator.registerAgent(
  'ux-agent-001', 
  'ux', 
  {
    skills: ['user-research', 'prototyping'],
    tools: ['Figma', 'Sketch']
  }
);

// Register mock resources
console.log('\n3. Registering Mock Resources...');
orchestrator.resourceManager.registerResource(
  'compute-001',
  'compute',
  {
    type: 'virtual-machine',
    specs: '4vCPU, 8GB RAM'
  }
);

orchestrator.resourceManager.registerResource(
  'database-001',
  'database',
  {
    type: 'PostgreSQL',
    version: '13.4'
  }
);

// Show status
console.log('\n4. Current Status:');
console.log(JSON.stringify(orchestrator.status(), null, 2));

// Show agents
console.log('\n5. Registered Agents:');
console.log(JSON.stringify(orchestrator.agents(), null, 2));

// Show resources
console.log('\n6. Available Resources:');
console.log(JSON.stringify(orchestrator.resourceManager.getAllResources(), null, 2));

// Create workflow
console.log('\n7. Creating Authentication Workflow...');
const workflowId = orchestrator.createWorkflow(
  "User Authentication",
  ["developer", "ux", "qa"],
  ["design", "implementation", "testing"]
);

console.log(`✅ Created workflow: ${workflowId}`);

// Show workflows
console.log('\n8. Active Workflows:');
console.log(JSON.stringify(orchestrator.workflows(), null, 2));

// Delegate tasks
console.log('\n9. Delegating Tasks...');
try {
  const uxTask = orchestrator.delegate(
    "Design login interface", 
    "ux", 
    "Create mockups for login page with dark mode support"
  );
  console.log(`✅ UX task: ${JSON.stringify(uxTask, null, 2)}`);
  
  const devTask = orchestrator.delegate(
    "Implement login API", 
    "developer", 
    "Create secure authentication endpoints with JWT"
  );
  console.log(`✅ Dev task: ${JSON.stringify(devTask, null, 2)}`);
} catch (error) {
  console.log(`⚠️  Error delegating tasks: ${error.message}`);
}

// Monitor performance
console.log('\n10. Performance Monitoring...');
const healthCheck = orchestrator.monitor("health", ["system", "workflows"]);
console.log(`✅ Health check: ${JSON.stringify(healthCheck, null, 2)}`);

// Generate report
console.log('\n11. Generating Status Report...');
const report = orchestrator.report("status", ["demo-user"], "2025-06");
console.log(`✅ Status report: ${JSON.stringify(report, null, 2)}`);

// Optimize resources
console.log('\n12. Resource Optimization...');
const optimization = orchestrator.optimize("resources", { criteria: "utilization" });
console.log(`✅ Optimization: ${JSON.stringify(optimization, null, 2)}`);

console.log('\n🎉 Demo completed successfully!');
console.log('\nTo run the comprehensive demo: node examples/comprehensive-orchestrator-demo.js');