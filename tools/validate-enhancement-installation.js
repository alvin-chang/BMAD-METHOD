/**
 * Script to validate that all BMAD enhancement files are properly installed
 */

const fs = require('fs-extra');
const path = require('node:path');

async function validateInstallation() {
  console.log('🔍 Validating BMAD Enhancement Installation...\n');

  // Define expected files
  const expectedFiles = [
    // New utility files
    'bmad-core/utils/enhanced-memory-system.js',
    'bmad-core/utils/error-recovery.js',
    'bmad-core/utils/memory-analytics.js',
    'bmad-core/utils/mermaid-generator.js',
    'bmad-core/utils/template-linter.js',
    'bmad-core/utils/template-linter-cli.js',
    'bmad-core/utils/template-schema.json',
    'bmad-core/utils/template-validator.js',
    'bmad-core/utils/template-validator-cli.js',
    'bmad-core/utils/template-validator-watch.js',
    'bmad-core/utils/validation-feedback.js',
    'bmad-core/utils/workflow-monitor.js',

    // New agent files
    'dist/agents/devops.txt',
    'dist/agents/performance.txt',
    'dist/agents/security.txt',
    'dist/agents/technical-writer.txt',

    // CLI tools in package.json
    'tools/bmad-npx-wrapper.js',
  ];

  // Check each file exists
  let allFilesExist = true;
  for (const file of expectedFiles) {
    const fullPath = path.join(__dirname, '..', file);
    if (await fs.pathExists(fullPath)) {
      console.log(`✅ ${file}`);
    } else {
      console.log(`❌ ${file} - MISSING`);
      allFilesExist = false;
    }
  }

  // Check CLI tools are registered in package.json
  console.log('\n🔧 Checking CLI Tool Registration...\n');
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  const packageJson = await fs.readJson(packageJsonPath);

  const expectedBins = ['template-validator', 'template-validator-watch', 'template-linter'];

  let allBinsRegistered = true;
  for (const bin of expectedBins) {
    if (packageJson.bin && packageJson.bin[bin]) {
      console.log(`✅ ${bin} - Registered at ${packageJson.bin[bin]}`);
    } else {
      console.log(`❌ ${bin} - NOT REGISTERED`);
      allBinsRegistered = false;
    }
  }

  // Check npm scripts
  console.log('\n📦 Checking NPM Scripts...\n');
  const expectedScripts = ['validate:templates', 'validate:templates:watch', 'lint:templates'];

  let allScriptsExist = true;
  for (const script of expectedScripts) {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`✅ ${script} - ${packageJson.scripts[script]}`);
    } else {
      console.log(`❌ ${script} - NOT FOUND`);
      allScriptsExist = false;
    }
  }

  // Summary
  console.log('\n📋 SUMMARY\n');
  if (allFilesExist && allBinsRegistered && allScriptsExist) {
    console.log('🎉 All BMAD enhancement files are properly installed!');
    console.log('   Users can now access enhanced features including:');
    console.log('   - Template validation and linting');
    console.log('   - Enhanced orchestrator with visualization');
    console.log('   - Improved memory system with pattern recognition');
    console.log('   - New specialized agents (DevOps, Performance, Security, Technical Writer)');
    console.log('   - Real-time workflow monitoring and bottleneck detection');
    return 0;
  } else {
    console.log('❌ Some BMAD enhancement files are missing or not properly configured.');
    console.log('   Please check the installation and ensure all files are present.');
    return 1;
  }
}

// Run validation
validateInstallation()
  .then((exitCode) => {
    process.exit(exitCode);
  })
  .catch((error) => {
    console.error('Error during validation:', error);
    process.exit(1);
  });
