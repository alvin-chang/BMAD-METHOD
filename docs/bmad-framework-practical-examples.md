# BMAD Framework Practical Examples

## 1. Introduction

This document provides practical examples of applying the mathematical framework for the BMAD methodology. These examples demonstrate how the theoretical foundations can be used in real-world scenarios to design, verify, and optimize AI agent systems.

## 2. Agent Design Example: Security Agent

### 2.1 Problem Statement
Design a new Security Agent for the BMAD methodology that can perform security audits, vulnerability assessments, and compliance checks.

### 2.2 Mathematical Framework Application

#### Formal Definition
Using the agent definition A = (ID, Role, Capabilities, State, Workload):
- ID: 'security-agent-1'
- Role: 'Security Specialist'
- Capabilities: {security-audit, vulnerability-assessment, compliance-check, penetration-testing}
- State: Initially 'available'
- Workload: Initially 0

#### Implementation
Following the implementation mapping:
1. Create `bmad-core/agents/security.md` with the agent definition
2. Define capabilities in the YAML configuration
3. Implement state management in AgentCoordinator
4. Implement workload tracking in AgentCoordinator

#### Verification
Using the formal verification properties:
1. **Safety**: Ensure the agent only performs security-related tasks
2. **Liveness**: Ensure the agent becomes available after completing tasks
3. **Fairness**: Ensure the agent gets fair access to security resources

### 2.3 Code Implementation
```javascript
// In bmad-core/orchestrator/agent-coordinator.js
registerAgent('security-agent-1', 'security-specialist', {
  capabilities: ['security-audit', 'vulnerability-assessment', 'compliance-check'],
  maxWorkload: 5
});

// In bmad-core/agents/security.md
// Define the agent's role, capabilities, and interaction protocols
```

## 3. Workflow Analysis Example: Development Process

### 3.1 Problem Statement
Analyze a software development workflow to ensure correctness and identify potential bottlenecks.

### 3.2 Mathematical Framework Application

#### Workflow Model
Using the workflow definition W = (ID, Name, Agents, Phases, Status):
- ID: 'workflow-dev-123'
- Name: 'Enterprise Application Development'
- Agents: ['analyst', 'architect', 'developer', 'qa', 'devops']
- Phases: ['requirements', 'design', 'implementation', 'testing', 'deployment']
- Status: 'active'

#### State Transition Analysis
Using the state transition system S = (States, Transitions, InitialState, FinalStates):
- States: {requirements-pending, requirements-active, design-pending, ...}
- Transitions: Defined by workflow progression rules
- InitialState: requirements-pending
- FinalStates: {deployment-completed}

#### Verification
1. **Safety**: Verify that phases execute in correct order
2. **Liveness**: Ensure that all phases eventually complete
3. **Fairness**: Ensure all agents get fair access to workflow tasks

### 3.3 Implementation
```javascript
// In bmad-core/orchestrator/workflow-manager.js
const workflow = {
  id: 'workflow-dev-123',
  name: 'Enterprise Application Development',
  agents: ['analyst', 'architect', 'developer', 'qa', 'devops'],
  phases: [
    { name: 'requirements', status: 'pending' },
    { name: 'design', status: 'pending' },
    { name: 'implementation', status: 'pending' },
    { name: 'testing', status: 'pending' },
    { name: 'deployment', status: 'pending' }
  ],
  status: 'active'
};

// Verify phase order
function verifyPhaseOrder(phases) {
  const expectedOrder = ['requirements', 'design', 'implementation', 'testing', 'deployment'];
  for (let i = 0; i < phases.length; i++) {
    if (phases[i].name !== expectedOrder[i]) {
      throw new Error(`Phase ${phases[i].name} is out of order`);
    }
  }
}
```

## 4. Performance Optimization Example: Resource Allocation

### 4.1 Problem Statement
Optimize resource allocation among multiple concurrent workflows to maximize throughput while respecting constraints.

