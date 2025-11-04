import {motion} from 'motion/react';
import MobileNavigationButtons from './MobileNavigationButtons'

const MobileContent = ({ item, onPrev, onNext }) => (
  <div className="absolute bottom-24 left-0 w-full  py-6 z-30">

    <div className=" px-4 sm:px-6">
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="dark:text-gray-200 text-gray-900 text-center"
      >
        <motion.div 
          className="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-1.5 sm:mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {item.name}
        </motion.div>
        <motion.div 
          className="text-xs sm:text-sm dark:text-slate-200 text-slate-800 leading-relaxed mb-2 sm:mb-3 max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {item.description}
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="dark:bg-white bg-slate-950 text-slate-50  dark:text-black px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg font-medium hover:bg-[#4f7577] hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          See More
        </motion.button>
      </motion.div>
    </div>
    
    <MobileNavigationButtons onPrev={onPrev} onNext={onNext} />

  </div>
);

export default MobileContent