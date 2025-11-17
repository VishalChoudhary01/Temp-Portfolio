"use client";
import { useState, useEffect, useRef } from "react";
import { 
  FaChevronLeft, 
  FaTimes, 
  FaExpand, 
  FaGithub,
  FaCalendar,
  FaUser,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaShare,
  FaHeart,
  FaCode,
  FaRocket,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaArrowUp,
  FaArrowDown,
  FaSun,
  FaMoon,
  FaDesktop,
  FaLink,
  FaMobile,
  FaTablet,
  FaGlobe,
  FaPalette,
  FaLightbulb,
  FaCog
} from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript, SiJavascript, SiReact, SiVite } from "react-icons/si";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { slideData } from '@/app/lib/data/index';
import TopGradientWave from "@/app/components/templates/TopGradientWave";

// Technology icons mapping
const techIcons = {
  "NextJS": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "React": SiReact,
  "Vite": SiVite
};

export default function ProjectDetailPage({ projectId }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Refs for scroll animations
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);
  const techRef = useRef(null);
  const bentoRef = useRef(null);
  const ctaRef = useRef(null);
  const bottomRef = useRef(null);

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Check if elements are in view
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-50px" });
  const techInView = useInView(techRef, { once: true, margin: "-100px" });
  const bentoInView = useInView(bentoRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const bottomInView = useInView(bottomRef, { margin: "-100px" });

  // Enhanced screenshots data with mosaic layout
  const projectScreenshots = {
    dark: [
      { 
        id: 1, 
        image: project?.gallery?.[0] || project?.image, 
        title: "Dashboard Dark", 
        description: "Dark mode dashboard interface",
        layout: 'wide'
      },
      { 
        id: 2, 
        image: project?.gallery?.[1] || project?.image, 
        title: "Analytics Dark", 
        description: "Data visualization in dark theme",
        layout: 'tall'
      },
      { 
        id: 3, 
        image: project?.gallery?.[2] || project?.image, 
        title: "Settings Dark", 
        description: "Dark mode settings page",
        layout: 'square'
      },
    ],
    light: [
      { 
        id: 4, 
        image: project?.gallery?.[3] || project?.image, 
        title: "Dashboard Light", 
        description: "Light mode dashboard experience",
        layout: 'big'
      },
      { 
        id: 5, 
        image: project?.gallery?.[4] || project?.image, 
        title: "Analytics Light", 
        description: "Light theme data visualization",
        layout: 'wide'
      },
      { 
        id: 6, 
        image: project?.gallery?.[5] || project?.image, 
        title: "Settings Light", 
        description: "Settings in light mode",
        layout: 'tall'
      },
    ]
  };

  // Layout classes for mosaic grid
  const layoutClasses = {
    wide: 'col-span-2 row-span-1',
    tall: 'col-span-1 row-span-2',
    square: 'col-span-1 row-span-1',
    big: 'col-span-2 row-span-2'
  };

  // Enhanced project features
  const projectFeatures = [
    {
      icon: FaMobile,
      title: "Responsive Design",
      description: "Fully responsive across all devices and screen sizes"
    },
    {
      icon: FaRocket,
      title: "High Performance",
      description: "Optimized for fast loading and smooth interactions"
    },
    {
      icon: FaPalette,
      title: "Modern UI/UX",
      description: "Clean and intuitive user interface design"
    },
    {
      icon: FaCog,
      title: "Customizable",
      description: "Easy to customize and extend functionality"
    }
  ];

  useEffect(() => {
    const foundProject = slideData.find(p => p.id === projectId);
    
    setTimeout(() => {
      setProject(foundProject);
      setLoading(false);
    }, 800);

    // Scroll detection
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      setShowScrollTop(window.scrollY > 500);

      // Check if at bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isBottom = scrollTop + windowHeight >= documentHeight - 100;
      
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projectId]);

  useEffect(() => {
    if (autoPlay && project?.technologies) {
      const interval = setInterval(() => {
        setCurrentFeature((prev) => (prev + 1) % project.technologies.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, project]);

  const handleShare = async () => {
    const shareData = {
      title: project?.name || 'Project',
      text: project?.description || 'Check out this amazing project',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
        fallbackShare();
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Project link copied to clipboard!');
      })
      .catch(err => {
        console.log('Failed to copy: ', err);
        alert('Failed to copy link. Please copy the URL manually.');
      });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const getGradientClass = (project) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-emerald-500 to-teal-600",
      "from-rose-500 to-pink-600",
      "from-violet-500 to-purple-600",
      "from-green-500 to-emerald-600",
      "from-indigo-500 to-blue-600"
    ];
    return gradients[(project?.id - 1) % gradients.length] || "from-blue-500 to-purple-600";
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const cardHover = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.03, 
      y: -8,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.div 
              className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <IoSparkles className="text-3xl text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <motion.p 
            className="text-lg font-semibold text-gray-700 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Loading project details...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black ">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <motion.button
            onClick={() => router.push('/')}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <TopGradientWave/>
      {/* Enhanced Background Elements */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: parallaxY }}
      >
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float" />
        <div className="absolute top-40 right-20 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float" style={{ animationDelay: '4s' }} />
      </motion.div>

      {/* Navigation */}
      <motion.div 
        className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          onClick={() => router.back()}
          className="flex items-center gap-3 bg-white/95 backdrop-blur-lg text-gray-700 px-6 py-3 rounded-xl hover:bg-white hover:shadow-lg transition-all group border border-gray-300/50"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          Back
        </motion.button>

        <div className="flex gap-3">
          <motion.button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-xl backdrop-blur-lg transition-all border ${
              isLiked 
                ? "bg-red-500 text-white shadow-lg border-red-500" 
                : "bg-white/95 text-gray-700 hover:bg-white border-gray-300/50"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart className={isLiked ? "animate-pulse" : ""} />
          </motion.button>
          <motion.button
            onClick={handleShare}
            className="p-3 rounded-xl bg-white/95 backdrop-blur-lg text-gray-700 hover:bg-white hover:shadow-lg transition-all border border-gray-300/50"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShare />
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20"
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="text-center max-w-4xl mx-auto z-10"
          variants={staggerContainer}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full text-sm text-gray-600 mb-8 border border-gray-300/50 shadow-sm"
            variants={fadeInUp}
          >
            <IoSparkles className="text-yellow-500" />
            Premium Project • {project.category}
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={fadeInUp}
          >
            {project.name}
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {project.description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            variants={staggerContainer}
          >
            {[
              { icon: FaCalendar, text: project.year },
              { icon: FaUser, text: project.client },
              { icon: FaLayerGroup, text: project.category }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-lg px-4 py-2 rounded-xl border border-gray-300/50 shadow-sm"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <item.icon className="text-blue-600 text-sm" />
                <span className="text-gray-700 font-medium text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3"
            variants={fadeInUp}
          >
            <motion.a
              href={project.liveUrl}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl hover:shadow-xl transition-all flex items-center gap-3 font-semibold group shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              Live Demo
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              className="bg-white/95 backdrop-blur-lg text-gray-700 px-8 py-3 rounded-xl hover:bg-white hover:shadow-xl transition-all flex items-center gap-3 font-semibold border border-gray-300/50 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode />
              Source Code
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Project Overview Section */}
      <motion.section 
        ref={overviewRef}
        className="py-20 px-6"
        initial="initial"
        animate={overviewInView ? "animate" : "initial"}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive look at the project goals, challenges, and solutions implemented
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.longDescription || "This project represents a modern approach to web development, combining cutting-edge technologies with user-centered design principles to deliver an exceptional digital experience."}
              </p>
              
              <div className="space-y-4">
                {project.stats && Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium capitalize">{key}</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={scaleIn}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <IoSparkles className="text-yellow-300" />
                    <span>Modern responsive design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IoSparkles className="text-yellow-300" />
                    <span>Optimized performance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IoSparkles className="text-yellow-300" />
                    <span>Accessibility compliance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IoSparkles className="text-yellow-300" />
                    <span>Cross-browser compatibility</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Technology Stack Section */}
      <motion.section 
        ref={techRef}
        className="py-20 px-6 bg-white/50 backdrop-blur-sm"
        initial="initial"
        animate={techInView ? "animate" : "initial"}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern tools and technologies used to build this project
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {project.technologies?.map((tech, index) => {
              const TechIcon = techIcons[tech] || FaCode;
              return (
                <motion.div
                  key={tech}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-300/50 shadow-sm hover:shadow-lg transition-all group"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <TechIcon className="text-3xl mx-auto mb-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  <h3 className="font-semibold text-gray-900">{tech}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        ref={featuresRef}
        className="py-20 px-6"
        initial="initial"
        animate={featuresInView ? "animate" : "initial"}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the powerful features that make this project stand out
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {projectFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-300/50 shadow-sm hover:shadow-lg transition-all group"
                variants={scaleIn}
                whileHover="hover"
              >
                <feature.icon className="text-3xl text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Dark Mode Section */}
      <motion.section 
        ref={bentoRef}
        className="py-16 px-6"
        initial="initial"
        animate={bentoInView ? "animate" : "initial"}
      >
        <div className="max-w-6xl mx-auto">
          {/* Dark Mode Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaMoon className="text-2xl text-indigo-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Dark Mode
              </h2>
            </div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Experience the sleek and modern dark theme interface
            </p>
          </motion.div>

          {/* Dark Mode Mosaic Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[180px] mb-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {projectScreenshots.dark.map((screenshot) => (
              <motion.div
                key={screenshot.id}
                className={`relative group cursor-pointer rounded-xl overflow-hidden border border-gray-300/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 ${layoutClasses[screenshot.layout]}`}
                variants={scaleIn}
                whileHover="hover"
                onClick={() => setSelectedImage(screenshot.image)}
              >
                <motion.div
                  variants={cardHover}
                  className="w-full h-full"
                >
                  <motion.div
                    variants={imageHover}
                    className="w-full h-full"
                  >
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      placeholder="blur"
                    />
                  </motion.div>
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Enhanced Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold text-sm mb-1">
                          {screenshot.title}
                        </h3>
                        <p className="text-gray-300 text-xs">
                          {screenshot.description}
                        </p>
                      </div>
                      <motion.div 
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 border border-white/30">
                          <FaExpand className="text-white text-xs" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Theme Badge */}
                  <div className="absolute top-3 left-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-indigo-600/90 text-indigo-100 px-2 py-1 rounded-md text-xs font-medium backdrop-blur-md border border-indigo-500/50">
                      Dark Mode
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Light Mode Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaSun className="text-2xl text-yellow-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Light Mode
              </h2>
            </div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Clean and bright interface for optimal daytime usage
            </p>
          </motion.div>

          {/* Light Mode Mosaic Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[180px]"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {projectScreenshots.light.map((screenshot) => (
              <motion.div
                key={screenshot.id}
                className={`relative group cursor-pointer rounded-xl overflow-hidden border border-gray-300/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 ${layoutClasses[screenshot.layout]}`}
                variants={scaleIn}
                whileHover="hover"
                onClick={() => setSelectedImage(screenshot.image)}
              >
                <motion.div
                  variants={cardHover}
                  className="w-full h-full"
                >
                  <motion.div
                    variants={imageHover}
                    className="w-full h-full"
                  >
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      placeholder="blur"
                    />
                  </motion.div>
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Enhanced Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold text-sm mb-1">
                          {screenshot.title}
                        </h3>
                        <p className="text-gray-300 text-xs">
                          {screenshot.description}
                        </p>
                      </div>
                      <motion.div 
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 border border-white/30">
                          <FaExpand className="text-white text-xs" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Theme Badge */}
                  <div className="absolute top-3 left-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-yellow-500/90 text-yellow-900 px-2 py-1 rounded-md text-xs font-medium backdrop-blur-md border border-yellow-600/50">
                      Light Mode
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        ref={ctaRef}
        className="py-20 px-6"
        initial="initial"
        animate={ctaInView ? "animate" : "initial"}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to See More?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore the live project or dive into the source code to see how it all works.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href={project.liveUrl}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 font-semibold group shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                View Live Demo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                className="bg-white/95 backdrop-blur-lg text-gray-700 px-8 py-4 rounded-xl hover:bg-white hover:shadow-xl transition-all flex items-center justify-center gap-3 font-semibold border border-gray-300/50 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                Source Code
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-5xl max-h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={1000}
                height={600}
                quality={90}
                className="object-contain max-h-[85vh] rounded-lg shadow-2xl"
                placeholder="blur"
              />
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 transition bg-black/70 rounded-full p-2 backdrop-blur-md border border-white/20"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-white/95 backdrop-blur-lg text-gray-700 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-gray-300/50 shadow-sm"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
