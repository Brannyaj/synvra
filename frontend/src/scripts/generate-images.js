const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Function to create a gradient background
function createGradientImage(width, height, title, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#0f172a');
  gradient.addColorStop(1, '#1e293b');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add some visual elements
  ctx.strokeStyle = '#3b82f6';
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  // Add title text
  ctx.font = '40px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Word wrap the title
  const words = title.split(' ');
  let lines = [];
  let currentLine = '';
  
  words.forEach(word => {
    const testLine = currentLine + word + ' ';
    if (ctx.measureText(testLine).width < width - 40) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = word + ' ';
    }
  });
  lines.push(currentLine);

  // Draw each line
  lines.forEach((line, i) => {
    const y = height/2 - ((lines.length - 1) * 50)/2 + i * 50;
    ctx.fillText(line.trim(), width/2, y);
  });

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(filename, buffer);
}

// Create blog post images
const blogImages = [
  { title: 'AI Code Generation', file: 'ai-code-generation.jpg' },
  { title: 'WebAssembly Trends', file: 'webassembly-trends.jpg' },
  { title: 'Edge Computing', file: 'edge-computing.jpg' },
  { title: 'Zero Trust Security', file: 'zero-trust-security.jpg' }
];

// Create team member images
const teamImages = [
  { title: 'Tech Writer', file: 'tech-writer.jpg' },
  { title: 'Web Expert', file: 'web-expert.jpg' },
  { title: 'Cloud Expert', file: 'cloud-expert.jpg' },
  { title: 'Security Expert', file: 'security-expert.jpg' }
];

// Ensure directories exist
const blogDir = path.join(__dirname, '../../public/blog');
const teamDir = path.join(__dirname, '../../public/team');

if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

// Generate blog images
blogImages.forEach(({ title, file }) => {
  createGradientImage(1200, 675, title, path.join(blogDir, file));
  console.log(`Created blog image: ${file}`);
});

// Generate team member images
teamImages.forEach(({ title, file }) => {
  createGradientImage(400, 400, title, path.join(teamDir, file));
  console.log(`Created team image: ${file}`);
}); 