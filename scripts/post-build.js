#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to copy from public to out directory
const filesToCopy = [
  'sitemap.xml',
  'robots.txt',
  'sitemap-routes.xml'
];

console.log('📋 Copying static files to build output...');

filesToCopy.forEach(file => {
  const source = path.join(__dirname, '..', 'public', file);
  const dest = path.join(__dirname, '..', 'out', file);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log(`✅ Copied ${file}`);
  } else {
    console.log(`⚠️  ${file} not found in public directory`);
  }
});

console.log('✨ Static files copied successfully!');