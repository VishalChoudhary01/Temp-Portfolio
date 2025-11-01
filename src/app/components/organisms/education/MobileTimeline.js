"use client";
import React from 'react';
import {motion} from 'motion/react';
import {TimelineCard} from './index';
import MobileAnimatedDot from './MobileAnimatedDot'; 
import MobileConnectionLine from './MobileConnectionLine';
import {educationData} from '@/app/lib/data/index'

const MobileTimeline = ({ hoveredCard, setHoveredCard, smoothProgress }) => (
  <div className="lg:hidden relative px-4 font-poppins h-[91vh]">
    {/* Background Line */}
    <div className="absolute left-6 top-2 w-0.5 h-full  bg-lightBorder/80 dark:bg-darkBorder/80 rounded-full" />
    
    {/* Animated Vertical Line */}
    <motion.div 
      className="absolute left-6 top-0 w-0.5 bg-linear-to-b from-grad-primary via-grad-secondary to-grad-tertiary dark:from-darkgrad-primary dark:via-darkgrad-secondary dark:to-darkgrad-tertiary rounded-full origin-top"
      style={{
        scaleY: smoothProgress,
        height: '100%'
      }}
    />

    {educationData.map((item, index) => (
      <div key={index} className="relative pl-16 pb-12">
        {/* Remove dotProgress prop */}
        <MobileAnimatedDot
          index={index}
          item={item}
        />

        <MobileConnectionLine 
          index={index}
          item={item}
        />

        <TimelineCard 
          item={item}
          index={index}
          isHovered={hoveredCard}
          onHoverStart={() => setHoveredCard(index)}
          onHoverEnd={() => setHoveredCard(null)}
          layout="mobile"
        />
      </div>
    ))}
  </div>
);

export default MobileTimeline;