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
import Heading from "../../atoms/typography/Heading/Heading";
import GlowingCard from "../../molecules/cards/GlowingCard";
import useDarkMode from "@/app/hooks/useDarkMode";

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
  transition: { duration: 0.4, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function KeyFeaturesSection({ project }) { 
  const { isDarkMode } = useDarkMode(); 
  
  if (!project.keyFeatures || project.keyFeatures.length === 0) {
    return null;
  }

  // Determine colors based on theme
  const accentColor = isDarkMode ? "var(--darkgrad-primary)" : "var(--grad-primary)";
  const secondaryColor = isDarkMode ? "var(--darkgrad-secondary)" : "var(--grad-secondary)";

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <Heading
        heading="Key Features"
        subheading="Innovative features that make this project stand out"
        align="center"
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        variants={staggerContainer}
      >
        {project.keyFeatures.map((feature, index) => {
          const Icon = featureIcons[index % featureIcons.length];
          return (
            <motion.div
              key={index}
              className="group relative"
              variants={scaleIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <GlowingCard 
                color={accentColor}
                className="h-full border border-gray-400/15   dark:border-neutral-400/20 shadow"
                borderRadius="12px"
                isDarkMode={isDarkMode}
              >
                <div className="relative z-20 h-full p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <Icon 
                        className="text-md md:text-xl sm:text-base"
                        style={{ color: accentColor }}
                      />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-h3 dark:text-Head3dark mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-para2 dark:text-darkPara2 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {feature.highlight && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-lightBorder dark:border-darkBorder">
                      <div 
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm"
                        style={{
                          background: `linear-gradient(to right, ${accentColor}10, ${secondaryColor}10)`,
                          border: `1px solid ${accentColor}20`
                        }}
                      >
                        <IoSparkles 
                          className="text-sm"
                          style={{ color: accentColor }}
                        />
                        <span 
                          className="font-medium"
                          style={{ color: accentColor }}
                        >
                          {feature.highlight}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </GlowingCard>
              
            </motion.div>
          );
        })}
      </motion.div>

      {/* Optional: Feature count badge */}
      {project.keyFeatures.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: `linear-gradient(to right, ${accentColor}05, ${secondaryColor}05)`,
              border: `1px solid ${accentColor}20`
            }}
          >
            <FaStar 
              className="text-sm"
              style={{ color: accentColor }}
            />
            <span className="text-sm text-para2 dark:text-darkPara2">
              <span 
                className="font-medium"
                style={{ color: accentColor }}
              >
                {project.keyFeatures.length}
              </span> key features
            </span>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}