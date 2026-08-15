import { 
  Project, 
  Service, 
  Experience, 
  Education, 
  Certification, 
  SkillCategory, 
  ProcessStep, 
  WhyMeFeature,
  FaqItem,
  Testimonial,
  BlogPost
} from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: "Akash Agrahari",
  role: "Full-Stack & WordPress Developer",
  company: "Futurecept",
  tagline: "Full-Stack & WordPress Developer building custom plugins, high-converting WooCommerce stores, and scalable Next.js web applications.",
  location: "Fatehpur, Uttar Pradesh, India (Available Worldwide Remote)",
  email: "akashagrahari460@gmail.com",
  phone: "+91-9580836060",
  whatsapp: "+919580836060",
  github: "https://github.com/akashagrahari",
  linkedin: "https://linkedin.com/in/akashagrahari",
  status: "🟢 Available for Freelance & Contract Projects",
  resumeUrl: "#contact",
  metrics: [
    { label: "Client Retention Rate", value: "> 95%" },
    { label: "Satisfied Clients", value: "18+" },
    { label: "Finished Projects", value: "15+" },
    { label: "Core Web Vitals Speed", value: "98+" },
  ]
};

export const SERVICES: Service[] = [
  {
    id: "wordpress-dev",
    title: "WordPress Development",
    shortDescription: "Custom, SEO-optimized, and lightning-fast WordPress websites built for growth.",
    fullDescription: "End-to-end WordPress site engineering utilizing custom themes, Elementor, Gutenberg, and WPbakery. Focus on clean code structure, zero plugin bloat, maximum security, and 95+ PageSpeed scores.",
    iconName: "wordpress",
    badge: "{ WordPress }",
    deliverables: [
      "Custom Theme & Template Design",
      "Elementor & Gutenberg Optimization",
      "Speed & Core Web Vitals Optimization",
      "Mobile-First Responsive Layouts",
      "SEO-Ready On-Page Structure"
    ],
    targetAudience: "Small to mid-sized businesses, agencies, and content creators."
  },
  {
    id: "custom-plugins",
    title: "Custom WordPress Plugins",
    shortDescription: "Bespoke PHP plugins tailored to extend site functionality and automate tasks.",
    fullDescription: "Stop relying on heavy third-party plugins that slow down your website. I build custom, lightweight WordPress plugins for database operations, custom Gutenberg blocks, and unique business logic.",
    iconName: "plugin",
    badge: "{ Custom PHP }",
    deliverables: [
      "Lightweight Custom PHP Plugins",
      "Gutenberg Block Development",
      "Custom Post Types & Taxonomies",
      "Database Query Optimization",
      "Security & Hook Management"
    ],
    targetAudience: "Businesses needing unique website features without sacrificing speed."
  },
  {
    id: "woocommerce-solutions",
    title: "WooCommerce & E-Commerce",
    shortDescription: "High-converting online stores with streamlined checkout flows and custom features.",
    fullDescription: "Complete WooCommerce setup and customization, from product catalog structure to payment gateway integrations, custom checkout forms, and inventory sync.",
    iconName: "cart",
    badge: "{ E-Commerce }",
    deliverables: [
      "WooCommerce Store Setup & Config",
      "Custom Checkout Flow Optimization",
      "Payment Gateway & Shipping Integration",
      "Product Variant & Subscription Setup",
      "Shopify Theme & App Customization"
    ],
    targetAudience: "D2C Brands, Retailers, and Subscription E-commerce Businesses."
  },
  {
    id: "crm-api-integrations",
    title: "n8n & Skyvern Workflow Automation",
    shortDescription: "Zero-touch automated workflows, AI research agents, and direct WordPress blog publishing engines that eliminate manual work.",
    fullDescription: "Cut hours of repetitive manual effort. I architect autonomous n8n workflows integrated with Skyvern AI browser agents that conduct web research, synthesize structured data, and publish SEO-optimized blog articles directly to WordPress and sync with CRMs.",
    iconName: "api",
    badge: "{ n8n & Skyvern }",
    deliverables: [
      "n8n Automated Workflow Pipelines",
      "Skyvern AI Web Scraping & Research Agents",
      "Direct WordPress REST API Blog Publishing",
      "CRM, Postgres & Webhook Automation",
      "Zero-Touch Content & Lead Sync Engines"
    ],
    targetAudience: "Agencies, content publishers, and businesses seeking zero-touch workflow automation."
  },
  {
    id: "nextjs-react-apps",
    title: "Next.js & React Web Apps",
    shortDescription: "Modern, high-performance web applications built for speed, SEO, and scale.",
    fullDescription: "Leverage Next.js App Router, React, TypeScript, and Firebase for fast, interactive web applications. Ideal for SaaS platforms, dashboards, and complex web tools.",
    iconName: "code",
    badge: "{ Next.js / React }",
    deliverables: [
      "Next.js App Router & SSR/SSG Setup",
      "React Component Architecture",
      "Firebase Authentication & Firestore",
      "Tailwind CSS Modern Glassmorphic UI",
      "Responsive Single Page Applications"
    ],
    targetAudience: "Startups, SaaS platforms, and modern web products."
  },
  {
    id: "elementor-landing-pages",
    title: "High-Converting Landing Pages",
    shortDescription: "Visually captivating landing pages designed to convert site visitors into paying clients.",
    fullDescription: "Pixel-perfect Elementor & Tailwind CSS landing pages with strategic CTAs, smooth micro-animations, fast load times, and frictionless lead forms.",
    iconName: "layout",
    badge: "{ Landing Page }",
    deliverables: [
      "Conversion-Focused Layout Design",
      "Elementor Pro & Tailwind CSS Builds",
      "Frictionless Lead Generation Forms",
      "A/B Test Ready Page Structure",
      "Cross-Browser & Mobile Perfection"
    ],
    targetAudience: "Marketers, agencies, and service-based professionals."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "skyvern-n8n-wp-automation",
    title: "AI Blog Research & Direct WordPress Publishing Engine",
    category: "wordpress",
    categoryLabel: "n8n & Skyvern Automation",
    description: "Autonomous content pipeline using Skyvern AI browser agents for automated web research and n8n workflows for zero-touch WordPress article publishing.",
    longDescription: "Engineered an end-to-end automated workflow to eliminate 85%+ of manual blogging effort. Skyvern's AI vision & browser automation agents autonomously scrape and synthesize in-depth research from verified sources, feed structured data into n8n workflow nodes for markdown drafting and SEO optimization, and directly publish finalized articles into WordPress via the WordPress REST API.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["n8n", "Skyvern", "WordPress REST API", "AI Automation", "PostgreSQL", "Webhooks"],
    metrics: [
      { label: "Manual Effort Saved", value: "85% Less Work" },
      { label: "Publishing Cycle", value: "Zero-Touch Auto" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/akashagrahari",
    featured: true,
    highlights: [
      "Skyvern AI-powered automated web research and multi-source data extraction",
      "n8n multi-node workflow orchestrating LLM content enrichment and schema formatting",
      "Direct publishing via WordPress REST API with custom categories, tags & featured images",
      "Automated webhook error tracking, retry triggers, and notification alerts"
    ]
  },
  {
    id: "online-pathology-lab",
    title: "Online Pathology Lab Booking System",
    category: "apps",
    categoryLabel: "Full-Stack Web App",
    description: "A global brand solution enabling online diagnostic test bookings, medical report access, and lab workflow management.",
    longDescription: "Designed to streamline lab operations and enhance patient convenience. Patients can browse available diagnostic packages, schedule test appointments online, and securely view test results. Laboratory personnel benefit from a dedicated backend to manage appointments, record diagnostic reports, and maintain patient health records.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    tags: ["HTML5", "CSS3", "Python", "MySQL", "Git"],
    metrics: [
      { label: "Appointment Speed", value: "2x Faster" },
      { label: "Digital Access", value: "24/7 Patient Portal" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/akashagrahari",
    featured: true,
    highlights: [
      "Patient test booking portal & appointment scheduling",
      "Secure patient report delivery & PDF generation",
      "Admin portal for lab staff appointment & result management",
      "Normalized MySQL database architecture for health records"
    ]
  },
  {
    id: "neotech-web-page",
    title: "NeoTech Corporate Landing Page",
    category: "landing",
    categoryLabel: "Landing Page & UI/UX",
    description: "A responsive, high-converting digital agency landing page with modern navigation and smooth fluid layouts.",
    longDescription: "NeoTech Web Page showcases modern UI principles with adaptive grid layouts, engaging hero call-to-actions, responsive media queries, and clean aesthetic styling tailored for tech companies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    metrics: [
      { label: "Mobile Score", value: "100/100" },
      { label: "Load Time", value: "< 0.8s" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/akashagrahari",
    featured: true,
    highlights: [
      "Fluid responsive layout adapting seamlessly across desktop, tablet, and mobile",
      "User-friendly navigation bar with sticky header",
      "CSS Grid & Flexbox optimization for cross-browser reliability"
    ]
  },
  {
    id: "custom-woocommerce-store",
    title: "Custom WooCommerce & Store Optimization",
    category: "wordpress",
    categoryLabel: "WooCommerce & WordPress",
    description: "High-performance WooCommerce store build featuring custom checkout flows, product filters, and payment gateway integration.",
    longDescription: "Built during client projects at Futurecept. Customized WooCommerce theme templates, implemented custom product filters, streamlined checkout friction, and integrated payment gateways to boost e-commerce conversion rates.",
    image: "https://images.unsplash.com/photo-1556742049-0a6796574513?q=80&w=1000&auto=format&fit=crop",
    tags: ["WordPress", "WooCommerce", "Elementor", "PHP", "API Integration"],
    metrics: [
      { label: "Checkout Speed", value: "+45% Increase" },
      { label: "Core Web Vitals", value: "Passed" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/akashagrahari",
    featured: true,
    highlights: [
      "Custom checkout template reducing checkout abandonment",
      "WooCommerce REST API & Payment gateway connection",
      "Elementor Pro product page customization"
    ]
  },
  {
    id: "wp-crm-plugin-sync",
    title: "WordPress Custom CRM Webhook Plugin",
    category: "wordpress",
    categoryLabel: "Custom Plugin & PHP",
    description: "Custom PHP plugin for WordPress that captures form submissions and instantly relays lead data to external CRM endpoints.",
    longDescription: "Developed using PHP hooks and WordPress REST API capabilities. Captures form events, validates lead payload, handles rate limits, and safely transmits data to third-party CRMs without affecting front-end rendering speed.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["PHP", "WordPress API", "CRM Integration", "MySQL", "Webhooks"],
    metrics: [
      { label: "Lead Delivery", value: "Real-Time (<1s)" },
      { label: "Plugin Weight", value: "< 15KB" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/akashagrahari",
    featured: false,
    highlights: [
      "Asynchronous webhook dispatch preserving page load performance",
      "Custom admin setting screen in WP Dashboard",
      "Automatic error logging and webhook retry mechanism"
    ]
  },
  {
    id: "java-guesser-game",
    title: "Java Interactive Guesser Engine",
    category: "apps",
    categoryLabel: "Software Development",
    description: "Console-based guessing game engine built in Java demonstrating modular logic, control structures, and random number generation.",
    longDescription: "Core computer science project focusing on algorithm control structures, Scanner I/O handling, conditional loops, and real-time state feedback.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    tags: ["Java", "OOP", "Algorithm Design", "Git"],
    metrics: [
      { label: "Execution Time", value: "Instant" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/akashagrahari",
    featured: false,
    highlights: [
      "Random number generation logic with user input validation",
      "Modular game state control using while loops and conditional logic",
      "Real-time score calculation and interactive terminal output"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-futurecept-jr",
    role: "Junior Web Developer",
    company: "Futurecept",
    location: "Remote",
    period: "Aug 2025 – Present",
    isCurrent: true,
    type: "Full-time",
    responsibilities: [
      "Engineered and maintained scalable full-stack web applications utilizing Next.js (App Router), React.js, and TypeScript with clean component architectures.",
      "Architected database schemas and serverless backends using PostgreSQL, Neon DB, Supabase (Auth, DB, Realtime, Storage), and Firebase.",
      "Built automated workflow pipelines, AI research agents, and zero-touch WordPress publishing systems using n8n and Skyvern to eliminate repetitive manual work.",
      "Developed custom RESTful APIs, webhooks, and secure user authentication systems ensuring high availability and seamless frontend integration."
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "PostgreSQL", "Neon DB", "Supabase", "n8n", "Skyvern", "WordPress REST API", "Firebase", "Tailwind CSS", "Git"]
  },
  {
    id: "exp-futurecept-intern",
    role: "WordPress Developer Intern",
    company: "Futurecept",
    location: "Remote",
    period: "Feb 2025 – July 2025",
    isCurrent: false,
    type: "Internship",
    responsibilities: [
      "Developed and customized client WordPress websites using Elementor, Gutenberg, WPBakery, custom themes, and plugins.",
      "Built and managed WooCommerce online stores, handling product catalogs, checkout flows, and custom e-commerce features.",
      "Integrated third-party APIs and implemented custom CRM solutions using PHP for enhanced business automation.",
      "Performed Shopify theme customization, app integration, and storefront performance optimization.",
      "Ensured mobile-first responsive design, technical SEO compliance, and resolved technical WordPress issues."
    ],
    technologies: ["WordPress", "Elementor", "WooCommerce", "PHP", "Shopify", "CRM Integration", "SEO", "MySQL"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "CMS & WordPress Engineering",
    description: "Expertise in building scalable WordPress sites, plugins, WooCommerce stores, and Shopify themes.",
    skills: [
      { name: "WordPress Development", level: "Expert", isPrimary: true },
      { name: "Elementor & Gutenberg", level: "Expert", isPrimary: true },
      { name: "Custom WP Plugins (PHP)", level: "Advanced", isPrimary: true },
      { name: "WooCommerce", level: "Expert", isPrimary: true },
      { name: "WPBakery", level: "Advanced" },
      { name: "Shopify Customization", level: "Proficient" },
    ]
  },
  {
    name: "Frontend & Web Apps",
    description: "Modern JavaScript framework stack for high-performance frontend engineering.",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", isPrimary: true },
      { name: "React.js", level: "Advanced", isPrimary: true },
      { name: "TypeScript", level: "Advanced", isPrimary: true },
      { name: "JavaScript (ES6+)", level: "Expert", isPrimary: true },
      { name: "Tailwind CSS", level: "Expert", isPrimary: true },
      { name: "Bootstrap / HTML5 / CSS3", level: "Expert" },
    ]
  },
  {
    name: "Databases, Backend & APIs",
    description: "Modern database architecture, serverless databases, and API development.",
    skills: [
      { name: "PostgreSQL & Neon DB", level: "Advanced", isPrimary: true },
      { name: "Supabase (DB & Auth)", level: "Advanced", isPrimary: true },
      { name: "PHP", level: "Advanced", isPrimary: true },
      { name: "RESTful APIs & Webhooks", level: "Advanced", isPrimary: true },
      { name: "Firebase (Auth, Firestore)", level: "Advanced" },
      { name: "MySQL & MongoDB", level: "Advanced" },
      { name: "Node.js & Express.js", level: "Proficient" },
    ]
  },
  {
    name: "Automation & Tools",
    description: "Workflow automation, web scraping, and professional developer tooling.",
    skills: [
      { name: "n8n Workflows", level: "Expert", isPrimary: true },
      { name: "Skyvern AI Automation", level: "Advanced", isPrimary: true },
      { name: "CRM & API Integration", level: "Advanced", isPrimary: true },
      { name: "Git & GitHub", level: "Expert", isPrimary: true },
      { name: "PageSpeed & SEO Audit", level: "Advanced" },
      { name: "VS Code & Agile / Jira", level: "Expert" },
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu-mca",
    degree: "Master of Computer Application (MCA)",
    institution: "Chandigarh University",
    location: "Mohali, Punjab",
    period: "2022 – 2024",
    details: "Specialized in Advanced Web Engineering, Database Management Systems, Software Architecture, and Full-Stack Development."
  },
  {
    id: "edu-ba",
    degree: "Bachelor of Arts (BA)",
    institution: "Allahabad State University",
    location: "Prayagraj, Uttar Pradesh",
    period: "2018 – 2021",
    details: "Foundational undergraduate degree with focus on analytical reasoning, communication, and problem solving."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-react",
    title: "ReactJS Certificate",
    issuer: "Infosys Springboard",
    date: "Nov 26, 2022",
    credentialUrl: "#"
  },
  {
    id: "cert-node",
    title: "NodeJS Certificate",
    issuer: "Infosys Springboard",
    date: "Nov 26, 2022",
    credentialUrl: "#"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "We dive deep into your brand’s goals and long-term vision.",
    subtitle: "Discovery & Strategy",
    duration: "/ 3-5 days /",
    description: "We analyze your business objectives, target audience, conversion benchmarks, and technical scope to construct a clear development roadmap.",
    deliverables: ["Project Scope & Architecture", "Technical Roadmap", "Fixed Cost Quote"]
  },
  {
    number: "02",
    title: "We design a strong foundation for your website & content strategy.",
    subtitle: "Design & Wireframing",
    duration: "/ 5-7 days /",
    description: "Crafting modern, high-converting layouts with pixel-perfect responsive components, clean typography scale, and seamless user experience.",
    deliverables: ["Interactive Wireframes", "Brand & Component Tokens", "Client Approval"]
  },
  {
    number: "03",
    title: "Bringing ideas to life with clean code, custom plugins & high-quality architecture.",
    subtitle: "Development & Customization",
    duration: "/ 1-2 weeks /",
    description: "Building custom WordPress themes, bespoke PHP plugins, WooCommerce flows, or Next.js applications with zero bloated third-party code.",
    deliverables: ["Staging Web Environment", "Custom PHP Plugins & APIs", "Database Optimization"]
  },
  {
    number: "04",
    title: "Your website is ready to make an impact.",
    subtitle: "Testing, Launch & Growth",
    duration: "Launch Ready",
    description: "Rigorous testing across browsers, mobile devices, Core Web Vitals optimization, technical SEO audit, domain deployment, and 30-day post-launch support.",
    deliverables: ["Live Production Deployment", "98+ PageSpeed Guarantee", "30-Day Post-Launch Support"]
  }
];

export const WHY_ME_FEATURES: WhyMeFeature[] = [
  {
    title: "Obsessed with Speed & Core Web Vitals",
    description: "Slow websites lose money. Every site I develop is optimized to hit 95+ Google PageSpeed insights scores with zero bloated code.",
    stat: "95+",
    statLabel: "Target Speed Score",
    iconName: "zap"
  },
  {
    title: "WordPress + Modern Next.js Specialist",
    description: "Whether you need a custom WordPress plugin, WooCommerce shop, or a Next.js web application, I bridge the gap between traditional CMS and modern JS frameworks.",
    stat: "100%",
    statLabel: "Custom Code Quality",
    iconName: "shield"
  },
  {
    title: "Seamless CRM & API Automation",
    description: "Don't waste time manual copying leads. I connect web forms and e-commerce transactions directly to your CRM, payment processors, and backend webhooks.",
    stat: "< 1s",
    statLabel: "Real-Time Sync",
    iconName: "repeat"
  },
  {
    title: "Direct Communication & Reliable Turnaround",
    description: "No agencies, no middle management, no delayed updates. You work directly with me from initial call to final deployment.",
    stat: "< 24h",
    statLabel: "Response Guarantee",
    iconName: "users"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-services",
    question: "01/ What is your typical project timeline?",
    answer: "The timeline for a project typically ranges from 4 to 8 weeks, depending on the scope and functional complexity. Landing pages and simple WordPress sites take 5-10 business days."
  },
  {
    id: "faq-plugins",
    question: "02/ How do you avoid plugin bloat on WordPress sites?",
    answer: "Instead of installing 20+ heavy third-party plugins, I develop bespoke, lightweight PHP scripts and custom Gutenberg blocks using native WordPress hooks. This ensures maximum security, zero bloat, and 95+ PageSpeed scores."
  },
  {
    id: "faq-[#crm]",
    question: "03/ Can you integrate custom CRM webhooks & REST APIs?",
    answer: "Yes, I build custom webhooks and REST API connectors in PHP or Node.js. When a client submits a form or completes a checkout, lead data is instantly validated and dispatched to your CRM (HubSpot, Salesforce, Zoho, or custom endpoints) in real-time."
  },
  {
    id: "faq-responsive",
    question: "04/ Will my website be fully mobile-responsive and SEO-ready?",
    answer: "Yes, 100%. Every site and app is engineered mobile-first using responsive layouts, clean semantic HTML5 markup, optimized image delivery, and technical SEO structure to rank high on search engines."
  },
  {
    id: "faq-onboarding",
    question: "05/ How do we get started working together?",
    answer: "Simply submit an inquiry via the contact form on this page or send an email to akashagrahari460@gmail.com. I will review your requirements and send a clear project scope, timeline, and fixed-cost proposal within 24 hours."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rajesh Sharma",
    role: "E-Commerce Founder",
    company: "D2C Brands",
    quote: "Akash optimized our WooCommerce checkout flow and built a custom PHP lead sync plugin. Our store load speed improved dramatically and sales increased by 35% in the first month!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "test-2",
    name: "Vikram Mehta",
    role: "Product Manager",
    company: "TechScale Digital",
    quote: "Working with Akash on our Next.js web application was a seamless experience. Clean code, fast response times, and zero third-party bloat.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "test-3",
    name: "Anjali Verma",
    role: "Marketing Director",
    company: "Growth Media Agency",
    quote: "Akash built a pixel-perfect Elementor landing page integrated directly with our CRM webhooks. The conversion rate exceeded our targets!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Zero-Touch WordPress Blog Publishing with n8n and Skyvern AI",
    category: "AI & Automation",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    summary: "How to automate web research with Skyvern browser agents and orchestrate n8n workflows to publish SEO-optimized articles directly to WordPress.",
    link: "#"
  },
  {
    id: "blog-2",
    title: "Connecting Next.js & React Apps to Custom Webhooks & CRMs",
    category: "Full-Stack Dev",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    summary: "A practical guide to building real-time lead dispatches using serverless functions and RESTful API webhooks.",
    link: "#"
  },
  {
    id: "blog-3",
    title: "Building High-Speed WordPress Sites Without Plugin Bloat",
    category: "WordPress & PHP",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    summary: "Learn how writing custom PHP hooks and native Gutenberg blocks yields 98+ Google PageSpeed insights scores.",
    link: "#"
  }
];
