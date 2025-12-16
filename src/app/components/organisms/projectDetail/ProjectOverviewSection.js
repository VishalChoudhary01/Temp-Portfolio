// Updated ProjectOverviewSection with Tailwind classes and status-based colors
"use client";
import { FaCalendar, FaUser, FaLayerGroup, FaCodeBranch } from "react-icons/fa";
import { motion } from "motion/react";
import Heading from "../../atoms/typography/Heading/Heading"; 
import GlowingCornerHover from "../../molecules/cards/GlowingCard";
import useDarkMode from "@/app/hooks/useDarkMode";

const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

// Helper function to get status color
const getStatusColor = (status, isDarkMode) => {
  const statusLower = status?.toLowerCase() || '';
  
  if (statusLower.includes('complete') || statusLower.includes('done') || statusLower.includes('live')) {
    return isDarkMode ? "#10b981" : "#059669"; // Green
  } else if (statusLower.includes('progress') || statusLower.includes('ongoing') || statusLower.includes('active')) {
    return isDarkMode ? "#f59e0b" : "#d97706"; // Amber
  } else if (statusLower.includes('pending') || statusLower.includes('planned') || statusLower.includes('upcoming')) {
    return isDarkMode ? "#f97316" : "#ea580c"; // Orange
  } else if (statusLower.includes('hold') || statusLower.includes('paused') || statusLower.includes('stopped')) {
    return isDarkMode ? "#ef4444" : "#dc2626"; // Red
  }
  
  // Default to theme accent color
  return isDarkMode ? "var(--darkgrad-primary)" : "var(--grad-primary)";
};

// Helper function to format numerical values
const formatNumber = (value) => {
  if (typeof value === 'number') {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  }
  return value;
};

export default function ProjectOverviewSection({
  project,
}) {
  const { isDarkMode } = useDarkMode();
  
  // Get accent colors from CSS variables
  const primaryAccent = isDarkMode ? "var(--darkgrad-primary)" : "var(--grad-primary)";
  const secondaryAccent = isDarkMode ? "var(--darkgrad-secondary)" : "var(--grad-secondary)";

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
    >
      <Heading
        heading="Project Overview"
        subheading="A comprehensive look at the project objectives, challenges, and outcomes"
        align="center"
      />

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
        {/* About This Project Card */}
        <motion.div variants={slideInLeft} className="h-full">
          <GlowingCornerHover 
            color={primaryAccent}
            className="h-full border border-gray-400/15   dark:border-neutral-400/20 shadow"
          >
            <div className="h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-h3 dark:text-Head3dark">
                About This Project
              </h3>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-para2 dark:text-darkPara2 text-pretty leading-relaxed">
                {project.longDescription || project.description}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {project.year && (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaCalendar 
                      className="text-sm sm:text-base"
                      style={{ color: primaryAccent }}
                    />
                    <div>
                      <p className="text-xs sm:text-sm text-para2 dark:text-darkPara2">
                        Year
                      </p>
                      <p className="font-medium text-sm sm:text-base text-h4 dark:text-Head4dark">
                        {project.year}
                      </p>
                    </div>
                  </div>
                )}
                {project.client && (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaUser 
                      className="text-sm sm:text-base"
                      style={{ color: primaryAccent }}
                    />
                    <div>
                      <p className="text-xs sm:text-sm text-para2 dark:text-darkPara2">
                        Client
                      </p>
                      <p className="font-medium text-sm sm:text-base text-h4 dark:text-Head4dark">
                        {project.client}
                      </p>
                    </div>
                  </div>
                )}
                {project.category && (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaLayerGroup 
                      className="text-sm sm:text-base"
                      style={{ color: primaryAccent }}
                    />
                    <div>
                      <p className="text-xs sm:text-sm text-para2 dark:text-darkPara2">
                        Category
                      </p>
                      <p className="font-medium text-sm sm:text-base text-h4 dark:text-Head4dark">
                        {project.category}
                      </p>
                    </div>
                  </div>
                )}
                {project.developmentInfo?.status && (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaCodeBranch 
                      className="text-sm sm:text-base"
                      style={{ color: getStatusColor(project.developmentInfo.status, isDarkMode) }}
                    />
                    <div>
                      <p className="text-xs sm:text-sm text-para2 dark:text-darkPara2">
                        Status
                      </p>
                      <p 
                        className="font-medium text-sm sm:text-base"
                        style={{ color: getStatusColor(project.developmentInfo.status, isDarkMode) }}
                      >
                        {project.developmentInfo.status}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </GlowingCornerHover>
        </motion.div>

        {/* Key Metrics Card */}
        {project.stats && (
          <motion.div variants={slideInRight} className="h-full">
            <GlowingCornerHover 
              color={secondaryAccent}
              className="h-full border border-gray-400/15   dark:border-neutral-400/20 shadow"
            >
              <div className="h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-h3 dark:text-Head3dark">
                  Key Metrics
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(project.stats).map(([key, value]) => {
                    // Determine if value is numerical
                    const isNumeric = typeof value === 'number';
                    const formattedValue = isNumeric ? formatNumber(value) : value;
                    
                    return (
                      <div
                        key={key}
                        className="p-3 sm:p-4 rounded-lg backdrop-blur-sm border border-lightBorder dark:border-darkBorder relative overflow-hidden group"
                      >
                        <div className="relative z-10 flex flex-col items-start">
                          <p 
                            className="text-xl sm:text-2xl font-bold mb-1"
                            style={{ color: primaryAccent }}
                          >
                            {formattedValue}
                            {isNumeric && (
                              <span className="text-sm ml-1 opacity-70">
                                {value >= 1000000 ? 'M' : value >= 1000 ? 'K' : ''}
                              </span>
                            )}
                          </p>
                          <p className="text-xs sm:text-sm text-para2 dark:text-darkPara2 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlowingCornerHover>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}