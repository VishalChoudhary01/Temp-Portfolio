import { motion } from "framer-motion";

const WorkExperienceDots = ({ timelineData, currentIndex, setCurrentIndex, isDarkMode }) => {
  const getColorByIndex = (idx) => {
    const colors = isDarkMode 
      ? [
          'var(--color-dark-work-card-1)',
          'var(--color-dark-work-card-2)',
          'var(--color-dark-work-card-3)',
          'var(--color-dark-work-card-4)'
        ]
      : [
          'var(--color-work-card-1)',
          'var(--color-work-card-2)',
          'var(--color-work-card-3)',
          'var(--color-work-card-4)'
        ];
    
    return colors[idx % colors.length];
  };

  return (
    <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
      {timelineData.map((_, index) => {
        const currentColor = getColorByIndex(index);
        return (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
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