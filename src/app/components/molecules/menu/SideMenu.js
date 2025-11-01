"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, closeSidebar } from "../../../redux/featuresSlice/UISlice";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import useDarkMode from "../../../hooks/useDarkMode";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa6";
import { menu, socialMenu } from "../../../constants/index";
import Link from "next/link";
import { useEffect } from "react";

const SideMenu = () => {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const dispatch = useDispatch();
  const { isDarkMode, toggleMode } = useDarkMode();

  // Close sidebar when route changes
  const handleLinkClick = () => {
    dispatch(closeSidebar());
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        dispatch(closeSidebar());
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSidebarOpen, dispatch]);

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => dispatch(closeSidebar())}
            className="fixed md:hidden inset-0 z-[999] bg-black/60 backdrop-blur-sm"
          />

          {/* Sidebar Menu */}
          <motion.div
            key="mobile-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "tween", 
              duration: 0.3, 
              ease: "easeInOut" 
            }}
            className="fixed md:hidden top-0 right-0 w-[75vw] h-full z-[1000] py-6 px-6 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-l border-white/20 dark:border-gray-600/20 shadow-2xl flex flex-col"
          >
            {/* Header with Close Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Menu
              </h2>
              <button
                onClick={() => dispatch(closeSidebar())}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <IoClose className="text-2xl text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
              <div className="flex flex-col space-y-1">
                {menu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.route}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Footer with Theme Toggle and Social Links */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Theme
                </span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMode}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDarkMode ? (
                    <>
                      <HiSun className="text-yellow-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Light</span>
                    </>
                  ) : (
                    <>
                      <FaMoon className="text-gray-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Dark</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {socialMenu.map(({ url, icon: Icon, activeColor, name }) => (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover:scale-105"
                    aria-label={name}
                  >
                    <Icon className={`text-xl ${activeColor}`} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;