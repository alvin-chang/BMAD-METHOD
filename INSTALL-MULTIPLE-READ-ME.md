# BMAD-METHOD Multiple Directory Installer

This directory contains scripts to programmatically install BMAD-METHOD into multiple directories without interactive prompts.

## Scripts

### 1. install-multiple-directories.js

Installs BMAD-METHOD to multiple directories programmatically.

#### Usage:
```bash
node install-multiple-directories.js [options] <directory1> [directory2] [directory3] ...
```

#### Options:
- `--skip-missing`: Skip directories that don't exist instead of failing
- `--stop-on-error`: Stop processing if any installation fails
- `--help`, `-h`: Show help message

#### Examples:
```bash
# Install to multiple directories
node install-multiple-directories.js /path/to/project1 /path/to/project2

# Skip missing directories
node install-multiple-directories.js --skip-missing /path/to/project1 /nonexistent/dir /path/to/project2

# Stop on first error
node install-multiple-directories.js --stop-on-error /path/to/project1 /path/to/project2
```

### 2. test-installation.js

Verifies that BMAD-METHOD is properly installed in one or more directories.

#### Usage:
```bash
node test-installation.js <directory1> [directory2] [directory3] ...
```

#### Example:
```bash
# Test installations
node test-installation.js /path/to/project1 /path/to/project2
```

## How It Works

1. The installer copies all necessary BMAD-METHOD files to each target directory
2. It initializes a new npm project if one doesn't exist
3. It installs BMAD-METHOD as a dependency
4. It runs the standard BMAD installation process

## Requirements

- Node.js >= 20.10.0
- npm >= 9
- BMAD-METHOD installed in the current directory

## Notes

- These scripts should be run from the root of your BMAD-METHOD installation
- The installer will overwrite existing BMAD-METHOD files in target directories
- For existing projects, it will preserve the existing package.json and only add/update BMAD-METHOD dependencies