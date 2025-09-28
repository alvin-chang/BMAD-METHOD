#!/usr/bin/env node

/**
 * BMAD™ Orchestrator - CLI Test Script
 * 
 * This script verifies that the orchestrator CLI commands work correctly.
 */

const { spawn } = require('child_process');
const path = require('path');

// Test orchestrator CLI commands
const testCommands = [
  { cmd: 'help', description: 'Help command' },
  { cmd: 'status', description: 'Status command' },
  { cmd: 'agents', description: 'Agents command' },
  { cmd: 'workflows', description: 'Workflows command' }
];

console.log('🧪 BMAD™ Orchestrator CLI Test');
console.log('==============================\n');

let completedTests = 0;

function runTest(command, description) {
  return new Promise((resolve) => {
    console.log(`🚀 Testing: ${description}`);
    
    const cliPath = path.join(__dirname, '..', 'bmad-core', 'orchestrator', 'cli.js');
    const child = spawn('node', [cliPath, command]);
    
    let output = '';
    let errorOutput = '';
    
    child.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    child.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ ${description}: PASSED`);
        console.log(`   Output length: ${output.length} characters`);
      } else {
        console.log(`❌ ${description}: FAILED`);
        console.log(`   Exit code: ${code}`);
        if (errorOutput) {
          console.log(`   Error: ${errorOutput}`);
        }
      }
      
      completedTests++;
      if (completedTests === testCommands.length) {
        console.log('\n🎉 All CLI tests completed!');
      }
      
      resolve();
    });
  });
}

// Run all tests sequentially
async function runAllTests() {
  for (const test of testCommands) {
    await runTest(test.cmd, test.description);
  }
}

runAllTests().catch(console.error);
