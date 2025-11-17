"use client";
import React from "react";
import { motion } from "framer-motion";

const TopGradientWave = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[28vh] overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.02, 1],
          filter: [
            "blur(50px) brightness(105%)",
            "blur(65px) brightness(115%)",
            "blur(50px) brightness(105%)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="relative w-[200vw] h-full left-[-50vw]"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            {/* animated gradient shift */}
            <motion.linearGradient
              id="animatedGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              animate={{
                x1: ["0%", "50%", "0%"],
                x2: ["100%", "150%", "100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            >
              <stop offset="0%" stopColor="#dfff00" />
              <stop offset="100%" stopColor="#00f5a0" />
            </motion.linearGradient>
          </defs>

          {/* smoother and shorter symmetrical wave */}
          <motion.path
            fill="url(#animatedGradient)"
            fillOpacity="1"
            animate={{
              d: [
                "M0,100 C360,60 1080,140 1440,100 L1440,0 L0,0 Z",
                "M0,90 C360,110 1080,70 1440,90 L1440,0 L0,0 Z",
                "M0,100 C360,60 1080,140 1440,100 L1440,0 L0,0 Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 9,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default TopGradientWave;
