import {motion} from 'motion/react';
import GhostButton from '../../../atoms/button/GhostButton';
import {HeadingTwo,Paragraph} from '@/app/components/atoms/typography/index'

const DesktopContent = ({ item }) => (
  <div className="hidden md:block absolute top-[52%] left-[100px] -translate-y-1/2 z-10"> 

    {/* Blur background behind content */}
    <div className="absolute inset-0 -inset-x-8 -inset-y-6 bg-black/5 backdrop-blur-[2px] rounded-2xl -z-10" />
    
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="w-[340px] text-white relative"
>
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(55px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="text-[2.5rem] font-bold uppercase"
  >
    {item.name}
  </motion.div>
  
  <motion.div
    initial={{ opacity: 0, y: 15, filter: "blur(20px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
    className="mt-3 text-[15px] text-slate-100 leading-relaxed"
  >
    {item.description}
  </motion.div>

  <GhostButton buttonText={"SEE MORE"}/>
</motion.div>
  </div>
);

export default DesktopContent