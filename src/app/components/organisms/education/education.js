"use client";
import React,{useState,useRef} from 'react';
import { motion,useScroll ,useSpring} from 'motion/react';

import {EducationHeader,DesktopTimeline,MobileTimeline} from './index'
import {Heading} from '../../atoms/typography/index'


const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="min-h-screen py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <Heading heading='Education' />
        
        <DesktopTimeline 
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          smoothProgress={smoothProgress}
        />
        
        <MobileTimeline 
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          smoothProgress={smoothProgress}
        />
      </div>
    </section>
  );
};

export default Education;