"use client";
import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaTachometerAlt, 
  FaCheckCircle, 
  FaClock,
  FaBolt,
  FaMobile,
  FaLayerGroup,
  FaCog
} from "react-icons/fa";
import { SiLighthouse, SiSpeedtest } from "react-icons/si";
import Heading from "../../atoms/typography/Heading/Heading";
import GlowingCard from "../../molecules/cards/GlowingCard";
import useDarkMode from "@/app/hooks/useDarkMode";
import ProgressBar from "../../organisms/projectDetail/ProgressBar";
import { DigitSlideCounter } from "@/app/components/atoms/animation/index"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function PerformanceMetricsSection({ project }) {
  const { isDarkMode } = useDarkMode();
  
  if (!project.stats) {
    return null;
  }

  const primaryAccent = isDarkMode ? "var(--darkgrad-primary)" : "var(--grad-primary)";
  const secondaryAccent = isDarkMode ? "var(--darkgrad-secondary)" : "var(--grad-secondary)";

  // Check if we have lighthouse scores
  const hasLighthouseScores = project.stats.lighthousePerformance !== undefined;

  // Function to get icon for stats
  const getStatIcon = (key) => {
    const iconClass = "text-base";
    
    switch(key.toLowerCase()) {
      case 'developmenttime':
        return <FaClock className={iconClass} style={{ color: secondaryAccent }} />;
      case 'pages':
        return <FaLayerGroup className={iconClass} style={{ color: secondaryAccent }} />;
      case 'components':
        return <FaCog className={iconClass} style={{ color: secondaryAccent }} />;
      case 'responsivebreakpoints':
        return <FaMobile className={iconClass} style={{ color: secondaryAccent }} />;
      default:
        return <FaChartLine className={iconClass} style={{ color: secondaryAccent }} />;
    }
  };

  // Format key for display
  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/lighthouse/gi, '')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Function to check if value is numeric
  const isNumeric = (value) => {
    if (typeof value === 'number') return true;
    if (typeof value === 'string') {
      const num = parseFloat(value);
      return !isNaN(num) && isFinite(num);
    }
    return false;
  };

  // Function to extract numeric value
  const extractNumericValue = (value) => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
      // Extract numbers from string (e.g., "95%" -> 95, "1.5s" -> 1.5)
      const match = value.match(/(\d+(\.\d+)?)/);
      return match ? parseFloat(match[1]) : 0;
    }
    return 0;
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <Heading
        heading="Performance Metrics"
        subheading="Detailed analysis of performance, accessibility, and best practices"
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
        {/* Lighthouse Scores Card */}
        {hasLighthouseScores && (
          <motion.div variants={fadeInUp}>
            <GlowingCard 
              color={primaryAccent}
              className="h-full border border-gray-400/15 dark:border-neutral-400/20 shadow-lg"
              borderRadius="16px"
            >
              <div className="h-full p-5 sm:p-7">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ 
                    background: `linear-gradient(135deg, ${primaryAccent}15, ${primaryAccent}05)`,
                    border: `1px solid ${primaryAccent}20`
                  }}>
                    <SiLighthouse 
                      className="text-xl sm:text-2xl"
                      style={{ color: primaryAccent }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      Lighthouse Scores
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Google Lighthouse performance audit results
                    </p>
                  </div>
                </div>
                
                {/* Progress Bars Grid */}
                <div className="space-y-4 sm:space-y-5">
                  {project.stats.lighthousePerformance !== undefined && (
                    <ProgressBar 
                      score={project.stats.lighthousePerformance}
                      label="Performance"
                    />
                  )}
                  
                  {project.stats.lighthouseAccessibility !== undefined && (
                    <ProgressBar 
                      score={project.stats.lighthouseAccessibility}
                      label="Accessibility"
                    />
                  )}
                  
                  {project.stats.lighthouseBestPractices !== undefined && (
                    <ProgressBar 
                      score={project.stats.lighthouseBestPractices}
                      label="Best Practices"
                    />
                  )}
                  
                  {project.stats.lighthouseSEO !== undefined && (
                    <ProgressBar 
                      score={project.stats.lighthouseSEO}
                      label="SEO"
                    />
                  )}
                </div>

                {/* Additional Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  {project.stats.loadTime && (
                    <div className="p-3 sm:p-4 rounded-xl" style={{ 
                      background: `linear-gradient(to right, ${primaryAccent}08, ${primaryAccent}03)`,
                      border: `1px solid ${primaryAccent}20`
                    }}>
                      <div className="flex items-center gap-3">
                        <FaBolt 
                          className="text-sm"
                          style={{ color: primaryAccent }}
                        />
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Load Time</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {project.stats.loadTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {project.stats.coreWebVitals && (
                    <div className="p-3 sm:p-4 rounded-xl" style={{ 
                      background: `linear-gradient(to right, ${primaryAccent}08, ${primaryAccent}03)`,
                      border: `1px solid ${primaryAccent}20`
                    }}>
                      <div className="flex items-center gap-3">
                        <SiSpeedtest 
                          className="text-sm"
                          style={{ color: primaryAccent }}
                        />
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Core Web Vitals</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {project.stats.coreWebVitals}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </GlowingCard>
          </motion.div>
        )}

        {/* Development Stats Card */}
        <motion.div variants={fadeInUp}>
          <GlowingCard 
            color={secondaryAccent}
            className="h-full border border-gray-400/15 dark:border-neutral-400/20 shadow-lg"
            borderRadius="16px"
          >
            <div className="h-full p-5 sm:p-7">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl" style={{ 
                  background: `linear-gradient(135deg, ${secondaryAccent}15, ${secondaryAccent}05)`,
                  border: `1px solid ${secondaryAccent}20`
                }}>
                  <FaTachometerAlt 
                    className="text-xl sm:text-2xl"
                    style={{ color: secondaryAccent }}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Development Stats
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Project metrics and development details
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(project.stats)
                  .filter(([key]) => !key.includes('lighthouse') && key !== 'loadTime' && key !== 'coreWebVitals')
                  .map(([key, value]) => {
                    const isValueNumeric = isNumeric(value);
                    const numericValue = isValueNumeric ? extractNumericValue(value) : 0;
                    
                    return (
                      <div 
                        key={key}
                        className="p-3 sm:p-4 rounded-xl group hover:scale-[1.02] transition-transform"
                        style={{ 
                          background: `linear-gradient(to bottom right, ${secondaryAccent}08, ${secondaryAccent}02)`,
                          border: `1px solid ${secondaryAccent}15`
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {getStatIcon(key)}
                          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                            {formatKey(key)}
                          </p>
                        </div>
                        <div className="flex items-center">
                          {isValueNumeric ? (
                            <DigitSlideCounter 
                              value={numericValue}
                              duration={2000}
                              className="text-2xl sm:text-3xl font-bold truncate"
                            />
                          ) : (
                            <p 
                              className="text-xl sm:text-2xl font-bold truncate"
                              style={{ color: secondaryAccent }}
                            >
                              {value}
                            </p>
                          )}
                          {/* Add unit if it exists (like %, s, etc.) */}
                          {typeof value === 'string' && value.includes('%') && (
                            <span className="text-base ml-1" style={{ color: secondaryAccent }}>%</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Development Info (removed status from here) */}
              {project.developmentInfo && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaCog 
                      className="text-base"
                      style={{ color: secondaryAccent }}
                    />
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                      Development Details
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.developmentInfo.type && (
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Type</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {project.developmentInfo.type}
                        </p>
                      </div>
                    )}
                    {project.developmentInfo.focus && (
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Focus</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {project.developmentInfo.focus}
                        </p>
                      </div>
                    )}
                    {/* Status removed from here */}
                  </div>
                </motion.div>
              )}
            </div>
          </GlowingCard>
        </motion.div>
      </div>
    </motion.section>
  );
}