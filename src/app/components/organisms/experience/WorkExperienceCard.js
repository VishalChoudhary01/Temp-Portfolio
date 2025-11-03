import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaLaptopCode, FaBrain } from "react-icons/fa";
import GlowingCard from "@/app/components/molecules/cards/GlowingCard";
import CardContent from "./CardContent";

const WorkExperienceCard = ({ index, item, isDarkMode }) => {
  // Get color based on index using CSS variables
  const getCurrentColor = (idx) => {
    const colors = isDarkMode 
      ? [
          'var(--color-dark-work-card-1)',
          'var(--color-dark-work-card-2)',
          'var(--color-dark-work-card-3)',
          'var(--color-dark-work-card-4)'
        ]
      : [
          'var(--color-work-card-1)',
          'var(--color-work-card-2)',
          'var(--color-work-card-3)',
          'var(--color-work-card-4)'
        ];
    
    return colors[idx % colors.length];
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
  const currentColor = getCurrentColor(index);

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
        className="min-h-[320px] sm:min-h-[340px] md:rounded-[20px] rounded-[10px] h-full"
        isDarkMode={isDarkMode}
      >
        <CardContent 
          item={item} 
          IconComponent={IconComponent} 
          currentColor={currentColor} 
          isDarkMode={isDarkMode} 
        />
      </GlowingCard>
    </motion.div>
  );
};

export default WorkExperienceCard;