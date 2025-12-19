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

export default function ProjectOverviewSection({ project }) {
  const { isDarkMode } = useDarkMode();
  
  // Get accent colors from CSS variables
  const primaryAccent = isDarkMode ? "var(--darkgrad-primary)" : "var(--grad-primary)";

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full px-4 sm:px-6 py-8 sm:py-12"
    >
      <div className="mx-auto w-full lg:w-4/5">
        <Heading
          heading="Project Overview"
          subheading="A comprehensive look at the project objectives, challenges, and outcomes"
          align="center"
        />

        <div className="mt-6 sm:mt-8">
          <motion.div variants={slideInLeft} className="h-full">
            <GlowingCornerHover 
              color={primaryAccent}
              className="h-full border border-gray-400/10 dark:border-neutral-400/10 shadow-sm backdrop-blur-sm bg-white/30 dark:bg-black/20"
            >
              <div className="h-full p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white text-center">
                  About This Project
                </h3>
                
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {project.longDescription || project.description}
                </p>
                
                {/* Minimal stats with no boxes - just subtle hover effects */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {/* Year */}
                  {project.year && (
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center group"
                    >
                      <div className="mb-1 p-2 rounded-full backdrop-blur-xs bg-white/30 dark:bg-black/30 group-hover:bg-white/40 dark:group-hover:bg-black/40 transition-colors">
                        <FaCalendar 
                          className="text-base"
                          style={{ color: primaryAccent }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                          Year
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {project.year}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Category */}
                  {project.category && (
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center group"
                    >
                      <div className="mb-1 p-2 rounded-full backdrop-blur-xs bg-white/30 dark:bg-black/30 group-hover:bg-white/40 dark:group-hover:bg-black/40 transition-colors">
                        <FaLayerGroup 
                          className="text-base"
                          style={{ color: primaryAccent }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                          Category
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {project.category}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Status */}
                  {project.developmentInfo?.status && (
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center group"
                    >
                      <div className="mb-1 p-2 rounded-full backdrop-blur-xs" style={{ 
                        background: isDarkMode 
                          ? `${getStatusColor(project.developmentInfo.status, isDarkMode)}30`
                          : `${getStatusColor(project.developmentInfo.status, isDarkMode)}20`,
                        border: `1px solid ${getStatusColor(project.developmentInfo.status, isDarkMode)}40`
                      }}>
                        <FaCodeBranch 
                          className="text-base"
                          style={{ color: getStatusColor(project.developmentInfo.status, isDarkMode) }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          Status
                        </p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xs" 
                          style={{ 
                            background: isDarkMode 
                              ? `${getStatusColor(project.developmentInfo.status, isDarkMode)}25`
                              : `${getStatusColor(project.developmentInfo.status, isDarkMode)}15`,
                            border: `1px solid ${getStatusColor(project.developmentInfo.status, isDarkMode)}40`
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ 
                            backgroundColor: getStatusColor(project.developmentInfo.status, isDarkMode) 
                          }} />
                          <span style={{ 
                            color: getStatusColor(project.developmentInfo.status, isDarkMode) 
                          }}>
                            {project.developmentInfo.status}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Client */}
                  {project.client && (
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center group"
                    >
                      <div className="mb-1 p-2 rounded-full backdrop-blur-xs bg-white/30 dark:bg-black/30 group-hover:bg-white/40 dark:group-hover:bg-black/40 transition-colors">
                        <FaUser 
                          className="text-base"
                          style={{ color: primaryAccent }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                          Client
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {project.client}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </GlowingCornerHover>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}