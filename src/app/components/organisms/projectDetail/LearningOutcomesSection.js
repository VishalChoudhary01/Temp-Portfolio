"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLightbulb, FaCode, FaUsers } from "react-icons/fa";
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

export default function LearningOutcomesSection({ project }) {
  const { isDarkMode } = useDarkMode();
  
  const hasLearningOutcomes = project.learningOutcomes && project.learningOutcomes.length > 0;
  const hasFutureEnhancements = project.futureEnhancements && project.futureEnhancements.length > 0;
  
  // If neither exists, return null
  if (!hasLearningOutcomes && !hasFutureEnhancements) {
    return null;
  }

  const primaryAccent = isDarkMode ? "var(--darkgrad-primary)" : "var(--grad-primary)";
  const secondaryAccent = isDarkMode ? "var(--darkgrad-secondary)" : "var(--grad-secondary)";

  const learningIcons = [FaCode, FaUsers, FaGraduationCap, FaLightbulb];
  
  // Check if we should use centered layout (only one section)
  const useCenteredLayout = !(hasLearningOutcomes && hasFutureEnhancements);

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <Heading
        heading={hasLearningOutcomes && hasFutureEnhancements ? "Key Learnings & Future Plans" : (hasLearningOutcomes ? "Key Learnings" : "Future Plans")}
        subheading={hasLearningOutcomes && hasFutureEnhancements ? "Insights gained during development and potential improvements" : (hasLearningOutcomes ? "Insights gained during development" : "Potential improvements and future enhancements")}
        align="center"
      />

      {/* Conditional layout */}
      {useCenteredLayout ? (
        // Centered single column layout
        <div className="flex justify-center mt-6 sm:mt-8">
          <motion.div 
            variants={fadeInUp}
            className={`w-full ${hasLearningOutcomes ? 'max-w-2xl' : 'max-w-2xl'}`}
          >
            {hasLearningOutcomes && (
              <GlowingCard 
                color={primaryAccent}
                className="h-full border border-gray-400/15 dark:border-neutral-400/20 shadow"
              >
                <div className="h-full p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FaGraduationCap 
                      className="text-lg sm:text-xl"
                      style={{ color: primaryAccent }}
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-h3 dark:text-Head3dark">
                      Learning Outcomes
                    </h3>
                  </div>

                  <motion.div 
                    className="space-y-3 sm:space-y-4"
                    variants={staggerContainer}
                  >
                    {project.learningOutcomes.map((outcome, index) => {
                      const Icon = learningIcons[index % learningIcons.length];
                      return (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start gap-3 p-3 rounded-lg bg-lightBg dark:bg-darkBg group hover:scale-[1.02] transition-transform"
                        >
                          <div className="p-2 rounded-lg flex-shrink-0">
                            <Icon 
                              className="text-sm"
                              style={{ color: primaryAccent }}
                            />
                          </div>
                          <div>
                            <p className="text-sm text-para2 dark:text-darkPara2 leading-relaxed">
                              {outcome}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </GlowingCard>
            )}

            {hasFutureEnhancements && (
              <GlowingCard 
                color={secondaryAccent}
                className="h-full border border-gray-400/15 dark:border-neutral-400/20 shadow"
              >
                <div className="h-full p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FaLightbulb 
                      className="text-lg sm:text-xl"
                      style={{ color: secondaryAccent }}
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-h3 dark:text-Head3dark">
                      Future Enhancements
                    </h3>
                  </div>

                  <motion.div 
                    className="space-y-3 sm:space-y-4"
                    variants={staggerContainer}
                  >
                    {project.futureEnhancements.map((enhancement, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3 p-3 rounded-lg border border-lightBorder dark:border-darkBorder group hover:border-opacity-50 transition-all"
                        style={{ borderColor: `${secondaryAccent}30` }}
                      >
                        <div className="flex-shrink-0">
                          <div 
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{ 
                              backgroundColor: `${secondaryAccent}20`,
                              color: secondaryAccent
                            }}
                          >
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-para2 dark:text-darkPara2 leading-relaxed">
                            {enhancement}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </GlowingCard>
            )}
          </motion.div>
        </div>
      ) : (
        // Two column layout (when both sections exist)
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {/* Learning Outcomes */}
          <motion.div variants={fadeInUp}>
            <GlowingCard 
              color={primaryAccent}
              className="h-full border border-gray-400/15 dark:border-neutral-400/20 shadow"
            >
              <div className="h-full p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaGraduationCap 
                    className="text-lg sm:text-xl"
                    style={{ color: primaryAccent }}
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-h3 dark:text-Head3dark">
                    Learning Outcomes
                  </h3>
                </div>

                <motion.div 
                  className="space-y-3 sm:space-y-4"
                  variants={staggerContainer}
                >
                  {project.learningOutcomes.map((outcome, index) => {
                    const Icon = learningIcons[index % learningIcons.length];
                    return (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3 p-3 rounded-lg bg-lightBg dark:bg-darkBg group hover:scale-[1.02] transition-transform"
                      >
                        <div className="p-2 rounded-lg flex-shrink-0">
                          <Icon 
                            className="text-sm"
                            style={{ color: primaryAccent }}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-para2 dark:text-darkPara2 leading-relaxed">
                            {outcome}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Future Enhancements */}
          <motion.div variants={fadeInUp}>
            <GlowingCard 
              color={secondaryAccent}
              className="h-full border border-gray-400/15 dark:border-neutral-400/20 shadow"
            >
              <div className="h-full p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaLightbulb 
                    className="text-lg sm:text-xl"
                    style={{ color: secondaryAccent }}
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-h3 dark:text-Head3dark">
                    Future Enhancements
                  </h3>
                </div>

                <motion.div 
                  className="space-y-3 sm:space-y-4"
                  variants={staggerContainer}
                >
                  {project.futureEnhancements.map((enhancement, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3 p-3 rounded-lg border border-lightBorder dark:border-darkBorder group hover:border-opacity-50 transition-all"
                      style={{ borderColor: `${secondaryAccent}30` }}
                    >
                      <div className="flex-shrink-0">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ 
                            backgroundColor: `${secondaryAccent}20`,
                            color: secondaryAccent
                          }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-para2 dark:text-darkPara2 leading-relaxed">
                          {enhancement}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </GlowingCard>
          </motion.div>
        </div>
      )}

      {/* Summary if both sections exist */}
      {hasLearningOutcomes && hasFutureEnhancements && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: `linear-gradient(to right, ${primaryAccent}05, ${secondaryAccent}05)`,
              border: `1px solid ${primaryAccent}20`
            }}
          >
            <FaLightbulb 
              className="text-sm"
              style={{ color: primaryAccent }}
            />
            <span className="text-sm text-para2 dark:text-darkPara2">
              <span className="font-medium" style={{ color: primaryAccent }}>
                {project.learningOutcomes.length}
              </span> learnings • 
              <span className="font-medium ml-2" style={{ color: secondaryAccent }}>
                {project.futureEnhancements.length}
              </span> future plans
            </span>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}