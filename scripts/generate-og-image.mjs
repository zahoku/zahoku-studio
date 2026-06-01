/**
 * Generate /public/og-image.png from inline SVG.
 * Run: node scripts/generate-og-image.mjs
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#faf7f2" />
      <stop offset="100%" stop-color="#f0ebe0" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />

  <text x="80" y="120" fill="#78716c" font-family="-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif" font-size="22" letter-spacing="6" font-weight="500">ZAHOKU STUDIO</text>

  <text x="80" y="320" fill="#1c1917" font-family="-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif" font-size="96" font-weight="700" letter-spacing="-2">자호쿠 스튜디오</text>

  <text x="80" y="400" fill="#57534e" font-family="-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif" font-size="38" font-weight="400">스스로 좋아하는 것을 오래도록.</text>

  <g transform="translate(820, 200)">
    <text x="0" y="120" fill="#8b5a2b" font-family="'Apple SD Gothic Neo', serif" font-size="180" font-weight="600">自</text>
    <text x="100" y="220" fill="#8b5a2b" font-family="'Apple SD Gothic Neo', serif" font-size="180" font-weight="600">好</text>
    <text x="200" y="320" fill="#8b5a2b" font-family="'Apple SD Gothic Neo', serif" font-size="180" font-weight="600">久</text>
  </g>

  <text x="80" y="570" fill="#78716c" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="22" font-weight="500">zahoku.com</text>
</svg>`;

const outPath = path.resolve(__dirname, '..', 'public', 'og-image.png');
await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`✓ wrote ${outPath}`);
