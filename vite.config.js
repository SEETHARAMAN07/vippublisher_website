import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function syncUploadedImages() {
  const src = 'C:\\Users\\seetharaman\\.gemini\\antigravity-ide\\brain\\e40aebe8-503e-49cf-b641-e1040823be1c\\.user_uploaded\\media_1789309027996.png';
  const publicDir = path.resolve('public', 'images');
  const destRaw = path.join(publicDir, 'modern_manufacturing_raw.png');
  const destCropped = path.join(publicDir, 'modern_manufacturing.png');

  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  try {
    const buffer = fs.readFileSync(src);
    fs.writeFileSync(destRaw, buffer);

    // PNG parser and cropper to remove outer background padding
    let offset = 8;
    let width, height, bitDepth, colorType;
    const idatChunks = [];

    while (offset < buffer.length) {
      const length = buffer.readUInt32BE(offset);
      const type = buffer.toString('ascii', offset + 4, offset + 8);
      const data = buffer.subarray(offset + 8, offset + 8 + length);
      offset += 12 + length;

      if (type === 'IHDR') {
        width = data.readUInt32BE(0);
        height = data.readUInt32BE(4);
        bitDepth = data[8];
        colorType = data[9];
      } else if (type === 'IDAT') {
        idatChunks.push(data);
      } else if (type === 'IEND') {
        break;
      }
    }

    if (!idatChunks.length || !width || !height) {
      fs.copyFileSync(src, destCropped);
      return;
    }

    const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
    const bytesPerPixel = colorType === 6 ? 4 : (colorType === 2 ? 3 : 4);
    const stride = 1 + width * bytesPerPixel;
    const rawPixels = Buffer.alloc(width * height * bytesPerPixel);

    function paeth(a, b, c) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      if (pa <= pb && pa <= pc) return a;
      if (pb <= pc) return b;
      return c;
    }

    for (let y = 0; y < height; y++) {
      const filterType = decompressed[y * stride];
      const lineStart = y * stride + 1;
      const outLineStart = y * width * bytesPerPixel;

      for (let x = 0; x < width * bytesPerPixel; x++) {
        const rawByte = decompressed[lineStart + x];
        const left = x >= bytesPerPixel ? rawPixels[outLineStart + x - bytesPerPixel] : 0;
        const up = y > 0 ? rawPixels[(y - 1) * width * bytesPerPixel + x] : 0;
        const upLeft = (y > 0 && x >= bytesPerPixel) ? rawPixels[(y - 1) * width * bytesPerPixel + x - bytesPerPixel] : 0;

        let val = rawByte;
        if (filterType === 1) val = (rawByte + left) & 0xFF;
        else if (filterType === 2) val = (rawByte + up) & 0xFF;
        else if (filterType === 3) val = (rawByte + Math.floor((left + up) / 2)) & 0xFF;
        else if (filterType === 4) val = (rawByte + paeth(left, up, upLeft)) & 0xFF;
        rawPixels[outLineStart + x] = val;
      }
    }

    const getPixel = (x, y) => {
      const idx = (y * width + x) * bytesPerPixel;
      return { r: rawPixels[idx], g: rawPixels[idx + 1], b: rawPixels[idx + 2] };
    };

    // Exact detected card bounds from scanline analysis
    const minX = 28;
    const maxX = 444;
    const minY = 14;
    const maxY = 300;

    const cropW = maxX - minX + 1;
    const cropH = maxY - minY + 1;
    const cropStride = 1 + cropW * bytesPerPixel;
    const cropRaw = Buffer.alloc(cropH * cropStride);

    for (let y = 0; y < cropH; y++) {
      cropRaw[y * cropStride] = 0;
      const srcY = minY + y;
      for (let x = 0; x < cropW; x++) {
        const srcX = minX + x;
        const srcIdx = (srcY * width + srcX) * bytesPerPixel;
        const destIdx = y * cropStride + 1 + x * bytesPerPixel;
        for (let b = 0; b < bytesPerPixel; b++) {
          cropRaw[destIdx + b] = rawPixels[srcIdx + b];
        }
      }
    }

    const compressed = zlib.deflateSync(cropRaw);
    const crcTable = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
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
      for (let i = 0; i < typeAndData.length; i++) crc = (crc >>> 8) ^ crcTable[(crc ^ typeAndData[i]) & 0xFF];
      chunk.writeUInt32BE((crc ^ 0xFFFFFFFF) >>> 0, 8 + len);
      return chunk;
    }

    const ihdrData = Buffer.alloc(13);
    ihdrData.writeUInt32BE(cropW, 0);
    ihdrData.writeUInt32BE(cropH, 4);
    ihdrData[8] = 8;
    ihdrData[9] = colorType;
    ihdrData[10] = 0;
    ihdrData[11] = 0;
    ihdrData[12] = 0;

    const croppedPng = Buffer.concat([
      Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
      createChunk('IHDR', ihdrData),
      createChunk('IDAT', compressed),
      createChunk('IEND', Buffer.alloc(0))
    ]);

    fs.writeFileSync(destCropped, croppedPng);
    console.log(`[vite] Pixel-perfect cropped saved modern_manufacturing.png (${cropW}x${cropH})`);
  } catch (e) {
    console.warn('[vite] Crop fallback to direct copy:', e.message);
    fs.copyFileSync(src, destCropped);
  }
}

// Execute sync immediately on config load
syncUploadedImages();

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'modern-manufacturing-serve',
      configureServer(server) {
        syncUploadedImages();
        server.middlewares.use((req, res, next) => {
          if (req.url === '/images/modern_manufacturing.png' || req.url === '/images/modern_manufacturing_raw.png') {
            const fileName = req.url.split('/').pop();
            const filePath = path.resolve('public', 'images', fileName);
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', 'image/png');
              res.setHeader('Cache-Control', 'no-cache');
              res.end(fs.readFileSync(filePath));
              return;
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    host: true,
    fs: {
      allow: ['..', 'C:/Users/seetharaman/.gemini']
    }
  }
});

