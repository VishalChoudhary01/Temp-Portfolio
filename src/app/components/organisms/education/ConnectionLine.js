"use client";

import React from 'react'
import {motion} from 'motion/react'

const ConnectionLine = ({ index, isRight }) => {
  // Different gradient colors for each line
  const lineGradients = [
    'from-purple-400 to-purple-600',
    'from-cyan-400 to-cyan-600', 
    'from-amber-400 to-amber-600',
    'from-teal-400 to-teal-600'
  ];
  
  const gradient = lineGradients[index % lineGradients.length];

  return (
    <motion.div
      className={`absolute top-8 h-0.5 md:w-12 bg-gradient-to-r ${
        isRight
          ? `left-0 ${gradient}` 
          : `right-0 ${gradient}`
      }`}
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

export default ConnectionLine;