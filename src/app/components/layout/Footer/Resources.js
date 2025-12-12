"use client";

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { RiGithubLine } from "react-icons/ri";
import { BsFillSendCheckFill } from "react-icons/bs";

export default function Resources({ 
  onViewResume, 
}) {
  return (
    <div className="group">
      <h3 className="font-semibold text-h1 dark:text-Head1dark mb-4 md:text-lg  text-[0.9rem]">
        Resources
      </h3>
      <ul className="space-y-3">
        <li className='backdrop-blur-[1px] dark:bg-neutral-700/5 bg-neutral-400/5    rounded-lg px-1'>
          <button
            onClick={onViewResume}
            className="text-para3 dark:text-darkPara3 hover:text-orange-600 group/link dark:hover:text-orange-400 transition-all duration-300 inline-flex items-center gap-2 group/link text-[0.8rem] md:text-base "
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            <span className="group-hover/link:translate-x-1 transition-transform duration-300">
              View Resume
            </span>
            <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </button>
        </li>
        
        <li className='md:text-left text-right backdrop-blur-[1px] dark:bg-neutral-700/5 bg-neutral-400/5    rounded-lg px-1'>
          <a 
            href="https://github.com/VishalChoudhary01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-para3 dark:text-darkPara3 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 inline-flex items-center gap-2 group/link text-[0.8rem] md:text-base"
          >
            <RiGithubLine className="w-4 h-4" />
            <span className="group-hover/link:translate-x-1 whitespace-nowrap transition-transform duration-300">
              Projects Repositories
            </span>
            <BsFillSendCheckFill className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </a>
        </li>
      </ul>
    </div>
  );
}