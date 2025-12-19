"use client";
import { motion } from "framer-motion";
import { FaSitemap, FaLayerGroup, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdDesktop, IoMdPhonePortrait } from "react-icons/io";
import Heading from "../../atoms/typography/Heading/Heading";
import GlowingCard from "../../molecules/cards/GlowingCard";
import useDarkMode from "@/app/hooks/useDarkMode";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const pageIcons = {
  home: IoMdDesktop,
  search: FaSearch,
  profile: FaUser,
  cart: FaShoppingCart,
  about: FaSitemap,
  contact: FaUser,
  default: FaLayerGroup,
};

export default function PagesStructureSection({ project }) {
  const { isDarkMode } = useDarkMode();
  
  if (!project.pages || project.pages.length === 0) {
    return null;
  }

  const primaryAccent = isDarkMode ? "var(--darkgrad-primary)" : "var(--grad-primary)";
  const secondaryAccent = isDarkMode ? "var(--darkgrad-secondary)" : "var(--grad-secondary)";

  const getPageIcon = (pageName) => {
    const name = pageName.toLowerCase();
    if (name.includes('home')) return pageIcons.home;
    if (name.includes('search')) return pageIcons.search;
    if (name.includes('profile') || name.includes('user')) return pageIcons.profile;
    if (name.includes('cart') || name.includes('shop')) return pageIcons.cart;
    return pageIcons.default;
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <Heading
        heading="Pages Structure"
        subheading="Overview of the website's page architecture and features"
        align="center"
      />

      {/* Updated to use flex instead of grid */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
        {project.pages.map((page, index) => {
          const PageIcon = getPageIcon(page.name);
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
              whileHover={{ y: -4 }}
              // Set a fixed width for consistent card sizing
              style={{ width: "100%", maxWidth: "350px" }}
            >
              <GlowingCard 
                color={index % 2 === 0 ? primaryAccent : secondaryAccent}
                className="h-full border border-gray-400/15 dark:border-neutral-400/20 shadow"
                borderRadius="12px"
              >
                <div className="h-full p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg flex-shrink-0">
                      <PageIcon 
                        className="text-lg"
                        style={{ 
                          color: index % 2 === 0 ? primaryAccent : secondaryAccent 
                        }}
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-h3 dark:text-Head3dark">
                      {page.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-para2 dark:text-darkPara2 mb-4 leading-relaxed">
                    {page.description}
                  </p>
                  
                  {page.features && page.features.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-para2 dark:text-darkPara2">
                        Key Features:
                      </p>
                      <ul className="space-y-1.5">
                        {page.features.slice(0, 3).map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="flex items-start gap-2 text-xs text-para2 dark:text-darkPara2"
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0"
                              style={{ 
                                backgroundColor: index % 2 === 0 ? primaryAccent : secondaryAccent 
                              }}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {page.features.length > 3 && (
                          <li className="text-xs text-para2 dark:text-darkPara2 pl-3.5">
                            +{page.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </GlowingCard>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile/Desktop view summary */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
      >
        <div className="flex items-center gap-2">
          <IoMdDesktop 
            className="text-lg"
            style={{ color: primaryAccent }}
          />
          <span className="text-sm text-para2 dark:text-darkPara2">
            <span className="font-medium" style={{ color: primaryAccent }}>
              {project.pages.length}
            </span> pages
          </span>
        </div>
        
        {project.stats?.responsiveBreakpoints && (
          <div className="flex items-center gap-2">
            <IoMdPhonePortrait 
              className="text-lg"
              style={{ color: secondaryAccent }}
            />
            <span className="text-sm text-para2 dark:text-darkPara2">
              <span className="font-medium" style={{ color: secondaryAccent }}>
                {project.stats.responsiveBreakpoints}
              </span> breakpoints
            </span>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}