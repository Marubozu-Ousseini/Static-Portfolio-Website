const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

(async () => {
  try {
    const root = path.resolve(__dirname, '..');
    const imagesDir = path.join(root, 'images');
    const inputPath = path.join(imagesDir, 'profile-pic.jpg');
    const outputs = [
      { file: 'favicon-32.png', size: 32 },
      { file: 'favicon-192.png', size: 192 },
      { file: 'apple-touch-icon.png', size: 180 }
    ];

    if (!fs.existsSync(inputPath)) throw new Error(`Input image not found: ${inputPath}`);

    for (const { file, size } of outputs) {
      const outPath = path.join(imagesDir, file);
      await sharp(inputPath)
        .resize(size, size, { fit: 'cover' })
        .png()
        .toFile(outPath);
      console.log(`Generated ${file}`);
    }
  } catch (err) {
    console.error('Failed to generate favicons:', err);
    process.exit(1);
  }
})();
