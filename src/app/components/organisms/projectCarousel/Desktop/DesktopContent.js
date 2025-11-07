import { motion } from "motion/react";
import GhostButton from "../../../atoms/button/GhostButton";
import { HeadingTwo, Paragraph } from "@/app/components/atoms/typography/index";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi"; 
import { HiExternalLink } from "react-icons/hi";

const DesktopContent = ({ item,seeMore }) => (
  <div className="hidden md:block absolute top-[52%] left-[100px] -translate-y-1/2 z-10">
    {/* Subtle blurred background */}
    <div className="absolute inset-0 -inset-x-8 -inset-y-6 bg-white/15 dark:bg-black/10 backdrop-blur-[10px] rounded-2xl -z-10" />

    <motion.div
      initial={{ opacity: 0, y: 150,filter:"blur(50px)" }}
      animate={{ opacity: 1, y: 0,filter:"blur(0px)" }}
      transition={{ duration: 0.8,delay:0.1 }}
      className="w-[340px] relative"
    >
  
      <motion.h2 className="text-[2.5rem] text-white font-poppins uppercase font-bold tracking-wider text-shadow-lg text-shadow-gray-400" initial={{opacity:0, y:20, filter: "blur(45px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}}  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}>{item.name}</motion.h2>

      <Paragraph className="leading-6 my-3 text-[15px] font-poppins text-shadow-md text-slate-50 text-shadow-gray-500">
        {item.description}
      </Paragraph>


      <div className="flex gap-x-3 flex-wrap">
        <GhostButton
          buttonStyle="bg-white/90 text-[0.8rem] hover:bg-white px-3.5 py-1.5 rounded-md font-poppins tracking-wider shadow hover:shadow-md font-medium transition-all cursor-pointer"
          buttonText="SEE MORE"
          onClick={() => seeMore(item.id)}
        />

        <GhostButton
          buttonText="REPO"
          buttonStyle="bg-white/90 text-[0.8rem] hover:bg-white px-3.5 py-1.5 uppercase rounded-md font-poppins font-medium transition-all cursor-pointer"
          leftIcon={<SiGithub />}
        />

        <GhostButton
          buttonText="LIVE"
          buttonStyle="bg-white/90 text-[0.8rem] hover:bg-white duration-200 px-3.5 py-1.5 rounded-md font-poppins uppercase font-medium shadow hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer"
          leftIcon={<HiOutlineExternalLink />}
          onClick={() => window.open(item.liveLink, "_blank")}
        />
      </div>
    </motion.div>
  </div>
);

export default DesktopContent;
