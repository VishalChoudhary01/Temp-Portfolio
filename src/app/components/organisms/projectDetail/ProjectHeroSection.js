"use client";
import { motion } from "framer-motion";
import { IoSparkles, IoCodeSlash } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import GlowingCard from "@/app/components/molecules/cards/GlowingCard.js";
import { techIcons } from "../../../lib/utils/iconMappings.js";
import { DoubleShineButton } from '@/app/components/atoms/special-button/index.js';
import { FaFigma } from "react-icons/fa6";
import { IoRocketOutline, IoChevronDown } from "react-icons/io5";
import { SimpleDigitAnimation,MinimalDigitCounter } from "@/app/components/atoms/animation/index.js";

const ProjectHero = ({ project, isDarkMode, heroOpacity, heroScale }) => {
  return (
    <motion.section 
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
      style={{
        opacity: heroOpacity,
        scale: heroScale
      }}
    >
      <div className="flex-1 flex items-center justify-center w-full">
        <motion.div 
          className="text-center max-w-6xl mx-auto relative z-10"
        >
          {/* Project Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 text-neutral-600/80 dark:text-neutral-100/80 px-4 py-2 rounded-full text-sm mb-8 bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(17,24,39,0.4)] backdrop-blur-xl border dark:border-[rgba(59,130,246,0.3)] border-[rgba(59,130,246,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IoSparkles />
            <span className="font-medium font-roboto md:text-[0.8rem] text-[0.7rem]">
              {project.projectType} ● <MinimalDigitCounter duration={2500}  value={project.year}/>
            </span>
            
          </motion.div>

          {/* Project Title */}
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-7xl font-bold md:mb-6 mb-2 font-poppins leading-tight bg-clip-text text-transparent bg-gradient-to-b dark:from-white dark:via-neutral-100 dark:to-neutral-600 from-black via-gray-600 to-gray-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {project.name}
          </motion.h1>
          
          {/* Project Description */}
          <motion.p 
            className={`text-[0.9rem] sm:text-xl md:text-2xl md:mb-10 mb-6 max-w-3xl mx-auto leading-relaxed dark:text-darkPara3 text-para3`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {project.description}
          </motion.p>
          
          {/* Technology Stack */}
          <motion.div 
            className="flex flex-wrap md:gap-3 gap-2 justify-center md:mb-12 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {project.technologies?.slice(0, 8).map((tech, index) => {
              const TechIcon = techIcons[tech] || IoCodeSlash;
              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <GlowingCard

                    className="md:px-4 md:py-2 px-3 py-2 border border-gray-300 dark:border-neutral-400/20  shadow"
                    color={isDarkMode ? "#ff9f1a" : "#00bbf9"}
                    borderRadius="10px"
                  >
                    <div className="flex items-center md:gap-x-2 gap-x-1 md:text-[0.9rem] text-[0.8rem] dark:text-Head2dark text-h3">
                      <TechIcon />
                      <span className="font-medium">{tech}</span>    
                    </div> 
                  </GlowingCard>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Call to Action Buttons */}
          <motion.div 
            className="flex md:gap-10 gap-3.5 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <DoubleShineButton 
                leftIcon={<IoRocketOutline />} 
                buttonText="Live Demo" 
                buttonStyle="md:w-24 md:h-7 w-20 h-5.5 text-nowrap justify-center md:text-[0.98rem] text-[0.75rem]" 
              />
            </motion.a>
            
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="md:block hidden"
            >
              <DoubleShineButton 
                leftIconStyle="" 
                leftIcon={<FaGithub />} 
                buttonText="Source Code" 
                buttonStyle="md:w-24 md:h-7 w-16 text-nowrap justify-center h-5.5 md:text-[0.98rem] text-[0.8rem]" 
              />
            </motion.a>
            <motion.a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <DoubleShineButton 
                leftIconStyle="" 
                leftIcon={<FaFigma />} 
                buttonText="Figma Design" 
                buttonStyle="md:w-24 md:h-7 w-16 text-nowrap justify-center h-5.5 md:text-[0.98rem] text-[0.8rem]" 
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Fixed at bottom of viewport */}
      <motion.div 
        className="absolute md:bottom-2 bottom-0  w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => {
            // Scroll to next section
            const nextSection = document.querySelector('.space-y-16');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-xs text-neutral-700 dark:text-neutral-200/80  font-medium tracking-wider group-hover:text-blue-400 transition-colors">
            EXPLORE
          </span>
          <div className="relative h-12 flex items-center justify-center">
            <div className="w-px h-full bg-linear-to-b dark:from-neutral-50/90  dark:via-neutral-400/50 dark:to-transparent from-neutral-700/30 via-neutral-800/50 to-transparent" />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute top-1 left-1/2 transform -translate-x-1/2"
            >
              <IoChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-blue-300 transition-colors" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectHero;