import { motion } from 'framer-motion';

const Paragraph = ({ 
  children, 
  className = "", 
  delay = 0.4, 
  duration = 0.7,
  ...props 
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15, filter: "blur(20px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={`mt-3 text-[15px] md:text-[18px] text-slate-100 leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;