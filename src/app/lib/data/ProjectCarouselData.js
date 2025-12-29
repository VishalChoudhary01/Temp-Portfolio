// Amrutam imports
import amurtamBanner from '../../../../public/images/project carousel/amurtam/amurtamBanner.png';
import amurtam_features from '../../../../public/images/project carousel/amurtam/gallery/features.png';
import amurtam_hero from '../../../../public/images/project carousel/amurtam/gallery/hero.png';
import amurtam_iphone from '../../../../public/images/project carousel/amurtam/gallery/iphone.png';
import amurtam_landscape from '../../../../public/images/project carousel/amurtam/gallery/landscapetablet.png';
import amurtam_tablet from '../../../../public/images/project carousel/amurtam/gallery/tablet.png';
import amurtam_testimonial from '../../../../public/images/project carousel/amurtam/gallery/testimonial.png';
import amurtam_process from '../../../../public/images/project carousel/amurtam/gallery/process.png';

// Trailor Ride imports
import trailorBanner from '../../../../public/images/project carousel/trailor-ride/trailorBanner.png';
import trailor_mobile from '../../../../public/images/project carousel/trailor-ride/gallery/mobile.png';
import trailor_mobile_community from '../../../../public/images/project carousel/trailor-ride/gallery/mobile_community.png';
import trailor_mobile_brands from '../../../../public/images/project carousel/trailor-ride/gallery/mobileBrands.png'; 
import trailor_community from '../../../../public/images/project carousel/trailor-ride/gallery/coumminity-bentogrid.png';
import trailor_tablet from '../../../../public/images/project carousel/trailor-ride/gallery/tablet_hero.png';

// Crypto imports
import crypto_banner from '../../../../public/images/project carousel/crypto-tracker/cryptoBanner.png';

// Common react icons imports
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { RiSparkling2Line } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";

