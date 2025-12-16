"use client";
import { FaRocket, FaGithub, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function FinalCTASection({ project, colors, isDarkMode }) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-4xl mx-auto"
    >
      <motion.div
        className={`text-center rounded-2xl p-8 sm:p-12 ${colors.cardBg} border ${colors.accent} backdrop-blur-xl`}
        variants={fadeInUp}
      >
        <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${colors.text}`}>
          Ready to Explore?
        </h2>
        <p className={`mb-8 max-w-2xl mx-auto text-lg ${colors.textSecondary}`}>
          Experience the project live or dive into the source code to see the
          implementation details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${colors.secondary} text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 font-semibold group shadow-lg backdrop-blur-lg`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket />
            View Live Project
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 font-semibold backdrop-blur-xl border ${
              isDarkMode
                ? "bg-gray-900/40 border-gray-800/60 text-gray-300 hover:bg-gray-800/40"
                : "bg-white/70 border-gray-300/50 text-gray-700 hover:bg-white/90"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            Source Code
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
