import { motion } from "framer-motion";

const GhostSmokeDramaticButton = ({
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
        y: 25, 
        filter: "blur(30px)",
        scale: 0.7
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        scale: 1
      }}
      transition={{ 
        duration: 1.5,
        delay: 0.2,
        ease: [0.23, 1, 0.32, 1],
        filter: {
          duration: 2,
          ease: [0.4, 0, 0.2, 1]
        },
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 15
        }
      }}
      whileHover={{
        scale: 1.08,
        y: -2,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      whileTap={{
        scale: 0.92,
        transition: { duration: 0.15 }
      }}
      onClick={onClick}
      className={`px-5 py-2 rounded flex items-center gap-2 cursor-pointer transition-all duration-300 bg-white text-black hover:bg-[#4f7577] hover:text-white relative overflow-hidden group ${buttonStyle}`}
    >
      {/* Multiple smoke particles */}
      <motion.div
        initial={{ 
          opacity: 0,
          scale: 0.3,
          filter: "blur(50px)"
        }}
        animate={{ 
          opacity: [0, 0.4, 0.1],
          scale: [0.3, 1.5, 1.8],
          filter: "blur(30px)"
        }}
        transition={{ 
          duration: 2.5,
          delay: 0.3,
          ease: "easeOut",
          times: [0, 0.5, 1]
        }}
        className="absolute inset-0 bg-white/40 pointer-events-none"
      />
      
      <motion.div
        initial={{ 
          opacity: 0,
          scale: 0.2,
          filter: "blur(40px)",
          x: -20
        }}
        animate={{ 
          opacity: [0, 0.3, 0],
          scale: [0.2, 1.3, 1.6],
          x: 20,
          filter: "blur(25px)"
        }}
        transition={{ 
          duration: 2,
          delay: 0.5,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }}
        className="absolute inset-0 bg-white/30 pointer-events-none"
      />

      {/* Main content with staggered animation */}
      <span className="flex items-center gap-2 relative z-10">
        {leftIcon && (
          <motion.span 
            className={leftStyle}
            initial={{ x: -15, opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ 
              duration: 0.9, 
              delay: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            {leftIcon}
          </motion.span>
        )}
        
        <motion.span
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ 
            duration: 0.7, 
            delay: 1,
            ease: "easeOut"
          }}
          className="relative"
        >
          {buttonText}
          {/* Text underline effect on hover */}
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-[1px] bg-current"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>
        
        {rightIcon && (
          <motion.span 
            className={rightStyle}
            initial={{ x: 15, opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ 
              duration: 0.9, 
              delay: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            {rightIcon}
          </motion.span>
        )}
      </span>
    </motion.button>
  );
};

export default GhostSmokeDramaticButton;