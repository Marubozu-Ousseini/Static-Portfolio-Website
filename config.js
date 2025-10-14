/**
 * Portfolio Website Configuration
 * 
 * This file contains all the editable content for your portfolio website.
 * Simply update the values below to customize your site without touching the HTML or CSS.
 * 
 * Instructions:
 * 1. Replace all placeholder values with your actual information
 * 2. Update the credlyUserId with your actual Credly user ID (found in your Credly profile URL)
 * 3. Add/remove projects, skills, and other content as needed
 * 4. Save the file and refresh your website to see changes
 */

const siteContent = {
    // Personal Information
    personalInfo: {
        name: "Ousseini Oumarou",
        title: "Cloud & AI Consultant",
        subtitle: "Transforming businesses with cutting-edge cloud solutions and AI technologies",
        description: "I am a highly motivated Cloud and AI Consultant, uniquely positioned with a strong foundation in both Cloud computing and Artificial Intelligence. My expertise is validated by industry leading certifications. This robust skill set, combined with my background in Cryptocurrency, Web3, and Blockchain, allows me to architect and deploy innovative, scalable, and secure cloud-native solutions, with a particular focus on leveraging advanced AI capabilities to drive transformative business outcomes. I am dedicated to pushing the boundaries of technology to create intelligent systems that redefine possibilities.",
        email: "ougafa@gmail.com",
        phone: "+237 6 9995 7878",
        linkedin: "linkedin.com/in/marubozu",
        github: "github.com/Marubozu-Ousseini",
        twitter: "twitter.com/O'Marubozu Sensei",
        
        // Profile Picture Configuration
        // Option 1: Use a URL to your profile picture
        profilePicture: "", // Replace with your image URL, e.g., "https://example.com/your-photo.jpg"
        
        // Option 2: Use a local image file
        // Create a folder called "images" in your website directory and add your photo
        // Then set profilePicture to: "images/your-photo.jpg"
        
        // Option 3: Leave empty to use the default icon
        // profilePicture: "" // This will show the default user icon
    },

    // Credly Integration Settings
    credly: {
        // Replace 'YOUR_CREDLY_USER_ID' with your actual Credly user ID
        // You can find this in your Credly profile URL: https://www.credly.com/users/YOUR_USER_ID/badges
        userId: "ousseini-oumarou.fa8d6a81",
        
        // Optional: Set to true to show only specific certifications by their names
        filterCertifications: false,
        allowedCertifications: [
            "AWS Certified Solutions Architect",
            "AWS Certified Developer",
            "AWS Certified SysOps Administrator"
        ],
        
        // Fallback: Manual certifications if API fails
        // Set useManualCertifications to true if Credly API is not working
        useManualCertifications: true,
        manualCertifications: [
            {
                id: "AWS-SAA",
                name: "AWS Certified Solutions Architect - Associate",
                image_url: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
                issued_at_date: "2025-07-31",
                public_url: "https://www.credly.com/badges/69936fdc-8dfc-4c68-9f95-bdd2ed0ff3e8/public_url",
                description: "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant."
            },
            {
                id: "AWS-AIF",
                name: "AWS Certified AI Practitioner",
                image_url: "https://images.credly.com/size/340x340/images/834f2c8d-2d2c-4ce7-9580-02a351c31626/image.png",
                issued_at_date: "2025-02-14",
                public_url: "https://www.credly.com/badges/95f2e056-98fa-4293-b452-87eda0b367fb/public_url",
                description: "Earners of this badge understand AI, ML, and generative AI concepts, methods, and strategies in general and on AWS. They can determine the correct types of AI/ML technologies to apply to specific use cases and know how to use AI, ML, and generative AI technologies responsibly. They are familiar with the AWS Global Infrastructure, core AWS services and use cases, AWS service pricing models, and the AWS shared responsibility model for security and compliance in the AWS Cloud."
            },
            {
                id: "AWS-CLF",
                name: "AWS Certified Cloud Practitioner", 
                image_url: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
                issued_at_date: "2025-01-27",
                public_url: "https://www.credly.com/badges/3901c884-0964-4de6-ae88-d6ed1d568ec8/public_url",
                description: "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects."
            }
        ]
    },

    // About Section Statistics
    stats: {
        yearsExperience: "2+",
        projectsCompleted: "50+",
        clientsServed: "10+"
    },

    // Projects Section
    projects: [
        {
            id: 1,
            title: "Cloud Migration Strategy",
            description: "Led the migration of a legacy on-premises system to AWS, reducing infrastructure costs by 40% and improving scalability. Implemented automated CI/CD pipelines and containerized applications using Docker and Kubernetes.",
            technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
            image: "cloud-migration", // Will use default icon if not specified
            links: {
                live: "#", // Replace with actual project URL
                github: "#" // Replace with GitHub repository URL
            }
        },
        {
            id: 2,
            title: "AI-Powered Analytics Platform",
            description: "Developed a machine learning platform that processes real-time data streams to provide predictive analytics for e-commerce businesses. Built using Python, TensorFlow, and AWS SageMaker.",
            technologies: ["Python", "TensorFlow", "AWS SageMaker", "Apache Kafka", "React"],
            image: "ai-analytics",
            links: {
                live: "#",
                github: "#"
            }
        },
        {
            id: 3,
            title: "Serverless Data Pipeline",
            description: "Architected and implemented a serverless data pipeline using AWS Lambda, S3, and DynamoDB for processing and analyzing customer behavior data. Reduced processing time by 60%.",
            technologies: ["AWS Lambda", "S3", "DynamoDB", "Python", "CloudFormation"],
            image: "serverless-pipeline",
            links: {
                live: "#",
                github: "#"
            }
        },
        {
            id: 4,
            title: "Multi-Cloud Disaster Recovery",
            description: "Designed and implemented a comprehensive disaster recovery solution spanning AWS, Azure, and Google Cloud Platform, ensuring 99.9% uptime for critical business applications.",
            technologies: ["AWS", "Azure", "GCP", "Terraform", "Ansible"],
            image: "disaster-recovery",
            links: {
                live: "#",
                github: "#"
            }
        }
    ],

    // Skills Section
    skills: {
        "Cloud Platforms": [
            { name: "Amazon Web Services (AWS)", icon: "fab fa-aws" },
            { name: "Microsoft Azure", icon: "fab fa-microsoft" },
            { name: "Google Cloud Platform", icon: "fab fa-google" },
        ],
        "Programming Languages": [
            { name: "Python", icon: "fab fa-python" },
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "Java", icon: "fab fa-java" }
        ],
        "DevOps & Automation": [
            { name: "Docker", icon: "fab fa-docker" },
            { name: "GitHub", icon: "fab fa-github" },
            { name: "Kubernetes", icon: "fas fa-cube" },
            { name: "Terraform", icon: "fas fa-mountain" },
            { name: "Jenkins", icon: "fas fa-tools" }
        ],
        "AI & Machine Learning": [
            { name: "n8n", icon: "fas fa-brain" },
            { name: "AWS SageMaker", icon: "fas fa-robot" },
            { name: "TensorFlow", icon: "fas fa-brain" },
            { name: "PyTorch", icon: "fas fa-brain" },
        ],
        "Databases": [
            { name: "RDS", icon: "fas fa-database" },
            { name: "Neptune", icon: "fas fa-database" },
            { name: "Redis", icon: "fas fa-memory" },
            { name: "S3", icon: "fas fa-database" },
            { name: "DynamoDB", icon: "fas fa-table" }
        ]
    },

    // Contact Form Configuration
    contact: {
        // Note: This is a static form. For production use, you'll need to implement
        // a backend service or use a service like Formspree, Netlify Forms, etc.
        submitUrl: "#", // Replace with your form submission endpoint
        successMessage: "Thank you for your message! I'll get back to you soon.",
        errorMessage: "Sorry, there was an error sending your message. Please try again."
    },

    // Footer Content
    footer: {
        copyright: "© 2025 Ousseini Oumarou. All rights reserved.",
        socialLinks: [
            { platform: "github", url: "#", icon: "fab fa-github" },
            { platform: "linkedin", url: "#", icon: "fab fa-linkedin" },
            { platform: "twitter", url: "#", icon: "fab fa-twitter" }
        ]
    },

    // SEO and Meta Information
    seo: {
        title: "Cloud & AI Consultant - Professional Portfolio",
        description: "Experienced Cloud and AI consultant specializing in AWS, Azure, machine learning, and DevOps. Helping businesses transform with cutting-edge technology solutions.",
        keywords: "cloud consultant, AI consultant, AWS certified, machine learning, cloud architecture",
        author: "Ousseini Oumarou"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteContent;
}

/**
 * USAGE INSTRUCTIONS:
 * 
 * 1. PERSONAL INFORMATION:
 *    - Update all fields in personalInfo with your actual details
 *    - Replace placeholder URLs with your real social media profiles
 * 
 * 2. CREDLY INTEGRATION:
 *    - Find your Credly user ID from your profile URL
 *    - Replace 'YOUR_CREDLY_USER_ID' with your actual user ID
 *    - Optionally filter certifications by setting filterCertifications to true
 *    - Add certification names to allowedCertifications array
 * 
 * 3. PROJECTS:
 *    - Add your own projects to the projects array
 *    - Update descriptions, technologies, and links
 *    - Remove or add projects as needed
 * 
 * 4. SKILLS:
 *    - Modify the skills object to reflect your expertise
 *    - Add or remove skill categories
 *    - Update individual skills and their icons
 * 
 * 5. CONTACT:
 *    - Update contact information
 *    - Configure form submission (requires backend setup)
 * 
 * 6. SOCIAL LINKS:
 *    - Update footer social links with your actual profiles
 * 
 * After making changes, save this file and refresh your website to see updates.
 */
