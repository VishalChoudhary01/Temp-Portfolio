import {motion} from 'motion/react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const DesktopNavigationButtons = ({ onPrev, onNext }) => (
  <div className="absolute -bottom-[150px] left-1/2 -translate-x-1/2 flex gap-4 z-40">

    <motion.button
      onClick={onPrev}
      whileTap={{ scale: 0.9 }}
      className="size-14 bg-white/10 group dark:bg-black/20 hover:text-shadow-lg text-shadow-white text-white hover:scale-110 transition-all rounded-full flex items-center justify-center cursor-pointer duration-300  backdrop-blur-sm"
    >

      <FaChevronLeft className='text-xl group-hover:scale-110' />
    </motion.button>
    <motion.button
      onClick={onNext}
      whileTap={{ scale: 0.9 }}
      className="size-14 bg-white/10 group dark:bg-black/20 hover:text-shadow-lg text-shadow-white text-white hover:scale-110 transition-all rounded-full flex items-center justify-center cursor-pointer duration-300 backdrop-blur-sm"
    >
      <FaChevronRight className='text-xl group-hover:scale-110 transition-all' />
    </motion.button>
  </div>
);

export default DesktopNavigationButtons