"use client";
import React, { useRef ,useEffect} from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import AboutMe from "../aboutMe/aboutMe";
import "./Banner.css";
import useDarkMode from "@/app/hooks/useDarkMode";
import MenuSlideUp from "../banner/CardSlideUpLoop";

const Banner = () => {
  const ref = useRef(null);
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true });
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const nameScale = useTransform(scrollYProgress, [0, 0.6], [1, 40]);
  const nameOpacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.78, 0.85], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.78, 0.85], [100, 0]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <motion.section
      ref={ref}
      className="md:h-[435vh] h-[350vh] w-full select-none relative transition-colors text-center duration-1000"
    >
      {/* Name Center */}
      <motion.div
        style={{ scale: nameScale, opacity: nameOpacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none md:whitespace-nowrap"
      >
        <motion.h2
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}  
          transition={{ delay: 0.2, duration: 1 }} 
          className={`text-[2.7rem] leading-11 ${isDarkMode?"darkRadGrad ":"radGrad"} font-extrabold relative md:leading-20 md:text-8xl font-arimo md:tracking-wide`}
        >
          Vishal Kumar Choudhary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-bold font-noto-serif pb-2 md:mt-5 mt-3 whitespace-nowrap relative text-shimmer ${
            isDarkMode ? "darktext-shimmer" : "text-shimmer"
          }`}
          data-text="Frontend Developer"
        >
          Frontend Developer
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="fixed md:top-[85vh] top-[80vh] left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center"
      >
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-center gap-x-2 xl:text-[1.1rem] font-merriweather lg:text-[1.15rem] md:text-[1.1rem]">
            <span className="text-para3 dark:text-darkPara3 text-nowrap">Scroll Down</span>
            <span className="dark:text-darkPara2 text-para2 italic">for</span> 
            <MenuSlideUp />
          </div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-3xl text-neutral-400" />
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div
        ref={aboutRef}
        style={{ opacity: aboutOpacity, y: aboutY }}
        className="absolute md:top-[350vh] top-[290vh] left-0 w-full h-screen flex justify-center items-center md:px-3 px-2.5 z-50"
      >
        <AboutMe />
      </motion.div>
    </motion.section>
  );
};

export default Banner;