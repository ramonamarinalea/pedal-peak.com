#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Running build validation checks...\n');

let hasErrors = false;

// Check 1: Validate CSS imports
console.log('Checking CSS import rules...');
const globalsCSS = fs.readFileSync(path.join(__dirname, '../src/styles/globals.css'), 'utf8');
const lines = globalsCSS.split('\n');

// Check if @import appears after @tailwind directives
let foundTailwind = false;
let importAfterTailwind = false;

lines.forEach((line, index) => {
  if (line.includes('@tailwind')) {
    foundTailwind = true;
  }
  if (foundTailwind && line.includes('@import') && !line.startsWith('//') && !line.startsWith('/*')) {
    console.error(`❌ ERROR: @import found after @tailwind directive at line ${index + 1}`);
    console.error(`   Line: ${line.trim()}`);
    hasErrors = true;
    importAfterTailwind = true;
  }
});

if (!importAfterTailwind) {
  console.log('✅ CSS imports are correctly placed');
}

// Check 2: Validate routes data
console.log('\nChecking routes data...');
try {
  const routesDataFile = fs.readFileSync(path.join(__dirname, '../src/lib/swiss-routes-data.ts'), 'utf8');
  
  // Basic syntax check - ensure array is closed properly
  if (!routesDataFile.includes('export const swissRoutesData')) {
    console.error('❌ ERROR: swissRoutesData export not found');
    hasErrors = true;
  } else {
    // Count opening and closing braces
    const openBraces = (routesDataFile.match(/{/g) || []).length;
    const closeBraces = (routesDataFile.match(/}/g) || []).length;
    
    if (openBraces !== closeBraces) {
      console.error(`❌ ERROR: Mismatched braces in routes data (${openBraces} open, ${closeBraces} close)`);
      hasErrors = true;
    } else {
      console.log('✅ Routes data structure is valid');
    }
  }
} catch (error) {
  console.error('❌ ERROR: Could not read routes data file:', error.message);
  hasErrors = true;
}

// Check 3: Validate required files exist
console.log('\nChecking required files...');
const requiredFiles = [
  'src/styles/globals.css',
  'src/styles/vendor.css',
  'src/lib/swiss-routes-data.ts',
  'src/lib/validate-routes.ts',
  'src/components/error-boundary.tsx',
  'src/components/mobile-navigation.tsx'
];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.error(`❌ ERROR: Missing required file: ${file}`);
    hasErrors = true;
  }
});

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.error('❌ Build validation FAILED - Please fix the errors above');
  process.exit(1);
} else {
  console.log('✅ Build validation PASSED - All checks successful!');
  process.exit(0);
}