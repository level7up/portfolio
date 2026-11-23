"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollTo } from "@/hooks/useScrollTo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollToSection } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["home", "about", "experience", "skills", "projects", "contact"];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-[#3d0f1a] ${
        scrolled ? "bg-[#6b1f2e] shadow-[0_3px_12px_rgba(28,28,24,0.3)]" : "bg-[#6b1f2e]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="engraved text-[#f7f2e7] font-bold text-sm md:text-base tracking-[0.18em]"
        >
          AbdulAlim Mohamed
        </motion.a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className={`machine-line uppercase text-[0.68rem] font-bold transition-colors pb-0.5 border-b-2 ${
                activeSection === item.href
                  ? "text-[#f7f2e7] border-[#f7f2e7]"
                  : "text-[#f7f2e7]/65 border-transparent hover:text-[#f7f2e7]"
              }`}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#f7f2e7]"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -12, height: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-52 bg-[#6b1f2e] border-2 border-[#3d0f1a]"
              >
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 machine-line uppercase text-[0.68rem] font-bold border-b border-[#f7f2e7]/20 last:border-b-0 ${
                      activeSection === item.href
                        ? "text-[#f7f2e7] bg-[#521522]"
                        : "text-[#f7f2e7]/70 hover:text-[#f7f2e7]"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
