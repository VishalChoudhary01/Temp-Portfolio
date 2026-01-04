"use client";
import { motion } from "motion/react";
import { FaLightbulb } from "react-icons/fa";
import Heading from "../../atoms/typography/Heading/Heading";
import GlowingCard from "../../molecules/cards/GlowingCard";
import useDarkMode from "@/app/hooks/useDarkMode";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ChallengesSolutionsSection({ project }) {
  const { isDarkMode } = useDarkMode();

  if (!project.challenges || project.challenges.length === 0) {
    return null;
  }

  // Get accent colors from CSS variables
  const accentColor = isDarkMode
    ? "var(--darkgrad-primary)"
    : "var(--grad-primary)";
  const secondaryColor = isDarkMode
    ? "var(--darkgrad-secondary)"
    : "var(--grad-secondary)";

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <Heading
        heading="Challenges & Solutions"
        subheading="Technical hurdles and innovative solutions implemented"
        align="center"
      />

      <motion.div
        className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        variants={staggerContainer}
      >
        {project.challenges.map((challenge, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group relative"
          >
            <GlowingCard
              color={index % 2 === 0 ? accentColor : secondaryColor}
              className="h-full border border-gray-400/15 dark:border-neutral-400/20 shadow"
              borderRadius="12px"
              isDarkMode={isDarkMode}
            >
              <div className="relative z-20 h-full p-4 sm:p-6 lg:p-8">
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-6">
                  {challenge.icon && (
                    <div className="p-2 sm:p-3 lg:p-4 rounded-lg flex-shrink-0">
                      {challenge.icon({
                        className: "text-sm sm:text-base lg:text-lg",
                        style: {
                          color: index % 2 === 0 ? accentColor : secondaryColor,
                        },
                      })}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-h3 dark:text-Head3dark mb-1 sm:mb-2 lg:mb-4">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-para2 dark:text-darkPara2 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>

                {/* Solution highlight if available */}
                {challenge.solution && (
                  <div className="mt-3 sm:mt-4 lg:mt-8 pt-3 sm:pt-4 lg:pt-6 border-t border-lightBorder dark:border-darkBorder">
                    <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                      <FaLightbulb
                        className="text-sm lg:text-base mt-0.5 flex-shrink-0"
                        style={{
                          color: index % 2 === 0 ? accentColor : secondaryColor,
                        }}
                      />
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm lg:text-base font-medium text-h4 dark:text-Head4dark mb-1 sm:mb-2 lg:mb-3">
                          Solution
                        </p>
                        <p className="text-sm text-para2 dark:text-darkPara2">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </GlowingCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional: Summary badge */}
      {project.challenges.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: `linear-gradient(to right, ${accentColor}05, ${secondaryColor}05)`,
              border: `1px solid ${accentColor}20`,
            }}
          >
            <FaLightbulb className="text-sm" style={{ color: accentColor }} />
            <span className="text-sm text-para2 dark:text-darkPara2">
              <span className="font-medium" style={{ color: accentColor }}>
                {project.challenges.length}
              </span>{" "}
              challenges addressed
            </span>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
