"use client";

import { motion } from "framer-motion";

const TABS = ["overview", "build", "challenges", "impact"];

export default function ExperienceTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-5 md:gap-8 border-b border-lightBorder dark:border-darkBorder pb-2 ">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative ${activeTab===tab ?"dark:text-Head1dark  text-black  font-[400]":"dark:text-Head2dark  text-gray-950  font-[300] "}  pb-2 text-xs md:text-sm font-roboto uppercase tracking-wider  transition `} >
          {tab}
          {activeTab === tab && (
            <motion.span
              layoutId="tab-underline"
              className=" absolute left-0 right-0 -bottom-2 h-px   bg-linear-to-r from-gray-500/50     to-gray-800/40     dark:from-gray-200/40 dark:to-gray-50/80 " /> )}
        </button>
      ))}
    </div>
  );
}


