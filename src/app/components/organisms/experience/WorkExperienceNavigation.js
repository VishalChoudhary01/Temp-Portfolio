import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const WorkExperienceNavigation = ({
  shouldShowLeftArrow,
  shouldShowRightArrow,
  goToPrev,
  goToNext
}) => {
  return (
    <>
      {shouldShowLeftArrow && (
        <motion.button
          onClick={goToPrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-icon-bg dark:bg-icon-darkBg backdrop-blur-xl hover:bg-icon-bg-hover dark:hover:bg-icon-bg-hover border border-lightBorder dark:border-darkBorder rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300"
          aria-label="Previous items"
        >
          <FaChevronLeft className="text-icon-text dark:text-DrkIcon-text text-base sm:text-lg" />
        </motion.button>
      )}

      {shouldShowRightArrow && (
        <motion.button
          onClick={goToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-icon-bg dark:bg-icon-darkBg backdrop-blur-xl hover:bg-icon-bg-hover dark:hover:bg-icon-bg-hover border border-lightBorder dark:border-darkBorder rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300"
          aria-label="Next items"
        >
          <FaChevronRight className="text-icon-text dark:text-DrkIcon-text text-base sm:text-lg" />
        </motion.button>
      )}
    </>
  );
};

export default WorkExperienceNavigation;