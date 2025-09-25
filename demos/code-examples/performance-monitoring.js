// BMAD™ Orchestrator - Performance Monitoring Example
// Copyright © 2025 BMAD™. All rights reserved.

const { BMADOrchestrator } = require('../../bmad-core/orchestrator');

async function performanceMonitoring() {
  try {
    // Initialize the orchestrator
    console.log('Initializing BMAD™ Orchestrator...');
    const orchestrator = new BMADOrchestrator();
    
    // Create a workflow for monitoring
    console.log('\n=== Creating Workflow for Monitoring ===');
    const createResult = orchestrator.createWorkflow(
      'Performance Monitoring Demo',
      ['developer', 'tester'],
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
    
    orchestrator.agentCoordinator.registerAgent('tester1', 'tester', {
      tools: ['jest']
    });
    console.log('Registered tester1');
    
    // Monitor system health
    console.log('\n=== Monitoring System Health ===');
    const healthResult = orchestrator.monitor('health', ['cpu', 'memory', 'disk']);
    console.log('Health monitoring completed');
    console.log('Scope:', healthResult.scope);
    console.log('Metrics:', healthResult.metrics.join(', '));
    console.log('Timestamp:', healthResult.timestamp);
    
    // Check for bottlenecks
    console.log('\n=== Checking for Bottlenecks ===');
    const bottleneckResult = orchestrator.monitor('bottlenecks', []);
    console.log('Bottleneck detection completed');
    console.log('Scope:', bottleneckResult.scope);
    console.log('Detected bottlenecks:', bottleneckResult.results.length);
    
    // Predict delivery
    console.log('\n=== Predicting Delivery ===');
    try {
      const predictResult = orchestrator.monitor('predict', [workflowId]);
      console.log('Delivery prediction completed');
      console.log('Scope:', predictResult.scope);
      if (predictResult.results.predictedCompletion) {
        console.log('Predicted completion:', new Date(predictResult.results.predictedCompletion).toLocaleString());
        console.log('Confidence level:', (predictResult.results.confidence * 100).toFixed(2) + '%');
      }
    } catch (error) {
      console.log('Delivery prediction not available for this workflow stage');
    }
    
    // Assess risks
    console.log('\n=== Assessing Risks ===');
    const riskResult = orchestrator.monitor('risks', []);
    console.log('Risk assessment completed');
    console.log('Scope:', riskResult.scope);
    console.log('Identified risks:', riskResult.results.length);
    
    // Perform health check
    console.log('\n=== Performing Health Check ===');
    const healthCheck = orchestrator.performanceMonitor.performHealthCheck();
    console.log('System health:', healthCheck.systemHealth);
    console.log('Active workflows:', healthCheck.workflowMetrics.active);
    console.log('Completed workflows:', healthCheck.workflowMetrics.completed);
    console.log('Failed workflows:', healthCheck.workflowMetrics.failed);
    
    // Detect bottlenecks
    console.log('\n=== Detecting Bottlenecks ===');
    const bottlenecks = orchestrator.performanceMonitor.detectBottlenecks();
    console.log('Bottlenecks detected:', bottlenecks.length);
    bottlenecks.forEach((bottleneck, index) => {
      console.log(`  ${index + 1}. ${bottleneck.type}: ${bottleneck.description}`);
    });
    
    // Generate performance report
    console.log('\n=== Generating Performance Report ===');
    const reportResult = orchestrator.report('performance', ['management'], 'weekly');
    console.log('Performance report generated');
    console.log('Report type:', reportResult.type);
    console.log('Audience:', reportResult.audience.join(', '));
    console.log('Timeframe:', reportResult.timeframe);
    console.log('Generated:', reportResult.generated.toLocaleString());
    
    console.log('\nPerformance monitoring example completed successfully!');
  } catch (error) {
    console.error('Error in performance monitoring example:', error.message);
  }
}

// Run the example
performanceMonitoring();