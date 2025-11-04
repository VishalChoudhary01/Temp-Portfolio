"use client";

import { motion } from "framer-motion";

const GhostButton = ({
  buttonStyle,
  buttonText,
  leftIcon,
  rightIcon,
  leftStyle,
  rightStyle,
  onClick,
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 35, filter: "blur(120px)" ,scale:1.05}}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)",scale:1 }}
      transition={{ duration: 1.5, delay: 0.5 }}

      onClick={onClick}
      className={`px-5 py-2 rounded flex items-center gap-2 cursor-pointer transition-all duration-300 bg-white text-black hover:bg-[#4f7577] hover:text-white ${buttonStyle}`}
    >
      <span className="flex items-center gap-2">
        {leftIcon && <span className={leftStyle}>{leftIcon}</span>}
        <span>{buttonText}</span>
        {rightIcon && <span className={rightStyle}>{rightIcon}</span>}
      </span>
    </motion.button>
  );
};

export default GhostButton;