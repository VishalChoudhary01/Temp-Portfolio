"use client";
import React from "react";
import { motion } from "framer-motion";

const TopGradientWave = () => {
  return (
    <div className="fixed top-0 left-0 w-full overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
          filter: [
            "brightness(100%) blur(60px)",
            "brightness(130%) blur(80px)",
            "brightness(100%) blur(60px)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="relative w-[130vw] h-[50vh] left-[-15vw]"
      >
        <svg
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dfff00" />
              <stop offset="100%" stopColor="#00f5a0" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,160L120,165.3C240,171,480,181,720,154.7C960,128,1200,64,1320,32L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            animate={{
              d: [
                "M0,160L120,165.3C240,171,480,181,720,154.7C960,128,1200,64,1320,32L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
                "M0,180L120,175.3C240,171,480,161,720,144.7C960,128,1200,84,1320,42L1440,20L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
                "M0,160L120,165.3C240,171,480,181,720,154.7C960,128,1200,64,1320,32L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default TopGradientWave;
