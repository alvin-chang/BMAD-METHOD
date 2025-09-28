#!/usr/bin/env node

// Simple wrapper to avoid Node.js package.json interpretation issues
// This script just displays the help for the main installation script

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