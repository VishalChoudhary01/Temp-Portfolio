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

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function TechStackSection({ project, colors }) {
  if (!project.techStack) {
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
          <FaToolbox className={`text-2xl ${colors.text}`} />
          <h2 className={`text-3xl sm:text-4xl font-bold ${colors.text}`}>
            Technology Stack
          </h2>
        </div>
        <p className={`max-w-2xl mx-auto text-lg ${colors.textSecondary}`}>
          Modern tools and technologies powering this project
        </p>
      </motion.div>

      {project.techStack.frontend && (
        <motion.div variants={fadeInUp} className="mb-8">
          <h3 className={`text-xl font-semibold mb-6 ${colors.text}`}>
            Frontend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.techStack.frontend.map((tech, index) => {
              const TechIcon = techIcons[tech.name] || IoCodeSlash;
              return (
                <div
                  key={index}
                  className={`rounded-xl p-4 ${colors.cardBg} border ${colors.accent} backdrop-blur-lg`}
                >
                  <TechIcon className={`text-2xl mb-2 ${colors.text}`} />
                  <h4 className={`font-medium ${colors.text}`}>{tech.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {tech.version}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

      {project.techStack.backend && (
        <motion.div variants={fadeInUp}>
          <h3 className={`text-xl font-semibold mb-6 ${colors.text}`}>
            Backend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.techStack.backend.map((tech, index) => {
              const TechIcon = techIcons[tech.name] || IoCodeSlash;
              return (
                <div
                  key={index}
                  className={`rounded-xl p-4 ${colors.cardBg} border ${colors.accent} backdrop-blur-lg`}
                >
                  <TechIcon className={`text-2xl mb-2 ${colors.text}`} />
                  <h4 className={`font-medium ${colors.text}`}>{tech.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {tech.version}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
