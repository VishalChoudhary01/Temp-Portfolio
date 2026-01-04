"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FiSun, FiMoon } from "react-icons/fi";
import useDarkMode from "@/app/hooks/useDarkMode";

const CleanDarkModeToggle = () => {
  const { isDarkMode, toggleMode } = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);

  // Get accent colors based on theme
  const accentColor = isDarkMode
    ? "var(--darkgrad-primary)"
    : "var(--grad-primary)";
  const secondaryAccent = isDarkMode
    ? "var(--darkgrad-secondary)"
    : "var(--grad-secondary)";

  return (
    <motion.div
      className="fixed md:bottom-8 md:right-8 right-4 bottom-2 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {/* Light mode indicator pulse */}
      {!isDarkMode && (
        <motion.div
          className="absolute inset-0 pointer-events-none md:border-2 dark:border bg-gradient-to-br from-grad-primary/10 to-grad-secondary/10 dark:border-grad-primary/20 rounded-xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `radial-gradient(circle at center, ${accentColor}15, transparent 70%)`,
            borderColor: `${accentColor}30`,
          }}
        />
      )}

      <motion.button
        onClick={toggleMode}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-12 h-12 rounded-xl backdrop-blur-md border flex items-center justify-center overflow-hidden transition-all duration-300 shadow-lg"
        style={{
          background: isDarkMode
            ? `linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(15, 15, 15, 0.7))`
            : `linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 0.7))`,
          borderColor: isDarkMode
            ? "rgba(172, 166, 166, 0.3)"
            : "rgba(100, 104, 105, 0.2)",
          boxShadow: isDarkMode
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Clean hover effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, ${accentColor}15, transparent 70%)`,
          }}
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
            <FiSun className="w-5 h-5" style={{ color: accentColor }} />
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
            <FiMoon className="w-5 h-5" style={{ color: secondaryAccent }} />
          </motion.div>
        </div>

        {/* Subtle border highlight on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none border"
          style={{
            borderColor: isHovered ? accentColor + "40" : "transparent",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>

      {/* Subtle tooltip */}
      <motion.div
        className="absolute -top-8 left-1/3 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap pointer-events-none shadow-md backdrop-blur-sm"
        style={{
          background: isDarkMode
            ? "rgba(10, 10, 10, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
          border: `1px solid ${
            isDarkMode ? "rgba(172, 166, 166, 0.3)" : "rgba(100, 104, 105, 0.2)"
          }`,
          color: isDarkMode ? "var(--darkPara2)" : "var(--para2)",
        }}
        initial={{ opacity: 0, y: 5 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 5,
        }}
        transition={{ duration: 0.2 }}
      >
        {isDarkMode ? "Light mode" : "Dark mode"}
      </motion.div>
    </motion.div>
  );
};

export default CleanDarkModeToggle;
