import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\seetharaman\\.gemini\\antigravity-ide\\brain\\79e2ce2e-ffe3-407c-8e34-146043d22b16';
const destDir = path.resolve('public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  'hero_manufacturing_1788959256729.jpg': 'hero_manufacturing.jpg',
  'notebook_stacks_1788959281326.jpg': 'notebook_stacks.jpg',
  'custom_branding_1788959317639.jpg': 'custom_branding.jpg',
  'office_registers_1788959342974.jpg': 'office_registers.jpg',
  'writing_pads_1788959369315.jpg': 'writing_pads.jpg',
  'factory_quality_1788959394337.jpg': 'factory_quality.jpg'
};

for (const [srcName, destName] of Object.entries(mapping)) {
  const src = path.join(srcDir, srcName);
  const dest = path.join(destDir, destName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${srcName} -> ${destName}`);
  } else {
    console.warn(`Source not found: ${src}`);
  }
}

// Current session assets
const currentSessionDir = 'C:\\Users\\seetharaman\\.gemini\\antigravity-ide\\brain\\e40aebe8-503e-49cf-b641-e1040823be1c\\.user_uploaded';
const modernImgSrc = path.join(currentSessionDir, 'media_1789309027996.png');
const modernImgDest = path.join(destDir, 'modern_manufacturing.png');
if (fs.existsSync(modernImgSrc) && !fs.existsSync(modernImgDest)) {
  fs.copyFileSync(modernImgSrc, modernImgDest);
  console.log('Copied modern_manufacturing.png');
}
