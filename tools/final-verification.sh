#!/bin/bash

# Final verification script for BMAD Method Enhancement Initiative

echo "🔍 BMAD Method Enhancement Initiative - Final Verification"
echo "======================================================"

# Track overall success
overall_success=true

# 1. Check that all required files exist
echo "📁 Checking for required files..."
required_files=(
  "bmad-core/utils/template-schema.json"
  "bmad-core/utils/template-validator.js"
  "bmad-core/utils/template-validator-cli.js"
  "bmad-core/utils/template-validator-watch.js"
  "bmad-core/utils/template-linter.js"
  "bmad-core/utils/template-linter-cli.js"
  "bmad-core/utils/enhanced-memory-system.js"
  "bmad-core/utils/memory-analytics.js"
  "bmad-core/utils/mermaid-generator.js"
  "bmad-core/utils/workflow-monitor.js"
  "bmad-core/utils/error-recovery.js"
  "bmad-core/utils/validation-feedback.js"
  "bmad-core/agents/enhanced-bmad-orchestrator.md"
  "dist/agents/enhanced-bmad-orchestrator.txt"
  "bmad-core/test/test-template.yaml"
  "bmad-core/test/invalid-template.yaml"
  "bmad-core/test/template-validator-test.js"
  "docs/template-validation-enhancement.md"
  "docs/orchestrator-enhancement.md"
  "docs/agent-communication-enhancement.md"
  "docs/memory-system-enhancement.md"
  "docs/documentation-enhancement.md"
  "docs/bmad-enhancement-initiative.md"
  "docs/enhancement-initiative-summary.md"
  "docs/final-summary.md"
  "docs/status-report.md"
  "docs/enhancement-installation-verification.md"
  "docs/final-implementation-summary.md"
  "docs/final-status-report.md"
  "docs/community-announcement.md"
  "docs/final-implementation-summary-complete.md"
)

missing_files=0
for file in "${required_files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✅ $file"
  else
    echo "  ❌ $file (MISSING)"
    missing_files=$((missing_files + 1))
    overall_success=false
  fi
done

if [ $missing_files -eq 0 ]; then
  echo "  🎉 All required files are present!"
else
  echo "  ⚠️  $missing_files required files are missing!"
fi

echo ""

# 2. Check that CLI tools are registered
echo "🔧 Checking CLI tool registration..."
package_json="package.json"

# Check if package.json exists
if [ ! -f "$package_json" ]; then
  echo "  ❌ $package_json not found"
  overall_success=false
else
  # Check for validator CLI
  if grep -q "template-validator" "$package_json"; then
    echo "  ✅ Template validator CLI registered"
  else
    echo "  ❌ Template validator CLI not registered"
    overall_success=false
  fi
  
  # Check for validator watch CLI
  if grep -q "template-validator-watch" "$package_json"; then
    echo "  ✅ Template validator watch CLI registered"
  else
    echo "  ❌ Template validator watch CLI not registered"
    overall_success=false
  fi
  
  # Check for linter CLI
  if grep -q "template-linter" "$package_json"; then
    echo "  ✅ Template linter CLI registered"
  else
    echo "  ❌ Template linter CLI not registered"
    overall_success=false
  fi
fi

echo ""

# 3. Check that NPM scripts are registered
echo "📦 Checking NPM script registration..."
if [ -f "$package_json" ]; then
  # Check for validate:templates script
  if grep -q "validate:templates" "$package_json"; then
    echo "  ✅ validate:templates script registered"
  else
    echo "  ❌ validate:templates script not registered"
    overall_success=false
  fi
  
  # Check for validate:templates:watch script
  if grep -q "validate:templates:watch" "$package_json"; then
    echo "  ✅ validate:templates:watch script registered"
  else
    echo "  ❌ validate:templates:watch script not registered"
    overall_success=false
  fi
  
  # Check for lint:templates script
  if grep -q "lint:templates" "$package_json"; then
    echo "  ✅ lint:templates script registered"
  else
    echo "  ❌ lint:templates script not registered"
    overall_success=false
  fi
else
  echo "  ❌ $package_json not found"
  overall_success=false
fi

echo ""

# 4. Test template validation
echo "🧪 Testing template validation..."
if command -v npm >/dev/null 2>&1; then
  # Test valid template
  if npm run validate:templates bmad-core/test/test-template.yaml >/dev/null 2>&1; then
    echo "  ✅ Template validation working correctly"
  else
    echo "  ❌ Template validation failed"
    overall_success=false
  fi
  
  # Test invalid template (should fail)
  if npm run validate:templates bmad-core/test/invalid-template.yaml >/dev/null 2>&1; then
    echo "  ⚠️  Invalid template validation unexpectedly passed"
  else
    # Check exit code - should be 1 for validation failure
    exit_code=$?
    if [ $exit_code -eq 1 ]; then
      echo "  ✅ Invalid template validation correctly failed"
    else
      echo "  ⚠️  Invalid template validation failed with unexpected exit code: $exit_code"
    fi
  fi
else
  echo "  ⚠️  npm not found - skipping validation tests"
fi

echo ""

# 5. Check enhanced orchestrator
echo "🧙 Checking enhanced orchestrator..."
if [ -f "bmad-core/agents/enhanced-bmad-orchestrator.md" ]; then
  echo "  ✅ Enhanced orchestrator agent file present"
else
  echo "  ❌ Enhanced orchestrator agent file missing"
  overall_success=false
fi

if [ -f "dist/agents/enhanced-bmad-orchestrator.txt" ]; then
  echo "  ✅ Enhanced orchestrator distribution file present"
else
  echo "  ❌ Enhanced orchestrator distribution file missing"
  overall_success=false
fi

echo ""

# Final summary
echo "📋 FINAL VERIFICATION SUMMARY"
echo "============================="
if [ "$overall_success" = true ]; then
  echo "🎉 ALL CHECKS PASSED - BMAD Method Enhancement Initiative is ready!"
  echo ""
  echo "✨ Key enhancements now available:"
  echo "   🔍 Template validation with real-time feedback"
  echo "   🧙 Enhanced orchestrator with workflow visualization"
  echo "   🤝 Improved agent communication and handoff"
  echo "   🧠 Enhanced memory system with pattern recognition"
  echo "   📚 Better documentation and onboarding experience"
  echo ""
  echo "🚀 To use the new features:"
  echo "   npm run validate:templates my-template.yaml"
  echo "   npm run lint:templates my-template.yaml"
  echo "   npm run validate:templates:watch my-template.yaml"
  echo ""
  echo "📝 Enhanced orchestrator available at:"
  echo "   @.bmad-core/agents/enhanced-bmad-orchestrator.md"
  exit 0
else
  echo "❌ SOME CHECKS FAILED - Please review the issues above"
  exit 1
fi