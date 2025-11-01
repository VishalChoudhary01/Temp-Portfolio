import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaLaptopCode, FaBrain } from "react-icons/fa";
import GlowingCard from "@/app/components/molecules/cards/GlowingCard";
import CardContent from "./CardContent";

const WorkExperienceCard = ({ index, item, isDarkMode }) => {
  const getCurrentColor = (item) => {
    return isDarkMode ? item.darkColor : item.color;
  };

  const getIconComponent = (iconName) => {
    const icons = {
      FaCode,
      FaServer,
      FaLaptopCode,
      FaBrain
    };
    return icons[iconName] || FaCode;
  };

  const IconComponent = getIconComponent(item.icon);
  const currentColor = getCurrentColor(item);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="shrink-0 max-w-[85vw] sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] relative"
    >
      <GlowingCard
        color={currentColor}
        className="min-h-[340px] h-full"
        borderRadius="16px"
        isDarkMode={isDarkMode}
      >
        <CardContent item={item} IconComponent={IconComponent} currentColor={currentColor} isDarkMode={isDarkMode} />
      </GlowingCard>
    </motion.div>
  );
};

export default WorkExperienceCard;