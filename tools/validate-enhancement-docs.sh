#!/bin/bash

# Script to validate the enhancement documentation files

echo "Validating BMAD Enhancement Initiative Documentation Files"
echo "======================================================"

# Check if required files exist
required_files=(
  "docs/template-validation-enhancement.md"
  "docs/orchestrator-enhancement.md"
  "docs/agent-communication-enhancement.md"
  "docs/memory-system-enhancement.md"
  "docs/documentation-enhancement.md"
  "docs/bmad-enhancement-initiative.md"
  ".github/PULL_REQUEST_TEMPLATE/enhancement.md"
  ".github/ISSUE_TEMPLATE/enhancement.md"
  "docs/enhancement-initiative-summary.md"
  "docs/README.md"
)

echo "Checking for required files..."
missing_files=0

for file in "${required_files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✓ $file"
  else
    echo "  ✗ $file (MISSING)"
    missing_files=$((missing_files + 1))
  fi
done

if [ $missing_files -eq 0 ]; then
  echo ""
  echo "All required files are present!"
else
  echo ""
  echo "WARNING: $missing_files required files are missing!"
  exit 1
fi

# Check markdown formatting
echo ""
echo "Checking markdown formatting..."

# Simple check for markdown files (could be enhanced with a proper markdown linter)
markdown_files=$(find docs -name "*.md" -type f)
formatting_issues=0

for file in $markdown_files; do
  # Check if file has content
  if [ ! -s "$file" ]; then
    echo "  ✗ $file is empty"
    formatting_issues=$((formatting_issues + 1))
  fi
  
  # Check for basic markdown structure
  if ! grep -q "^#" "$file" 2>/dev/null; then
    echo "  ⚠ $file may be missing headers"
  fi
done

# Check template files
template_files=$(find .github -name "*.md" -type f)
for file in $template_files; do
  # Check if file has content
  if [ ! -s "$file" ]; then
    echo "  ✗ $file is empty"
    formatting_issues=$((formatting_issues + 1))
  fi
done

if [ $formatting_issues -eq 0 ]; then
  echo "  ✓ All markdown files appear to be properly formatted"
else
  echo "  ⚠ Found $formatting_issues potential formatting issues"
fi

echo ""
echo "Validation complete!"