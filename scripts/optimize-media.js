import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { execSync } from 'child_process';

const PUBLIC_DIR = path.resolve('public');
const SIZES = [320, 480, 640, 768, 1024, 1280, 1600];

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function processImages() {
  const allFiles = getAllFiles(PUBLIC_DIR);
  const imageFiles = allFiles.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    // Exclude existing generated webp/avif responsive files and tmp files
    if (f.includes('_w') && (ext === '.webp' || ext === '.avif' || ext === '.jpg' || ext === '.jpeg' || ext === '.png')) return false;
    if (f.includes('_tmp')) return false;
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  console.log(`Found ${imageFiles.length} image files to process...`);

  for (const imgPath of imageFiles) {
    const ext = path.extname(imgPath);
    const dir = path.dirname(imgPath);
    const baseName = path.basename(imgPath, ext);

    console.log(`Processing image: ${path.relative(PUBLIC_DIR, imgPath)}`);

    try {
      // 1. Generate full-res AVIF & WebP
      const avifPath = path.join(dir, `${baseName}.avif`);
      const webpPath = path.join(dir, `${baseName}.webp`);

      await sharp(imgPath)
        .avif({ quality: 65, effort: 4 })
        .toFile(avifPath);

      await sharp(imgPath)
        .webp({ quality: 75, effort: 4 })
        .toFile(webpPath);

      // 2. Generate all responsive width variants for AVIF, WebP, and JPG (without upscaling pixels)
      for (const w of SIZES) {
        const avifW = path.join(dir, `${baseName}_w${w}.avif`);
        const webpW = path.join(dir, `${baseName}_w${w}.webp`);
        const jpgW = path.join(dir, `${baseName}_w${w}${ext}`);

        await sharp(imgPath)
          .resize({ width: w, withoutEnlargement: true })
          .avif({ quality: 65, effort: 4 })
          .toFile(avifW);

        await sharp(imgPath)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: 75, effort: 4 })
          .toFile(webpW);

        await sharp(imgPath)
          .resize({ width: w, withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true, mozjpeg: true })
          .toFile(jpgW);
      }

      // Re-compress original image file in-place with progressive MozJPEG / PNG compression
      if (ext === '.jpg' || ext === '.jpeg') {
        const tmpJpg = path.join(dir, `${baseName}_tmp${ext}`);
        await sharp(imgPath)
          .jpeg({ quality: 80, progressive: true, mozjpeg: true })
          .toFile(tmpJpg);
        fs.renameSync(tmpJpg, imgPath);
      } else if (ext === '.png') {
        const tmpPng = path.join(dir, `${baseName}_tmp${ext}`);
        await sharp(imgPath)
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(tmpPng);
        fs.renameSync(tmpPng, imgPath);
      }

    } catch (err) {
      console.error(`Error processing image ${imgPath}:`, err);
    }
  }
}

async function main() {
  console.log('Starting Image Processing...');
  await processImages();
  console.log('Image Processing Finished Successfully!');
}

main();
