/**
 * Generate /public/apple-touch-icon.png (180x180) from inline SVG.
 * Run: node scripts/generate-apple-touch-icon.mjs
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="36" fill="#faf7f2" />
  <text
    x="90"
    y="90"
    fill="#8b5a2b"
    font-family="'Apple SD Gothic Neo', 'Noto Serif KR', serif"
    font-size="124"
    font-weight="600"
    text-anchor="middle"
    dominant-baseline="central"
  >自</text>
</svg>`;

const outPath = path.resolve(__dirname, '..', 'public', 'apple-touch-icon.png');
await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`✓ wrote ${outPath}`);
