"use client";
import React from 'react';
import { motion } from 'motion/react';
import { TimelineCard } from './index';
import MobileAnimatedDot from './MobileAnimatedDot'; 
import MobileConnectionLine from './MobileConnectionLine';
import { educationData } from '@/app/lib/data/index';

const MobileTimeline = ({ hoveredCard, setHoveredCard, smoothProgress }) => {
  // Calculate total height needed for the line
  const itemCount = educationData.length;
  const itemHeight = 200; // Approximate height per item (adjust based on your content)
  const totalHeight = itemCount * itemHeight;

  return (
    <div className="lg:hidden relative px-4 font-poppins pb-20">
      <div className="relative" style={{ minHeight: `${totalHeight}px` }}>
        {/* Background Line - Full height of content */}
        <div 
          className="absolute left-6 top-0 w-0.5 bg-lightBorder/80 dark:bg-darkBorder/80 rounded-full"
          style={{ height: `${totalHeight}px` }}
        />
        
        {/* Animated Vertical Line - Fills based on scroll */}
        <motion.div 
          className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-[var(--grad-primary)] via-[var(--grad-secondary)] to-[var(--grad-tertiary)] dark:from-[var(--darkgrad-primary)] dark:via-[var(--darkgrad-secondary)] dark:to-[var(--darkgrad-tertiary)] rounded-full"
          style={{
            height: `${totalHeight}px`,
            scaleY: smoothProgress,
            transformOrigin: 'top',
          }}
        />

        {/* Timeline Items */}
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className="relative pl-16 pb-12"
            style={{ minHeight: '180px' }}
          >
            <MobileAnimatedDot 
              index={index} 
              scrollProgress={smoothProgress}
              totalItems={educationData.length}
            />

            <MobileConnectionLine 
              index={index}
              scrollProgress={smoothProgress}
              totalItems={educationData.length}
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
    </div>
  );
};

export default MobileTimeline;