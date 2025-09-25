// BMAD™ Orchestrator - Escalation Handling Example
// Copyright © 2025 BMAD™. All rights reserved.

const { BMADOrchestrator } = require('../../bmad-core/orchestrator');

async function escalationHandling() {
  try {
    // Initialize the orchestrator
    console.log('Initializing BMAD™ Orchestrator...');
    const orchestrator = new BMADOrchestrator();
    
    // Define escalation paths
    console.log('\n=== Defining Escalation Paths ===');
    orchestrator.escalationManager.defineEscalationPath('technical', [
      'developer',
      'architect',
      'cto'
    ]);
    console.log('Defined technical escalation path: developer -> architect -> cto');
    
    orchestrator.escalationManager.defineEscalationPath('process', [
      'sm',
      'pm',
      'po'
    ]);
    console.log('Defined process escalation path: sm -> pm -> po');
    
    orchestrator.escalationManager.defineEscalationPath('quality', [
      'qa',
      'architect',
      'cto'
    ]);
    console.log('Defined quality escalation path: qa -> architect -> cto');
    
    // List defined escalation paths
    console.log('\n=== Defined Escalation Paths ===');
    const escalationPaths = orchestrator.escalationManager.escalationPaths;
    for (const [issueType, path] of escalationPaths) {
      console.log(`- ${issueType}: ${path.join(' -> ')}`);
    }
    
    // Create a workflow for escalation demonstration
    console.log('\n=== Creating Workflow for Escalation ===');
    const createResult = orchestrator.createWorkflow(
      'Escalation Demo',
      ['developer', 'architect', 'tester'],
      ['development', 'testing']
    );
    const workflowId = createResult.workflowId;
    console.log('Workflow created with ID:', workflowId);
    
    // Register agents
    console.log('\n=== Registering Agents ===');
    orchestrator.agentCoordinator.registerAgent('dev1', 'developer', {
      languages: ['javascript'],
      frameworks: ['nodejs']
    });
    console.log('Registered dev1');
    
    orchestrator.agentCoordinator.registerAgent('arch1', 'architect', {
      domains: ['backend', 'database']
    });
    console.log('Registered arch1');
    
    orchestrator.agentCoordinator.registerAgent('qa1', 'qa', {
      tools: ['jest', 'selenium']
    });
    console.log('Registered qa1');
    
    // Escalate a technical issue
    console.log('\n=== Escalating Technical Issue ===');
    const techEscalation = orchestrator.escalate(
      'Database connection timeout',
      'Application unable to connect to PostgreSQL database',
      'high'
    );
    console.log('Technical issue escalated successfully');
    console.log('Escalation ID:', techEscalation.escalationId);
    console.log('Issue type:', techEscalation.issueType);
    console.log('Escalation path:', techEscalation.path.join(' -> '));
    
    // Check active escalations
    console.log('\n=== Active Escalations ===');
    const activeEscalations = orchestrator.escalationManager.getActiveEscalations();
    console.log('Active escalations:', activeEscalations.length);
    activeEscalations.forEach(escalation => {
      console.log(`- ${escalation.id}: ${escalation.issue} (${escalation.issueType})`);
      console.log(`  Path: ${escalation.path.join(' -> ')}`);
      console.log(`  From: ${escalation.from}`);
    });
    
    // Resolve the escalation
    console.log('\n=== Resolving Escalation ===');
    orchestrator.escalationManager.resolveEscalation(
      techEscalation.escalationId,
      'Fixed database connection pool configuration'
    );
    console.log('Escalation resolved successfully');
    console.log('Resolution: Fixed database connection pool configuration');
    
    // Check active escalations after resolution
    console.log('\n=== Active Escalations After Resolution ===');
    const resolvedEscalations = orchestrator.escalationManager.getActiveEscalations();
    console.log('Active escalations:', resolvedEscalations.length);
    
    // Escalate a quality issue
    console.log('\n=== Escalating Quality Issue ===');
    const qualityEscalation = orchestrator.escalate(
      'Security vulnerability detected',
      'XSS vulnerability found in user input validation',
      'critical'
    );
    console.log('Quality issue escalated successfully');
    console.log('Escalation ID:', qualityEscalation.escalationId);
    console.log('Issue type:', qualityEscalation.issueType);
    console.log('Escalation path:', qualityEscalation.path.join(' -> '));
    
    // Resolve the quality escalation
    console.log('\n=== Resolving Quality Escalation ===');
    orchestrator.escalationManager.resolveEscalation(
      qualityEscalation.escalationId,
      'Implemented input sanitization and CSP headers'
    );
    console.log('Quality escalation resolved successfully');
    console.log('Resolution: Implemented input sanitization and CSP headers');
    
    // Resolve conflict between agents
    console.log('\n=== Resolving Agent Conflict ===');
    const conflictResolution = orchestrator.conflictResolution(
      ['dev1', 'arch1'],
      'Disagreement on database schema design'
    );
    console.log('Conflict resolution:', conflictResolution.success ? 'Successful' : 'Failed');
    if (conflictResolution.success) {
      console.log('Resolution method:', conflictResolution.resolution.resolutionMethod);
      console.log('Resolved by:', conflictResolution.resolution.resolvedBy);
      console.log('Notes:', conflictResolution.resolution.notes);
    }
    
    console.log('\nEscalation handling example completed successfully!');
  } catch (error) {
    console.error('Error in escalation handling example:', error.message);
  }
}

// Run the example
escalationHandling();