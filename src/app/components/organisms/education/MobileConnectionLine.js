"use client";

import React from 'react'
import {motion} from 'motion/react'

const MobileConnectionLine = ({ index, item }) => {
  // Use the same gradient colors as desktop
  const lineGradients = [
    'from-purple-400 to-purple-600',
    'from-cyan-400 to-cyan-600', 
    'from-amber-400 to-amber-600',
    'from-teal-400 to-teal-600'
  ];
  
  const gradient = lineGradients[index % lineGradients.length];

  return (
    <motion.div
      className={`absolute top-8 left-4.5 h-0.5 w-12 bg-gradient-to-r ${gradient}`}
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: 48, opacity: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: 0.4, 
        ease: "easeOut"
      }}
    />
  );
};

export default MobileConnectionLine;