"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show cursor after mouse has moved
    const timeout = setTimeout(() => setIsVisible(true), 500);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.classList.add("cursor-none");

    return () => {
      document.body.classList.remove("cursor-none");
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            className="fixed pointer-events-none z-[100] rounded-full mix-blend-difference"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
              scale: isClicking ? 0.7 : isHovering ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 35,
              mass: 0.2,
            }}
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#3b82f6",
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
            }}
          />

          {/* Cursor ring */}
          <motion.div
            className="fixed pointer-events-none z-[99] rounded-full mix-blend-difference"
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              scale: isClicking ? 1.3 : isHovering ? 1.8 : 1,
              opacity: isClicking ? 0.7 : isHovering ? 0.9 : 0.6,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            style={{
              width: "32px",
              height: "32px",
              border: "1px solid #3b82f6",
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
            }}
          />

          {/* Cursor dot trail */}
          <motion.div
            className="fixed pointer-events-none z-[98] rounded-full"
            animate={{
              x: mousePosition.x - 2,
              y: mousePosition.y - 2,
              opacity: isClicking ? 0.6 : 0.3,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              mass: 1.2,
              delay: 0.08,
            }}
            style={{
              width: "4px",
              height: "4px",
              backgroundColor: "#3b82f6",
            }}
          />
        </>
      )}
    </>
  );
}
