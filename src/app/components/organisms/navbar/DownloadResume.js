import { LuArrowDownToLine } from "react-icons/lu";
import { Button } from "../../atoms/button/index";

const DownloadResume = ({ isScrolled, isDarkMode }) => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Vishal Kumar Choudhary.pdf";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <Button
      buttonText="Resume"
      leftIcon={<LuArrowDownToLine className="w-4 h-4" />}
      buttonStyle={`${
        isDarkMode ? "dark-button-curtain" : "button-curtain"
      } flex items-center font-roboto transition-all gap-2 md:px-5 px-3 md:py-2 py-1.5 dark:bg-darkbtnBG dark:text-darkbtnTXT bg-btnBG text-btnTXT ${
        isScrolled 
          ? "rounded-r-full rounded-l-full mr-2" 
          : "rounded-lg"
      }`}
      leftStyle=""
      rightStyle=""
      onClick={handleDownloadResume}
    />
  );
};

export default DownloadResume