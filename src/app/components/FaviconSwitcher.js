"use client";

import { useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function FaviconSwitcher() {
  const { isDarkMode, isLoaded } = useDarkMode();

  useEffect(() => {
    if (!isLoaded) return;

    console.log("FaviconSwitcher: Updating favicon, isDarkMode:", isDarkMode);

    // Remove any existing favicon link
    const existingFavicons = document.querySelectorAll("link[rel='icon']");
    existingFavicons.forEach((favicon) => favicon.remove());

    // Create and add new favicon link
    const faviconLink = document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.type = "image/png";
    faviconLink.href = isDarkMode ? "/favicon/light.png" : "/favicon/dark.png";

    document.head.appendChild(faviconLink);
    console.log("FaviconSwitcher: Favicon updated to:", faviconLink.href);
  }, [isDarkMode, isLoaded]);

  return null;
}
