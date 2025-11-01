"use client";

import { motion } from "motion/react";

const AnimatedDot = ({ index, item, position }) => (
  <motion.div
    className="absolute top-6 z-20"
    style={{
      [position]: -8,
    }}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ 
      duration: 0.6, 
      delay: 0.2,
      ease: "easeOut"
    }}
  >
    <div className="relative flex items-center justify-center">
      {/* Main Dot */}
      <div
        className="w-4 h-4 rounded-full shadow-md relative z-10"
        style={{
          background: `linear-gradient(to right, ${item.dotColorFrom}, ${item.dotColorTo})`,
        }}
      />

      {/* Glow */}
      <motion.div
        className="absolute w-6 h-6 rounded-full opacity-30 blur-sm"
        style={{
          background: `linear-gradient(to right, ${item.dotColorFrom}, ${item.dotColorTo})`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pulse */}
      <motion.div
        className="absolute w-8 h-8 rounded-full opacity-20"
        style={{
          background: `linear-gradient(to right, ${item.borderFrom}, ${item.borderTo})`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </div>
  </motion.div>
);

export default AnimatedDot;