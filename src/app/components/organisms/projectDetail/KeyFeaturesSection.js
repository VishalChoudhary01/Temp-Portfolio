"use client";
import {
  FaStar,
  FaRocket,
  FaMobile,
  FaPalette,
  FaCog,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaChartLine,
  FaLayerGroup,
  FaToolbox,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { IoSparkles } from "react-icons/io5";

const featureIcons = [
  FaRocket,
  FaMobile,
  FaPalette,
  FaCog,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaChartLine,
  FaLayerGroup,
  FaToolbox,
];

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

export default function KeyFeaturesSection({ project, colors }) {
  if (!project.keyFeatures || project.keyFeatures.length === 0) {
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
          <FaStar className={`text-2xl ${colors.text}`} />
          <h2 className={`text-3xl sm:text-4xl font-bold ${colors.text}`}>
            Key Features
          </h2>
        </div>
        <p className={`max-w-2xl mx-auto text-lg ${colors.textSecondary}`}>
          Innovative features that make this project stand out
        </p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
      >
        {project.keyFeatures.map((feature, index) => {
          const Icon = featureIcons[index % featureIcons.length];
          return (
            <motion.div
              key={index}
              className={`rounded-xl p-6 ${colors.cardBg} border ${colors.accent} backdrop-blur-xl`}
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${colors.secondary}`}>
                  <Icon className="text-white text-lg" />
                </div>
                <h3 className={`text-lg font-semibold ${colors.text}`}>
                  {feature.title}
                </h3>
              </div>
              <p className={`mb-4 ${colors.textSecondary}`}>
                {feature.description}
              </p>
              {feature.highlight && (
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${colors.bg}`}
                >
                  <IoSparkles className={colors.text} />
                  <span className={colors.text}>{feature.highlight}</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
