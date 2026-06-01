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
  <rect width="1200" height="630" fill="#faf7f2" />

  <text
    x="600"
    y="320"
    fill="#1c1917"
    font-family="'Noto Serif KR', 'Apple SD Gothic Neo', serif"
    font-size="380"
    font-weight="700"
    text-anchor="middle"
    dominant-baseline="central"
    letter-spacing="-12"
    opacity="0.92"
  >自好久</text>

  <text x="80" y="100" fill="#57534e" font-family="ui-monospace, 'SF Mono', Menlo, monospace" font-size="22" font-weight="500">zahoku-studio</text>

  <text x="80" y="560" fill="#1c1917" font-family="-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif" font-size="32" font-weight="600">Self. Love. Endure.</text>
  <text x="80" y="595" fill="#78716c" font-family="ui-monospace, 'SF Mono', Menlo, monospace" font-size="18" font-weight="400">No category. Made to last.</text>

  <text x="1120" y="100" fill="#78716c" font-family="ui-monospace, 'SF Mono', Menlo, monospace" font-size="18" text-anchor="end">zahoku.com</text>
</svg>`;

const outPath = path.resolve(__dirname, '..', 'public', 'og-image.png');
await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`✓ wrote ${outPath}`);
