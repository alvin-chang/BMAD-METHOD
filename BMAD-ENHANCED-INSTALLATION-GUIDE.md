# BMAD Enhanced Installation Guide

## How to Install the Mathematically Enhanced BMAD Methodology

This guide explains how to install the mathematically enhanced BMAD methodology to multiple directories while ensuring your local changes aren't overwritten by the npm repository.

## Prerequisites

- Node.js version 20 or higher
- npm (comes with Node.js)

## Method 1: Using the Local Package (Recommended)

### Step 1: Create a Local Package

```bash
# Navigate to your BMAD-METHOD directory
cd /path/to/BMAD-METHOD

# Create a packed version of your enhanced BMAD
npm pack
# This creates a file like bmad-method-4.43.0.tgz
```

### Step 2: Install to Multiple Directories

```bash
# Install to each project directory
cd /path/to/project1
npm install /path/to/BMAD-METHOD/bmad-method-4.43.0.tgz

cd /path/to/project2
npm install /path/to/BMAD-METHOD/bmad-method-4.43.0.tgz

cd /path/to/project3
npm install /path/to/BMAD-METHOD/bmad-method-4.43.0.tgz
```

### Step 3: Verify Installation

```bash
# In each project directory, verify the installation
ls node_modules/bmad-method/docs/bmad-mathematical*.md
# You should see the mathematical framework documents
```

## Method 2: Using npm link for Development

For development purposes, you can link your local version:

```bash
# In your BMAD-METHOD directory
npm link

# In each project directory
cd /path/to/project1
npm link bmad-method

cd /path/to/project2
npm link bmad-method
```

## Method 3: Package.json Version Management

To prevent npm from overwriting your enhanced version, update your package.json:

```json
{
  "dependencies": {
    "bmad-method": "file:../path/to/your/BMAD-METHOD"
  }
}
```

Or use the exact version you've created:

```json
{
  "dependencies": {
    "bmad-method": "file:/path/to/BMAD-METHOD/bmad-method-4.43.0.tgz"
  }
}
```

## Preventing Overwrites from npm Repository

### 1. Commit package-lock.json

After installing your local version, commit the package-lock.json file to ensure team members get the same version:

```bash
# In each project directory
git add package-lock.json
git commit -m "Lock BMAD version to local enhanced version"
```

### 2. Version Pinning

In each project's package.json, specify the exact version:

```json
{
  "dependencies": {
    "bmad-method": "4.43.0"
  },
  "resolutions": {
    "bmad-method": "4.43.0"
  }
}
```

### 3. .npmrc Configuration

Create a `.npmrc` file in each project directory to prevent automatic updates:

```
# Prevent automatic updates
save-exact=true
package-lock=true
```

## Testing Your Installation

You can test that your enhanced version is correctly installed using the test script:

```bash
# Test installations
node /path/to/BMAD-METHOD/test-enhanced-installation.js /path/to/project1 /path/to/project2
```

This will verify that:
1. The bmad-method package is installed
2. Core files are present
3. Mathematical framework documents are found
4. The version is correct

## Benefits of This Approach

1. **Preserves Your Enhancements**: Your mathematical framework additions won't be overwritten
2. **Works Across Multiple Projects**: You can install to as many directories as needed
3. **Version Control**: You control which version is used in each project
4. **Team Collaboration**: Team members will get the same enhanced version
5. **Easy Updates**: You can update all projects by updating the local package and reinstalling

## Troubleshooting

### Issue: npm pack fails with JSON errors

Make sure your package.json is valid JSON:
```bash
# Validate package.json
node -e "console.log(JSON.parse(require('fs').readFileSync('package.json')))"
```

### Issue: Installation fails

Check that the tgz file exists and is readable:
```bash
ls -la bmad-method-*.tgz
tar -tzf bmad-method-*.tgz | head -10
```

### Issue: Mathematical framework documents not found

Verify the installation includes your enhancements:
```bash
find node_modules/bmad-method -name "*mathematical*" -type f
```