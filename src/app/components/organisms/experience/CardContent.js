import React from "react";
import Image from "next/image";

const CardContent = ({ item, currentColor, isDarkMode }) => (
  <div className="relative p-3 sm:p-6 h-full flex flex-col font-poppins">
    {/* Header with Image and Duration */}
    <div className="flex items-center justify-between mb-3 sm:mb-6">
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Company Logo */}
        <div 
          className="flex-shrink-0 border rounded-lg overflow-hidden"
          style={{
            borderColor: isDarkMode
              ? "var(--color-darkBorder)"
              : "var(--color-lightBorder)",
            backgroundColor: isDarkMode
              ? "var(--color-dark-work-logo-bg)"
              : "var(--color-work-logo-bg)",
          }}
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10">
            <Image
              src={item.image}
              alt={`${item.company} logo`}
              fill
              sizes="(max-width: 640px) 28px, 40px"
              className="object-contain p-0.5"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Duration Badge */}
      <div
        className="px-2 py-1 rounded-full border backdrop-blur-sm text-xs font-medium flex-shrink-0 ml-2"
        style={{
          color: currentColor,
          borderColor: `${currentColor}30`,
          background: isDarkMode ? `${currentColor}15` : `${currentColor}08`,
        }}
      >
        {item.date}
      </div>
    </div>

    {/* Main Content */}
    <div className="space-y-2 sm:space-y-4 flex-1">
      {/* Job Role - Main Heading */}
      <div>
        <h3 className="text-lg sm:text-2xl font-bold text-h3 dark:text-Head3dark tracking-tight leading-tight mb-1 sm:mb-2">
          {item.role}
        </h3>

        {/* Company Name */}
        <div className="mb-2 sm:mb-3">
          <span
            className="text-sm sm:text-lg font-semibold tracking-wide"
            style={{ color: currentColor }}
          >
            {item.company}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-para1 dark:text-darkPara1 leading-relaxed">
        {item.description}
      </p>

      {/* Tech Stack */}
      <div className="pt-2 sm:pt-4">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {item.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-lg font-medium backdrop-blur-sm border"
              style={{
                color: isDarkMode
                  ? "var(--color-dark-work-tech-text)"
                  : "var(--color-work-tech-text)",
                backgroundColor: isDarkMode
                  ? "var(--color-dark-work-tech-bg)"
                  : "var(--color-work-tech-bg)",
                borderColor: isDarkMode
                  ? "var(--color-dark-work-tech-border)"
                  : "var(--color-work-tech-border)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CardContent;