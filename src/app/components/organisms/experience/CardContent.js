const CardContent = ({ item, IconComponent, currentColor, isDarkMode }) => (
  <div className="relative p-6 h-full flex flex-col font-poppins">
    {/* Header with Icon and Duration */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div 
          className="p-3 rounded-xl backdrop-blur-sm border border-lightBorder dark:border-darkBorder"
          style={{
            background: isDarkMode 
              ? `linear-gradient(135deg, ${currentColor}20, ${currentColor}10)`
              : `linear-gradient(135deg, ${currentColor}15, ${currentColor}08)`
          }}
        >
          <IconComponent 
            className="text-lg"
            style={{ color: currentColor }}
          />
        </div>
      </div>
      
      {/* Duration Badge */}
      <div 
        className="px-3 py-1.5 rounded-full border backdrop-blur-sm text-xs font-medium"
        style={{
          color: currentColor,
          borderColor: `${currentColor}30`,
          background: isDarkMode 
            ? `${currentColor}15`
            : `${currentColor}08`
        }}
      >
        {item.date}
      </div>
    </div>

    {/* Main Content */}
    <div className="space-y-4 flex-1">
      {/* Job Role - Main Heading */}
      <div>
        <h3 className="text-2xl font-bold text-h3 dark:text-Head3dark tracking-tight leading-tight mb-2">
          {item.role}
        </h3>
        
        {/* Company Name */}
        <div className="mb-3">
          <span 
            className={`text-lg font-semibold tracking-wide `}
            style={{ color: currentColor }}
          >
            {item.company}
          </span>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-para1 dark:text-darkPara1 leading-relaxed">
        {item.description}
      </p>

      {/* Tech Stack */}
      <div className="pt-4">
        <div className="flex flex-wrap gap-2">
          {item.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`text-xs px-2.5 py-1 rounded-lg dark:text-darkPara3 text-para3 font-medium backdrop-blur-sm border`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CardContent