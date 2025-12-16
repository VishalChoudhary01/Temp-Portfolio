"use client";
import { FaCalendar, FaUser, FaLayerGroup, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";
import Heading from "../../atoms/typography/Heading/Heading"; 
import GlowingCornerHover from "../../molecules/cards/GlowingCard";

const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ProjectOverviewSection({
  project,
  colors,
  isDarkMode,
}) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <Heading
        heading="Project Overview"
        subheading="A comprehensive look at the project objectives, challenges, and outcomes"
        align="center"
      />

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <motion.div variants={slideInLeft}>
          <GlowingCornerHover color="">
            <div className="h-full p-6">
              <h3 className={`text-xl font-semibold mb-4 ${colors.text}`}>
                About This Project
              </h3>
              <p className={`mb-6 ${colors.textSecondary}`}>
                {project.longDescription || project.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {project.year && (
                  <div className="flex items-center gap-3">
                    <FaCalendar className={colors.text} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Year
                      </p>
                      <p className={`font-medium ${colors.text}`}>
                        {project.year}
                      </p>
                    </div>
                  </div>
                )}
                {project.client && (
                  <div className="flex items-center gap-3">
                    <FaUser className={colors.text} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Client
                      </p>
                      <p className={`font-medium ${colors.text}`}>
                        {project.client}
                      </p>
                    </div>
                  </div>
                )}
                {project.category && (
                  <div className="flex items-center gap-3">
                    <FaLayerGroup className={colors.text} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Category
                      </p>
                      <p className={`font-medium ${colors.text}`}>
                        {project.category}
                      </p>
                    </div>
                  </div>
                )}
                {project.developmentInfo?.status && (
                  <div className="flex items-center gap-3">
                    <FaCodeBranch className={colors.text} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Status
                      </p>
                      <p className={`font-medium ${colors.text}`}>
                        {project.developmentInfo.status}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </GlowingCornerHover>
        </motion.div>

        {/* Stats Grid - Also using GlowingCornerHover */}
        {project.stats && (
          <motion.div variants={slideInRight}>
            <GlowingCornerHover color={colors.accent}>
              <div className="h-full p-6">
                <h3 className={`text-xl font-semibold mb-6 ${colors.text}`}>
                  Key Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className={`p-4 rounded-xl ${
                        isDarkMode ? "bg-gray-800/30" : "bg-gray-100/50"
                      } backdrop-blur-lg`}
                    >
                      <p className={`text-2xl font-bold mb-1 ${colors.text}`}>
                        {value}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GlowingCornerHover>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}