#!/usr/bin/env node

// BMAD-METHOD Installation Test Script
// Copyright © 2025 BMAD™. All rights reserved.

const fs = require('fs-extra');
const path = require('path');

/**
 * Test if BMAD-METHOD is properly installed in a directory
 * @param {string} targetDir - Target directory to test
 * @returns {Promise<boolean>} True if installation is valid
 */
async function testInstallation(targetDir) {
  try {
    console.log(`\n🔬 Testing BMAD-METHOD installation in: ${targetDir}`);
    
    // Check if essential files exist
    const requiredFiles = [
      'package.json',
      'bmad-core/core-config.yaml',
      'tools/cli.js'
    ];
    
    for (const file of requiredFiles) {
      const filePath = path.join(targetDir, file);
      if (!(await fs.pathExists(filePath))) {
        console.log(`  ❌ Missing required file: ${file}`);
        return false;
      }
      console.log(`  ✔ Found ${file}`);
    }
    
    // Check if package.json has BMAD-METHOD
    const packageJsonPath = path.join(targetDir, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);
    
    if (!packageJson.dependencies || !packageJson.dependencies['bmad-method']) {
      console.log('  ❌ BMAD-METHOD not found in package.json dependencies');
      return false;
    }
    console.log('  ✔ BMAD-METHOD found in package.json dependencies');
    
    // Check if bmad-core directory exists
    const bmadCoreDir = path.join(targetDir, 'bmad-core');
    if (!(await fs.pathExists(bmadCoreDir))) {
      console.log('  ❌ bmad-core directory not found');
      return false;
    }
    console.log('  ✔ bmad-core directory found');
    
    // Check if orchestrator files exist
    const orchestratorFiles = [
      'agents/enhanced-bmad-orchestrator.md',
      'orchestrator/cli.js'
    ];
    
    for (const file of orchestratorFiles) {
      const filePath = path.join(bmadCoreDir, file);
      if (!(await fs.pathExists(filePath))) {
        console.log(`  ❌ Missing orchestrator file: ${file}`);
        return false;
      }
      console.log(`  ✔ Found orchestrator file: ${file}`);
    }
    
    console.log(`  ✅ BMAD-METHOD installation in ${targetDir} is valid`);
    return true;
  } catch (error) {
    console.error(`  ❌ Error testing installation in ${targetDir}: ${error.message}`);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
      console.log('Usage: node test-installation.js <directory1> [directory2] [directory3] ...');
      process.exit(1);
    }
    
    console.log('🔬 BMAD-METHOD Installation Tester');
    console.log('==================================');
    
    // Test each directory
    let allPassed = true;
    for (const dir of args) {
      const isValid = await testInstallation(dir);
      if (!isValid) {
        allPassed = false;
      }
    }
    
    if (allPassed) {
      console.log('\n🎉 All installations are valid!');
      process.exit(0);
    } else {
      console.log('\n❌ Some installations are invalid.');
      process.exit(1);
    }
  } catch (error) {
    console.error(`\n💥 Fatal error: ${error.message}`);
    process.exit(1);
  }
}

// Run main function if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = {
  testInstallation
};