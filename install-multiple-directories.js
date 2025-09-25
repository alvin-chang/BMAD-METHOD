#!/usr/bin/env node

// BMAD-METHOD Multiple Directory Installer
// Copyright © 2025 BMAD™. All rights reserved.

const fs = require('fs-extra');
const path = require('path');
const { spawn } = require('child_process');

/**
 * Install BMAD-METHOD into a single directory
 * @param {string} targetDir - Target directory for installation
 * @param {Object} options - Installation options
 * @returns {Promise<void>}
 */
async function installToDirectory(targetDir, options = {}) {
  try {
    console.log(`\n🚀 Installing BMAD-METHOD to: ${targetDir}`);
    
    // Ensure target directory exists
    await fs.ensureDir(targetDir);
    
    // Determine if this is a new installation or upgrade
    const packageJsonPath = path.join(targetDir, 'package.json');
    const isNewInstallation = !(await fs.pathExists(packageJsonPath));
    
    // Copy core files
    console.log('📦 Copying BMAD-METHOD core files...');
    const sourceDir = process.cwd();
    
    // Files and directories to copy
    const itemsToCopy = [
      'bmad-core',
      'tools',
      'package.json',
      'package-lock.json',
      '.gitignore'
    ];
    
    // Copy each item
    for (const item of itemsToCopy) {
      const sourcePath = path.join(sourceDir, item);
      const targetPath = path.join(targetDir, item);
      
      if (await fs.pathExists(sourcePath)) {
        // Remove existing item if it exists
        if (await fs.pathExists(targetPath)) {
          await fs.remove(targetPath);
        }
        
        // Copy item
        await fs.copy(sourcePath, targetPath);
        console.log(`  ✔ Copied ${item}`);
      }
    }
    
    // If this is a new installation, initialize package.json
    if (isNewInstallation) {
      console.log('📝 Initializing package.json...');
      await new Promise((resolve, reject) => {
        const initProcess = spawn('npm', ['init', '-y'], {
          cwd: targetDir,
          stdio: 'inherit'
        });
        
        initProcess.on('close', (code) => {
          if (code === 0) {
            resolve();
          } else {
            reject(new Error(`npm init failed with code ${code}`));
          }
        });
      });
    }
    
    // Install BMAD-METHOD as a dependency
    console.log('📥 Installing BMAD-METHOD dependencies...');
    await new Promise((resolve, reject) => {
      const installProcess = spawn('npm', ['install'], {
        cwd: targetDir,
        stdio: 'inherit'
      });
      
      installProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`npm install failed with code ${code}`));
        }
      });
    });
    
    // Run BMAD installation
    console.log('🔧 Running BMAD installation...');
    await new Promise((resolve, reject) => {
      const bmadInstallProcess = spawn('npx', ['bmad-method', 'install'], {
        cwd: targetDir,
        stdio: 'inherit'
      });
      
      bmadInstallProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`BMAD installation failed with code ${code}`));
        }
      });
    });
    
    console.log(`✅ Successfully installed BMAD-METHOD to ${targetDir}`);
  } catch (error) {
    console.error(`❌ Failed to install BMAD-METHOD to ${targetDir}: ${error.message}`);
    throw error;
  }
}

/**
 * Install BMAD-METHOD to multiple directories
 * @param {string[]} targetDirs - Array of target directories
 * @param {Object} options - Installation options
 * @returns {Promise<void>}
 */
async function installToMultipleDirectories(targetDirs, options = {}) {
  console.log('🚀 BMAD-METHOD Multiple Directory Installer');
  console.log('=========================================');
  
  // Validate inputs
  if (!targetDirs || targetDirs.length === 0) {
    throw new Error('No target directories specified');
  }
  
  // Filter out non-existent directories if requested
  const dirsToProcess = options.skipMissing 
    ? targetDirs.filter(dir => fs.existsSync(dir))
    : targetDirs;
  
  if (dirsToProcess.length === 0) {
    console.log('⚠️  No valid directories to process');
    return;
  }
  
  console.log(`📦 Installing BMAD-METHOD to ${dirsToProcess.length} directories:`);
  dirsToProcess.forEach((dir, index) => {
    console.log(`   ${index + 1}. ${dir}`);
  });
  
  // Process each directory
  const results = [];
  
  for (const [index, dir] of dirsToProcess.entries()) {
    try {
      console.log(`\n🔄 Processing directory ${index + 1}/${dirsToProcess.length}: ${dir}`);
      await installToDirectory(dir, options);
      results.push({ dir, success: true });
    } catch (error) {
      console.error(`❌ Error installing to ${dir}: ${error.message}`);
      results.push({ dir, success: false, error: error.message });
      
      // Continue with next directory unless stopOnError is set
      if (options.stopOnError) {
        throw error;
      }
    }
  }
  
  // Print summary
  console.log('\n📊 Installation Summary:');
  console.log('=======================');
  
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📈 Total: ${results.length}`);
  
  if (failed > 0) {
    console.log('\n📋 Failed Installations:');
    results
      .filter(r => !r.success)
      .forEach(r => {
        console.log(`   ❌ ${r.dir}: ${r.error}`);
      });
  }
  
  if (successful === results.length) {
    console.log('\n🎉 All installations completed successfully!');
  } else {
    console.log(`\n⚠️  ${failed} installations failed. Please check the errors above.`);
    
    if (!options.stopOnError) {
      // Return a non-zero exit code to indicate partial failure
      process.exitCode = 1;
    }
  }
}

/**
 * Main function
 */
async function main() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    const options = {
      skipMissing: false,
      stopOnError: false
    };
    
    // Parse flags
    const dirs = [];
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      
      switch (arg) {
        case '--skip-missing':
          options.skipMissing = true;
          break;
          
        case '--stop-on-error':
          options.stopOnError = true;
          break;
          
        case '--help':
        case '-h':
          console.log(`
BMAD-METHOD Multiple Directory Installer
=========================================

Installs BMAD-METHOD to multiple directories programmatically.

Usage:
  node install-multiple-directories.js [options] <directory1> [directory2] [directory3] ...

Options:
  --skip-missing    Skip directories that don't exist instead of failing
  --stop-on-error   Stop processing if any installation fails
  --help, -h        Show this help message

Examples:
  node install-multiple-directories.js /path/to/project1 /path/to/project2
  node install-multiple-directories.js --skip-missing /path/to/project1 /nonexistent/dir /path/to/project2
  node install-multiple-directories.js --stop-on-error /path/to/project1 /path/to/project2

Note: This script should be run from the root of your BMAD-METHOD installation.
          `);
          return;
          
        default:
          if (!arg.startsWith('-')) {
            dirs.push(arg);
          }
          break;
      }
    }
    
    // Check if directories were provided
    if (dirs.length === 0) {
      console.error('❌ Error: No target directories specified.');
      console.log('Use --help for usage information.');
      process.exit(1);
    }
    
    // Run installations
    await installToMultipleDirectories(dirs, options);
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
  installToDirectory,
  installToMultipleDirectories
};