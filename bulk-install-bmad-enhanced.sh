#!/bin/bash

# BMAD Enhanced Bulk Installation Script
# Installs the mathematically enhanced BMAD methodology to all npm project directories

echo "🚀 BMAD Enhanced Bulk Installation Script"
echo "======================================="
echo ""

# Path to the BMAD-METHOD directory
BMAD_ROOT="/Users/alvin/src/BMAD-METHOD"

# Check if BMAD-METHOD directory exists
if [ ! -d "$BMAD_ROOT" ]; then
    echo "❌ Error: BMAD-METHOD directory not found at $BMAD_ROOT"
    exit 1
fi

echo "✅ Found BMAD-METHOD directory"

# Check if package.json exists to verify we're in the right directory
if [ ! -f "$BMAD_ROOT/package.json" ]; then
    echo "❌ Error: package.json not found in $BMAD_ROOT"
    exit 1
fi

echo "✅ Verified BMAD-METHOD package.json"

# Create packed version if it doesn't exist
TGZ_FILE="$BMAD_ROOT/bmad-method-4.43.0.tgz"
if [ ! -f "$TGZ_FILE" ]; then
    echo "📦 Creating packed version of BMAD..."
    cd "$BMAD_ROOT"
    npm pack > /dev/null 2>&1
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to create packed version"
        exit 1
    fi
    echo "✅ Created packed version: $TGZ_FILE"
else
    echo "✅ Using existing packed version: $TGZ_FILE"
fi

# Find all directories with package.json files (npm projects)
echo ""
echo "🔍 Searching for npm projects in /Users/alvin/src/..."
PROJECT_DIRS=()
while IFS= read -r -d '' dir; do
    # Skip the BMAD-METHOD directory itself
    if [[ "$dir" != "$BMAD_ROOT" ]]; then
        PROJECT_DIRS+=("$dir")
    fi
done < <(find /Users/alvin/src/ -type f -name "package.json" -exec dirname {} \; -print0 2>/dev/null | sort -uz)

echo "✅ Found ${#PROJECT_DIRS[@]} npm projects"

# Show the directories we'll install to
if [ ${#PROJECT_DIRS[@]} -gt 0 ]; then
    echo ""
    echo "📂 Target directories:"
    for dir in "${PROJECT_DIRS[@]}"; do
        echo "  - $dir"
    done
else
    echo "⚠ No npm projects found in /Users/alvin/src/"
    exit 0
fi

echo ""
read -p "Do you want to proceed with installation to all ${#PROJECT_DIRS[@]} directories? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Installation cancelled."
    exit 0
fi

# Install to each directory
echo ""
echo "🚀 Installing BMAD enhanced version to all directories..."
echo ""

SUCCESS_COUNT=0
TOTAL_COUNT=${#PROJECT_DIRS[@]}

for dir in "${PROJECT_DIRS[@]}"; do
    echo "Installing to: $dir"
    
    # Navigate to the directory
    cd "$dir" || {
        echo "  ❌ Failed to navigate to $dir"
        continue
    }
    
    # Install the enhanced BMAD package
    npm install "$TGZ_FILE" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo "  ✅ Successfully installed to $dir"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Verify installation by checking for mathematical framework documents
        if [ -f "node_modules/bmad-method/docs/bmad-mathematical-framework.md" ]; then
            echo "  ✅ Mathematical framework verified"
        else
            echo "  ⚠ Mathematical framework not found"
        fi
    else
        echo "  ❌ Failed to install to $dir"
    fi
    
    echo ""
done

echo "📊 Installation Summary:"
echo "====================="
echo "Successfully installed to $SUCCESS_COUNT out of $TOTAL_COUNT directories"

if [ $SUCCESS_COUNT -eq $TOTAL_COUNT ]; then
    echo "🎉 All installations completed successfully!"
else
    echo "⚠ Some installations failed. Please check the output above."
fi

echo ""
echo "To verify installations, you can run:"
echo "  node $BMAD_ROOT/test-enhanced-installation.js ${PROJECT_DIRS[*]}"