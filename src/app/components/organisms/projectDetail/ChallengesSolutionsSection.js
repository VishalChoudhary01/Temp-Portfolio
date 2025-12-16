"use client";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ChallengesSolutionsSection({ project, colors }) {
  if (!project.challenges || project.challenges.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-6xl mx-auto"
    >
      <motion.div className="text-center mb-12" variants={fadeInUp}>
        <div className="inline-flex items-center gap-2 mb-4">
          <FaLightbulb className={`text-2xl ${colors.text}`} />
          <h2 className={`text-3xl sm:text-4xl font-bold ${colors.text}`}>
            Challenges & Solutions
          </h2>
        </div>
        <p className={`max-w-2xl mx-auto text-lg ${colors.textSecondary}`}>
          Technical hurdles and innovative solutions implemented
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={staggerContainer}
      >
        {project.challenges.map((challenge, index) => (
          <motion.div
            key={index}
            className={`rounded-xl p-6 ${colors.cardBg} border ${colors.accent} backdrop-blur-xl`}
            variants={scaleIn}
          >
            <div className="flex items-start gap-4 mb-4">
              {challenge.icon && (
                <div className={`p-3 rounded-lg ${colors.secondary}`}>
                  {challenge.icon({ className: "text-white text-lg" })}
                </div>
              )}
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${colors.text}`}>
                  {challenge.title}
                </h3>
                <p className={colors.textSecondary}>{challenge.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