export const slideData = [

  {
id: 1,
name: "Crypto Tracker",
projectType: "Cryptocurrency Price Dashboard ",
description: "A responsive dashboard that lists cryptocurrencies, provides trending coins, allows saving favorites, and displays simple charts for price trends.",
image: crypto_banner,
technologies: ["Vite", "React", "Tailwind CSS", "Recharts", "Redux Toolkit", "React Router", "Axios", "React Icons", "Motion"],
liveUrl: "https://crypto-tracker-two-olive.vercel.app/",
githubUrl: "https://github.com/VishalChoudhary01/Crypto-Tracker",
category: "Finance & Dashboard",
year: "2024",

longDescription: "Crypto Tracker is a client-side dashboard built with Vite and React that fetches crypto market data, displays it in a searchable table with charts, provides a trending view, and supports saving coins to a local store.",
about: {
    short:
      "Crypto Tracker is a personal frontend project focused on building a responsive cryptocurrency dashboard using live market data, with emphasis on clean UI, state management, and data visualization."
  },
stats: {
developmentTime: "7 days",
pages: "3 (Home, Trending, Saved Coins) + modal",
components: "6+ (CoinTable, Navbar, Searchbar, Loader, Logo, Toast, etc.)",
responsiveBreakpoints: "3",
lighthousePerformance: 61,
lighthouseAccessibility: 85,
lighthouseBestPractices: 100,
lighthouseSEO: 91,
loadTime: "Depends on environment",
coreWebVitals: "Unknown"
},

bentoGrid: [
{
id: 1,
title: "Coin Table (Home)",
description: "Main table listing live coin prices, 24h changes, and quick actions (save/view).",
image: "coin_table_image",
gridPosition: "col-span-2 row-span-2",
category: "data",
size: "large"
},
{
id: 2,
title: "Search & Filters",
description: "Searchbar to find coins with debounce and filter controls.",
image: "search_filter_image",
gridPosition: "col-span-1 row-span-1",
category: "utility",
size: "medium"
},
{
id: 3,
title: "Trending",
description: "Trending coins view highlighting movers and short charts.",
image: "trending_image",
gridPosition: "col-span-1 row-span-1",
category: "showcase",
size: "medium"
},
{
id: 4,
title: "Saved Coins Panel",
description: "User-saved coins persisted in Redux for quick access.",
image: "saved_coins_image",
gridPosition: "col-span-1 row-span-2",
category: "persistence",
size: "tall"
},
{
id: 5,
title: "Details Modal",
description: "Modal with coin details and Recharts visual for selected coin.",
image: "details_modal_image",
gridPosition: "col-span-2 row-span-1",
category: "details",
size: "wide"
}
],

keyFeatures: [
{
title: "Live Market Data",
description: "Fetches crypto prices and updates the UI with Axios-powered API calls.",
highlight: "Real-time Lists & Updates"
},
{
title: "Search & Debounce",
description: "Debounced search for smooth typing experience using use-debounce.",
highlight: "Fast Search"
},
{
title: "Saved Coins",
description: "Save and retrieve favorite coins via Redux Toolkit store.",
highlight: "Persistent Favorites"
},
{
title: "Charts",
description: "Visualize price trends using recharts for small inline charts.",
highlight: "Mini Trend Charts"
}
],

techStack: {
frontend: [
{ name: "Vite", version: "^6.2.0" },
{ name: "React", version: "^19.0.0" },
{ name: "Tailwind CSS", version: "^4.0.15" },
{ name: "Recharts", version: "^2.15.1" },
{ name: "Redux Toolkit", version: "^2.6.1" },
{ name: "React Router", version: "^7.4.0" },
{ name: "Axios", version: "^1.8.4" },
{ name: "Motion", version: "^12.6.3" },
{ name: "React Icons", version: "^5.5.0" }
]
},

challenges: [
{
title: "Data freshness & rate limits",
description: "Balancing live fetch frequency with API rate limits and UX.",
icon: RiSparkling2Line
},
{
title: "State & persistence",
description: "Designing a small Redux slice to persist saved coins and sync UI.",
icon: ImDatabase
}
],

developmentInfo: {
type: "Personal Project",
status: "Completed",
focus: "UI, data visualization, frontend state management"
},

pages: [
{
name: "Home",
description: "Coin table with search, sorting, and quick actions.",
features: ["Coin table", "Search bar", "Save coin action", "Details modal"]
},
{
name: "Trending",
description: "Lists trending movers with compact charts and links.",
features: ["Trending list", "Mini charts"]
},
{
name: "Saved Coins",
description: "Shows user-saved coins with quick navigation to details.",
features: ["Saved list", "Remove/save actions"]
}
],

learningOutcomes: [
"Building a Vite + React app with fast HMR",
"State management using Redux Toolkit",
"API integration and debounced search UX",
"Data visualization with Recharts",
"Responsive UI with Tailwind CSS"
],

futureEnhancements: [
"Add user authentication and cloud-synced favorites",
"Improve caching and server-side aggregation for rate limits",
"Add dark mode and theming support",
"Convert to PWA for offline access and notifications"
]
},
  {
    id: 4,
    name: "Amrutam",
    projectType: "Healthcare Landing Page",
    description: "A modern healthcare platform bridging traditional Ayurvedic medicine with digital accessibility.",
    image: amurtamBanner,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "React Router"],
    liveUrl: "https://amurtam-frontend.vercel.app/",
    githubUrl: "https://github.com/VishalChoudhary01/amurtam-frontend",
    figmaUrl: "https://www.figma.com/design/6sg7GHDwjkcXdPq6ULtZDS/Amurtam-frontend?t=OwWMbZZQpFhaxf7A-1",
    category: "Healthcare & Wellness",
    year: "2023",
    gallery: [amurtam_features, amurtam_hero, amurtam_iphone, amurtam_landscape, amurtam_tablet, amurtam_testimonial, amurtam_process],
    about: {
    short:
    "Frontend assignment focused on converting a provided Figma design into a responsive, production-ready healthcare landing page using React and Tailwind CSS, with emphasis on layout accuracy and smooth animations."
    },

    longDescription: "Amrutam is a healthcare platform that connects users with Ayurvedic practitioners. Built with modern React patterns, it demonstrates advanced UI/UX principles and responsive design.",
    
    stats: {
      developmentTime: "4 Days",
      pages: "2",
      components: "10+",
      responsiveBreakpoints: "3",
      lighthousePerformance: 82,
      lighthouseAccessibility: 85,
      lighthouseBestPractices: 92,
      lighthouseSEO: 91,
      loadTime: "1.8s",
      coreWebVitals: "Good"
    },

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
        highlight: "82 Performance Score"
      },
      {
        title: "Modern Animations",
        description: "Smooth transitions and micro-interactions using Framer Motion",
        highlight: "60fps Animations"
      }
    ],

    techStack: {
      frontend: [
        { name: "React", version: "18.3.1" },
        { name: "Vite", version: "6.0.1" },
        { name: "Tailwind CSS", version: "3.4.16" },
        { name: "React Router", version: "7.0.2" },
        { name: "Motion", version: "11.15.0" },
        { name: "React Icons", version: "5.4.0" }
      ]
    },

    challenges: [
      {
        title: "Performance Optimization",
        description: "Implemented lazy loading and image optimization for faster load times",
        icon: BsFillRocketTakeoffFill,
      },
      {
        title: "Responsive Design System",
        description: "Built mobile-first responsive layouts using Tailwind CSS",
        icon: FaMobileAlt,
      }
    ],

    developmentInfo: {
      type: "Personal Project",
      status: "Completed",
      focus: "UI/UX & Frontend Development"
    },

    // Other data
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
      }
    ],

    learningOutcomes: [
  "Advanced React hooks and custom hooks",
  "Performance optimization techniques",
  "Responsive design with Tailwind CSS",
  "Animation implementation with Framer Motion"
],


    futureEnhancements: [
      "User authentication system",
      "Real-time chat functionality",
      "Advanced filtering options",
      "Dark mode implementation"
    ]
  },

  {
    id: 25,
    name: "Trailor Ride",
    projectType: "Motorcycle E-Commerce Landing Page",
    description: "A modern, high-performance motorcycle landing page showcasing premium models, generating leads, and promoting a mobile companion app.",
    image: trailorBanner,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "React Icons"],
    liveUrl: "https://trailor-trade.vercel.app",
    githubUrl: "https://github.com/VishalChoudhary01/Trailor-Trade-.git",
    figmaUrl:"https://www.figma.com/design/Z3IQPsEokQ9c2ho1n1wDTC/NextJS-Assignment--Part-1--by-webbywolf--Community---Copy-?node-id=31-6&t=I8ARFhLP9W6uRNVQ-1",
    category: "E-commerce & Automotive",
    year: "2024",
    about: {
  short:
    "Landing page implementation built from a provided design to showcase motorcycle models, focusing on responsive layout engineering, performance optimization, and polished UI animations using Next.js."
},

    longDescription: "Trailor Ride is a responsive landing page built with Next.js and Tailwind CSS designed to showcase motorcycle models, capture leads through conversion-focused forms, and promote the companion mobile app.",

    // Consolidated stats
    stats: {
      developmentTime: "5 Days",
      pages: "1 (Landing)",
      components: "20+",
      responsiveBreakpoints: "3",
      // Moved performance data here
      lighthousePerformance: 62,
      lighthouseAccessibility: 83,
      lighthouseBestPractices: 100,
      lighthouseSEO: 92,
      loadTime: "1.8s",
      coreWebVitals: "Good"
    },

    bentoGrid: [
      {
        id: 1,
        title: "Hero / Digital Showroom",
        description: "Large hero with featured motorcycles and primary CTA.",
        image: trailor_mobile,
        gridPosition: "col-span-2 row-span-2",
        category: "design",
        size: "large"
      },
      {
        id: 2,
        title: "Bikes Showcase",
        description: "Model cards with specs and quick actions.",
        image: trailor_mobile_community,
        gridPosition: "col-span-1 row-span-1",
        category: "showcase",
        size: "medium"
      },
      {
        id: 3,
        title: "Testimonials",
        description: "Customer reviews carousel to build trust.",
        image: trailor_mobile_brands,
        gridPosition: "col-span-1 row-span-1",
        category: "testimonials",
        size: "medium"
      },
      {
        id: 4,
        title: "Mobile App Promo",
        description: "Promotional section for the companion app with CTA to download.",
        image: trailor_community,
        gridPosition: "col-span-1 row-span-2",
        category: "mobile",
        size: "tall"
      },
      {
        id: 6,
        title: "Tablet / Responsive Preview",
        description: "Showcase layout optimized for tablet breakpoints.",
        image: trailor_tablet,
        gridPosition: "col-span-2 row-span-1",
        category: "responsive",
        size: "wide"
      }
    ],

    keyFeatures: [
      {
        title: "Digital Showroom",
        description: "Showcase multiple motorcycle models with specifications and CTAs.",
        highlight: "Model Cards & CTAs"
      },
      {
        title: "Lead Generation",
        description: "Conversion-focused forms for quotes and test ride bookings.",
        highlight: "High-converting Forms"
      },
      {
        title: "Performance Focused",
        description: "Optimized assets, dynamic imports, and minimal client JS.",
        highlight: "62 Performance Score"
      },
      {
        title: "Modern Animations",
        description: "Smooth transitions and micro-interactions using Motion.",
        highlight: "60fps Animations"
      }
    ],

    techStack: {
      frontend: [
        { name: "Next.js", version: "16.0.7" },
        { name: "React", version: "19.2.0" },
        { name: "TypeScript", version: "5" },
        { name: "Tailwind CSS", version: "4" },
        { name: "Motion", version: "12.23.24" },
        { name: "React Icons", version: "5.5.0" }
      ]
    },

    challenges: [
      {
        title: "Performance Optimization",
        description: "Implemented image optimization, dynamic imports to improve Lighthouse scores.",
        icon: BsFillRocketTakeoffFill
      },
      {
        title: "Responsive Design System",
        description: "Built a mobile-first responsive system using Tailwind CSS.",
        icon: FaMobileAlt
      }
    ],

    developmentInfo: {
      type: "Personal Project",
      status: "Completed",
      focus: "UI/UX & Frontend Development"
    },

    // Removed separate performanceMetrics object
    // performanceMetrics is now part of stats

    // Other data
    pages: [
      {
        name: "Home",
        description: "Landing page with hero, bike showcase, and CTAs",
        features: ["Hero section", "Bikes showcase", "Lead capture forms", "App promo"]
      }
    ],

    learningOutcomes: [
  "Next.js App Router and server components",
  "Performance optimization with dynamic imports and image optimization",
  "Responsive design using Tailwind CSS",
  "Animation and interaction design using Motion"
],

    futureEnhancements: [
      "User authentication and profile flows",
      "In-app booking and real-time availability",
      "Advanced filtering and search for models",
      "Dark mode and theming"
    ]
  }
];