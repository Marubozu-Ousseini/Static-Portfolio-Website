# Cloud & AI Consultant Portfolio Website

A modern, responsive portfolio website for Cloud and AI consultants featuring dynamic Credly certification integration.

## Features

- **Dynamic Credly Integration**: Automatically fetches and displays AWS certifications from your Credly profile
- **Modern Design**: Clean, dark-mode friendly interface with professional styling
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Easy Customization**: All content managed through a simple configuration file
- **No Framework Dependencies**: Built with pure HTML, CSS, and JavaScript for universal hosting

## Quick Start

1. **Update Configuration**:
   - Open `config.js`
   - Replace `YOUR_CREDLY_USER_ID` with your actual Credly user ID
   - Update personal information, projects, and skills
   - Save the file

2. **Find Your Credly User ID**:
   - Visit your Credly profile: `https://www.credly.com/users/YOUR_USER_ID/badges`
   - Copy the user ID from the URL
   - Paste it in `config.js`

3. **Host Your Website**:
   - Upload all files to your web hosting service
   - Or open `index.html` in a web browser for local testing

## File Structure

```
portfolio-website/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling
├── app.js             # JavaScript functionality
├── config.js          # Editable content configuration
└── README.md          # This file
```

## Customization Guide

### Personal Information
Edit the `personalInfo` object in `config.js`:
```javascript
personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other fields
}
```

### Projects
Add or modify projects in the `projects` array:
```javascript
projects: [
    {
        title: "Project Name",
        description: "Project description...",
        technologies: ["AWS", "Python", "Docker"],
        links: {
            live: "https://project-url.com",
            github: "https://github.com/username/project"
        }
    }
]
```

### Skills
Update the `skills` object to reflect your expertise:
```javascript
skills: {
    "Cloud Platforms": [
        { name: "Amazon Web Services (AWS)", icon: "fab fa-aws" },
        // ... more skills
    ]
}
```

### Credly Integration
Configure your Credly profile:
```javascript
credly: {
    userId: "your-credly-user-id",
    filterCertifications: false, // Set to true to filter specific certs
    allowedCertifications: ["AWS Certified Solutions Architect"]
}
```

## Technical Details

### Credly Integration
- Uses Credly's public JSON API: `https://www.credly.com/users/{userId}/badges.json`
- Implements CORS proxy (`https://api.allorigins.win`) for cross-origin requests
- Displays badge images, names, issuance dates, and public URLs

### Responsive Design
- Mobile-first approach with CSS Grid and Flexbox
- Breakpoints: 768px (tablet), 480px (mobile)
- Smooth animations and transitions

### Performance Features
- Lazy loading for images
- Intersection Observer for scroll animations
- Debounced scroll events
- Optimized asset loading

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Hosting Options

This static website can be hosted on any web hosting service:

- **GitHub Pages**: Free hosting for public repositories
- **Netlify**: Free tier with form handling and CI/CD
- **Vercel**: Free hosting with excellent performance
- **AWS S3**: Static website hosting with CloudFront
- **Traditional Web Hosting**: Any provider supporting static files

## Troubleshooting

### Certifications Not Loading
1. Verify your Credly User ID is correct
2. Check that your Credly profile is public
3. Ensure you have an active internet connection
4. Check browser console for error messages

### Styling Issues
1. Clear browser cache
2. Verify all CSS files are loading correctly
3. Check for JavaScript errors in console

### Form Not Working
The contact form is currently static. For production use:
1. Implement a backend service (Node.js, Python, etc.)
2. Use a service like Formspree or Netlify Forms
3. Configure the `submitUrl` in `config.js`

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify all configuration values are correct
3. Ensure all files are uploaded correctly
4. Test with a different browser or device

## License

This project is open source and available under the MIT License.

# Static-Portfolio-Website
# Static-Portfolio-Website
# Static-Portfolio-Website
