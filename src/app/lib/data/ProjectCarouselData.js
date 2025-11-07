import claudio from '../../../../public/images/project carousel/claudio.jpg'; 
import delta from '../../../../public/images/project carousel/delta.jpg'; 
import pawel from '../../../../public/images/project carousel/pawel.jpg'; 
import rene from '../../../../public/images/project carousel/rene.jpg'; 

// Amurtam imports
import amurtamBanner from '../../../../public/images/project carousel/amurtam/amurtamBanner.png';

// crypto imports
import crypto from '../../../../public/images/project carousel/crypto-tracker/cryptoBanner.png'

export const slideData = [

  {
    id: 22,
    name: "Amurtam",
    description: "A breathtaking journey through the Swiss Alps with stunning landscapes and pristine lakes. Experience the perfect blend of natural beauty and modern architecture.",
    image: crypto,
    gallery: [claudio, pawel, rene, delta, claudio, pawel],
    technologies: ["NextJS", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://amurtam-frontend.vercel.app/",
    githubUrl: "https://github.com/VishalChoudhary01/amurtam-frontend",
    category: "Landscape Photography",
    year: "2023",
    client: "Travel Co.",
    
    // ENHANCED DATA BELOW
    longDescription: "This comprehensive photography project captures the essence of Switzerland's majestic landscapes. From the iconic Matterhorn to the serene waters of Lake Geneva, every image tells a story of natural wonder. The project combines cutting-edge web technologies with stunning visual content to create an immersive digital experience.",
    
    stats: {
      duration: "6 months",
      images: "120+",
      locations: "15+",
      satisfaction: "98%"
    },
    
    challenges: [
      {
        title: "Performance Optimization",
        description: "Optimized image loading with Next.js Image component, reducing load time by 60%",
        icon: "rocket"
      },
      {
        title: "Responsive Design",
        description: "Created fluid layouts that work seamlessly across all device sizes",
        icon: "mobile"
      },
      {
        title: "Animation Performance",
        description: "Implemented smooth 60fps animations using Framer Motion and GPU acceleration",
        icon: "sparkles"
      }
    ],
    
    // Key features with more detail
    keyFeatures: [
      {
        title: "Interactive Gallery",
        description: "Swipeable image gallery with touch gestures and keyboard navigation",
        highlight: "2000+ interactions"
      },
      {
        title: "Dark/Light Mode",
        description: "Seamless theme switching with persistent user preference",
        highlight: "System sync"
      },
      {
        title: "SEO Optimized",
        description: "Meta tags, structured data, and optimized content for search engines",
        highlight: "100 Score"
      },
      {
        title: "Lazy Loading",
        description: "Progressive image loading with blur placeholders",
        highlight: "60% faster"
      }
    ],
    
    // Technical metrics
    metrics: {
      performance: 98,
      accessibility: 100,
      bestPractices: 95,
      seo: 100,
      loadTime: "1.2s",
      bundleSize: "180kb",
      lighthouse: 98
    },
    
    // Project timeline
    timeline: [
      { phase: "Planning", duration: "2 weeks", status: "completed" },
      { phase: "Design", duration: "3 weeks", status: "completed" },
      { phase: "Development", duration: "12 weeks", status: "completed" },
      { phase: "Testing", duration: "2 weeks", status: "completed" },
      { phase: "Deployment", duration: "1 week", status: "completed" }
    ],
    
    // Tech stack details
    techStackDetails: {
      frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS"],
      animations: ["Framer Motion", "GSAP"],
      performance: ["Turbopack", "Image Optimization", "Code Splitting"],
      deployment: ["Vercel", "Edge Functions", "ISR"],
      testing: ["Jest", "React Testing Library", "Playwright"]
    },
    
    // Team members (if applicable)
    team: [
      { role: "Frontend Developer", name: "You", focus: "Development & Architecture" },
      { role: "UI/UX Designer", name: "Design Team", focus: "Visual Design" },
      { role: "Project Manager", name: "PM Team", focus: "Coordination" }
    ],
    
    // Testimonial
    testimonial: {
      text: "The attention to detail and smooth user experience exceeded our expectations. The website perfectly captures the essence of Switzerland.",
      author: "John Doe",
      position: "CEO, Travel Co.",
      rating: 5
    },
    
    // Color palette
    colorPalette: {
      primary: "#3B82F6",
      secondary: "#8B5CF6",
      accent: "#10B981",
      background: "#F9FAFB",
      text: "#111827"
    },
    
    // Browser support
    browserSupport: ["Chrome 90+", "Firefox 88+", "Safari 14+", "Edge 90+"],
    
    // Accessibility features
    accessibility: [
      "WCAG 2.1 AA Compliant",
      "Keyboard Navigation",
      "Screen Reader Optimized",
      "High Contrast Mode",
      "Focus Indicators"
    ],
    
    // Related projects
    relatedProjects: [2, 4],
    
    // Video demo URL (if you have demo videos)
    demoVideo: "https://youtube.com/demo-video",
    
    // Awards or recognition
    awards: [
      { name: "Awwwards Site of the Day", date: "2023" },
      { name: "CSS Design Awards", date: "2023" }
    ]
  },
  // {
  //   id: 1,
  //   name: "Switzerland",
  //   description: "A breathtaking journey through the Swiss Alps with stunning landscapes and pristine lakes. Experience the perfect blend of natural beauty and modern architecture.",
  //   image: claudio,
  //   gallery: [claudio, pawel, rene, delta, claudio, pawel],
  //   technologies: ["NextJS", "Tailwind CSS", "Framer Motion", "TypeScript"],
  //   liveUrl: "https://switzerland-project.demo",
  //   githubUrl: "https://github.com/yourusername/switzerland-project",
  //   category: "Landscape Photography",
  //   year: "2023",
  //   client: "Travel Co.",
    
  //   // ENHANCED DATA BELOW
  //   longDescription: "This comprehensive photography project captures the essence of Switzerland's majestic landscapes. From the iconic Matterhorn to the serene waters of Lake Geneva, every image tells a story of natural wonder. The project combines cutting-edge web technologies with stunning visual content to create an immersive digital experience.",
    
  //   stats: {
  //     duration: "6 months",
  //     images: "120+",
  //     locations: "15+",
  //     satisfaction: "98%"
  //   },
    
  //   // Project challenges and solutions
  //   challenges: [
  //     {
  //       title: "Performance Optimization",
  //       description: "Optimized image loading with Next.js Image component, reducing load time by 60%",
  //       icon: "rocket"
  //     },
  //     {
  //       title: "Responsive Design",
  //       description: "Created fluid layouts that work seamlessly across all device sizes",
  //       icon: "mobile"
  //     },
  //     {
  //       title: "Animation Performance",
  //       description: "Implemented smooth 60fps animations using Framer Motion and GPU acceleration",
  //       icon: "sparkles"
  //     }
  //   ],
    
  //   // Key features with more detail
  //   keyFeatures: [
  //     {
  //       title: "Interactive Gallery",
  //       description: "Swipeable image gallery with touch gestures and keyboard navigation",
  //       highlight: "2000+ interactions"
  //     },
  //     {
  //       title: "Dark/Light Mode",
  //       description: "Seamless theme switching with persistent user preference",
  //       highlight: "System sync"
  //     },
  //     {
  //       title: "SEO Optimized",
  //       description: "Meta tags, structured data, and optimized content for search engines",
  //       highlight: "100 Score"
  //     },
  //     {
  //       title: "Lazy Loading",
  //       description: "Progressive image loading with blur placeholders",
  //       highlight: "60% faster"
  //     }
  //   ],
    
  //   // Technical metrics
  //   metrics: {
  //     performance: 98,
  //     accessibility: 100,
  //     bestPractices: 95,
  //     seo: 100,
  //     loadTime: "1.2s",
  //     bundleSize: "180kb",
  //     lighthouse: 98
  //   },
    
  //   // Project timeline
  //   timeline: [
  //     { phase: "Planning", duration: "2 weeks", status: "completed" },
  //     { phase: "Design", duration: "3 weeks", status: "completed" },
  //     { phase: "Development", duration: "12 weeks", status: "completed" },
  //     { phase: "Testing", duration: "2 weeks", status: "completed" },
  //     { phase: "Deployment", duration: "1 week", status: "completed" }
  //   ],
    
  //   // Tech stack details
  //   techStackDetails: {
  //     frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS"],
  //     animations: ["Framer Motion", "GSAP"],
  //     performance: ["Turbopack", "Image Optimization", "Code Splitting"],
  //     deployment: ["Vercel", "Edge Functions", "ISR"],
  //     testing: ["Jest", "React Testing Library", "Playwright"]
  //   },
    
  //   // Team members (if applicable)
  //   team: [
  //     { role: "Frontend Developer", name: "You", focus: "Development & Architecture" },
  //     { role: "UI/UX Designer", name: "Design Team", focus: "Visual Design" },
  //     { role: "Project Manager", name: "PM Team", focus: "Coordination" }
  //   ],
    
  //   // Testimonial
  //   testimonial: {
  //     text: "The attention to detail and smooth user experience exceeded our expectations. The website perfectly captures the essence of Switzerland.",
  //     author: "John Doe",
  //     position: "CEO, Travel Co.",
  //     rating: 5
  //   },
    
  //   // Color palette
  //   colorPalette: {
  //     primary: "#3B82F6",
  //     secondary: "#8B5CF6",
  //     accent: "#10B981",
  //     background: "#F9FAFB",
  //     text: "#111827"
  //   },
    
  //   // Browser support
  //   browserSupport: ["Chrome 90+", "Firefox 88+", "Safari 14+", "Edge 90+"],
    
  //   // Accessibility features
  //   accessibility: [
  //     "WCAG 2.1 AA Compliant",
  //     "Keyboard Navigation",
  //     "Screen Reader Optimized",
  //     "High Contrast Mode",
  //     "Focus Indicators"
  //   ],
    
  //   // Related projects
  //   relatedProjects: [2, 4],
    
  //   // Video demo URL (if you have demo videos)
  //   demoVideo: "https://youtube.com/demo-video",
    
  //   // Awards or recognition
  //   awards: [
  //     { name: "Awwwards Site of the Day", date: "2023" },
  //     { name: "CSS Design Awards", date: "2023" }
  //   ]
  // },
  // {
  //   id: 2,
  //   name: "Thailand",
  //   description: "Vibrant culture meets tropical paradise. Explore ancient temples, bustling markets, and pristine beaches in this Southeast Asian gem.",
  //   image: pawel,
  //   gallery: [pawel, delta, claudio, rene, pawel, delta],
  //   technologies: ["React", "Node.js", "MongoDB", "Express"],
  //   liveUrl: "https://thailand-project.demo",
  //   githubUrl: "https://github.com/yourusername/thailand-project",
  //   category: "Cultural Photography",
  //   year: "2023",
  //   client: "Adventure Inc.",
    
  //   longDescription: "Immerse yourself in the rich cultural tapestry of Thailand through this comprehensive visual narrative. Built with a full-stack MERN architecture for optimal performance and scalability.",
    
  //   stats: {
  //     duration: "4 months",
  //     images: "80+",
  //     locations: "12+",
  //     satisfaction: "95%"
  //   },
    
  //   challenges: [
  //     {
  //       title: "Database Optimization",
  //       description: "Implemented MongoDB indexing and aggregation pipelines for faster queries",
  //       icon: "database"
  //     },
  //     {
  //       title: "Real-time Updates",
  //       description: "Integrated WebSocket for live content updates and user interactions",
  //       icon: "bolt"
  //     },
  //     {
  //       title: "API Architecture",
  //       description: "Built RESTful API with proper error handling and validation",
  //       icon: "code"
  //     }
  //   ],
    
  //   keyFeatures: [
  //     {
  //       title: "User Authentication",
  //       description: "Secure JWT-based authentication with OAuth integration",
  //       highlight: "Bank-level security"
  //     },
  //     {
  //       title: "Content Management",
  //       description: "Custom CMS for easy content updates and management",
  //       highlight: "Real-time"
  //     },
  //     {
  //       title: "Search Functionality",
  //       description: "Advanced search with filters and autocomplete",
  //       highlight: "Instant results"
  //     },
  //     {
  //       title: "API Integration",
  //       description: "RESTful API with comprehensive documentation",
  //       highlight: "99.9% uptime"
  //     }
  //   ],
    
  //   metrics: {
  //     performance: 95,
  //     accessibility: 98,
  //     bestPractices: 92,
  //     seo: 97,
  //     loadTime: "1.5s",
  //     bundleSize: "220kb",
  //     lighthouse: 95
  //   },
    
  //   timeline: [
  //     { phase: "Research", duration: "1 week", status: "completed" },
  //     { phase: "Architecture", duration: "2 weeks", status: "completed" },
  //     { phase: "Backend Development", duration: "6 weeks", status: "completed" },
  //     { phase: "Frontend Development", duration: "6 weeks", status: "completed" },
  //     { phase: "Integration & Testing", duration: "3 weeks", status: "completed" }
  //   ],
    
  //   techStackDetails: {
  //     frontend: ["React 18", "Redux Toolkit", "React Router", "Axios"],
  //     backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
  //     authentication: ["JWT", "bcrypt", "OAuth 2.0"],
  //     deployment: ["AWS EC2", "Nginx", "PM2", "MongoDB Atlas"],
  //     testing: ["Jest", "Supertest", "Postman"]
  //   },
    
  //   team: [
  //     { role: "Full Stack Developer", name: "You", focus: "End-to-end Development" },
  //     { role: "Backend Consultant", name: "Tech Team", focus: "Architecture Review" }
  //   ],
    
  //   testimonial: {
  //     text: "A robust and scalable solution that handles thousands of users seamlessly. The performance is outstanding.",
  //     author: "Jane Smith",
  //     position: "CTO, Adventure Inc.",
  //     rating: 5
  //   },
    
  //   colorPalette: {
  //     primary: "#EF4444",
  //     secondary: "#F59E0B",
  //     accent: "#10B981",
  //     background: "#FFFFFF",
  //     text: "#1F2937"
  //   },
    
  //   browserSupport: ["Chrome 90+", "Firefox 88+", "Safari 14+", "Edge 90+"],
    
  //   accessibility: [
  //     "WCAG 2.1 AA Compliant",
  //     "Keyboard Navigation",
  //     "ARIA Labels",
  //     "Alt Text for Images"
  //   ],
    
  //   relatedProjects: [1, 3],
    
  //   demoVideo: "https://youtube.com/thailand-demo"
  // },
  // {
  //   id: 3,
  //   name: "China",
  //   description: "From the Great Wall to modern megacities, discover the rich history and rapid development of this ancient civilization.",
  //   image: delta,
  //   gallery: [rene, pawel, delta, claudio, rene, pawel],
  //   technologies: ["Vue.js", "Firebase", "Three.js", "GSAP"],
  //   liveUrl: "https://china-project.demo",
  //   githubUrl: "https://github.com/yourusername/china-project",
  //   category: "Urban Photography",
  //   year: "2023",
  //   client: "Global Explorers",
    
  //   longDescription: "A photographic journey through China's contrasting landscapes and cityscapes. Features advanced 3D visualizations and interactive elements powered by Three.js.",
    
  //   stats: {
  //     duration: "5 months",
  //     images: "150+",
  //     locations: "20+",
  //     satisfaction: "97%"
  //   },
    
  //   challenges: [
  //     {
  //       title: "3D Performance",
  //       description: "Optimized Three.js rendering for smooth 60fps on mobile devices",
  //       icon: "cube"
  //     },
  //     {
  //       title: "Complex Animations",
  //       description: "Choreographed multi-layer GSAP animations with scroll triggers",
  //       icon: "magic"
  //     },
  //     {
  //       title: "Firebase Integration",
  //       description: "Real-time data sync with offline support and caching",
  //       icon: "cloud"
  //     }
  //   ],
    
  //   keyFeatures: [
  //     {
  //       title: "3D Visualization",
  //       description: "Interactive 3D city models with WebGL rendering",
  //       highlight: "Immersive"
  //     },
  //     {
  //       title: "Scroll Animations",
  //       description: "Parallax effects and scroll-triggered animations",
  //       highlight: "Smooth 60fps"
  //     },
  //     {
  //       title: "Real-time Data",
  //       description: "Firebase integration for live updates",
  //       highlight: "Instant sync"
  //     },
  //     {
  //       title: "Progressive Enhancement",
  //       description: "Graceful degradation for older browsers",
  //       highlight: "Universal support"
  //     }
  //   ],
    
  //   metrics: {
  //     performance: 93,
  //     accessibility: 96,
  //     bestPractices: 94,
  //     seo: 98,
  //     loadTime: "1.8s",
  //     bundleSize: "280kb",
  //     lighthouse: 94
  //   },
    
  //   timeline: [
  //     { phase: "Concept", duration: "2 weeks", status: "completed" },
  //     { phase: "3D Modeling", duration: "4 weeks", status: "completed" },
  //     { phase: "Development", duration: "10 weeks", status: "completed" },
  //     { phase: "Animation", duration: "3 weeks", status: "completed" },
  //     { phase: "Optimization", duration: "2 weeks", status: "completed" }
  //   ],
    
  //   techStackDetails: {
  //     frontend: ["Vue 3", "Composition API", "Pinia", "Vue Router"],
  //     graphics: ["Three.js", "WebGL", "GSAP", "ScrollTrigger"],
  //     backend: ["Firebase", "Cloud Functions", "Firestore"],
  //     deployment: ["Firebase Hosting", "CDN", "Cloud Storage"],
  //     testing: ["Vitest", "Cypress", "Lighthouse CI"]
  //   },
    
  //   team: [
  //     { role: "Frontend Developer", name: "You", focus: "Development & 3D Integration" },
  //     { role: "3D Artist", name: "Design Studio", focus: "3D Assets" },
  //     { role: "Animation Lead", name: "Motion Team", focus: "Animations" }
  //   ],
    
  //   testimonial: {
  //     text: "The 3D visualizations are breathtaking. This project sets a new standard for interactive web experiences.",
  //     author: "Michael Chen",
  //     position: "Director, Global Explorers",
  //     rating: 5
  //   },
    
  //   colorPalette: {
  //     primary: "#DC2626",
  //     secondary: "#FBBF24",
  //     accent: "#059669",
  //     background: "#F3F4F6",
  //     text: "#111827"
  //   },
    
  //   browserSupport: ["Chrome 90+", "Firefox 88+", "Safari 14+", "Edge 90+"],
    
  //   accessibility: [
  //     "Reduced Motion Support",
  //     "Keyboard Controls for 3D",
  //     "Alt Navigation Options",
  //     "Color Contrast Verified"
  //   ],
    
  //   relatedProjects: [4, 6],
    
  //   demoVideo: "https://youtube.com/china-demo",
    
  //   awards: [
  //     { name: "FWA Site of the Day", date: "2023" }
  //   ]
  // },
  // // Add similar enhanced data for projects 4, 5, and 6...
  // {
  //   id: 4,
  //   name: "Japan",
  //   description: "Where tradition meets innovation. Experience cherry blossoms, ancient temples, and cutting-edge technology in perfect harmony.",
  //   image: claudio,
  //   gallery: [claudio, rene, pawel, delta, claudio, rene],
  //   technologies: ["Angular", "Firebase", "Three.js", "GSAP"],
  //   liveUrl: "https://japan-project.demo",
  //   githubUrl: "https://github.com/yourusername/japan-project",
  //   category: "Mixed Photography",
  //   year: "2024",
  //   client: "Culture Partners",
  //   longDescription: "Japan's unique blend of ancient traditions and futuristic innovation captured through interactive storytelling and advanced web technologies.",
  //   stats: {
  //     duration: "5 months",
  //     images: "200+",
  //     locations: "25+",
  //     satisfaction: "99%"
  //   },
  //   metrics: {
  //     performance: 96,
  //     accessibility: 99,
  //     bestPractices: 95,
  //     seo: 98,
  //     loadTime: "1.3s",
  //     bundleSize: "195kb",
  //     lighthouse: 97
  //   },
  //   relatedProjects: [1, 3]
  // },
  // {
  //   id: 5,
  //   name: "Scotland",
  //   description: "Majestic highlands, ancient castles, and rugged coastlines. Discover the wild beauty and rich history of Scotland.",
  //   image: pawel,
  //   gallery: [pawel, delta, claudio, rene, pawel, delta],
  //   technologies: ["React", "GraphQL", "PostgreSQL", "Netlify"],
  //   liveUrl: "https://scotland-project.demo",
  //   githubUrl: "https://github.com/yourusername/scotland-project",
  //   category: "Landscape Photography",
  //   year: "2023",
  //   client: "Heritage Tours",
  //   longDescription: "Explore the dramatic landscapes and rich history of Scotland through this comprehensive photography project with GraphQL-powered data layer.",
  //   stats: {
  //     duration: "3 months",
  //     images: "90+",
  //     locations: "18+",
  //     satisfaction: "96%"
  //   },
  //   metrics: {
  //     performance: 97,
  //     accessibility: 98,
  //     bestPractices: 94,
  //     seo: 96,
  //     loadTime: "1.1s",
  //     bundleSize: "165kb",
  //     lighthouse: 96
  //   },
  //   relatedProjects: [1, 6]
  // },
  // {
  //   id: 6,
  //   name: "Finland",
  //   description: "Northern lights, midnight sun, and pristine wilderness. Experience the magic of the Arctic Circle and Finnish sauna culture.",
  //   image: delta,
  //   gallery: [delta, claudio, pawel, rene, delta, claudio],
  //   technologies: ["NextJS", "Sanity CMS", "Vercel", "Framer Motion"],
  //   liveUrl: "https://finland-project.demo",
  //   githubUrl: "https://github.com/yourusername/finland-project",
  //   category: "Nature Photography",
  //   year: "2024",
  //   client: "Arctic Adventures",
  //   longDescription: "Discover the magical landscapes of Finland with a headless CMS-powered experience featuring real-time content updates and beautiful animations.",
  //   stats: {
  //     duration: "4 months",
  //     images: "110+",
  //     locations: "14+",
  //     satisfaction: "97%"
  //   },
  //   metrics: {
  //     performance: 99,
  //     accessibility: 100,
  //     bestPractices: 96,
  //     seo: 99,
  //     loadTime: "0.9s",
  //     bundleSize: "155kb",
  //     lighthouse: 98
  //   },
  //   relatedProjects: [3, 5]
  // }
];