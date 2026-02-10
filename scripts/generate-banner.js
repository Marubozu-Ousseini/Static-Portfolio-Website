const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

(async () => {
  try {
    const root = path.resolve(__dirname, '..');
    const imagesDir = path.join(root, 'images');
    const inputPath = path.join(imagesDir, 'profile pic.jpg');
    const outputPath = path.join(imagesDir, 'social-banner.png');

    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input image not found: ${inputPath}`);
    }

    const width = 1200;
    const height = 630;

    // Prepare background from profile image: cover, blur
    const background = await sharp(inputPath)
      .resize({ width, height, fit: 'cover', position: 'centre' })
      .blur(15)
      .toBuffer();

    // Semi-transparent dark overlay
    const overlaySvg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#0f172a" stop-opacity="0.75" />
            <stop offset="60%" stop-color="#0f172a" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0.15" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${width}" height="${height}" fill="url(#grad)"/>
        <g font-family="Inter, Helvetica, Arial, sans-serif">
          <text x="60" y="230" font-size="72" font-weight="700" fill="#ffffff">Ousseini Oumarou</text>
          <text x="60" y="300" font-size="34" font-weight="600" fill="#93c5fd">Cloud &amp; AI Consultant</text>
          <text x="60" y="360" font-size="26" font-weight="500" fill="#e2e8f0">AWS · Azure · Machine Learning · DevOps</text>
          <text x="60" y="430" font-size="24" font-weight="500" fill="#cbd5e1">ousseinioumarou.com</text>
        </g>
      </svg>
    `;

    const overlayBuf = Buffer.from(overlaySvg);

    // Create circular avatar
    const avatarSize = 420;
    const avatar = await sharp(inputPath)
      .resize(avatarSize, avatarSize, { fit: 'cover', position: 'centre' })
      .composite([
        {
          input: Buffer.from(
            `<svg width="${avatarSize}" height="${avatarSize}" xmlns="http://www.w3.org/2000/svg">
              <circle cx="${avatarSize / 2}" cy="${avatarSize / 2}" r="${avatarSize / 2}" fill="#000" />
            </svg>`
          ),
          blend: 'dest-in'
        }
      ])
      .png()
      .toBuffer();

    const avatarX = width - avatarSize - 60;
    const avatarY = Math.round((height - avatarSize) / 2);

    // Compose final banner
    const banner = await sharp(background)
      .composite([
        { input: overlayBuf },
        { input: avatar, left: avatarX, top: avatarY },
      ])
      .png({ quality: 90 })
      .toFile(outputPath);

    console.log(`Social banner generated: ${outputPath}`);
  } catch (err) {
    console.error('Failed to generate banner:', err);
    process.exit(1);
  }
})();
