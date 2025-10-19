# Background Image Setup

Your hero section is now configured to use a custom background image. Here's how to set it up:

## 🖼️ Adding Your Background Image

### Step 1: Save the Image
1. Save your cloud and AI background image in the `images/` folder
2. Name it exactly: `cloud-ai-background.jpg`
3. Recommended size: 1920x1080 pixels or larger
4. Supported formats: JPG, PNG, WebP

### Step 2: File Location
```
images/
└── cloud-ai-background.jpg  ← Your background image goes here
```

### Step 3: Alternative Names
If you want to use a different filename, update the CSS:
```css
background: url('images/YOUR_IMAGE_NAME.jpg') no-repeat center center;
```

## 🎨 Current Styling Features

### Background Effects:
- **Full coverage**: Image covers the entire hero section
- **Dark overlay**: Semi-transparent black gradient for text readability
- **Proper scaling**: Image scales responsively across devices

### Text Enhancements:
- **White text**: High contrast against the background
- **Text shadows**: Dark shadows for better readability
- **Proper layering**: Text appears above the background and overlay

### Avatar Styling:
- **Enhanced glow**: Blue glow effect around profile picture
- **Subtle border**: Semi-transparent white border
- **Improved shadows**: Better depth and visibility

## 🔧 Customization Options

### Change Overlay Opacity:
```css
background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,  /* Adjust these values */
    rgba(0, 0, 0, 0.5) 50%, /* 0.0 = transparent, 1.0 = opaque */
    rgba(0, 0, 0, 0.8) 100%
);
```

### Change Text Shadow Intensity:
```css
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Adjust last value */
```

### Remove Background Image:
```css
background: linear-gradient(135deg, var(--background-color) 0%, var(--surface-color) 100%);
```

## 📱 Responsive Behavior

The background image will:
- ✅ Scale properly on mobile devices
- ✅ Maintain aspect ratio
- ✅ Center itself on all screen sizes
- ✅ Provide good text readability

## 🎯 Result

Your hero section now features:
- **Professional background**: Futuristic cloud and AI theme
- **Excellent readability**: White text with dark shadows
- **Modern aesthetics**: Glowing effects and proper layering
- **Responsive design**: Works on all devices

Once you add your `cloud-ai-background.jpg` image to the `images/` folder, your website will display the stunning background with perfectly readable text!

