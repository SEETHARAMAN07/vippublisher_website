import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const inputPath = 'C:\\Users\\seetharaman\\.gemini\\antigravity-ide\\brain\\e40aebe8-503e-49cf-b641-e1040823be1c\\.user_uploaded\\media_1789309027996.png';
const publicDir = path.resolve('public', 'images');
const rawDest = path.join(publicDir, 'modern_manufacturing_raw.png');
const croppedDest = path.join(publicDir, 'modern_manufacturing.png');

console.log('Reading input file:', inputPath);
const buffer = fs.readFileSync(inputPath);
fs.writeFileSync(rawDest, buffer);
console.log('Saved raw image to:', rawDest);

// Simple PNG decoder for RGBA
function parsePNG(buf) {
  let offset = 8; // skip PNG signature
  let width, height, bitDepth, colorType, compression, filter, interlace;
  const idatChunks = [];

  while (offset < buf.length) {
    const length = buf.readUInt32BE(offset);
    const type = buf.toString('ascii', offset + 4, offset + 8);
    const data = buf.subarray(offset + 8, offset + 8 + length);
    offset += 12 + length;

    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      compression = data[10];
      filter = data[11];
      interlace = data[12];
    } else if (type === 'IDAT') {
      idatChunks.push(data);
    } else if (type === 'IEND') {
      break;
    }
  }

  console.log(`PNG Info: ${width}x${height}, bitDepth: ${bitDepth}, colorType: ${colorType}`);
  return { width, height, bitDepth, colorType, idat: Buffer.concat(idatChunks) };
}

try {
  const png = parsePNG(buffer);
  const decompressed = zlib.inflateSync(png.idat);
  console.log('Decompressed size:', decompressed.length);

  // Bytes per pixel
  let bytesPerPixel = 4;
  if (png.colorType === 2) bytesPerPixel = 3; // RGB
  else if (png.colorType === 6) bytesPerPixel = 4; // RGBA

  const stride = 1 + png.width * bytesPerPixel;
  console.log('Stride:', stride, 'Expected size:', stride * png.height);

  // Unfilter scanlines to get raw pixels
  const rawPixels = Buffer.alloc(png.width * png.height * bytesPerPixel);
  
  function paethPredictor(a, b, c) {
    const p = a + b - c;
    const pa = Math.abs(p - a);
    const pb = Math.abs(p - b);
    const pc = Math.abs(p - c);
    if (pa <= pb && pa <= pc) return a;
    if (pb <= pc) return b;
    return c;
  }

  for (let y = 0; y < png.height; y++) {
    const filterType = decompressed[y * stride];
    const lineStart = y * stride + 1;
    const outLineStart = y * png.width * bytesPerPixel;

    for (let x = 0; x < png.width * bytesPerPixel; x++) {
      const rawByte = decompressed[lineStart + x];
      const left = x >= bytesPerPixel ? rawPixels[outLineStart + x - bytesPerPixel] : 0;
      const up = y > 0 ? rawPixels[(y - 1) * png.width * bytesPerPixel + x] : 0;
      const upLeft = (y > 0 && x >= bytesPerPixel) ? rawPixels[(y - 1) * png.width * bytesPerPixel + x - bytesPerPixel] : 0;

      let val = rawByte;
      if (filterType === 0) {
        val = rawByte;
      } else if (filterType === 1) {
        val = (rawByte + left) & 0xFF;
      } else if (filterType === 2) {
        val = (rawByte + up) & 0xFF;
      } else if (filterType === 3) {
        val = (rawByte + Math.floor((left + up) / 2)) & 0xFF;
      } else if (filterType === 4) {
        val = (rawByte + paethPredictor(left, up, upLeft)) & 0xFF;
      }
      rawPixels[outLineStart + x] = val;
    }
  }

  // Find outer margin / card boundaries
  const getPixel = (x, y) => {
    const idx = (y * png.width + x) * bytesPerPixel;
    return {
      r: rawPixels[idx],
      g: rawPixels[idx + 1],
      b: rawPixels[idx + 2],
      a: bytesPerPixel === 4 ? rawPixels[idx + 3] : 255
    };
  };

  const bgTopLeft = getPixel(2, 2);
  console.log('Background sample at (2,2):', bgTopLeft);

  function isBg(p) {
    const dr = Math.abs(p.r - bgTopLeft.r);
    const dg = Math.abs(p.g - bgTopLeft.g);
    const db = Math.abs(p.b - bgTopLeft.b);
    return dr < 18 && dg < 18 && db < 18;
  }

  let minX = png.width, maxX = 0, minY = png.height, maxY = 0;
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const p = getPixel(x, y);
      if (!isBg(p)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Detected card bounds: minX=${minX}, maxX=${maxX}, minY=${minY}, maxY=${maxY}`);
  console.log(`Card dimensions: ${maxX - minX + 1} x ${maxY - minY + 1}`);

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  const cropStride = 1 + cropW * bytesPerPixel;
  const cropRaw = Buffer.alloc(cropH * cropStride);

  for (let y = 0; y < cropH; y++) {
    cropRaw[y * cropStride] = 0;
    const srcY = minY + y;
    for (let x = 0; x < cropW; x++) {
      const srcX = minX + x;
      const srcIdx = (srcY * png.width + srcX) * bytesPerPixel;
      const destIdx = y * cropStride + 1 + x * bytesPerPixel;
      cropRaw[destIdx] = rawPixels[srcIdx];
      cropRaw[destIdx + 1] = rawPixels[srcIdx + 1];
      cropRaw[destIdx + 2] = rawPixels[srcIdx + 2];
      if (bytesPerPixel === 4) {
        cropRaw[destIdx + 3] = rawPixels[srcIdx + 3];
      }
    }
  }

  const compressed = zlib.deflateSync(cropRaw);

  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    crcTable[n] = c;
  }

  function createChunk(type, data) {
    const len = data.length;
    const chunk = Buffer.alloc(12 + len);
    chunk.writeUInt32BE(len, 0);
    chunk.write(type, 4, 4, 'ascii');
    data.copy(chunk, 8);

    let crc = 0xFFFFFFFF;
    const typeAndData = chunk.subarray(4, 8 + len);
    for (let i = 0; i < typeAndData.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ typeAndData[i]) & 0xFF];
    }
    crc = (crc ^ 0xFFFFFFFF) >>> 0;
    chunk.writeUInt32BE(crc, 8 + len);
    return chunk;
  }

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(cropW, 0);
  ihdrData.writeUInt32BE(cropH, 4);
  ihdrData[8] = 8;
  ihdrData[9] = png.colorType;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const ihdrChunk = createChunk('IHDR', ihdrData);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  const pngHeader = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const croppedPngBuffer = Buffer.concat([pngHeader, ihdrChunk, idatChunk, iendChunk]);

  fs.writeFileSync(croppedDest, croppedPngBuffer);
  console.log(`Successfully saved cropped image to: ${croppedDest} (${cropW}x${cropH})`);
} catch (err) {
  console.error('Error cropping image:', err);
}
