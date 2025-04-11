const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images/projects');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Define color themes for different industries
const colorThemes = {
  'AI & Machine Learning': ['#4F46E5', '#818CF8'],
  'FinTech': ['#059669', '#34D399'],
  'Healthcare': ['#DC2626', '#F87171'],
  'E-commerce': ['#7C3AED', '#A78BFA'],
  'IoT & Hardware': ['#2563EB', '#60A5FA'],
  'Cybersecurity': ['#4B5563', '#9CA3AF'],
  'EdTech': ['#D97706', '#FBBF24'],
  'Enterprise Software': ['#0891B2', '#22D3EE'],
  'Blockchain': ['#6D28D9', '#A78BFA'],
  'Clean Energy': ['#059669', '#34D399'],
  'Robotics': ['#BE185D', '#EC4899'],
  'Data Analytics': ['#0E7490', '#22D3EE'],
  'Cloud Infrastructure': ['#1D4ED8', '#60A5FA'],
  'DevOps': ['#7C2D12', '#FB923C'],
  'Mobile Development': ['#9333EA', '#C084FC']
};

// Function to generate a unique pattern for each project
function generateProjectImage(index, width = 1200, height = 800) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Get industry based on index
  const industries = Object.keys(colorThemes);
  const industry = industries[index % industries.length];
  const [primaryColor, secondaryColor] = colorThemes[industry];

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, primaryColor);
  gradient.addColorStop(1, secondaryColor);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add geometric patterns
  const patternType = index % 5;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.1;

  switch (patternType) {
    case 0: // Circles
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 100 + 50;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      break;
    case 1: // Grid
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }
      break;
    case 2: // Diagonal lines
      for (let i = -height; i < width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + height, height);
        ctx.stroke();
      }
      break;
    case 3: // Hexagons
      const hexSize = 60;
      for (let y = 0; y < height + hexSize; y += hexSize * 1.5) {
        for (let x = 0; x < width + hexSize; x += hexSize * 2) {
          drawHexagon(ctx, x, y, hexSize);
        }
      }
      break;
    case 4: // Waves
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x < width; x += 10) {
          ctx.lineTo(x, y + Math.sin(x * 0.02) * 20);
        }
        ctx.stroke();
      }
      break;
  }

  // Add project number
  ctx.globalAlpha = 0.8;
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 200px Inter';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`#${(index + 1).toString().padStart(3, '0')}`, width / 2, height / 2);

  return canvas;
}

function drawHexagon(ctx, x, y, size) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const xPos = x + size * Math.cos(angle);
    const yPos = y + size * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(xPos, yPos);
    } else {
      ctx.lineTo(xPos, yPos);
    }
  }
  ctx.closePath();
  ctx.stroke();
}

// Generate images for all 600 projects
console.log('Generating project images...');
for (let i = 0; i < 600; i++) {
  const canvas = generateProjectImage(i);
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(imagesDir, `project-${i + 1}.png`), buffer);
  if ((i + 1) % 50 === 0) {
    console.log(`Generated ${i + 1} images...`);
  }
}
console.log('Image generation complete!');
