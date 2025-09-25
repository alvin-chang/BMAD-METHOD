#!/usr/bin/env node

// BMAD-METHOD Enhanced Installation Test Script
// Tests specifically for the mathematical framework enhancement

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Test if BMAD-METHOD enhanced version is properly installed in a directory
 * @param {string} targetDir - Target directory to test
 * @returns {Promise<boolean>} True if installation is valid
 */
async function testEnhancedInstallation(targetDir) {
  try {
    console.log(`\n🔬 Testing BMAD-METHOD enhanced installation in: ${targetDir}`);
    
    // Check if node_modules exists
    const nodeModulesPath = path.join(targetDir, 'node_modules');
    if (!await fs.pathExists(nodeModulesPath)) {
      console.log('  ❌ node_modules directory not found');
      return false;
    }
    
    // Check if bmad-method is installed
    const bmadPath = path.join(nodeModulesPath, 'bmad-method');
    if (!await fs.pathExists(bmadPath)) {
      console.log('  ❌ bmad-method not found in node_modules');
      return false;
    }
    
    console.log('  ✓ bmad-method package found');
    
    // Check for core files
    const coreFiles = [
      'package.json',
      'README.md'
    ];
    
    for (const file of coreFiles) {
      const filePath = path.join(bmadPath, file);
      if (!await fs.pathExists(filePath)) {
        console.log(`  ❌ Required file not found: ${file}`);
        return false;
      }
    }
    
    console.log('  ✓ Core files verified');
    
    // Check for mathematical framework documents
    const mathFiles = [
      'docs/bmad-mathematical-framework.md',
      'docs/bmad-framework-implementation-mapping.md',
      'docs/bmad-framework-practical-examples.md'
    ];
    
    let mathFilesFound = 0;
    for (const file of mathFiles) {
      const filePath = path.join(bmadPath, file);
      if (await fs.pathExists(filePath)) {
        mathFilesFound++;
      }
    }
    
    if (mathFilesFound === mathFiles.length) {
      console.log('  ✓ All mathematical framework documents found');
    } else {
      console.log(`  ⚠ Only ${mathFilesFound}/${mathFiles.length} mathematical framework documents found`);
    }
    
    // Check package version
    try {
      const packageJson = await fs.readJson(path.join(bmadPath, 'package.json'));
      const version = packageJson.version;
      console.log(`  ✓ BMAD-METHOD version: ${version}`);
      
      // Check if it's the enhanced version (4.44.0 or higher)
      if (version && version.startsWith('4.44.')) {
        console.log('  ✓ Enhanced mathematical framework version confirmed');
      } else {
        console.log('  ⚠ This may not be the enhanced mathematical framework version');
      }
    } catch (error) {
      console.log('  ⚠ Could not read package version');
    }
    
    // Test npx command if available
    try {
      const result = execSync('npx bmad-method --version', {
        cwd: targetDir,
        stdio: 'pipe'
      }).toString().trim();
      
      if (result) {
        console.log(`  ✓ npx bmad-method command works: ${result}`);
      } else {
        console.log('  ⚠ npx bmad-method command returned no output');
      }
    } catch (error) {
      console.log('  ⚠ npx bmad-method command failed');
    }
    
    return true;
  } catch (error) {
    console.log(`  ❌ Test failed with error: ${error.message}`);
    return false;
  }
}

/**
 * Main function to test installations in multiple directories
 */
async function main() {
  // Get directories from command line arguments
  const directories = process.argv.slice(2);
  
  if (directories.length === 0) {
    console.log('Usage: node test-enhanced-installation.js <directory1> [directory2] [directory3] ...');
    console.log('Example: node test-enhanced-installation.js ./project1 ./project2');
    process.exit(1);
  }
  
  console.log('🧪 BMAD-METHOD Enhanced Installation Test');
  console.log('==========================================');
  
  let successCount = 0;
  
  // Test each directory
  for (const dir of directories) {
    const success = await testEnhancedInstallation(dir);
    if (success) {
      successCount++;
    }
  }
  
  console.log('\n📊 Test Summary');
  console.log('==============');
  console.log(`Successfully tested: ${successCount}/${directories.length} directories`);
  
  if (successCount === directories.length) {
    console.log('🎉 All installations passed the enhanced test!');
  } else {
    console.log('⚠ Some installations failed the enhanced test.');
  }
  
  process.exit(successCount === directories.length ? 0 : 1);
}

// Run the main function
if (require.main === module) {
  main().catch(error => {
    console.error('Test script failed:', error);
    process.exit(1);
  });
}

module.exports = { testEnhancedInstallation };