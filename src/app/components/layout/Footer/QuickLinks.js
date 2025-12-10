"use client";

import React from 'react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

export default function QuickLinks() {
  return (
    <div className="group">
      <h3 className="font-semibold text-h1 dark:text-Head1dark mb-4 text-lg">
        Quick Links
      </h3>
      <ul className="space-y-3">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 inline-flex items-center group/link text-sm md:text-base"
            >
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                {link.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}