# Contact Form Setup Guide

Your contact form is now configured to send emails to **meandyougtn@gmail.com**.

## 🚀 Quick Setup (Required)

### Step 1: Set up Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint URL

### Step 2: Update Configuration
1. Open `config.js`
2. Replace the `submitUrl` with your actual Formspree endpoint:
   ```javascript
   submitUrl: "https://formspree.io/f/YOUR_FORM_ID",
   ```

### Step 3: Test the Form
1. Open your website
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email (meandyougtn@gmail.com) for the message

## 📧 What Happens When Someone Contacts You

1. **Visitor fills out the form** on your website
2. **Formspree processes** the submission
3. **Email is sent** to meandyougtn@gmail.com with:
   - Sender's name and email
   - Subject line: "Portfolio Contact: [their subject]"
   - Their message
4. **You can reply directly** to the email to respond to them

## 🔧 Alternative Email Services

If you prefer other services:

### Netlify Forms (if hosting on Netlify)
```javascript
submitUrl: "https://your-site.netlify.app/contact"
```

### EmailJS (client-side)
```javascript
submitUrl: "emailjs_endpoint"
```

### Custom Backend
```javascript
submitUrl: "https://your-backend.com/api/contact"
```

## 🛠️ Troubleshooting

### Form Not Working?
- Check your Formspree endpoint URL
- Ensure your Formspree account is verified
- Check browser console for error messages

### Not Receiving Emails?
- Check spam folder
- Verify Formspree settings
- Ensure email address is correct in config.js

### Want to Change Email Address?
Update both locations in `config.js`:
1. `personalInfo.email`
2. `contact.email`

## 📝 Form Features

Your contact form includes:
- ✅ Name validation
- ✅ Email validation  
- ✅ Subject validation
- ✅ Message validation
- ✅ Loading state ("Sending...")
- ✅ Success/error messages
- ✅ Form reset after successful submission
- ✅ Direct reply capability

## 🎯 Next Steps

1. Set up your Formspree account
2. Update the submitUrl in config.js
3. Test the form
4. Your contact form will be fully functional!

---

**Current Configuration:**
- Email: meandyougtn@gmail.com
- Form Endpoint: [Update with your Formspree URL]
- Status: Ready for Formspree setup

