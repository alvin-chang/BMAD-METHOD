#!/bin/bash

# BMAD Enhanced Installation Script
# Installs the mathematically enhanced BMAD methodology to multiple directories

echo "BMAD Enhanced Installation Script"
echo "================================"

# Path to your enhanced BMAD package (current directory)
BMAD_PACKAGE="$(pwd)"

# Check if package.json exists to verify we're in the right directory
if [ ! -f "$BMAD_PACKAGE/package.json" ]; then
    echo "Error: package.json not found in $BMAD_PACKAGE"
    echo "Please run this script from the BMAD-METHOD root directory"
    exit 1
fi

# List of directories to install to (modify this list as needed)
DIRECTORIES=(
    "./demo-projects/project1"
    "./demo-projects/project2"
    "./demo-projects/project3"
)

echo "Installing BMAD enhanced version to directories:"
for dir in "${DIRECTORIES[@]}"; do
    echo "  - $dir"
done

echo ""
read -p "Do you want to proceed? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Installation cancelled."
    exit 0
fi

# Create a packed version of the current package
echo "Creating packed version of BMAD..."
npm pack > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Error: Failed to create packed version"
    exit 1
fi

# Get the name of the created tgz file
TGZ_FILE=$(ls bmad-method-*.tgz 2>/dev/null | head -n 1)
if [ -z "$TGZ_FILE" ]; then
    echo "Error: Could not find packed tgz file"
    exit 1
fi

echo "Created packed file: $TGZ_FILE"

# Install to each directory
SUCCESS_COUNT=0
TOTAL_COUNT=${#DIRECTORIES[@]}

for dir in "${DIRECTORIES[@]}"; do
    echo ""
    echo "Installing BMAD enhanced to $dir..."
    
    # Create directory if it doesn't exist
    if [ ! -d "$dir" ]; then
        echo "  Creating directory $dir..."
        mkdir -p "$dir"
    fi
    
    # Navigate to the directory
    cd "$dir" || {
        echo "  Error: Failed to navigate to $dir"
        continue
    }
    
    # Initialize as npm project if package.json doesn't exist
    if [ ! -f "package.json" ]; then
        echo "  Initializing npm project..."
        npm init -y > /dev/null 2>&1
    fi
    
    # Install the enhanced BMAD package
    echo "  Installing BMAD enhanced version..."
    npm install "$BMAD_PACKAGE/$TGZ_FILE" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo "  ✓ Successfully installed to $dir"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Verify installation by checking for mathematical framework documents
        if [ -f "node_modules/bmad-method/docs/bmad-mathematical-framework.md" ]; then
            echo "  ✓ Mathematical framework verified"
        else
            echo "  ⚠ Mathematical framework not found"
        fi
    else
        echo "  ✗ Failed to install to $dir"
    fi
    
    # Return to the BMAD package directory
    cd "$BMAD_PACKAGE" || {
        echo "  Error: Failed to return to BMAD package directory"
        continue
    }
done

echo ""
echo "Installation Summary:"
echo "===================="
echo "Successfully installed to $SUCCESS_COUNT out of $TOTAL_COUNT directories"

if [ $SUCCESS_COUNT -eq $TOTAL_COUNT ]; then
    echo "✓ All installations completed successfully!"
else
    echo "⚠ Some installations failed. Please check the output above."
fi

echo ""
echo "To verify installations, run:"
echo "  node test-installation.js ${DIRECTORIES[*]}"