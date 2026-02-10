const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

(async () => {
  try {
    const root = path.resolve(__dirname, '..');
    const imagesDir = path.join(root, 'images');
    const inputPath = path.join(imagesDir, 'profile-pic.jpg');
    const outputPath = path.join(imagesDir, 'blog-banner.png');

    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input image not found: ${inputPath}`);
    }

    const width = 1200;
    const height = 630;

    const background = await sharp(inputPath)
      .resize({ width, height, fit: 'cover', position: 'centre' })
      .blur(15)
      .toBuffer();

    const overlaySvg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#0f172a" stop-opacity="0.8" />
            <stop offset="60%" stop-color="#0f172a" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0.2" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${width}" height="${height}" fill="url(#grad)"/>
        <g font-family="Inter, Helvetica, Arial, sans-serif">
          <text x="60" y="220" font-size="68" font-weight="700" fill="#ffffff">Blog — Ousseini Oumarou</text>
          <text x="60" y="285" font-size="30" font-weight="600" fill="#93c5fd">Cloud · AI · Engineering</text>
          <text x="60" y="345" font-size="24" font-weight="500" fill="#e2e8f0">Insights from projects and practice</text>
          <text x="60" y="410" font-size="22" font-weight="500" fill="#cbd5e1">ousseinioumarou.com/blog/</text>
        </g>
      </svg>
    `;

    const overlayBuf = Buffer.from(overlaySvg);

    const banner = await sharp(background)
      .composite([{ input: overlayBuf }])
      .png({ quality: 90 })
      .toFile(outputPath);

    console.log(`Blog banner generated: ${outputPath}`);
  } catch (err) {
    console.error('Failed to generate blog banner:', err);
    process.exit(1);
  }
})();