### 4.2 Mathematical Framework Application

#### Optimization Model
Using the coordination model G = (V, E) where:
- V = Agents represents the set of agents
- E ⊆ V × V × ℝ⁺ represents weighted coordination relationships

#### Optimization Problem
minimize Σ(e∈E) w(e) × d(e)
subject to:
- All required coordination relationships are satisfied
- Agent workload constraints are respected
- Resource constraints are met

#### Implementation
```javascript
// In bmad-core/orchestrator/resource-manager.js
class ResourceManager {
  optimizeAllocation(constraints) {
    // Implement the optimization algorithm
    const agents = this.getAllAgents();
    const resources = this.getAllResources();
    
    // Calculate coordination weights
    const weights = this.calculateCoordinationWeights(agents);
    
    // Apply constraints
    const feasibleAllocations = this.applyConstraints(agents, resources, constraints);
    
    // Find optimal allocation
    const optimalAllocation = this.findOptimalAllocation(feasibleAllocations, weights);
    
    return optimalAllocation;
  }
  
  calculateCoordinationWeights(agents) {
    // Calculate weights based on frequency and importance of interactions
    const weights = new Map();
    for (const agent1 of agents) {
      for (const agent2 of agents) {
        if (agent1 !== agent2) {
          const frequency = this.getCoordinationFrequency(agent1, agent2);
          const importance = this.getCoordinationImportance(agent1, agent2);
          weights.set(`${agent1.id}-${agent2.id}`, frequency * importance);
        }
      }
    }
    return weights;
  }
}
```

## 5. Conflict Resolution Example: Agent Disagreement

### 5.1 Problem Statement
Resolve a conflict between a Developer agent and an Architect agent who disagree on a technical approach.

### 5.2 Mathematical Framework Application

#### Game-Theoretic Model
Using the conflict resolution model with utility functions:
- U_developer: Utility function for the Developer agent
- U_architect: Utility function for the Architect agent

