"use client";
import { FaRocket, FaGithub, FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import GlowingCard from "../../molecules/cards/GlowingCard";
import useDarkMode from "@/app/hooks/useDarkMode";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function FinalCTASection({ project }) {
  const { isDarkMode } = useDarkMode();

  // Get accent colors from CSS variables
  const primaryAccent = isDarkMode
    ? "var(--darkgrad-primary)"
    : "var(--grad-primary)";
  const secondaryAccent = isDarkMode
    ? "var(--darkgrad-secondary)"
    : "var(--grad-secondary)";

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-4xl mx-auto px-4 sm:px-6"
    >
      <motion.div variants={fadeInUp}>
        <GlowingCard
          color={primaryAccent}
          className="w-full border border-gray-400/15 dark:border-neutral-400/20 shadow-lg"
          borderRadius="16px"
          isDarkMode={isDarkMode}
        >
          <div className="relative z-20 text-center p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-h2 dark:text-Head2dark">
              Ready to Explore?
            </h2>
            <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-para2 dark:text-darkPara2">
              Experience the project live or dive into the source code to see
              the implementation details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl flex items-center justify-center gap-2 sm:gap-3 font-semibold text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${primaryAccent}, ${secondaryAccent})`,
                    }}
                  >
                    <FaRocket className="text-sm sm:text-base" />
                    <span className="text-sm sm:text-base">
                      View Live Project
                    </span>
                    <FaArrowRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              )}

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl flex items-center justify-center gap-2 sm:gap-3 font-semibold shadow-lg backdrop-blur-sm border"
                    style={{
                      background: `linear-gradient(to right, ${primaryAccent}05, ${secondaryAccent}05)`,
                      borderColor: `${primaryAccent}30`,
                      color: primaryAccent,
                    }}
                  >
                    <FaGithub className="text-sm sm:text-base" />
                    <span className="text-sm sm:text-base">Source Code</span>
                  </div>
                </motion.a>
              )}
            </div>
          </div>
        </GlowingCard>
      </motion.div>
    </motion.section>
  );
}
