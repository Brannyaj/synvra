const fs = require('fs');
const path = require('path');

// Ensure the out directory exists
if (!fs.existsSync('./out')) {
  fs.mkdirSync('./out', { recursive: true });
}

// Copy files if they exist
const filesToCopy = ['sitemap.xml', 'robots.txt'];
filesToCopy.forEach(file => {
  const sourcePath = path.join('./public', file);
  const destPath = path.join('./out', file);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to output directory`);
  } else {
    console.log(`Warning: ${file} not found in public directory`);
  }
}); 