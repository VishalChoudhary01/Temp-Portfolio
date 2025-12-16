"use client";
import { motion } from "framer-motion";
import { FaToolbox } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiFirebase,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiJest,
} from "react-icons/si";
import Heading from "../../atoms/typography/Heading/Heading";
import useDarkMode from "@/app/hooks/useDarkMode";
import GlowingCard from "../../molecules/cards/GlowingCard";

const techIcons = {
  NextJS: SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  TypeScript: SiTypescript,
  React: SiReact,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Express: SiExpress,
  Vercel: SiVercel,
  Firebase: SiFirebase,
  Redux: SiRedux,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  Jest: SiJest,
};

export default function TechStackSection({ project }) {
  const { isDarkMode } = useDarkMode();
  
  if (!project.techStack) {
    return null;
  }

  // Get accent colors from CSS variables
  const primaryAccent = isDarkMode ? "var(--darkgrad-primary)" : "var(--grad-primary)";
  const secondaryAccent = isDarkMode ? "var(--darkgrad-secondary)" : "var(--grad-secondary)";
  const tertiaryAccent = isDarkMode ? "var(--darkgrad-tertiary)" : "var(--grad-tertiary)";

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <Heading
        heading="Technology Stack"
        subheading="Modern tools and technologies powering this project"
        align="center"
      />

      <div className="space-y-6 sm:space-y-8">
        {/* Frontend Section */}
        {project.techStack.frontend && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <FaToolbox 
                className="text-lg sm:text-xl"
                style={{ color: primaryAccent }}
              />
              <h3 className="text-lg sm:text-xl font-semibold text-h3 dark:text-Head3dark">
                Frontend
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {project.techStack.frontend.map((tech, index) => {
                const TechIcon = techIcons[tech.name] || IoCodeSlash;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative"
                  >
                    <GlowingCard 
                      color={primaryAccent}
                      className="h-full border border-gray-400/15 dark:border-neutral-400/20 shadow"
                      borderRadius="10px"
                    >
                      <div className="relative z-20 h-full">
                        <div className="flex items-center gap-3 p-3 sm:p-4">
                          <TechIcon 
                            className="text-xl sm:text-2xl flex-shrink-0"
                            style={{ color: primaryAccent }}
                          />
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-h4 dark:text-Head4dark">
                              {tech.name}
                            </h4>
                            {tech.version && (
                              <p className="text-xs text-para2 dark:text-darkPara2 mt-0.5">
                                v{tech.version}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </GlowingCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Backend Section */}
        {project.techStack.backend && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <FaToolbox 
                className="text-lg sm:text-xl"
                style={{ color: secondaryAccent }}
              />
              <h3 className="text-lg sm:text-xl font-semibold text-h3 dark:text-Head3dark">
                Backend
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {project.techStack.backend.map((tech, index) => {
                const TechIcon = techIcons[tech.name] || IoCodeSlash;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative"
                  >
                    <GlowingCard 
                      color={secondaryAccent}
                      className="h-full"
                      borderRadius="10px"
                      isDarkMode={isDarkMode}
                    >
                      <div className="relative z-20 h-full">
                        <div className="flex items-center gap-3 p-3 sm:p-4">
                          <TechIcon 
                            className="text-xl sm:text-2xl flex-shrink-0"
                            style={{ color: secondaryAccent }}
                          />
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-h4 dark:text-Head4dark">
                              {tech.name}
                            </h4>
                            {tech.version && (
                              <p className="text-xs text-para2 dark:text-darkPara2 mt-0.5">
                                v{tech.version}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </GlowingCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Additional sections if needed */}
        {project.techStack.tools && project.techStack.tools.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <IoCodeSlash 
                className="text-lg sm:text-xl"
                style={{ color: tertiaryAccent }}
              />
              <h3 className="text-lg sm:text-xl font-semibold text-h3 dark:text-Head3dark">
                Tools
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {project.techStack.tools.map((tech, index) => {
                const TechIcon = techIcons[tech.name] || IoCodeSlash;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative"
                  >
                    <GlowingCard 
                      color={tertiaryAccent}
                      className="h-full "
                      borderRadius="10px"
                    >
                      <div className="relative z-20 h-full ">
                        <div className="flex items-center gap-3 p-3 sm:p-4">
                          <TechIcon 
                            className="text-xl sm:text-2xl flex-shrink-0"
                            style={{ color: tertiaryAccent }}
                          />
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-h4 dark:text-Head4dark">
                              {tech.name}
                            </h4>
                            {tech.version && (
                              <p className="text-xs text-para2 dark:text-darkPara2 mt-0.5">
                                v{tech.version}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </GlowingCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}