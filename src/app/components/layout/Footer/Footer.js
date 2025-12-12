"use client";
import React from 'react';
import EngravedBackground from './EngravedBackground';
import QuickLinks from './QuickLinks';
import Resources from './Resources';
import Connect from './Connect';
import BottomFooter from './BottomFooter';

export default function Footer() {
  const handleViewResume = () => {
    window.open('/documents/Vishal_Kumar_Resume_frontend.pdf', '_blank');
  };


  return (
    <footer className="relative w-full  overflow-hidden bg-navbarBG dark:bg-navbarDarkBG ">
      <EngravedBackground />
      <div className="relative z-10 px-4 sm:px-6 md:py-16 pb-7 pt-8   ">
        <div className="max-w-6xl mx-auto pb-8  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:py-2 md:mb-10 ">
            
            {/* Mobile: Quick Links & Resources in same row */}
            <div className="md:hidden grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold  text-h1 dark:text-Head1dark mb-4 md:text-lg  text-[0.9rem]">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {['Home', 'About', 'Projects'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-para3 dark:text-darkPara3 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 inline-flex items-center group/link md:text-sm text-[0.8rem]"
                      >
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300 backdrop-blur-[1px] dark:bg-neutral-700/5 bg-neutral-400/5    rounded-lg px-1   ">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Resources 
                onViewResume={handleViewResume}
              />
            </div>

            {/* Desktop: 3-column layout */}
            <div className="hidden md:block">
              <QuickLinks />
            </div>
            
            <div className="hidden md:block">
              <Resources 
                onViewResume={handleViewResume}
              />
            </div>

            <div className="md:col-span-1  ">
              <Connect />
            </div>
          </div>
        </div>
        <BottomFooter />
      </div>
    </footer>
  );
}