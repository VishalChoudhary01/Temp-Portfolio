"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import useDarkMode from '@/app/hooks/useDarkMode';

const CleanDarkModeToggle = () => {
  const { isDarkMode, toggleMode } = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {/* Light mode indicator pulse */}
      {!isDarkMode && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none border-2 bg-gradient-to-br from-grad-primary/10 to-grad-secondary/10 border-grad-primary/20"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      <motion.button
        onClick={toggleMode}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-12 h-12 rounded-xl backdrop-blur-lg border flex items-center justify-center overflow-hidden transition-all duration-300 bg-icon-bg dark:bg-icon-darkBg border-lightBorder dark:border-darkBorder shadow-lg shadow-shadow-soft dark:shadow-black/20 hover:shadow-xl hover:shadow-shadow-medium dark:hover:shadow-black/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Clean hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/10 to-grad-primary/10 dark:from-darkAccent/10 dark:to-darkgrad-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Sun icon */}
          <motion.div
            animate={{
              scale: isDarkMode ? 0 : 1,
              opacity: isDarkMode ? 0 : 1,
              rotate: isDarkMode ? 90 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="absolute"
          >
            <FiSun className="w-5 h-5 text-accent" />
          </motion.div>

          {/* Moon icon */}
          <motion.div
            animate={{
              scale: isDarkMode ? 1 : 0,
              opacity: isDarkMode ? 1 : 0,
              rotate: isDarkMode ? 0 : -90,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="absolute"
          >
            <FiMoon className="w-5 h-5 text-darkAccent" />
          </motion.div>
        </div>

        {/* Subtle border highlight on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none border border-accent/40 dark:border-darkAccent/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>

      {/* Subtle tooltip */}
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap pointer-events-none bg-icon-bg dark:bg-icon-darkBg border border-lightBorder dark:border-darkBorder text-para2 dark:text-darkPara2 shadow-md"
        initial={{ opacity: 0, y: 5 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 5
        }}
        transition={{ duration: 0.2 }}
      >
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </motion.div>
      
    </motion.div>
  );
};

export default CleanDarkModeToggle;