# Images Directory

This folder is for storing your portfolio images, including your profile picture.

## Adding Your Profile Picture

### Option 1: Local Image File (Recommended)
1. Save your profile picture in this folder (`images/`)
2. Use a common format like `.jpg`, `.jpeg`, or `.png`
3. Recommended size: 400x400 pixels or larger (square aspect ratio works best)
4. Update your `config.js` file:
   ```javascript
   profilePicture: "images/your-photo.jpg"
   ```

### Option 2: Online URL
1. Upload your photo to an image hosting service (Imgur, Google Photos, etc.)
2. Get the direct image URL
3. Update your `config.js` file:
   ```javascript
   profilePicture: "https://example.com/your-photo.jpg"
   ```

## Image Guidelines
- **Format**: JPG, PNG, or WebP
- **Size**: 400x400 pixels minimum (larger is fine)
- **Aspect Ratio**: Square (1:1) works best for the circular profile display
- **File Size**: Keep under 2MB for fast loading
- **Quality**: Use high-quality images for professional appearance

## Example Files
- `profile.jpg` - Your main profile picture
- `profile.png` - Alternative format
- `headshot.jpg` - Professional headshot

## Notes
- The website will automatically crop and resize your image to fit the circular profile area
- If no profile picture is set, a default user icon will be displayed
- Make sure your image URL is publicly accessible if using an online URL

