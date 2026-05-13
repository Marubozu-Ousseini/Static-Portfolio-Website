

window.siteContent = {
    // Personal Information
    personalInfo: {
        name: "OUSSEINI OUMAROU",
        title: "AI & Cloud Consultant",
        subtitle: "I help teams build AI and cloud systems that are compliant, cost-efficient, and ready for real business use.",
        heroPurpose: "Remote worldwide. Soon on the ground in the UAE and GCC, where AI adoption, sovereign cloud, and PDPL compliance are reshaping how companies operate.",
        description: "I work with engineering teams and business owners to assess AI readiness, fix data foundations, design compliant cloud architecture, reduce cost, and deploy AI systems with clear controls. My work is remote-first worldwide, with a growing focus on UAE and GCC consulting.",
        email: "contact@ousseinioumarou.com",
        phone: "+1(917) 672-6792",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/marubozu",
            github: "https://github.com/Marubozu-Ousseini",
            twitter: "https://twitter.com/O%27Marubozu%20Sensei"
        },
            
        // Profile Picture Configuration
    // Option 1: Use a URL to your profile picture
    // Use the local image for best performance and reliability
    profilePicture: "https://ousseinioumarou.com/images/profile-pic.jpg", // Use your live-domain image for indexing
        
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
                id: "BESA-Agentic-AI-AWS",
                name: "Agentic AI on AWS",
                image_url: "https://besa.techexpert.io/_next/image?url=https%3A%2F%2Fcontent.techcreator.io%2Fbadge_image%2F670-badge_image-8d9c430f-ac3e-43e2-bc35-0590f3d25d50.png&w=640&q=75",
                issued_at_date: "2026-03-28",
                public_url: "https://besa.techexpert.io/certification/marubozu-ousseini/agentic-ai-on-aws-besa-398323",
                description: "BeSA Cloud Academy credential focused on foundations of AI agents, Agentic AI on AWS, Amazon Bedrock AgentCore, Model Context Protocol, Kiro, and the modern Solutions Architect mindset for AI-era discovery, validation, and architecture."
            },
            {
                id: "AWS-GAID-PRO",
                name: "AWS Certified Generative AI Developer - Professional – ONGOING",
                image_url: "https://images.credly.com/size/340x340/images/52c6e5ac-9516-4944-a4df-e31b23c9bbf2/blob",
                issued_at_date: "ongoing",
                public_url: "ongoing",
                description: "Ongoing professional-level AWS generative AI developer prepare for the practical knowledge needed to implement GenAI solutions into production environments using AWS technologies. They demonstrated the ability to design and build solutions using various GenAI architectures, integrate FMs into applications and business workflows, and implement agentic AI solutions. They are able to apply prompt engineering techniques, optimize for cost and performance, and configure in line with security, governance, and Responsible AI practices."
            },
            {
                id: "AWS-SAA-03",
                name: "AWS Certified Solutions Architect - Associate",
                image_url: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
                issued_at_date: "2025-07-31",
                public_url: "https://www.credly.com/badges/69936fdc-8dfc-4c68-9f95-bdd2ed0ff3e8",
                description: "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant."
            },
            {
                id: "MLA-C01",
                name: "AWS Certified Machine Learning Engineer – ONGOING",
                image_url: "https://images.credly.com/size/340x340/images/1a634b4e-3d6b-4a74-b118-c0dcb429e8d2/image.png",
                issued_at_date: "ongoing",
                public_url: "ongoing",
                description: "Earners of this badge have knowledge and skills in developing, deploying, maintaining, and monitoring ML solutions to meet AI/ML objectives. They know how to ingest, transform, validate, and prepare data for ML modeling. They have skills in implementing and operationalizing ML workloads in production. They can select modeling approaches and analyze model performance. They have the expertise to monitor ML solutions and to secure ML systems and resources."
            },
            {
                id: "AWS-AIF",
                name: "AWS Certified AI Practitioner",
                image_url: "https://images.credly.com/size/340x340/images/834f2c8d-2d2c-4ce7-9580-02a351c31626/image.png",
                issued_at_date: "2025-02-14",
                public_url: "https://www.credly.com/badges/95f2e056-98fa-4293-b452-87eda0b367fb",
                description: "Earners of this badge understand AI, ML, and generative AI concepts, methods, and strategies in general and on AWS. They can determine the correct types of AI/ML technologies to apply to specific use cases and know how to use AI, ML, and generative AI technologies responsibly. They are familiar with the AWS Global Infrastructure, core AWS services and use cases, AWS service pricing models, and the AWS shared responsibility model for security and compliance in the AWS Cloud."
            },
            {
                id: "AWS-CLF",
                name: "AWS Certified Cloud Practitioner", 
                image_url: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
                issued_at_date: "2025-01-27",
                public_url: "https://www.credly.com/badges/3901c884-0964-4de6-ae88-d6ed1d568ec8",
                description: "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects."
            },
            {
                id: "GitHub",
                name: "GitHub Foundations",
                image_url: "https://learn.microsoft.com/en-us/training/achievements/8-learn-continuous-integration-with-github-actions.svg",
                issued_at_date: "2024-02-12",
                public_url: "https://learn.microsoft.com/api/achievements/share/fr-fr/SENSEOMarubozu-7196/ZKL3PFZ2?sharingId=1D9E38C2F04E7F7D",
                description: "Earning the GitHub Foundations Certification validates my comprehensive understanding of the GitHub platform, demonstrating proficiency in Git version control, repository management, collaborative workflows using pull requests and branches, and project management through Issues and Projects to support efficient software development."
            },
            {
                id: "Google IT Support",
                name: "Google IT Support Certificate",
                image_url: "https://images.credly.com/size/340x340/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png",
                issued_at_date: "2024-06-23",
                public_url: "https://www.credly.com/badges/cb841f43-e93f-4093-bc4b-ce11a57f5d40",
                description: "Those who earn the Google IT Support Certificate, developed by Google, have demonstrated their competence in foundational IT service and troubleshooting. Through hands-on activities and assessments, graduates develop proficiency in troubleshooting and customer service, networking, operating systems, system administration, and security, preparing them for entry-level roles."
            },
            {
                id: "Google AI",
                name: "Google AI Essentials V1",
                image_url: "https://images.credly.com/size/340x340/images/ea3eec65-ddad-4242-9c59-1defac0fa2d9/image.png",
                issued_at_date: "2024-10-02",
                public_url: "https://www.credly.com/badges/387255ca-9227-4419-aedb-94074f6716d3",
                description: "Those who earn the Google AI Essentials Certificate, developed by Google, have demonstrated their competence in integrating AI into their work. Through hands-on activities and assessments, graduates develop a foundational understanding of AI principles and practical proficiency in applying generative AI tools to workplace tasks, including writing effective prompts and using AI responsibly."
            },
            {
                id: "AWS Educate ML",
                name: "AWS Educate Machine Learning Foundations",
                image_url: "https://images.credly.com/size/340x340/images/247efe36-9fa6-4209-ad56-0fd522283872/blob",
                issued_at_date: "2024-10-13",
                public_url: "https://www.credly.com/badges/4da8afcc-b0a7-410a-be3a-3860aed7591d",
                description: "Earners of this badge have completed the Machine Learning Foundations training and achieved the required scores on the post-course assessment. They have demonstrated the ability to discuss the fundamental concepts of machine learning and how to apply the machine learning pipeline to solve a business problem."
            },
            {
                id: "AI solutions on Azure",
                name: "Plan and prepare to develop AI solutions on Azure",
                image_url: "https://learn.microsoft.com/learn/achievements/generic-badge.svg",
                issued_at_date: "2025-05-17",
                public_url: "https://learn.microsoft.com/en-us/users/senseomarubozu-7196/achievements/",
                description: "Microsoft Azure offers multiple services that enable developers to build amazing AI-powered solutions. Proper planning and preparation involves identifying the services I can use and create an optimal working environment for your development team."
            },
            {
                id: "AWS Cloud Quest",
                name: "AWS Cloud Quest: Cloud Practitioner",
                image_url: "https://images.credly.com/size/340x340/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob",
                issued_at_date: "2025-05-17",
                public_url: "https://www.credly.com/badges/f50319e4-db3b-42c0-8fbd-1bc1283ed689",
                description: "Earners of this badge have demonstrated basic solution building knowledge using AWS services and have a fundamental understanding of AWS Cloud concepts. Badge earners have acquired hands-on experience with compute, networking, database and security services."
            }
        ]
    },

    // About Section Statistics
    stats: {
        yearsExperience: "10+",
        projectsCompleted: "50+",
        clientsServed: "7+"
    },

    clientOutcomes: [
        {
            region: "UAE",
            sector: "Private-Sector AI, Cloud & PDPL Readiness",
            summary: "Readiness baseline for a UAE business preparing AI adoption while accounting for sovereign cloud expectations, PDPL exposure, and operational cost.",
            situation: "A growth-stage company wanted to introduce AI-assisted workflows across customer operations and internal knowledge search, but data ownership, cloud residency, and privacy controls were unclear.",
            task: "Build a readiness baseline across data maturity, PDPL-sensitive processing, cloud architecture, human-AI decision boundaries, cost exposure, and measurable business outcomes.",
            action: "Mapped five high-value workflows, classified customer and operational datasets, scored cloud and data-residency risks, identified cost drivers, and defined approval gates for AI-assisted execution.",
            result: "Produced an executive readiness map that prioritized one low-risk AI pilot, flagged two data workflows for remediation, and defined seven compliance and cost controls before deployment.",
            metrics: [
                { label: "Pilot selection speed", value: "3x faster", detail: "Reduced selection workshops from an estimated 3 weeks to 1 week." },
                { label: "Estimated cost avoidance", value: "AED 110K", detail: "Deferred unsuitable pilot work before cloud, vendor, and integration spend." },
                { label: "Scale readiness", value: "3 workflows ranked", detail: "Created a reusable scoring model for future business workflows." },
                { label: "Compliance lift", value: "7 controls", detail: "Defined approval, audit, escalation, data-use, and cost gates before rollout." }
            ]
        },
        {
            region: "UAE",
            sector: "Retail & E-Commerce Group",
            summary: "Generative AI recommendation pilot prepared with a smaller, safer customer data footprint.",
            situation: "A merchandising team wanted generative AI product recommendations using customer behavior and order history.",
            task: "Separate useful personalization signals from sensitive customer attributes before model experimentation.",
            action: "Built a data classification matrix, tokenization plan, and AI-use policy covering consent, retention, prompt handling, and vendor review.",
            result: "Cut the pilot dataset from 38 fields to 16 approved fields and lowered privacy review time from three weeks to five business days.",
            metrics: [
                { label: "Data minimization", value: "58%", detail: "Reduced pilot fields from 38 to 16 approved attributes." },
                { label: "Review time saved", value: "60%", detail: "Lowered privacy review cycle from 15 business days to 6." },
                { label: "Estimated cost saved", value: "AED 45K", detail: "Reduced expected legal, vendor, and data-cleanup rework before build." },
                { label: "Risk reduction", value: "High", detail: "Excluded sensitive attributes before personalization experiments." }
            ]
        },
        {
            region: "United States",
            sector: "Fintech Operations Team",
            summary: "AI summarization workflow prepared for regulated support and transaction review operations.",
            situation: "Analysts were manually reviewing support tickets and transaction exceptions, creating backlog and inconsistent risk notes.",
            task: "Assess readiness for an AI summarization workflow that would not leak financial or customer identifiers.",
            action: "Designed redaction rules, least-privilege data access, logging requirements, and a human-review workflow for AI-generated summaries.",
            result: "Enabled a compliant proof of concept that reduced analyst review prep by 41% while keeping every AI output under human approval.",
            metrics: [
                { label: "Time saved", value: "32%", detail: "Reduced analyst preparation time on exception summaries." },
                { label: "Approval coverage", value: "100%", detail: "Kept every AI-generated summary under human review." },
                { label: "Auditability", value: "Full trace", detail: "Added logging requirements for prompt, output, and reviewer decisions." },
                { label: "Estimated cost saved", value: "$38K", detail: "Projected annual analyst time savings after controlled rollout." }
            ]
        },
        {
            region: "UAE",
            sector: "Real Estate Developer",
            summary: "Cross-department data readiness roadmap for AI search, service automation, and executive reporting.",
            situation: "Sales, facilities, and finance teams each held different customer and property records with no shared governance model.",
            task: "Create an AI readiness view for document search, customer service automation, and executive reporting.",
            action: "Inventoried critical datasets, ranked use cases by risk, and recommended a cloud data zone pattern with role-based access and audit trails.",
            result: "Prioritized three low-risk AI use cases and deferred two high-risk automations until ownership and retention controls were fixed.",
            metrics: [
                { label: "Use-case prioritization", value: "3 approved", detail: "Identified three low-risk use cases suitable for near-term pilots." },
                { label: "Estimated cost avoidance", value: "AED 75K", detail: "Deferred two automations likely to fail without ownership and retention controls." },
                { label: "Scaling speed", value: "1.5x", detail: "Recommended a reusable cloud data zone instead of department-by-department builds." },
                { label: "Control maturity", value: "Role-based", detail: "Moved access design from informal sharing to auditable role-based controls." }
            ]
        },
        {
            region: "United States",
            sector: "Logistics Provider",
            summary: "Operational data quality baseline for forecasting and AI-assisted dispatch readiness.",
            situation: "Dispatch and route data was ready for optimization, but operational data quality varied by branch.",
            task: "Evaluate whether route, delivery, and exception data could power reliable forecasting and AI-assisted dispatch.",
            action: "Profiled completeness, duplication, and latency across operational datasets, then defined quality thresholds and escalation rules.",
            result: "Raised forecast-ready records from 64% to 89% and identified the two branch processes causing most data-quality failures.",
            metrics: [
                { label: "Forecast-ready data", value: "+25 pts", detail: "Improved usable operational records from 64% to 89%." },
                { label: "Manual cleanup saved", value: "8 hrs/week", detail: "Reduced recurring dispatch data correction work." },
                { label: "Estimated cost saved", value: "$24K", detail: "Projected annual operations time savings from cleaner dispatch data." },
                { label: "Root-cause focus", value: "2 processes", detail: "Isolated the branch workflows responsible for most quality failures." }
            ]
        },
        {
            region: "UAE",
            sector: "Professional Services Firm",
            summary: "Shadow AI usage converted into an approved internal operating model for client-document handling.",
            situation: "Consultants were testing public AI tools with client documents outside a formal approval process.",
            task: "Stop uncontrolled AI use without blocking productivity gains.",
            action: "Created an acceptable-use policy, vendor intake checklist, data sensitivity labels, and a secure prompt workflow for internal knowledge search.",
            result: "Moved AI use from shadow workflows into an approved operating model and reduced unapproved document uploads to near zero in the first month.",
            metrics: [
                { label: "Unauthorized uploads", value: "<5/month", detail: "Reduced unapproved client-document uploads to a monitored exception queue." },
                { label: "Policy adoption", value: "75%+", detail: "Drove practical AI-use rules across consultant teams." },
                { label: "Estimated cost saved", value: "AED 35K", detail: "Reduced review rework and avoided ad hoc vendor assessment cycles." },
                { label: "Risk reduction", value: "Critical", detail: "Closed the highest-risk shadow AI behavior without stopping useful experimentation." }
            ]
        },
        {
            region: "United States",
            sector: "Manufacturing Supplier",
            summary: "Predictive maintenance investment gated until asset, log, and inventory data became measurable.",
            situation: "Leadership wanted predictive maintenance, but machine logs, maintenance notes, and parts inventory were disconnected.",
            task: "Determine the minimum data foundation needed before investing in model development.",
            action: "Mapped operational data lineage, flagged missing timestamps and asset IDs, and designed a staged cloud ingestion and governance plan.",
            result: "Avoided premature model spend and produced a 30-day remediation plan that made the first maintenance use case measurable.",
            metrics: [
                { label: "Estimated cost avoidance", value: "$55K", detail: "Prevented premature model development before usable maintenance data existed." },
                { label: "Readiness timeline", value: "30 days", detail: "Defined a short remediation path to make the first use case measurable." },
                { label: "Data completeness", value: "+32 pts", detail: "Targeted missing asset IDs and timestamps as the highest-leverage fixes." },
                { label: "Scale path", value: "Phased", detail: "Separated ingestion, governance, and pilot modeling into controlled stages." }
            ]
        }
    ],

    // Projects Section
    projects: [
        {
            id: 1,
            title: "AI, Cloud & Compliance Readiness Sprint",
            description: "A focused readiness engagement for private-sector teams preparing to adopt AI in the UAE, GCC, or remote global environments. The sprint assesses business workflows, data quality, PDPL-sensitive processing, sovereign cloud and residency expectations, cloud cost drivers, human-AI approval boundaries, and outcome metrics before implementation begins.",
            outcomePercent: "70%",
            outcomeLabel: "build waste avoided",
            outcome: "Prioritizes safe AI pilots and exposes data, compliance, cloud cost, and approval gaps before build spend.",
            technologies: ["AI Readiness", "PDPL-Aware Data Governance", "Sovereign Cloud Alignment", "AWS Bedrock", "Cost Optimization", "Human-AI Boundaries", "Outcome Metrics"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/cloud-ai-background.jpg",
            links: {
                live: "#contact"
            }
        },
        {
            id: 2,
            title: "Zero-Downtime Blue-Green Deployment Pipeline(AI-Enhanced)",
            description: "Engineered a robust CI/CD pipeline enabling Blue-Green and Canary deployments on Google Cloud Run. Leverages Terraform for infrastructure-managed traffic splitting and Cloud Build for automated revision tagging. Features a suite of custom Bash scripts for gradual traffic shifting, immediate rollbacks, and validation, alongside backend enhancements, AI recommendations/follow-ups for a new User Favorites system backed by PostgreSQL.",
            outcomePercent: "80%",
            outcomeLabel: "deployment risk reduced",
            outcome: "Improves release safety with gradual traffic shifts, validation checks, and fast rollback paths.",
            technologies: ["Terraform", "Google Cloud Run", "Cloud Build", "Bash/Shell", "PostgreSQL", "TypeScript"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/malafaareh2.png",
            links: {
                live: "https://www.malafaareh.com"
            }
        },
        {
            id: 3,
            title: "Luxe Modern E-Commerce Platform",
            description: "Full-stack serverless e-commerce solution architected on Google Cloud using Terraform for complete Infrastructure as Code. Features a decoupled React/Vite frontend served via Global CDN and an auto-scaling Node.js API on Cloud Run (Gen2). Designed for security and cost-efficiency (~$62/mo baseline) with managed Cloud SQL, Secret Manager integration, and automated CI/CD pipelines.",
            outcomePercent: "45%",
            outcomeLabel: "baseline cloud cost reduced",
            outcome: "Delivers a scalable commerce platform with low baseline cost, secure secrets, and automated delivery.",
            technologies: ["Google Cloud Platform", "Terraform", "Cloud Run", "Cloud SQL", "Docker", "Node.js", "React/Vite", "Stripe API", "Cloud Build"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/malafaareh1.png", 
            links: {
                live: "https://malafaareh.com"
            }
        },
        {
            id: 4,
            title: "Sensei – AI Portfolio Chatbot",
            description: "Sensei is a serverless AI portfolio chatbot that answers questions about my work in real time. It uses an S3-backed RAG store, a lightweight TF-IDF retriever, and AWS Bedrock (Llama 3) on Lambda behind API Gateway. Built for speed, low cost, and security, it returns concise answers with cited sources, throttled requests, and deterministic builds for predictable deployments in production.",
            outcomePercent: "70%",
            outcomeLabel: "manual Q&A reduced",
            outcome: "Provides grounded portfolio answers with citations through a low-cost serverless AI architecture.",
            technologies: ["AWS Lambda", "API Gateway", "S3", "ETL data transformation", "DynamoDB", "Bedrock (Llama 3)", "JavaScript", "Precompute-RAG", "TF-IDF"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/chatbot.jpg",
            links: {
                live: "#",
                github: "https://github.com/Marubozu-Ousseini/portfolio-chatbot"
            }
        },
        {
            id: 5,
            title: "Portfolio Webpage (with AI Agent Integration)",
            description: "Responsive portfolio website integrated with Sensei, my AI agent. The site renders dynamic sections (projects, certifications, skills) from a single config and embeds a chat widget that connects to a secure AWS backend (API Gateway + Lambda + Bedrock) using an S3-backed RAG store. Built for speed and reliability with lightweight JavaScript, clean CSS, and simple form handling and accessibility.",
            outcomePercent: "60%",
            outcomeLabel: "content update time saved",
            outcome: "Turns a static portfolio into a dynamic AI-assisted consulting site with structured content and fast rendering.",
            technologies: ["HTML", "CSS", "JavaScript", "AWS API Gateway", "AWS Lambda", "AWS Bedrock", "S3", "RAG (TF-IDF)", "Formspree"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/portfolio.png",
            links: {
                live: "#",
                github: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website"
            }
        },
        {
            id: 6,
            title: "NBA DataLake",
            description: "This repository contains the setup_nba_data_lake.py script, which automates the creation of a data lake for NBA analytics using AWS services. The script integrates Amazon S3, AWS Glue, and Amazon Athena, and sets up the infrastructure needed to store and query NBA-related data.",
            outcomePercent: "75%",
            outcomeLabel: "analytics setup automated",
            outcome: "Creates repeatable analytics storage and query infrastructure across S3, Glue, and Athena.",
            technologies: ["CloudShell Console", "S3 bucket", "Glue database and ETL", "Athena", "Lambda", "QuickSight"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/datalake.png",
            links: {
                live: "#",
                github: "https://github.com/Marubozu-Ousseini/NBADataLake-Day3-DevOpsAllStarsChallenge"
            }
        },
        {
            id: 7,
            title: "Sports API Management System",
            description: "This project demonstrates building a containerized API management system for querying sports data. It leverages Amazon ECS (Fargate) for running containers, Amazon API Gateway for exposing REST endpoints, and an external Sports API for real-time sports data. The project showcases advanced cloud computing practices, including API management, container orchestration, and secure AWS integrations.",
            outcomePercent: "65%",
            outcomeLabel: "API operations automated",
            outcome: "Runs sports data services through secure containers, managed API exposure, and cloud monitoring.",
            technologies: ["AWS Amazon ECS (Fargate)", "Amazon ECR", "API Gateway", "CloudWatch", "Python 3.x", "Docker", "IAM Security"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/API%20man.jpg",
            links: {
                live: "#",
                github: "https://github.com/Marubozu-Ousseini/containerized-sports-api"
            }
        },
        {
            id: 8,
            title: "NCAA Game Highlights",
            description: "This project uses RapidAPI to obtain NCAA game highlights using a Docker container and uses AWS Media Convert to convert the media file. Terraform Scripts: These scripts are used to created resources in AWS in a scalable and repeatable way. All of the resources we work with like S3, creating IAM user roles, elastic registry service and elastic container services is built here.",
            outcomePercent: "70%",
            outcomeLabel: "media workflow automated",
            outcome: "Automates highlight ingestion and media conversion with containerized, repeatable AWS infrastructure.",
            technologies: ["CloudShell", "RapidAPI", "S3", "Terraform", "Docker", "ECR", "ECS", "VPC media endpoint"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/NCAA.png",
            links: {
                live: "#",
                github: "https://github.com/Marubozu-Ousseini/NCAA-GameHighlights"
            }
        },
        {
            id: 9,
            title: "From Monolithic App to Microservices",
            description: "Deploy a monolithic Node.js application to a Docker container, then decouple the application into microservices without any downtime. The Node.js application hosts a simple message board with threads and messages between users.",
            outcomePercent: "90%",
            outcomeLabel: "downtime risk reduced",
            outcome: "Modernizes deployment by moving from a monolith to containerized microservices without downtime.",
            technologies: ["AWS CLI", "Copilot", "Docker", "VS Code", "EC2", "ECR", "ECS", "Fargate"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/mono.jpg",
            links: {
                live: "#",
                github: "https://github.com/Marubozu-Ousseini/amazon-ecs-nodejs-microservices.git"
            }
        },
        {
            id: 10,
            title: "NBA statistics pipeline using AWS",
            description: "This project creates an automated data pipeline that collects and stores NBA team statistics using AWS services. It demonstrates core DevOps principles including cloud storage, API integration, automated data collection, and infrastructure as code.",
            outcomePercent: "80%",
            outcomeLabel: "data collection automated",
            outcome: "Automates sports data collection into cloud storage for repeatable analysis and reporting.",
            technologies: ["- Python 3.x", "AWS DynamoDB", "AWS Lambda", "AWS CloudWatch", "SportsData.io API", "Boto3 (AWS SDK)", "Python JSON Logger"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/Statistique.png",
            links: {
                live: "#",
                github: "https://github.com/Marubozu-Ousseini/nba-stats-pipeline"
            }
        },
        {
            id: 11,
            title: "NBA Game Day Notifications / Sports Alerts System",
            description: "This project is an alert system that sends real-time NBA game day score notifications to subscribed users via SMS/Email. It leverages Amazon SNS, AWS Lambda and Python, Amazon EvenBridge and NBA APIs to provide sports fans with up-to-date game information. The project demonstrates cloud computing principles and efficient notification mechanisms.",
            outcomePercent: "85%",
            outcomeLabel: "manual alerting reduced",
            outcome: "Delivers real-time game alerts through event-driven serverless messaging workflows.",
            technologies: ["AWS", "Amazon SNS", "AWS Lambda", "Amazon EventBridge", "Python 3.x", "SportsData.io API", "Boto3 (AWS SDK)", "Twilio (for SMS)", "SMTP (for Email)"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/gameDay.png",
            links: {
                live: "#",
                github: "https://github.com/Marubozu-Ousseini/30-Day-DevOps-Challenge_Day02game-day"
            }
        },
        {
            id: 12,
            title: "Weather Dashboard",
            description: "Fetches real-time weather data for multiple cities, displays temperature (°F), humidity, and weather conditions, automatically stores weather data in AWS S3, supports multiple cities tracking, timestamps all data for historical tracking",
            outcomePercent: "70%",
            outcomeLabel: "data capture automated",
            outcome: "Captures real-time weather observations and stores timestamped records for historical tracking.",
            technologies: ["Python 3.x", "AWS (S3)", "OpenWeather API", "boto3 (AWS SDK)", "python-dotenv"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/weather.png",
            links: {
                live: "#",
                github: "https://github.com/Marubozu-Ousseini/30days-weather-dashboard-Yd--Dla-Gra"
            }
        },
        {
            id: 13,
            title: "Connecting VPCs",
            description: "The city's marketing team wants separate Amazon VPCs for each department that allows communication between Amazon VPCs.",
            outcomePercent: "60%",
            outcomeLabel: "network isolation improved",
            outcome: "Enables controlled inter-VPC communication while preserving segmented cloud networking.",
            technologies: ["VPC", "AWS Console", "AWS Subnet", "VPC Peering"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/vpc.png",
            links: {
                live: "#",
                github: "#"
            }
        },
        {
            id: 14,
            title: "AI-Powered Analytics Platform",
            description: "Developed a machine learning platform that processes real-time data streams to provide predictive analytics for e-commerce businesses. Built using Python, TensorFlow, and AWS SageMaker.",
            outcomePercent: "78%",
            outcomeLabel: "decision speed improved",
            outcome: "Turns real-time data streams into predictive analytics for e-commerce decision-making.",
            technologies: ["Python", "TensorFlow", "AWS SageMaker", "Apache Kafka", "React"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/AI%20analitics.jpg",
            links: {
                live: "#",
                github: "#"
            }
        },
        {
            id: 15,
            title: "Multi-Cloud Disaster Recovery",
            description: "Designed and implemented a comprehensive disaster recovery solution spanning AWS, Azure, and Google Cloud Platform, ensuring 99.9% uptime for critical business applications.",
            outcomePercent: "99.9%",
            outcomeLabel: "uptime target",
            outcome: "Strengthens continuity planning across AWS, Azure, and GCP for critical applications.",
            technologies: ["AWS", "Azure", "GCP", "Terraform", "Ansible"],
            image: "https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main/images/multicloud.webp",
            links: {
                live: "#",
                github: "#"
            }
        }
    ],

    // Skills Section
    skills: {
        "Private-Sector AI Readiness": [
            { name: "AI Readiness Assessment", icon: "fas fa-clipboard-check" },
            { name: "Workflow Redesign", icon: "fas fa-diagram-project" },
            { name: "Human-AI Boundaries", icon: "fas fa-user-shield" },
            { name: "Outcome Measurement", icon: "fas fa-chart-line" },
            { name: "Business Adoption Roadmaps", icon: "fas fa-bullhorn" }
        ],
        "Compliance & Data Foundation": [
            { name: "Data Classification", icon: "fas fa-tags" },
            { name: "PDPL-Aware Data Review", icon: "fas fa-user-shield" },
            { name: "Data Quality Scoring", icon: "fas fa-check-circle" },
            { name: "Compliance Control Mapping", icon: "fas fa-shield-halved" },
            { name: "Governed Data Flows", icon: "fas fa-route" }
        ],
        "Cloud Cost & Regional Architecture": [
            { name: "Sovereign Cloud Alignment", icon: "fas fa-cloud-shield-alt" },
            { name: "Cloud Cost Optimization", icon: "fas fa-coins" },
            { name: "Residency-Aware Architecture", icon: "fas fa-map-location-dot" },
            { name: "Secure Landing Zones", icon: "fas fa-lock" },
            { name: "Scalable Delivery Patterns", icon: "fas fa-layer-group" }
        ],
        "Cloud Platforms": [
            { name: "Amazon Web Services (AWS)", icon: "fab fa-aws" },
            { name: "Microsoft Azure", icon: "fab fa-microsoft" },
            { name: "Google Cloud", icon: "fab fa-google" },
            { name: "Oracle Cloud", icon: "fab fa-oracle" }
        ],
        "Programming Languages": [
            { name: "Python", icon: "fab fa-python" },
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "Java", icon: "fab fa-java" },
            { name: "HTML", icon: "fab fa-html5" },
            { name: "CSS", icon: "fab fa-css3" }
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
            { name: "Agentic AI on AWS", icon: "fas fa-network-wired" },
            { name: "Amazon Bedrock AgentCore", icon: "fas fa-robot" },
            { name: "Model Context Protocol", icon: "fas fa-plug" },
            { name: "AWS SageMaker", icon: "fas fa-robot" },
            { name: "Bedrock", icon: "fas fa-robot" }
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
        submitUrl: window.getEnv ? window.getEnv('CONTACT_FORM_URL') : "https://formspree.io/f/mblzpwqr",
        email: window.getEnv ? window.getEnv('CONTACT_EMAIL') : "contact@ousseinioumarou.com",
        successMessage: "Thank you for your message! I'll get back to you soon.",
        errorMessage: "Sorry, there was an error sending your message. Please try again.",
        
    },

    // Footer Content
    footer: {
        copyright: "© 2025 Ousseini Oumarou. All rights reserved.",
        socialLinks: [
            { platform: "github", url: "https://github.com/Marubozu-Ousseini", icon: "fab fa-github" },
            { platform: "linkedin", url: "https://www.linkedin.com/in/marubozu", icon: "fab fa-linkedin" },
            { platform: "twitter", url: "https://twitter.com/O%27Marubozu%20Sensei", icon: "fab fa-twitter" }
        ]
    },

    // Section Subtitles (for both languages)
    sections: {
        certificationSubtitle: "Explore my professional certifications and achievements",
        projectsSubtitle: "AI readiness, PDPL-aware data foundations, sovereign cloud alignment, cost control, and secure cloud implementation work",
        skillsSubtitle: "Readiness assessment, compliance-aware architecture, data governance, cost optimization, cloud, and Agentic AI delivery capabilities",
        contactSubtitle: "Discuss a remote engagement or UAE/GCC on-the-ground consulting roadmap for AI, cloud, compliance, and cost efficiency",
        
    },

    // SEO and Meta Information
    seo: {
        title: "AI & Cloud Consultant - Ousseini Oumarou",
        description: "AI and cloud consulting for compliant, cost-efficient systems, data readiness, AWS architecture, and UAE/GCC regulatory realities.",
        keywords: "UAE AI consultant, GCC cloud consultant, PDPL compliance, sovereign cloud, AI readiness, AWS Bedrock AgentCore, data governance, cloud cost optimization",
        author: "Ousseini Oumarou"
    }
};

// Optional chatbot configuration used by the chat widget.
// You can edit this list to customize the FAQs that appear when clicking the FAQ button in the widget header.
window.siteContent.chatbot = window.siteContent.chatbot || {};
window.siteContent.chatbot.faqs = window.siteContent.chatbot.faqs || [
    'Which AI and cloud projects are most relevant?',
    'How do you help with UAE/GCC AI readiness and PDPL?',
    'What client outcomes can you share?',
    'What certifications do you have?',
    'What are your core AI, cloud, and data skills?',
    'Tell me about your consulting background',
    'How can I contact you?'
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteContent;
}
