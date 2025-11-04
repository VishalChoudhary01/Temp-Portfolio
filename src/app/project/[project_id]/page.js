"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  FaChevronLeft, 
  FaTimes, 
  FaExpand, 
  FaExternalLinkAlt, 
  FaGithub,
  FaCalendar,
  FaUser,
  FaTag,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaShare,
  FaHeart,
  FaCode,
  FaRocket,
  FaLayerGroup
} from "react-icons/fa";
import { IoSparkles, IoEyeSharp } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Sample project data - replace with your actual data
const projectsData = [
  {
    id: 1,
    name: "Switzerland Adventure",
    description: "A breathtaking journey through the Swiss Alps with stunning landscapes and pristine lakes",
    category: "Landscape Photography",
    year: "2023",
    client: "Travel Co.",
    images: [
      { src: "/projects/swiss-1.jpg", alt: "Swiss Alps" },
      { src: "/projects/swiss-2.jpg", alt: "Mountain Village" },
      { src: "/projects/swiss-3.jpg", alt: "Lake Geneva" },
      { src: "/projects/swiss-4.jpg", alt: "Alpine Meadow" },
      { src: "/projects/swiss-5.jpg", alt: "Matterhorn" },
      { src: "/projects/swiss-6.jpg", alt: "Swiss Train" }
    ],
    technologies: ["NextJS", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "This immersive project takes you on a visual journey through Switzerland's most breathtaking landscapes. From the iconic Matterhorn to the serene waters of Lake Geneva, every photograph tells a story of natural wonder and human achievement in harmony with nature.",
    features: [
      "Responsive gallery design",
      "Smooth animations and transitions",
      "Optimized image loading",
      "Interactive user experience",
      "Mobile-first approach",
      "SEO optimized"
    ],
    stats: {
      duration: "6 months",
      images: "120+",
      locations: "15+",
      satisfaction: "98%"
    },
    colorScheme: {
      primary: "blue",
      gradient: "from-blue-500 to-purple-600"
    }
  },
  {
    id: 2,
    name: "Thailand Cultural Journey",
    description: "Vibrant culture meets tropical paradise in this Southeast Asian gem",
    category: "Cultural Photography",
    year: "2023",
    client: "Adventure Inc.",
    images: [
      { src: "/projects/thai-1.jpg", alt: "Thai Temple" },
      { src: "/projects/thai-2.jpg", alt: "Floating Market" },
      { src: "/projects/thai-3.jpg", alt: "Island Beach" },
      { src: "/projects/thai-4.jpg", alt: "Street Food" },
      { src: "/projects/thai-5.jpg", alt: "Traditional Dance" },
      { src: "/projects/thai-6.jpg", alt: "Night Market" }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "Experience the rich cultural tapestry of Thailand through this comprehensive visual narrative. From the golden temples of Bangkok to the tranquil islands of the south, this project captures the essence of Thai life, traditions, and natural beauty.",
    features: [
      "Cultural documentation",
      "Location-based storytelling",
      "Mobile-first design",
      "Social media integration",
      "Multi-language support",
      "Interactive maps"
    ],
    stats: {
      duration: "4 months",
      images: "80+",
      locations: "12+",
      satisfaction: "95%"
    },
    colorScheme: {
      primary: "emerald",
      gradient: "from-emerald-500 to-teal-600"
    }
  },
  {
    id: 3,
    name: "Japan Modern Traditions",
    description: "Where ancient traditions meet futuristic innovation in perfect harmony",
    category: "Urban Photography",
    year: "2024",
    client: "Culture Partners",
    images: [
      { src: "/projects/japan-1.jpg", alt: "Tokyo Street" },
      { src: "/projects/japan-2.jpg", alt: "Kyoto Temple" },
      { src: "/projects/japan-3.jpg", alt: "Cherry Blossoms" },
      { src: "/projects/japan-4.jpg", alt: "Mount Fuji" },
      { src: "/projects/japan-5.jpg", alt: "Traditional Garden" },
      { src: "/projects/japan-6.jpg", alt: "Shibuya Crossing" }
    ],
    technologies: ["Vue.js", "Firebase", "Three.js", "GSAP"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "Discover Japan's unique blend of ancient traditions and cutting-edge innovation through this stunning visual collection. Experience the contrast that defines modern Japan, from serene Zen gardens to the world's busiest pedestrian crossing.",
    features: [
      "Seasonal photography",
      "Cultural insights",
      "3D visualizations",
      "Performance optimization",
      "Virtual tours",
      "AR experiences"
    ],
    stats: {
      duration: "5 months",
      images: "150+",
      locations: "20+",
      satisfaction: "97%"
    },
    colorScheme: {
      primary: "rose",
      gradient: "from-rose-500 to-pink-600"
    }
  }
];

// Bento Grid Layout Patterns
const bentoLayouts = [
  // Layout 1
  [
    { row: "row-span-2", col: "col-span-2" },
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-1", col: "col-span-2" },
    { row: "row-span-1", col: "col-span-1" }
  ],
  // Layout 2
  [
    { row: "row-span-1", col: "col-span-3" },
    { row: "row-span-2", col: "col-span-2" },
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-1", col: "col-span-2" },
    { row: "row-span-1", col: "col-span-1" }
  ],
  // Layout 3
  [
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-1", col: "col-span-2" },
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-2", col: "col-span-2" },
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-1", col: "col-span-1" }
  ]
];

export default function ProjectDetailPage({ params }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const projectId = parseInt(params.project_id);
    const foundProject = projectsData.find(p => p.id === projectId);
    
    // Simulate loading delay
    setTimeout(() => {
      setProject(foundProject);
      setLoading(false);
    }, 1000);
  }, [params.project_id]);

  useEffect(() => {
    if (autoPlay && project?.features) {
      const interval = setInterval(() => {
        setCurrentFeature((prev) => (prev + 1) % project.features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, project]);

  const getBentoLayout = (projectId) => {
    return bentoLayouts[projectId % bentoLayouts.length];
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.name,
          text: project.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const getGradientClass = (project) => {
    return project?.colorScheme?.gradient || "from-blue-500 to-purple-600";
  };

  const getPrimaryColor = (project) => {
    return project?.colorScheme?.primary || "blue";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
            />
            <IoSparkles className="text-4xl text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-semibold text-gray-700 mt-4"
          >
            Loading amazing content...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/')}
            className={`bg-gradient-to-r ${getGradientClass(project)} text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all`}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-50 flex items-center gap-3 bg-white/80 backdrop-blur-md text-gray-700 px-6 py-3 rounded-2xl hover:bg-white hover:shadow-lg transition-all group border border-gray-200"
      >
        <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        Back
      </motion.button>

      {/* Action Buttons */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`p-3 rounded-2xl backdrop-blur-md transition-all border ${
            isLiked 
              ? "bg-red-500 text-white shadow-lg border-red-500" 
              : "bg-white/80 text-gray-700 hover:bg-white border-gray-200"
          }`}
        >
          <FaHeart className={isLiked ? "animate-pulse" : ""} />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          onClick={handleShare}
          className="p-3 rounded-2xl bg-white/80 backdrop-blur-md text-gray-700 hover:bg-white hover:shadow-lg transition-all border border-gray-200"
        >
          <FaShare />
        </motion.button>
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center px-4"
      >
        <div className="text-center max-w-4xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-600 mb-6 border border-gray-200"
          >
            <IoSparkles className="text-yellow-500" />
            Featured Project • {project.category}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
          >
            <span className={`bg-gradient-to-r ${getGradientClass(project)} bg-clip-text text-transparent`}>
              {project.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              { icon: FaCalendar, text: project.year },
              { icon: FaUser, text: project.client },
              { icon: FaLayerGroup, text: project.category }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200"
              >
                <item.icon className={`text-${getPrimaryColor(project)}-500`} />
                <span className="text-gray-700 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${getGradientClass(project)} text-white px-8 py-4 rounded-2xl hover:shadow-xl transition-all flex items-center gap-3 font-semibold group`}
            >
              <FaRocket />
              Live Demo
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-md text-gray-700 px-8 py-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all flex items-center gap-3 font-semibold border border-gray-200"
            >
              <FaCode />
              Source Code
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Bento Grid Gallery Section */}
      <section className="min-h-screen py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Project <span className={`bg-gradient-to-r ${getGradientClass(project)} bg-clip-text text-transparent`}>Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the stunning visual journey of this project
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[70vh] mb-20">
            {project.images.slice(0, 6).map((image, index) => {
              const layout = getBentoLayout(project.id)[index];
              return (
                <motion.div
                  key={index}
                  className={`relative ${layout.row} ${layout.col} rounded-3xl overflow-hidden cursor-pointer group`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Placeholder for images - replace with actual Image component */}
                  <div className={`w-full h-full bg-gradient-to-br ${getGradientClass(project)} flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <IoEyeSharp className="text-4xl mb-2 opacity-60" />
                      <div className="text-sm font-medium">Image {index + 1}</div>
                    </div>
                  </div>
                  
                  {/* Actual Image Component (commented for now) */}
                  {/* <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  /> */}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Image Info */}
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="text-sm font-medium">{image.alt}</div>
                  </div>
                  
                  {/* Expand Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
                      <FaExpand className="text-white text-lg" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {Object.entries(project.stats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-6 text-center hover:shadow-xl transition-all border border-gray-200"
              >
                <div className={`text-3xl font-black bg-gradient-to-r ${getGradientClass(project)} bg-clip-text text-transparent mb-2`}>
                  {value}
                </div>
                <div className="text-gray-600 font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-8 mb-20 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black text-gray-900">Key Features</h3>
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all border border-gray-300"
              >
                {autoPlay ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <div className="text-6xl mb-4">✨</div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  {project.features[currentFeature]}
                </h4>
                <p className="text-gray-600 max-w-md mx-auto">
                  This feature enhances user experience through innovative design and cutting-edge technology.
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {project.features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentFeature 
                      ? `bg-${getPrimaryColor(project)}-500 w-8` 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-4xl font-black text-gray-900 mb-8">
              Technology <span className={`bg-gradient-to-r ${getGradientClass(project)} bg-clip-text text-transparent`}>Stack</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`bg-gradient-to-r ${getGradientClass(project)} text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all cursor-pointer`}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: -180 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder for modal image */}
              <div className={`w-full h-96 bg-gradient-to-br ${getGradientClass(project)} rounded-2xl flex items-center justify-center`}>
                <div className="text-white text-center">
                  <IoEyeSharp className="text-6xl mb-4 opacity-60" />
                  <div className="text-2xl font-bold">{selectedImage.alt}</div>
                  <div className="text-lg opacity-75 mt-2">Image Preview</div>
                </div>
              </div>
              
              {/* Actual Image Component (commented for now) */}
              {/* <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                quality={100}
                className="object-contain max-h-[90vh] rounded-2xl"
              /> */}
              
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition bg-black/50 rounded-full p-3 backdrop-blur-md"
              >
                <FaTimes />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}