"use client";
import { motion } from "framer-motion";
import { techIcons } from "@/app/lib/utils/techIcons";
import { IoCodeSlash } from "react-icons/io5";
import GlowingCard from "@/app/components/molecules/cards/GlowingCard";

export default function TechStackCard({ tech, color, index, isDarkMode }) {
  const IconComponent = techIcons[tech.name] || IoCodeSlash;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative h-full"
    >
      <GlowingCard
        color={color}
        className="border border-gray-400/15 dark:border-neutral-400/20 shadow"
        borderRadius="10px"
        isDarkMode={isDarkMode}
      >
        <div className="flex items-center gap-3 p-3 sm:p-4">
          <IconComponent
            className="text-lg sm:text-xl shrink-0"
            style={{ color }}
          />
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-h4 dark:text-Head4dark">
              {tech.name}
            </h4>
            {tech.version && (
              <p className="text-xs text-para2 dark:text-darkPara2 mt-0.5">
                v{tech.version}
              </p>
            )}
          </div>
        </div>
      </GlowingCard>
    </motion.div>
  );
}
