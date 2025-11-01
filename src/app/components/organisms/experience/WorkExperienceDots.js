import { motion } from "framer-motion";

const WorkExperienceDots = ({ timelineData, currentIndex, setCurrentIndex, isDarkMode }) => {
  const getCurrentColor = (item) => {
    return isDarkMode ? item.darkColor : item.color;
  };

  return (
    <div className="flex justify-center mt-8 space-x-3">
      {timelineData.map((item, index) => {
        const currentColor = getCurrentColor(item);
        return (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex
                ? "scale-125 shadow-lg"
                : "bg-para2 dark:bg-darkPara2"
            }`}
            style={{
              backgroundColor: index === currentIndex ? currentColor : undefined
            }}
            aria-label={`Go to item ${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export default WorkExperienceDots;