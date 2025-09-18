"use client";

export function useScrollTo() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      // Prevent default anchor behavior
      window.history.pushState({}, "", `#${sectionId}`);

      // Smooth scroll to section
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return { scrollToSection };
}
