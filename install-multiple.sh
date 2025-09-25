#!/bin/bash

# BMAD-METHOD Multiple Directory Installer
# Copyright © 2025 BMAD™. All rights reserved.

# Function to display help
show_help() {
  echo "
BMAD-METHOD Multiple Directory Installer
=========================================

Installs BMAD-METHOD to multiple directories programmatically.

Usage:
  ./install-multiple.sh [options] <directory1> [directory2] [directory3] ...

Options:
  --skip-missing    Skip directories that don't exist instead of failing
  --stop-on-error   Stop processing if any installation fails
  --help, -h        Show this help message

Examples:
  ./install-multiple.sh /path/to/project1 /path/to/project2
  ./install-multiple.sh --skip-missing /path/to/project1 /nonexistent/dir /path/to/project2
  ./install-multiple.sh --stop-on-error /path/to/project1 /path/to/project2

Note: This script should be run from the root of your BMAD-METHOD installation.
"
}

# Check if help is requested
for arg in "$@"; do
  if [[ "$arg" == "--help" || "$arg" == "-h" ]]; then
    show_help
    exit 0
  fi
done

# Check if directories are provided
if [ $# -eq 0 ]; then
  echo "❌ Error: No target directories specified."
  echo "Use --help for usage information."
  exit 1
fi

# Process arguments
SKIP_MISSING=false
STOP_ON_ERROR=false
DIRECTORIES=()

for arg in "$@"; do
  case $arg in
    --skip-missing)
      SKIP_MISSING=true
      ;;
    --stop-on-error)
      STOP_ON_ERROR=true
      ;;
    -*)
      # Ignore other flags
      ;;
    *)
      DIRECTORIES+=("$arg")
      ;;
  esac
done

# Check if directories were provided
if [ ${#DIRECTORIES[@]} -eq 0 ]; then
  echo "❌ Error: No target directories specified."
  echo "Use --help for usage information."
  exit 1
fi

echo "🚀 BMAD-METHOD Multiple Directory Installer"
echo "========================================="

# Filter out non-existent directories if requested
DIRS_TO_PROCESS=()
for dir in "${DIRECTORIES[@]}"; do
  if [ -d "$dir" ] || [ "$SKIP_MISSING" = false ]; then
    DIRS_TO_PROCESS+=("$dir")
  fi
done

if [ ${#DIRS_TO_PROCESS[@]} -eq 0 ]; then
  echo "⚠️  No valid directories to process"
  exit 0
fi

echo "📦 Installing BMAD-METHOD to ${#DIRS_TO_PROCESS[@]} directories:"
for i in "${!DIRS_TO_PROCESS[@]}"; do
  echo "   $((i+1)). ${DIRS_TO_PROCESS[$i]}"
done

# Process each directory
SUCCESSFUL=0
FAILED=0
TOTAL=${#DIRS_TO_PROCESS[@]}

for i in "${!DIRS_TO_PROCESS[@]}"; do
  dir="${DIRS_TO_PROCESS[$i]}"
  echo
  echo "🔄 Processing directory $((i+1))/$TOTAL: $dir"
  
  # Create directory if it doesn't exist
  if [ ! -d "$dir" ]; then
    echo "📁 Creating directory: $dir"
    mkdir -p "$dir"
  fi
  
  # Copy BMAD-METHOD files to target directory
  echo "📦 Copying BMAD-METHOD files to $dir..."
  cp -r bmad-core tools package.json package-lock.json .gitignore "$dir/" 2>/dev/null || {
    echo "❌ Failed to copy BMAD-METHOD files to $dir"
    FAILED=$((FAILED+1))
    if [ "$STOP_ON_ERROR" = true ]; then
      echo "🛑 Stopping due to error (--stop-on-error)"
      break
    fi
    continue
  }
  
  # Change to target directory
  cd "$dir" || {
    echo "❌ Failed to change to directory: $dir"
    FAILED=$((FAILED+1))
    if [ "$STOP_ON_ERROR" = true ]; then
      echo "🛑 Stopping due to error (--stop-on-error)"
      break
    fi
    continue
  }
  
  # Initialize package.json if it doesn't exist
  if [ ! -f package.json ]; then
    echo "📝 Initializing package.json..."
    npm init -y >/dev/null 2>&1 || {
      echo "❌ Failed to initialize package.json in $dir"
      FAILED=$((FAILED+1))
      cd - >/dev/null
      if [ "$STOP_ON_ERROR" = true ]; then
        echo "🛑 Stopping due to error (--stop-on-error)"
        break
      fi
      continue
    }
  fi
  
  # Install BMAD-METHOD
  echo "📥 Installing BMAD-METHOD dependencies..."
  npm install >/dev/null 2>&1 || {
    echo "❌ Failed to install BMAD-METHOD dependencies in $dir"
    FAILED=$((FAILED+1))
    cd - >/dev/null
    if [ "$STOP_ON_ERROR" = true ]; then
      echo "🛑 Stopping due to error (--stop-on-error)"
      break
    fi
    continue
  }
  
  # Run BMAD installation
  echo "🔧 Running BMAD installation..."
  npx bmad-method install >/dev/null 2>&1 || {
    echo "❌ Failed to run BMAD installation in $dir"
    FAILED=$((FAILED+1))
    cd - >/dev/null
    if [ "$STOP_ON_ERROR" = true ]; then
      echo "🛑 Stopping due to error (--stop-on-error)"
      break
    fi
    continue
  }
  
  # Return to original directory
  cd - >/dev/null
  
  echo "✅ Successfully installed BMAD-METHOD to $dir"
  SUCCESSFUL=$((SUCCESSFUL+1))
done

# Print summary
echo
echo "📊 Installation Summary:"
echo "======================="
echo "✅ Successful: $SUCCESSFUL"
echo "❌ Failed: $FAILED"
echo "📈 Total: $TOTAL"

if [ $FAILED -gt 0 ]; then
  echo
  echo "⚠️  $FAILED installations failed. Please check the errors above."
  exit 1
else
  echo
  echo "🎉 All installations completed successfully!"
  exit 0
fi