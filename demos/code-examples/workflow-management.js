// BMAD™ Orchestrator - Workflow Management Example
// Copyright © 2025 BMAD™. All rights reserved.

const { BMADOrchestrator } = require('../../bmad-core/orchestrator');

async function workflowManagement() {
  try {
    // Initialize the orchestrator
    console.log('Initializing BMAD™ Orchestrator...');
    const orchestrator = new BMADOrchestrator();
    
    // Create a new workflow
    console.log('\n=== Creating New Workflow ===');
    const createResult = orchestrator.createWorkflow(
      'E-commerce Platform Development',
      ['analyst', 'architect', 'developer', 'tester', 'devops'],
      ['requirements', 'design', 'implementation', 'testing', 'deployment']
    );
    console.log('Workflow created successfully!');
    console.log('Workflow ID:', createResult.workflowId);
    
    // Get the workflow ID for subsequent operations
    const workflowId = createResult.workflowId;
    
    // View the created workflow
    console.log('\n=== Created Workflow Details ===');
    const workflows = orchestrator.workflows();
    const createdWorkflow = workflows.find(w => w.id === workflowId);
    console.log('Name:', createdWorkflow.name);
    console.log('Agents:', createdWorkflow.agents.join(', '));
    console.log('Phases:', createdWorkflow.phases.join(', '));
    console.log('Status:', createdWorkflow.status);
    
    // Modify the workflow
    console.log('\n=== Modifying Workflow ===');
    const modifyResult = orchestrator.modifyWorkflow(workflowId, {
      name: 'Enhanced E-commerce Platform Development',
      status: 'in-progress'
    });
    console.log('Workflow modified successfully!');
    console.log('Changes applied:', JSON.stringify(modifyResult.changes, null, 2));
    
    // Pause the workflow
    console.log('\n=== Pausing Workflow ===');
    const pauseResult = orchestrator.pauseWorkflow(workflowId, 'Waiting for client feedback on requirements');
    console.log('Workflow paused successfully!');
    console.log('Reason:', pauseResult.reason);
    
    // Check workflow status
    console.log('\n=== Workflow Status After Pause ===');
    const updatedWorkflows = orchestrator.workflows();
    const pausedWorkflow = updatedWorkflows.find(w => w.id === workflowId);
    console.log('Status:', pausedWorkflow.status);
    console.log('Paused Reason:', pausedWorkflow.pausedReason);
    
    // Resume the workflow
    console.log('\n=== Resuming Workflow ===');
    const resumeResult = orchestrator.resumeWorkflow(workflowId, {
      status: 'active'
    });
    console.log('Workflow resumed successfully!');
    console.log('Adjustments:', JSON.stringify(resumeResult.adjustments, null, 2));
    
    // Clone the workflow
    console.log('\n=== Cloning Workflow ===');
    const cloneResult = orchestrator.cloneWorkflow(workflowId, {
      name: 'E-commerce Platform v2'
    });
    console.log('Workflow cloned successfully!');
    console.log('New Workflow ID:', cloneResult.newId);
    console.log('Source Workflow ID:', cloneResult.sourceId);
    
    // Archive the original workflow
    console.log('\n=== Archiving Original Workflow ===');
    const archiveResult = orchestrator.archiveWorkflow(workflowId, 'Project completed successfully');
    console.log('Workflow archived successfully!');
    console.log('Lessons Learned:', archiveResult.lessonsLearned);
    
    console.log('\nWorkflow management example completed successfully!');
  } catch (error) {
    console.error('Error in workflow management example:', error.message);
  }
}

// Run the example
workflowManagement();