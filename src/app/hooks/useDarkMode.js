"use client"
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, setDarkMode } from "../redux/featuresSlice/themeSlice";
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.DarkMode);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on client side
    const storedDark = localStorage.getItem("dark");
    if (storedDark !== null) {
      dispatch(setDarkMode(storedDark === "true"));
    } else {
      // Default to system preference if no stored preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dispatch(setDarkMode(systemPrefersDark));
    }
    setIsLoaded(true);
  }, [dispatch]);

  useEffect(() => {
    if (!isLoaded) return;
    
    // Apply to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save to localStorage
    localStorage.setItem("dark", isDarkMode.toString());
  }, [isDarkMode, isLoaded]);

  const toggleMode = () => {
    dispatch(toggleDarkMode());
  };

  return {
    isDarkMode: isLoaded ? isDarkMode : false, // Return false until loaded
    toggleMode,
    isLoaded // Export this to check in components
  };
};

export default useDarkMode;