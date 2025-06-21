const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function createSimpleImage(width, height, text, outputPath) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(0, 0, width, height);

  // Add some design elements
  ctx.strokeStyle = '#3b82f6';
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, width - 40, height - 40);

  // Add text
  ctx.font = 'bold 60px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Ensure directory exists
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Created image: ${outputPath}`);
}

// Define the absolute paths
const publicDir = path.join(__dirname, '../../../public');
const blogDir = path.join(publicDir, 'blog');
const teamDir = path.join(publicDir, 'team');

// Ensure directories exist
[publicDir, blogDir, teamDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Create blog images
const blogImages = [
  { text: 'AI Code Generation', file: 'ai-code-generation.jpg' },
  { text: 'WebAssembly Trends', file: 'webassembly-trends.jpg' },
  { text: 'Edge Computing', file: 'edge-computing.jpg' },
  { text: 'Zero Trust Security', file: 'zero-trust-security.jpg' }
];

// Create team images
const teamImages = [
  { text: 'Tech Writer', file: 'tech-writer.jpg' },
  { text: 'Web Expert', file: 'web-expert.jpg' },
  { text: 'Cloud Expert', file: 'cloud-expert.jpg' },
  { text: 'Security Expert', file: 'security-expert.jpg' }
];

// Generate all images
blogImages.forEach(({ text, file }) => {
  createSimpleImage(1200, 675, text, path.join(blogDir, file));
});

teamImages.forEach(({ text, file }) => {
  createSimpleImage(400, 400, text, path.join(teamDir, file));
}); 