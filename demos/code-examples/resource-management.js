// BMAD™ Orchestrator - Resource Management Example
// Copyright © 2025 BMAD™. All rights reserved.

const { BMADOrchestrator } = require('../../bmad-core/orchestrator');

async function resourceManagement() {
  try {
    // Initialize the orchestrator
    console.log('Initializing BMAD™ Orchestrator...');
    const orchestrator = new BMADOrchestrator();
    
    // Create a workflow for resource allocation
    console.log('\n=== Creating Workflow for Resource Management ===');
    const createResult = orchestrator.createWorkflow(
      'Resource Management Demo',
      ['developer', 'tester'],
      ['development', 'testing']
    );
    const workflowId = createResult.workflowId;
    console.log('Workflow created with ID:', workflowId);
    
    // Register resources
    console.log('\n=== Registering Resources ===');
    orchestrator.resourceManager.registerResource('compute1', 'compute', {
      cpu: '8-core',
      ram: '32GB',
      type: 'high-performance'
    });
    console.log('Registered compute1 (8-core, 32GB RAM)');
    
    orchestrator.resourceManager.registerResource('storage1', 'storage', {
      type: 'SSD',
      size: '2TB',
      speed: 'fast'
    });
    console.log('Registered storage1 (2TB SSD)');
    
    orchestrator.resourceManager.registerResource('database1', 'database', {
      type: 'PostgreSQL',
      version: '13',
      capacity: '1TB'
    });
    console.log('Registered database1 (PostgreSQL 13)');
    
    // List all resources
    console.log('\n=== Available Resources ===');
    const resources = orchestrator.resourceManager.getAllResources();
    resources.forEach(resource => {
      console.log(`- ${resource.id} (${resource.type}): ${resource.status}`);
      if (resource.allocatedTo) {
        console.log(`  Allocated to: ${resource.allocatedTo}`);
      }
    });
    
    // Allocate resources to workflow
    console.log('\n=== Allocating Resources ===');
    const allocateResult1 = orchestrator.resourceManager.allocateResource('compute1', workflowId);
    console.log('compute1 allocation:', allocateResult1 ? 'Success' : 'Failed');
    
    const allocateResult2 = orchestrator.resourceManager.allocateResource('storage1', workflowId);
    console.log('storage1 allocation:', allocateResult2 ? 'Success' : 'Failed');
    
    // Check resource status after allocation
    console.log('\n=== Resource Status After Allocation ===');
    const allocatedResources = orchestrator.resourceManager.getAllResources();
    allocatedResources.forEach(resource => {
      console.log(`- ${resource.id} (${resource.type}): ${resource.status}`);
      if (resource.allocatedTo) {
        console.log(`  Allocated to: ${resource.allocatedTo}`);
      }
    });
    
    // Check allocations for workflow
    console.log('\n=== Workflow Resource Allocations ===');
    const workflowAllocations = orchestrator.resourceManager.getAllocations(workflowId);
    console.log('Resources allocated to workflow:', workflowAllocations.join(', '));
    
    // Optimize resource allocation
    console.log('\n=== Optimizing Resource Allocation ===');
    const optimizationResult = orchestrator.resourceManager.optimizeAllocation({
      strategy: 'load-balanced'
    });
    console.log('Optimization completed');
    console.log('Available resources:', optimizationResult.available);
    console.log('Allocated resources:', optimizationResult.allocated);
    console.log('Utilization:', (optimizationResult.utilization * 100).toFixed(2) + '%');
    
    if (optimizationResult.recommendations.length > 0) {
      console.log('Recommendations:');
      optimizationResult.recommendations.forEach(rec => {
        console.log(`  - ${rec}`);
      });
    }
    
    // Plan capacity for future workloads
    console.log('\n=== Planning Capacity ===');
    const capacityPlan = orchestrator.resourceManager.planCapacity([
      { type: 'compute', requirements: { cpu: '4-core', ram: '16GB' } },
      { type: 'storage', requirements: { size: '1TB' } },
      { type: 'compute', requirements: { cpu: '8-core', ram: '32GB' } }
    ]);
    console.log('Capacity planning completed');
    console.log('Current capacity:', capacityPlan.currentCapacity);
    console.log('Projected demand:', capacityPlan.projectedDemand);
    console.log('Shortfall:', capacityPlan.shortfall);
    
    if (capacityPlan.recommendations.length > 0) {
      console.log('Recommendations:');
      capacityPlan.recommendations.forEach(rec => {
        console.log(`  - ${rec}`);
      });
    }
    
    // Release resources
    console.log('\n=== Releasing Resources ===');
    const releaseResult1 = orchestrator.resourceManager.releaseResource('compute1');
    console.log('compute1 release:', releaseResult1 ? 'Success' : 'Failed');
    
    // Check resource status after release
    console.log('\n=== Resource Status After Release ===');
    const releasedResources = orchestrator.resourceManager.getAllResources();
    releasedResources.forEach(resource => {
      console.log(`- ${resource.id} (${resource.type}): ${resource.status}`);
      if (resource.allocatedTo) {
        console.log(`  Allocated to: ${resource.allocatedTo}`);
      }
    });
    
    console.log('\nResource management example completed successfully!');
  } catch (error) {
    console.error('Error in resource management example:', error.message);
  }
}

// Run the example
resourceManagement();