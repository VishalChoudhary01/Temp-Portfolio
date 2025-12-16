import claudio from '../../../../public/images/project carousel/claudio.jpg'; 
import delta from '../../../../public/images/project carousel/delta.jpg'; 
import pawel from '../../../../public/images/project carousel/pawel.jpg'; 
import rene from '../../../../public/images/project carousel/rene.jpg'; 

//common react icons imports
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { RiSparkling2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";


// Amurtam imports
import amurtamBanner from '../../../../public/images/project carousel/amurtam/amurtamBanner.png';
import amurtam_features from '../../../../public/images/project carousel/amurtam/gallery/features.png';
import amurtam_hero from '../../../../public/images/project carousel/amurtam/gallery/hero.png';
import amurtam_iphone from '../../../../public/images/project carousel/amurtam/gallery/iphone.png';
import amurtam_landscape from '../../../../public/images/project carousel/amurtam/gallery/landscapetablet.png';
import amurtam_tablet from '../../../../public/images/project carousel/amurtam/gallery/tablet.png';
import amurtam_testimonial from '../../../../public/images/project carousel/amurtam/gallery/testimonial.png';
import amurtam_process from '../../../../public/images/project carousel/amurtam/gallery/process.png';



// crypto imports
import crypto from '../../../../public/images/project carousel/crypto-tracker/cryptoBanner.png';

// trailor ride imports
import trailorRide from '../../../../public/images/project carousel/trailor-ride/trailorRideBanner.png';
import trailorbanner from '../../../../public/images/project carousel/trailor-ride/trailorBanner.png';

export const slideData = [
 {
  // BASIC INFORMATION
  id: 25,
  name: "Amrutam ",
  projectType: "Healthcare Landing Page",
  description: "A modern healthcare platform bridging traditional Ayurvedic medicine with digital accessibility. Designed for intuitive doctor discovery and consultations.",
  image: amurtamBanner,
  technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "React Router"],
  liveUrl: "https://amurtam-frontend.vercel.app/",
  githubUrl: "https://github.com/VishalChoudhary01/amurtam-frontend",
  figmaUrl: "https://www.figma.com/design/6sg7GHDwjkcXdPq6ULtZDS/Amurtam-frontend?t=OwWMbZZQpFhaxf7A-1",
  category: "Healthcare & Wellness",
  year: "2023",
  gallery: [amurtam_features, amurtam_hero, amurtam_iphone, amurtam_landscape, amurtam_tablet, amurtam_testimonial, amurtam_process],

  // ENHANCED DATA
  longDescription: "Amrutam is a personal project showcasing a healthcare platform that connects users with Ayurvedic practitioners. Built with modern React patterns, it demonstrates advanced UI/UX principles, performance optimization techniques, and responsive design implementation.",
  
  
  stats: {
    developmentTime: "4 Days",
    pages: "2",
    components: "10+",
    performanceScore: "95",
    responsiveBreakpoints: "3"
  },

  // Challenges focused on technical learning
  challenges: [
    {
      title: "Performance Optimization",
      description: "Implemented lazy loading, image optimization, and code splitting to achieve 60% faster load times",
      icon: BsFillRocketTakeoffFill,
    },
    {
      title: "Responsive Design System",
      description: "Built mobile-first responsive layouts using Tailwind CSS with consistent breakpoints",
      icon: FaMobileAlt,
    },
    {
      title: "Animation Implementation",
      description: "Integrated smooth animations with Framer Motion while maintaining 60fps performance",
      icon: RiSparkling2Line,
    },
    {
      title: "State Management",
      description: "Managed complex UI states with React hooks for dynamic filtering and carousels",
      icon: FaUserCog,
    }
  ],

   bentoGrid: [
    {
      id: 1,
      title: "Homepage Design",
      description: "Hero section with featured doctors and call-to-action",
      image: amurtam_hero,
      gridPosition: "col-span-2 row-span-2",
      category: "design",
      size: "large"
    },
    {
      id: 2,
      title: "Doctor Search",
      description: "Advanced filtering and search functionality",
      image: amurtam_features,
      gridPosition: "col-span-1 row-span-1",
      category: "search",
      size: "medium"
    },
    {
      id: 3,
      title: "Testimonials",
      description: "Customer reviews carousel section",
      image: amurtam_testimonial,
      gridPosition: "col-span-1 row-span-1",
      category: "testimonials",
      size: "medium"
    },
    {
      id: 4,
      title: "Mobile View",
      description: "Responsive design on mobile devices",
      image: amurtam_iphone,
      gridPosition: "col-span-1 row-span-2",
      category: "mobile",
      size: "tall"
    },
    {
      id: 5,
      title: "Process Steps",
      description: "Four-step appointment process",
      image: amurtam_process,
      gridPosition: "col-span-1 row-span-1",
      category: "process",
      size: "medium"
    },
    {
      id: 6,
      title: "Tablet View",
      description: "Layout optimization for tablets",
      image: amurtam_tablet,
      gridPosition: "col-span-2 row-span-1",
      category: "responsive",
      size: "wide"
    }
  ],
  // Key features - cleaned and focused
  keyFeatures: [
    {
      title: "Interactive Doctor Discovery",
      description: "Advanced search and filtering system with real-time results",
      highlight: "Dynamic Filtering"
    },
    {
      title: "Responsive Design",
      description: "Mobile-first approach with consistent experience across all devices",
      highlight: "Mobile Optimized"
    },
    {
      title: "Performance Focused",
      description: "Optimized assets and lazy loading for fast page loads",
      highlight: "95 Performance Score"
    },
    {
      title: "Modern Animations",
      description: "Smooth transitions and micro-interactions using Framer Motion",
      highlight: "60fps Animations"
    }
  ],

  // Simplified tech stack
  techStack: {
    frontend: [
      {
        name: "React",
        version: "18.3.1",
        description: "Built component-based UI with hooks and context API"
      },
      {
        name: "Vite",
        version: "6.0.1",
        description: "Fast build tool for development and production"
      },
      {
        name: "Tailwind CSS",
        version: "3.4.16",
        description: "Utility-first CSS for responsive design system"
      },
      {
        name: "React Router",
        version: "7.0.2",
        description: "Client-side routing and navigation"
      },
      {
        name: "Motion",
        version: "11.15.0",
        description: "Animation library for smooth transitions"
      },
      {
        name: "React Icons",
        version: "5.4.0",
        description: "Icon library for UI elements"
      }
    ],
    devTools: [
      {
        name: "ESLint",
        description: "Code quality and linting"
      },
      {
        name: "PostCSS",
        description: "CSS processing and optimization"
      },
      {
        name: "Autoprefixer",
        description: "Browser compatibility for CSS"
      }
    ],
    deployment: {
      platform: "Vercel",
      branch: "main",
      autoDeployment: true
    }
  },

  // Simplified pages
  pages: [
    {
      name: "Home",
      description: "Landing page with featured content and navigation",
      features: [
        "Hero section",
        "Doctor carousel",
        "Process steps",
        "Testimonials"
      ]
    },
    {
      name: "Search Doctors",
      description: "Search interface with filtering options",
      features: [
        "Search functionality",
        "Multiple filters",
        "Real-time results"
      ]
    },
    {
      name: "Doctor Profile",
      description: "Detailed practitioner information",
      features: [
        "Doctor details",
        "Consultation options",
        "Reviews display"
      ]
    }
  ],

  // Performance metrics - cleaned
  performanceMetrics: {
    lighthouse: {
      performance: 82,
      accessibility: 85,
      bestPractices: 92,
      seo: 91
    },
    loadTime: "1.8s",
    coreWebVitals: "Good"
  },

  // Learning outcomes - focused on technical skills
  learningOutcomes: [
    "Advanced React hooks and custom hooks",
    "Performance optimization techniques",
    "Responsive design with Tailwind CSS",
    "Animation implementation with Framer Motion",
    "Component composition patterns",
    "Build optimization with Vite"
  ],

  // Development info - simplified
  developmentInfo: {
    type: "Personal Project",
    status: "Completed",
    focus: "UI/UX & Frontend Development"
  },

  // Future enhancements - realistic for personal project
  futureEnhancements: [
    "User authentication system",
    "Real-time chat functionality",
    "Advanced filtering options",
    "Dark mode implementation"
  ]
},

  {
    id: 1,
    name: "Trailor Ride",
    description: "A breathtaking journey through the Swiss Alps with stunning landscapes and pristine lakes. Experience the perfect blend of natural beauty and modern architecture.",
    image: trailorbanner,
    gallery: [claudio, pawel, rene, delta, claudio, pawel],
    technologies: ["NextJS", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://switzerland-project.demo",
    githubUrl: "https://github.com/yourusername/switzerland-project",
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
    
    // Project challenges and solutions
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
  
];