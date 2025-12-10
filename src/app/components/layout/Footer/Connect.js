"use client";

import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { SiRefinedgithub } from "react-icons/si";
import { GoTriangleRight } from "react-icons/go";

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/vishal-kumar-choudhary-664921229/',
    color: 'hover:text-[#0077b5] '
  },
  {
    name: 'GitHub',
    icon: SiRefinedgithub,
    href: 'https://github.com/VishalChoudhary01',
    color: 'hover:text-[#39b80b] '
  },
  {
    name: 'Gmail',
    icon: BiLogoGmail,
    href: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdbRHqRFgLCBMCfdWmBSgSrmxGRxtFjSdnGMLLSngNCpHkbvRPlcZgwPRPpLvZhxpxJWV',
    color: 'hover:text-[#EA4335] '
  },
];

export default function Connect() {
  return (
    <div className="group flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="font-semibold text-h1 dark:text-Head1dark md:mb-4 mb-2 md:text-lg  text-[0.9rem]">
        Connect
      </h3>
      <div className="space-y-4 w-full max-w-xs">
        <div className="flex gap-3 justify-center md:justify-start">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 md:w-11 md:h-11 rounded-full bg-gray-400/10 backdrop-blur-[2px] dark:bg-neutral-800/30 ${social.color} text-para1 dark:text-Head3dark flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white dark:hover:bg-neutral-600`}
              aria-label={social.name}
            >
              <social.icon className="md:size-5" />
            </a>
          ))}
        </div>
        <div className="pt-2 flex md:flex-col md:justify-start justify-center ">
          <p className="text-[0.8rem] md:text-sm text-h3 dark:text-Head2dark mb-1  font-medium">Email<GoTriangleRight className="inline-block md:hidden " /> </p>
          <a 
            href="mailto:vishal.bhumca21@gmail.com"
            className="text-[0.8rem] md:text-sm text-para1 dark:text-darkPara3  hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 break-all"
          >
            vishal.bhumca21@gmail.com
          </a>
        </div>
        <div className='flex text-h3 dark:text-Head2dark md:flex-col md:justify-start justify-center md:items-start items-center'>
          <p className="text-[0.8rem] md:text-sm  font-medium mb-1">Location</p>
          <GoTriangleRight className="inline-block md:hidden " />
          <p className="text-[0.8rem] md:text-sm text-para1 dark:text-darkPara3">
            Patna, Bihar, India
          </p>
        </div>
      </div>
    </div>
  );
}