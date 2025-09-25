#!/bin/bash

# BMAD Enhanced Installation Demonstration Script
# This script demonstrates how to install the mathematically enhanced BMAD methodology

echo "🚀 BMAD Enhanced Installation Demonstration"
echo "==========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: This script must be run from the BMAD-METHOD root directory"
    echo "Please navigate to the BMAD-METHOD directory and try again"
    exit 1
fi

echo "✅ Verified we're in the BMAD-METHOD directory"
echo ""

# Show the mathematical framework documents we've created
echo "📚 Mathematical Framework Documents Created:"
echo "----------------------------------------"
ls -la docs/bmad-mathematical*.md | awk '{print "  " $9}'
echo ""

# Create packed version
echo "📦 Creating packed version of BMAD..."
npm pack > /dev/null 2>&1
if [ $? -eq 0 ]; then
    TGZ_FILE=$(ls bmad-method-*.tgz 2>/dev/null | head -n 1)
    echo "✅ Successfully created $TGZ_FILE"
else
    echo "❌ Failed to create packed version"
    exit 1
fi
echo ""

# Show demo directories
echo "📂 Demo Project Directories:"
echo "-------------------------"
ls -la demo-projects/ | grep "^d" | awk '{print "  " $9}'
echo ""

# Show installation instructions
echo "📋 Installation Instructions:"
echo "--------------------------"
echo "To install the enhanced BMAD methodology to your projects:"
echo ""
echo "1. Copy the packed file to your project:"
echo "   cp $TGZ_FILE /path/to/your/project/"
echo ""
echo "2. In your project directory, install the enhanced version:"
echo "   cd /path/to/your/project"
echo "   npm install ./$TGZ_FILE"
echo ""
echo "3. Verify the installation:"
echo "   ls node_modules/bmad-method/docs/bmad-mathematical*.md"
echo ""

# Show testing instructions
echo "🧪 Testing Your Installation:"
echo "--------------------------"
echo "To test that your installation includes the mathematical framework:"
echo ""
echo "node test-enhanced-installation.js /path/to/your/project"
echo ""

echo "🎉 Installation demonstration complete!"
echo ""
echo "For detailed instructions, see BMAD-ENHANCED-INSTALLATION-GUIDE.md"