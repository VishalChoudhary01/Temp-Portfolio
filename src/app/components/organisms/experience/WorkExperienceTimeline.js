import React from "react";
import { motion } from "framer-motion";

const WorkExperienceTimeline = ({
  containerRef,
  innerRef,
  translateX,
  windowWidth,
  handleDragEnd,
  children
}) => {
  return (
    <div ref={containerRef} className="overflow-hidden py-4 pl-4">
      <motion.div
        ref={innerRef}
        className="flex gap-6"
        drag={windowWidth < 640 ? "x" : false}
        dragConstraints={{ 
          left: -translateX, 
          right: 0 
        }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        animate={{ x: translateX }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default WorkExperienceTimeline;