"use client";

import {motion} from 'motion/react'

const EducationHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full flex flex-col items-center text-center md:mb-16 mb-8"
  >
    <h2 className="md:text-5xl text-[1.8rem] font-work-sans tracking-wider font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
      Education Timeline
      <span className="block w-24 h-1 mt-2 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
    </h2>
    <p className="mt-5 text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-2xl">
      A journey of continuous learning and academic excellence
    </p>
  </motion.div>
);

export default EducationHeader