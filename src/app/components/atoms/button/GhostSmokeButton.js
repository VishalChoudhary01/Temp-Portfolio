"use client";

import { motion } from "framer-motion";

const GhostSmokeButton = ({
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
      initial={{ 
        opacity: 0, 
        y: 80, 
        filter: "blur(150px)",
        scale: 0.6,
        rotateX: 45
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        scale: 1,
        rotateX: 0
      }}
      transition={{ 
        duration: 2.2,
        delay: 0.1,
        ease: [0.23, 1, 0.32, 1],
        opacity: {
          duration: 1.8,
          ease: [0.33, 1, 0.68, 1]
        },
        filter: {
          duration: 2,
          ease: [0.4, 0, 0.2, 1]
        },
        scale: {
          duration: 2,
          ease: [0.34, 1.56, 0.64, 1]
        },
        y: {
          duration: 2,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      whileHover={{
        scale: 1.05,
        y: -1,
        transition: { duration: 0.3 }
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.15 }
      }}
      onClick={onClick}
      className={`px-5 py-2 rounded flex items-center gap-2 cursor-pointer transition-all duration-300 bg-white text-black hover:bg-[#4f7577] hover:text-white relative overflow-hidden ${buttonStyle}`}
    >
      {/* Multiple smoke layers for powder effect */}
      <motion.div
        initial={{ 
          opacity: 0,
          scale: 0.3,
          filter: "blur(120px)"
        }}
        animate={{ 
          opacity: [0, 0.5, 0.2],
          scale: [0.3, 1.8, 2],
          filter: "blur(40px)"
        }}
        transition={{ 
          duration: 2.2,
          delay: 0.1,
          ease: "easeOut",
          times: [0, 0.4, 1]
        }}
        className="absolute inset-0 bg-white/50 pointer-events-none"
      />
      
      <motion.div
        initial={{ 
          opacity: 0,
          scale: 0.4,
          filter: "blur(100px)",
          rotate: 15
        }}
        animate={{ 
          opacity: [0, 0.3, 0.1],
          scale: [0.4, 1.6, 1.8],
          filter: "blur(30px)",
          rotate: 0
        }}
        transition={{ 
          duration: 2,
          delay: 0.2,
          ease: "easeOut",
          times: [0, 0.5, 1]
        }}
        className="absolute inset-0 bg-white/40 pointer-events-none"
      />

      <motion.div
        initial={{ 
          opacity: 0,
          scale: 0.5,
          filter: "blur(80px)",
          rotate: -10
        }}
        animate={{ 
          opacity: [0, 0.2, 0.05],
          scale: [0.5, 1.4, 1.6],
          filter: "blur(20px)",
          rotate: 0
        }}
        transition={{ 
          duration: 1.8,
          delay: 0.3,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }}
        className="absolute inset-0 bg-white/30 pointer-events-none"
      />
      
      {/* Main content with perfectly synced animation */}
      <motion.span 
        className="flex items-center gap-2 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.4, // Start when button is nearly in position
          ease: "easeOut"
        }}
      >
        {leftIcon && (
          <motion.span 
            className={leftStyle}
            initial={{ x: -20, opacity: 0, filter: "blur(15px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ 
              duration: 0.6, 
              delay: 1.6,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            {leftIcon}
          </motion.span>
        )}
        
        <motion.span
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ 
            duration: 0.7, 
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {buttonText}
        </motion.span>
        
        {rightIcon && (
          <motion.span 
            className={rightStyle}
            initial={{ x: 20, opacity: 0, filter: "blur(15px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ 
              duration: 0.6, 
              delay: 1.6,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            {rightIcon}
          </motion.span>
        )}
      </motion.span>
    </motion.button>
  );
};

export default GhostSmokeButton;