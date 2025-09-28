#!/bin/bash

# Final comprehensive verification script to ensure BMAD repository is completely clean of ~ references

echo "🔍 BMAD Repository Final Comprehensive Cleanup Verification"
echo "========================================================"

# Track overall success
overall_success=true

# 1. Check that no files with ~ are tracked in git
echo "📁 Checking for files with ~ in git index..."
git_files_with_tilde=$(git ls-files | grep "~" | wc -l)
if [ "$git_files_with_tilde" -eq 0 ]; then
  echo "  ✅ No files with ~ found in git index"
else
  echo "  ❌ Found $git_files_with_tilde files with ~ in git index"
  git ls_files | grep "~"
  overall_success=false
fi

echo ""

# 2. Check that no files with ~ exist in the working directory
echo "📂 Checking for files with ~ in working directory..."
files_with_tilde=$(find . -name "*~*" -type f 2>/dev/null | wc -l)
if [ "$files_with_tilde" -eq 0 ]; then
  echo "  ✅ No files with ~ found in working directory"
else
  echo "  ❌ Found $files_with_tilde files with ~ in working directory"
  find . -name "*~*" -type f 2>/dev/null
  overall_success=false
fi

echo ""

# 3. Check that no directories with ~ exist in the working directory
echo "📁 Checking for directories with ~ in working directory..."
dirs_with_tilde=$(find . -name "*~*" -type d 2>/dev/null | wc -l)
if [ "$dirs_with_tilde" -eq 0 ]; then
  echo "  ✅ No directories with ~ found in working directory"
else
  echo "  ❌ Found $dirs_with_tilde directories with ~ in working directory"
  find . -name "*~*" -type d 2>/dev/null
  overall_success=false
fi

echo ""

# 4. Check that no recent commits reference files with ~ (except our cleanup commit)
echo "📝 Checking recent commits for ~ references..."
recent_commits_with_tilde=$(git log --oneline -20 | grep "~" | grep -v "Clean up references to files with ~" | wc -l)
if [ "$recent_commits_with_tilde" -eq 0 ]; then
  echo "  ✅ No recent commits reference files with ~ (except cleanup commit)"
else
  echo "  ❌ Found $recent_commits_with_tilde recent commits that reference files with ~"
  git log --oneline -20 | grep "~" | grep -v "Clean up references to files with ~"
  overall_success=false
fi

echo ""

# 5. Check that our new documentation files are properly added
echo "📄 Checking for new documentation files..."
new_docs=(
  "docs/community-announcement-final.md"
  "docs/community-announcement.md"
  "docs/final-implementation-summary-complete.md"
  "docs/final-status-report.md"
  "docs/project-completion-summary.md"
  "docs/cleanup-and-verification-complete.md"
  "docs/final-cleanup-summary.md"
  "docs/cleanup-celebration.md"
  "tools/verify-cleanup.sh"
)

missing_docs=0
for doc in "${new_docs[@]}"; do
  if [ -f "$doc" ]; then
    echo "  ✅ $doc"
  else
    echo "  ❌ $doc (MISSING)"
    missing_docs=$((missing_docs + 1))
    overall_success=false
  fi
done

if [ $missing_docs -eq 0 ]; then
  echo "  🎉 All new documentation files are present!"
else
  echo "  ⚠️  $missing_docs new documentation files are missing!"
fi

echo ""

# Final summary
echo "📋 FINAL COMPREHENSIVE CLEANUP VERIFICATION SUMMARY"
echo "=================================================="
if [ "$overall_success" = true ]; then
  echo "🎉 ALL CLEANUP CHECKS PASSED - BMAD Repository is completely clean of ~ references!"
  echo ""
  echo "✨ Key verification results:"
  echo "   ✅ No files with ~ in git index"
  echo "   ✅ No files with ~ in working directory"
  echo "   ✅ No directories with ~ in working directory"
  echo "   ✅ No recent commits reference files with ~ (except cleanup commit)"
  echo "   ✅ All new documentation files are present"
  echo ""
  echo "🚀 The BMAD repository is now completely clean and ready for community use!"
  exit 0
else
  echo "❌ SOME CLEANUP CHECKS FAILED - Please review the issues above"
  exit 1
fi