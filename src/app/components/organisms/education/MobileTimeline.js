"use client";
import React from 'react';
import { motion } from 'motion/react';
import { TimelineCard } from './index';
import MobileAnimatedDot from './MobileAnimatedDot'; 
import MobileConnectionLine from './MobileConnectionLine';
import { educationData } from '@/app/lib/data/index';

const MobileTimeline = ({ hoveredCard, setHoveredCard, smoothProgress }) => (
  <div className="lg:hidden relative px-4 font-poppins min-h-screen"> 
    {/* Background Line */}
    <div className="absolute left-6 top-2 w-0.5 h-full bg-lightBorder/80 dark:bg-darkBorder/80 rounded-full" />
    
    {/* Animated Vertical Line */}
    <motion.div 
      className="absolute left-6 top-2 w-0.5 bg-gradient-to-b from-[var(--grad-primary)] via-[var(--grad-secondary)] to-[var(--grad-tertiary)] dark:from-[var(--darkgrad-primary)] dark:via-[var(--darkgrad-secondary)] dark:to-[var(--darkgrad-tertiary)] rounded-full origin-top"
      style={{
        scaleY: smoothProgress,
        height: '100%',
        transformOrigin: 'top' // Ensure transform origin is at top
      }}
    />

    <div className="relative"> {/* Wrap items in a container */}
      {educationData.map((item, index) => (
        <div key={index} className="relative pl-16 pb-12">
          <MobileAnimatedDot index={index} />
          <MobileConnectionLine index={index} />

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
  </div>
);

export default MobileTimeline;