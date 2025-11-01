"use client";

import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MobileAnimatedDot = ({ index, item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -100px 0px",
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      className="absolute left-2 top-6 z-20 transform -translate-x-1/2"
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2,
        ease: "easeOut"
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Main Dot - Smaller */}
        <div
          className="w-3 h-3 rounded-full shadow-md relative z-10"
          style={{
            background: `linear-gradient(to right, ${item.dotColorFrom}, ${item.dotColorTo})`,
          }}
        />

        {/* Glow - Smaller */}
        <motion.div
          className="absolute w-4 h-4 rounded-full opacity-30 blur-sm"
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

        {/* Pulse - Smaller */}
        <motion.div
          className="absolute w-5 h-5 rounded-full opacity-20"
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
};

export default MobileAnimatedDot;