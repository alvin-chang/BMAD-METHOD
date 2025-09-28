// Test script for BMAD Orchestrator
const path = require('path');
const { exec } = require('child_process');

// Add the project root to the module resolution paths
const projectRoot = path.resolve(__dirname);

// Test the orchestrator
console.log('Testing BMAD Orchestrator...');

// Run the test
exec(`node ${path.join(projectRoot, 'bmad-core/orchestrator/test.js')}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output:\n${stdout}`);
});