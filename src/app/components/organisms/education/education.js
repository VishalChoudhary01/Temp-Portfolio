"use client";
import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { EducationHeader, DesktopTimeline, MobileTimeline } from './index';
import { Heading } from '../../atoms/typography/index';

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const mobileContainerRef = useRef(null); // Add separate ref for mobile
  
  // Desktop scroll progress
  const { scrollYProgress: desktopProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Mobile scroll progress - separate configuration
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start end", "end start"] // Better offset for mobile
  });

  // Separate spring configs for better control
  const smoothDesktopProgress = useSpring(desktopProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const smoothMobileProgress = useSpring(mobileProgress, {
    stiffness: 80,  // Slightly less stiff for smoother mobile experience
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Heading heading='Education' />
        
        {/* Desktop Timeline */}
        <div ref={containerRef}>
          <DesktopTimeline 
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
            smoothProgress={smoothDesktopProgress}
          />
        </div>
        
        {/* Mobile Timeline - separate ref */}
        <div ref={mobileContainerRef}>
          <MobileTimeline 
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
            smoothProgress={smoothMobileProgress}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;