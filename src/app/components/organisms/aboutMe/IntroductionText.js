import React from "react";
import { motion } from "framer-motion";

const IntroductionText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-6 md:mb-10"
    >
      <p className="text-base md:text-lg leading-relaxed text-para1 dark:text-darkPara1">
        I&apos;m <strong className="font-bold text-accent dark:text-darkAccent">
          Vishal Kumar Choudhary
        </strong>, a frontend developer passionate about crafting stunning digital experiences that blend design and functionality. I transform creative ideas into clean, scalable code with sleek animations and immersive UIs.
      </p>
    </motion.div>
  );
};

export default IntroductionText;