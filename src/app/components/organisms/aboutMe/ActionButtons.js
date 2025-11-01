import React from "react";
import { motion } from "framer-motion";
import { LuArrowDownToLine } from "react-icons/lu";
import Button from "@/app/components/atoms/button/Button";
import SocialLinks from "../../molecules/navigation/SocialLinks";

const ActionButtons = ({ isDarkMode }) => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Vishal Kumar Choudhary.pdf"; 
    link.download = "Resume.pdf"; 
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-6 border-t border-lightBorder dark:border-darkBorder"
    >
      <SocialLinks className="order-2 sm:order-1" iconSize="w-5 h-5" />
      
      <Button
        buttonText="Download Resume"
        leftIcon={<LuArrowDownToLine className="w-5 h-5" />}
        buttonStyle={`${
          isDarkMode 
            ? "dark-button-modern" 
            : "button-modern"
        } order-1 sm:order-2`}
        onClick={handleDownloadResume}
      />
    </motion.div>
  );
};

export default ActionButtons;