#### Nash Equilibrium
Seek a solution (strategy₁, strategy₂) such that:
- U_developer(strategy₁, strategy₂) ≥ U_developer(strategy₁', strategy₂) for all strategy₁'
- U_architect(strategy₁, strategy₂) ≥ U_architect(strategy₁, strategy₂') for all strategy₂'

#### Implementation
```javascript
// In bmad-core/orchestrator/bmad-orchestrator.js
conflictResolution(agents, issue) {
  // Get the conflicting agents
  const [agent1, agent2] = agents;
  
  // Get their proposed solutions
  const solution1 = this.getAgentProposal(agent1, issue);
  const solution2 = this.getAgentProposal(agent2, issue);
  
  // Calculate utility for each solution
  const utility1 = this.calculateUtility(agent1, solution1, solution2);
  const utility2 = this.calculateUtility(agent2, solution1, solution2);
  
  // Find Nash equilibrium
  const resolution = this.findNashEquilibrium(
    [solution1, solution2],
    [utility1, utility2]
  );
  
  // Apply resolution
  this.applyResolution(resolution);
  
  return {
    success: true,
    resolution,
    message: 'Conflict resolved successfully'
  };
}
```

## 6. Memory Consistency Example: Cross-Agent Communication

### 6.1 Problem Statement
Ensure consistent memory updates when multiple agents are reading and writing to shared memory entries.

### 6.2 Mathematical Framework Application

#### Causal Consistency Model
Following the causal consistency model:
- If op₁ → op₂ (causally precedes), then all agents see op₁ before op₂
- If op₁ || op₂ (concurrent), then different agents may see them in different orders

#### Implementation
```javascript
// In bmad-core/utils/enhanced-memory-system.js
class EnhancedMemorySystem {
  write(key, content, agentRole, projectId) {
    // Create new memory entry with timestamp
    const entry = {
      key,
      content,
      agentRole,
      projectId,
      timestamp: Date.now(),
      version: this.getNextVersion(key)
    };
    
    // Write to persistent storage
    this.persistEntry(entry);
    
    // Notify other agents of the update
    this.notifyAgents(entry);
    
    return entry;
  }
  
  read(key, agentRole, projectId) {
    // Read from persistent storage
    const entries = this.getEntries(key, projectId);
    
    // Apply causal consistency rules
    const consistentEntries = this.applyCausalConsistency(entries);
    
    // Return the most recent consistent entry
    return consistentEntries[consistentEntries.length - 1];
  }
  
  applyCausalConsistency(entries) {
    // Sort entries by timestamp
    entries.sort((a, b) => a.timestamp - b.timestamp);
    
    // Apply causal consistency rules
    const consistentEntries = [];
    for (const entry of entries) {
      if (this.isCausallyConsistent(entry, consistentEntries)) {
        consistentEntries.push(entry);
      }
    }
    
    return consistentEntries;
  }
}
```

## 7. Performance Prediction Example: Delivery Estimation

### 7.1 Problem Statement
Predict the delivery date for a workflow based on historical performance data and current progress.

### 7.2 Mathematical Framework Application

#### Time Series Prediction Model
Using the performance prediction model P(t) = f(History, Features, ModelParameters):
- History: Historical workflow completion data
- Features: Current workflow progress, resource allocation, etc.
- ModelParameters: Parameters for the prediction model

#### Implementation
```javascript
// In bmad-core/orchestrator/performance-monitor.js
class PerformanceMonitor {
  predictDelivery(workflowId) {
    // Get workflow data
    const workflow = this.getWorkflow(workflowId);
    
    // Get historical data
    const history = this.getHistoricalData(workflow.type);
    
    // Get current features
    const features = this.getCurrentFeatures(workflow);
    
    // Get model parameters
    const modelParams = this.getModelParameters(workflow.type);
    
    // Apply prediction function
    const prediction = this.applyPredictionFunction(history, features, modelParams);
    
    // Calculate confidence
    const confidence = this.calculateConfidence(prediction, history, features);
    
    return {
      predictedCompletion: prediction,
      confidence,
      factors: this.getConfidenceFactors(history, features)
    };
  }
  
  applyPredictionFunction(history, features, modelParams) {
    // Simple linear regression example
    // In practice, this could be a more sophisticated model
    const weights = modelParams.weights;
    const bias = modelParams.bias;
    
    let prediction = bias;
    for (let i = 0; i < features.length; i++) {
      prediction += weights[i] * features[i];
    }
    
    return new Date(Date.now() + prediction);
  }
}
```

## 8. Scalability Analysis Example: Multi-Project Coordination

### 8.1 Problem Statement
Analyze the scalability of the BMAD system when coordinating multiple concurrent projects.

### 8.2 Mathematical Framework Application

#### Scalability Model
Using the coordination model G = (V, E) where:
- V = All agents across all projects
- E = Coordination relationships between agents

#### Scalability Analysis
Analyze how the system performance scales with:
- Number of agents (|V|)
- Number of coordination relationships (|E|)
- Complexity of workflows
- Resource contention

#### Implementation
```javascript
// In bmad-core/orchestrator/scalability-analyzer.js
class ScalabilityAnalyzer {
  analyzeScalability(projects) {
    // Calculate metrics
    const numAgents = this.countTotalAgents(projects);
    const numCoordinationRelationships = this.countCoordinationRelationships(projects);
    const avgWorkflowComplexity = this.calculateAvgWorkflowComplexity(projects);
    const resourceContention = this.calculateResourceContention(projects);
    
    // Apply scalability model
    const scalabilityScore = this.calculateScalabilityScore(
      numAgents,
      numCoordinationRelationships,
      avgWorkflowComplexity,
      resourceContention
    );
    
    // Identify bottlenecks
    const bottlenecks = this.identifyBottlenecks(projects);
    
    return {
      scalabilityScore,
      bottlenecks,
      recommendations: this.generateRecommendations(bottlenecks)
    };
  }
  
  calculateScalabilityScore(numAgents, numCoordinationRelationships, avgWorkflowComplexity, resourceContention) {
    // Simple weighted sum - in practice, this could be more sophisticated
    const weights = {
      agents: 0.3,
      coordination: 0.4,
      complexity: 0.2,
      contention: 0.1
    };
    
    const normalizedAgents = this.normalize(numAgents, 0, 1000);
    const normalizedCoordination = this.normalize(numCoordinationRelationships, 0, 5000);
    const normalizedComplexity = this.normalize(avgWorkflowComplexity, 0, 10);
    const normalizedContention = this.normalize(resourceContention, 0, 1);
    
    return 100 - (
      weights.agents * normalizedAgents +
      weights.coordination * normalizedCoordination +
      weights.complexity * normalizedComplexity +
      weights.contention * normalizedContention
    );
  }
}
```

## 9. Fault Tolerance Example: Agent Failure Recovery

### 9.1 Problem Statement
Implement fault tolerance mechanisms to handle agent failures and ensure workflow continuity.

### 9.2 Mathematical Framework Application

#### Fault Tolerance Model
Using the reliability properties:
- **Safety**: Ensure no data loss during agent failures
- **Liveness**: Ensure workflows can continue despite agent failures
- **Recovery**: Ensure failed agents can be recovered or replaced

#### Implementation
```javascript
// In bmad-core/orchestrator/fault-tolerance-manager.js
class FaultToleranceManager {
  handleAgentFailure(agentId) {
    // Detect the failure
    const agent = this.getAgent(agentId);
    if (!agent) {
      throw new Error(`Agent ${agentId} not found`);
    }
    
    // Preserve state
    const state = this.preserveAgentState(agentId);
    
    // Notify dependent agents
    this.notifyDependentAgents(agentId);
    
    // Attempt recovery
    const recoveryResult = this.attemptRecovery(agentId, state);
    
    if (recoveryResult.success) {
      // Recovery successful
      this.restoreAgentState(agentId, state);
      this.notifyRecoveryCompletion(agentId);
    } else {
      // Recovery failed, find replacement
      const replacement = this.findReplacementAgent(agent.role, agent.capabilities);
      if (replacement) {
        this.assignReplacementAgent(agentId, replacement, state);
        this.notifyReplacementAssignment(agentId, replacement);
      } else {
        // No replacement available, escalate
        this.escalateFailure(agentId, state);
      }
    }
  }
  
  preserveAgentState(agentId) {
    // Save current workload
    const workload = this.getAgentWorkload(agentId);
    
    // Save memory entries
    const memoryEntries = this.getAgentMemoryEntries(agentId);
    
    // Save coordination state
    const coordinationState = this.getAgentCoordinationState(agentId);
    
    return {
      workload,
      memoryEntries,
      coordinationState,
      timestamp: Date.now()
    };
  }
  
  attemptRecovery(agentId, state) {
    // Try to restart the agent
    try {
      this.restartAgent(agentId);
      return { success: true };
    } catch (error) {
      // Recovery failed
      return { success: false, error: error.message };
    }
  }
}
```

## 10. Conclusion

These practical examples demonstrate how the mathematical framework for the BMAD methodology can be applied to real-world scenarios. By using formal definitions, mathematical models, and verification properties, we can:

1. Design new agents with well-defined roles and capabilities
2. Verify workflow correctness and identify potential issues
3. Optimize resource allocation for better performance
4. Resolve conflicts between agents in a principled manner
5. Ensure memory consistency across agents
6. Predict workflow delivery dates with confidence
7. Analyze system scalability for multi-project environments
8. Implement fault tolerance mechanisms for improved reliability

The mathematical framework provides both theoretical rigor and practical applicability, making the BMAD methodology more robust and reliable for complex AI agent systems.