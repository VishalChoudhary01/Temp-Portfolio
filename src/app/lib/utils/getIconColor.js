export const getIconColor = (isScrolled, isDarkMode) => {
  if (isScrolled) {
    return isDarkMode ? "text-DrkIconScrolled" : "text-iconScrolled";
  }
  return isDarkMode ? "text-DrkIcon-text" : "text-icon-text";
};