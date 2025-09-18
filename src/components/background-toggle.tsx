"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type BackgroundStyle = "particles" | "gradient" | "minimal" | "waves";

export function BackgroundToggle() {
  const [backgroundStyle, setBackgroundStyle] = useState<BackgroundStyle>("particles");

  // Initialize from localStorage if available
  useEffect(() => {
    const savedStyle = localStorage.getItem("backgroundStyle") as BackgroundStyle | null;
    if (savedStyle) {
      setBackgroundStyle(savedStyle);
      document.documentElement.setAttribute("data-background", savedStyle);
    } else {
      document.documentElement.setAttribute("data-background", backgroundStyle);
    }
  }, []);

  const handleStyleChange = (style: BackgroundStyle) => {
    setBackgroundStyle(style);
    localStorage.setItem("backgroundStyle", style);
    document.documentElement.setAttribute("data-background", style);

    // Force a re-render by dispatching a custom event
    window.dispatchEvent(new CustomEvent('background-changed', { detail: style }));
  };

  return (
    <div className="fixed bottom-6 left-6 z-[90] bg-white dark:bg-gray-800 rounded-full shadow-lg p-1.5 flex items-center space-x-1.5 pointer-events-auto">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleStyleChange("particles")}
        className={`p-2.5 rounded-full transition-colors ${
          backgroundStyle === "particles"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Particles background"
        title="Particles background"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="21.17" y1="8" x2="12" y2="8"></line>
          <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
          <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
        </svg>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleStyleChange("gradient")}
        className={`p-2.5 rounded-full transition-colors ${
          backgroundStyle === "gradient"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Gradient background"
        title="Gradient background"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M3 15h18"></path>
        </svg>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleStyleChange("waves")}
        className={`p-2.5 rounded-full transition-colors ${
          backgroundStyle === "waves"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Waves background"
        title="Waves background"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        </svg>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleStyleChange("minimal")}
        className={`p-2.5 rounded-full transition-colors ${
          backgroundStyle === "minimal"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Minimal background"
        title="Minimal background"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        </svg>
      </motion.button>
    </div>
  );
}
