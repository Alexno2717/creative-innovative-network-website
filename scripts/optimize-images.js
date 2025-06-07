import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  'Banner Gradient - The Creative Innovative Network.png',
  'Banner Lightblue - The Creative Innovative Network.png',
  'Banner Yellow - The Creative Innovative Network.png',
  'Square Gradient - The Creative Innovative Network.png',
  'Square Lightblue The Creative Innovative Network.png',
  'Square Yellow - The Creative Innovative Network.png',
  'alex face.png',
  'arianna photo.jpeg'
];

const optimizeImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize(1920, null, { fit: 'inside' }) // Resize to max 1920px width
      .webp({ quality: 80 }) // Convert to WebP with 80% quality
      .toFile(outputPath);
    console.log(`Optimized: ${outputPath}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

async function main() {
  for (const image of images) {
    const inputPath = path.join(__dirname, '..', image);
    const outputPath = path.join(__dirname, '..', 'public', path.basename(image, path.extname(image)) + '.webp');
    await optimizeImage(inputPath, outputPath);
  }
}

main();
