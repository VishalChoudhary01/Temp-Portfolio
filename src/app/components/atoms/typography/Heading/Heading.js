"use client";
import React from "react";
import { motion } from "framer-motion";
import "./Heading.css"; 
import useDarkMode from "@/app/hooks/useDarkMode";

const Heading = ({
  heading = "Stunning Header",
  subheading = "",
  align = "center",
}) => {

  const { isDarkMode } = useDarkMode();   
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={`w-full flex flex-col ${alignment} md:mb-16 mb-8 `}
    >
      <h2 className={`${isDarkMode?"dark-heading font-poppins":"heading font-merriweather"} md:text-5xl text-[1.8rem]  tracking-wider font-semibold`}>
        {heading}
        <span className={`${isDarkMode?"dark-underline-animated":"underline-animated"} md:mt-2 -mt-3`}></span>
      </h2>

      {subheading && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-para2 dark:text-darkPara2 text-base md:text-lg max-w-2xl"
        >
          {subheading}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Heading;