#!/usr/bin/env node

/**
 * BMAD™ Orchestrator - Comprehensive Usage Example
 * 
 * This script demonstrates all the key features of the BMAD Orchestrator in a realistic
 * software development scenario. The example follows a complete project lifecycle from
 * initial planning through implementation and deployment.
 * 
 * Features demonstrated:
 * - Agent coordination and task delegation
 * - Workflow management (creation, modification, monitoring)
 * - Resource allocation and optimization
 * - Performance monitoring and bottleneck detection
 * - Conflict resolution between agents
 * - Escalation handling for critical issues
 * - Reporting and analytics
 * 
 * This example simulates a real-world software development project to showcase how the
 * BMAD Orchestrator can coordinate multiple specialized agents to deliver complex projects.
 */

// Import the orchestrator
const { BMADOrchestrator } = require('../bmad-core/orchestrator/index');

// Create orchestrator instance
const orchestrator = new BMADOrchestrator();

// Helper function to safely output data
function outputSection(title, data) {
  console.log(`\n=== ${title} ===`);
  if (typeof data === 'string') {
    console.log(data);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
}

// Helper function to simulate delays for realistic demonstration
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runComprehensiveDemo() {
  console.log('🚀 BMAD™ Orchestrator - Comprehensive Demo');
  console.log('==========================================\n');
  
  console.log('This demo simulates a complete software development project lifecycle');
  console.log('featuring coordination between multiple specialized AI agents.\n');
  
  await sleep(1000);

  // 1. Initial Setup and Status Check
  outputSection('1. ORCHESTRATOR STATUS', orchestrator.status());
  
  // 2. Agent Registration and Management
  outputSection('2. AGENT REGISTRATION', 'Registering specialized agents for our project...');
  
  // In a real implementation, agents would register themselves
  // For this demo, we'll show what the registration would look like:
  console.log(`
In a real implementation, agents would register themselves with the orchestrator:
  
  // Developer Agent Registration
  orchestrator.agentCoordinator.registerAgent(
    'dev-agent-001', 
    'developer', 
    {
      languages: ['JavaScript', 'Python', 'Go'],
      frameworks: ['React', 'Node.js', 'FastAPI'],
      experience: 'Senior'
    }
  );
  
  // QA Agent Registration
  orchestrator.agentCoordinator.registerAgent(
    'qa-agent-001', 
    'qa', 
    {
      testingTypes: ['unit', 'integration', 'e2e'],
      tools: ['Jest', 'Cypress', 'Postman'],
      automation: 'Expert'
    }
  );
  
  // UX Expert Registration
  orchestrator.agentCoordinator.registerAgent(
    'ux-agent-001', 
    'ux', 
    {
      skills: ['user-research', 'prototyping', 'accessibility'],
      tools: ['Figma', 'Sketch', 'InVision'],
      experience: 'Lead'
    }
  );
  
  // Architect Agent Registration
  orchestrator.agentCoordinator.registerAgent(
    'arch-agent-001', 
    'architect', 
    {
      domains: ['web-applications', 'microservices', 'cloud'],
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      certifications: ['AWS-SA', 'K8s-CKA']
    }
  );
  `);
  
  outputSection('3. AVAILABLE AGENTS', orchestrator.agents());
  
  await sleep(1000);

  // 4. Workflow Creation
  outputSection('4. WORKFLOW CREATION', 'Creating a new workflow for user authentication feature...');
  
  try {
    const authWorkflowId = orchestrator.createWorkflow(
      "User Authentication System",
      ["architect", "developer", "ux", "qa"],
      ["requirements", "design", "implementation", "testing", "deployment"]
    );
    
    console.log(`✅ Created authentication workflow with ID: ${authWorkflowId}`);
    
    // Show the created workflow
    const workflows = orchestrator.workflows();
    const authWorkflow = workflows.find(w => w.id === authWorkflowId);
    outputSection('4a. CREATED WORKFLOW', authWorkflow);
  } catch (error) {
    console.log('⚠️  Note: Workflow creation requires registered agents in a real implementation');
  }
  
  await sleep(1000);

  // 5. Task Delegation
  outputSection('5. TASK DELEGATION', 'Delegating tasks to specialized agents...');
  
  try {
    // Delegate UX design task
    const uxTask = orchestrator.delegate(
      "Create user authentication UI mockups", 
      "ux", 
      "Design login, signup, and password reset interfaces with focus on accessibility"
    );
    console.log(`✅ UX task delegated: ${JSON.stringify(uxTask, null, 2)}`);
    
    // Delegate development task
    const devTask = orchestrator.delegate(
      "Implement authentication API endpoints", 
      "developer", 
      "Create secure REST API endpoints for user registration, login, and session management"
    );
    console.log(`✅ Development task delegated: ${JSON.stringify(devTask, null, 2)}`);
    
    // Delegate architecture task
    const archTask = orchestrator.delegate(
      "Design authentication system architecture", 
      "architect", 
      "Create secure, scalable architecture for authentication with JWT tokens and OAuth integration"
    );
    console.log(`✅ Architecture task delegated: ${JSON.stringify(archTask, null, 2)}`);
    
  } catch (error) {
    console.log('⚠️  Note: Task delegation requires registered agents in a real implementation');
  }
  
  await sleep(1000);

  // 6. Workflow Management
  outputSection('6. WORKFLOW MANAGEMENT', 'Demonstrating workflow management capabilities...');
  
  console.log('Creating additional workflows for our project:');
  
  try {
    // Create API workflow
    const apiWorkflowId = orchestrator.createWorkflow(
      "Payment Processing API",
      ["architect", "developer", "security", "qa"],
      ["design", "implementation", "security-audit", "testing", "deployment"]
    );
    console.log(`✅ Created payment API workflow: ${apiWorkflowId}`);
    
    // Create dashboard workflow
    const dashboardWorkflowId = orchestrator.createWorkflow(
      "Analytics Dashboard",
      ["architect", "developer", "ux", "qa"],
      ["requirements", "design", "implementation", "testing", "deployment"]
    );
    console.log(`✅ Created dashboard workflow: ${dashboardWorkflowId}`);
    
    // Show all workflows
    outputSection('6a. ALL ACTIVE WORKFLOWS', orchestrator.workflows());
    
    // Clone a workflow for a similar feature
    console.log('\nCloning authentication workflow for admin panel...');
    const adminAuthWorkflow = orchestrator.cloneWorkflow(
      "workflow-example-123", // Placeholder ID
      {
        name: "Admin Authentication System",
        agents: ["architect", "developer", "security", "qa"]
      }
    );
    console.log(`✅ Cloned workflow: ${JSON.stringify(adminAuthWorkflow, null, 2)}`);
    
  } catch (error) {
    console.log('⚠️  Note: Workflow operations require existing workflows in a real implementation');
  }
  
  await sleep(1000);

  // 7. Coordination and Synchronization
  outputSection('7. AGENT COORDINATION', 'Coordinating between specialized agents...');
  
  try {
    // Coordinate a design review session
    const coordination = orchestrator.coordinate(
      ["ux-agent-001", "dev-agent-001", "arch-agent-001"],
      "Review authentication UI designs for technical feasibility",
      "2025-06-15"
    );
    console.log(`✅ Coordination established: ${JSON.stringify(coordination, null, 2)}`);
    
    // Synchronize agents for implementation
    const syncResult = orchestrator.syncAgents(
      ["dev-agent-001", "arch-agent-001"],
      "API endpoint implementation alignment",
      "Code review session"
    );
    console.log(`✅ Agents synchronized: ${JSON.stringify(syncResult, null, 2)}`);
    
  } catch (error) {
    console.log('⚠️  Note: Coordination requires registered agents in a real implementation');
  }
  
  await sleep(1000);

  // 8. Resource Management
  outputSection('8. RESOURCE MANAGEMENT', 'Managing project resources...');
  
  console.log('In a real implementation, resources would be registered and allocated:');
  console.log(`
  // Register computing resources
  orchestrator.resourceManager.registerResource(
    'aws-instance-001',
    'compute',
    {
      type: 'EC2',
      specs: 't3.medium',
      region: 'us-west-2'
    }
  );
  
  // Allocate resources to workflows
  orchestrator.resourceManager.allocateResource(
    'aws-instance-001',
    'workflow-auth-123'
  );
  `);
  
  // Optimize resource allocation
  const optimization = orchestrator.optimize(
    "resources",
    {
      criteria: "utilization",
      threshold: 0.75
    }
  );
  outputSection('8a. RESOURCE OPTIMIZATION', optimization);
  
  await sleep(1000);

  // 9. Performance Monitoring
  outputSection('9. PERFORMANCE MONITORING', 'Monitoring workflow performance...');
  
  // Monitor workflow health
  const healthCheck = orchestrator.monitor("health", ["workflows", "agents"]);
  outputSection('9a. SYSTEM HEALTH', healthCheck);
  
  // Detect bottlenecks
  const bottlenecks = orchestrator.monitor("bottlenecks", ["workflow-delays", "agent-workload"]);
  outputSection('9b. BOTTLENECK DETECTION', bottlenecks);
  
  // Assess risks
  const risks = orchestrator.monitor("risks", ["overdue-workflows", "resource-constraints"]);
  outputSection('9c. RISK ASSESSMENT', risks);
  
  await sleep(1000);

  // 10. Reporting and Analytics
  outputSection('10. REPORTING AND ANALYTICS', 'Generating project reports...');
  
  // Generate status report
  const statusReport = orchestrator.report(
    "status",
    ["project-manager", "stakeholders"],
    "2025-06-01 to 2025-06-30"
  );
  outputSection('10a. STATUS REPORT', statusReport);
  
  // Generate performance report
  const perfReport = orchestrator.report(
    "performance",
    ["engineering-director"],
    "Q2 2025"
  );
  outputSection('10b. PERFORMANCE REPORT', perfReport);
  
  await sleep(1000);

  // 11. Conflict Resolution
  outputSection('11. CONFLICT RESOLUTION', 'Resolving agent disagreements...');
  
  try {
    // Simulate a conflict between developer and architect
    const conflictResolution = orchestrator.conflictResolution(
      ["dev-agent-001", "arch-agent-001"],
      "Disagreement on authentication token storage approach"
    );
    outputSection('11a. CONFLICT RESOLVED', conflictResolution);
    
  } catch (error) {
    console.log('⚠️  Note: Conflict resolution requires registered agents in a real implementation');
  }
  
  await sleep(1000);

  // 12. Escalation Management
  outputSection('12. ESCALATION MANAGEMENT', 'Handling critical issues...');
  
  // Escalate a security concern
  const escalation = orchestrator.escalate(
    "Potential vulnerability in authentication flow",
    "Security analysis revealed possible JWT token exposure",
    "high"
  );
  outputSection('12a. ISSUE ESCALATED', escalation);
  
  await sleep(1000);

  // 13. Advanced Features (Enhanced Orchestrator)
  outputSection('13. ENHANCED ORCHESTRATOR FEATURES', 'Advanced capabilities...');
  
  console.log('The Enhanced BMAD Orchestrator includes additional capabilities:');
  console.log(`
  * Workflow Visualization: Real-time Mermaid diagrams of workflow status
  * Delivery Prediction: AI-powered timeline estimation
  * Advanced Analytics: Detailed performance metrics and insights
  * Bottleneck Detection: Automated identification of workflow delays
  * Resource Optimization: Intelligent workload balancing
  `);
  
  // These would be available in the enhanced orchestrator:
  console.log('\nEnhanced orchestrator commands:');
  console.log('  *visualize [workflow-id]         - Generate real-time visualization');
  console.log('  *analyze-performance             - Analyze workflow performance');
  console.log('  *predict-delivery                - Predict delivery dates');
  console.log('  *balance-load [agents] [criteria] - Rebalance agent workloads');
  
  await sleep(1000);

  // 14. Final Status and Cleanup
  outputSection('14. FINAL PROJECT STATUS', orchestrator.status());
  
  console.log('\n📋 Summary of demonstrated features:');
  console.log('  ✅ Agent coordination and task delegation');
  console.log('  ✅ Workflow creation, modification, and cloning');
  console.log('  ✅ Resource allocation and optimization');
  console.log('  ✅ Performance monitoring and bottleneck detection');
  console.log('  ✅ Conflict resolution between agents');
  console.log('  ✅ Escalation handling for critical issues');
  console.log('  ✅ Comprehensive reporting and analytics');
  console.log('  ✅ Agent synchronization and handoffs');
  console.log('  ✅ Cross-training and backup assignments');
  
  console.log('\n🎯 The BMAD Orchestrator serves as the central command and control system');
  console.log('   for multi-agent AI development teams, ensuring seamless collaboration');
  console.log('   and optimal project outcomes.');
  
  console.log('\n📚 To explore these features in practice:');
  console.log('   Run: npm run orchestrator:cli help');
  console.log('   Or: node bmad-core/orchestrator/cli.js status');
  
  console.log('\n✨ Demo completed successfully!');
}

// Run the demo
runComprehensiveDemo().catch(console.error);