"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollStep = () => {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-[30px] right-[30px] z-[99] w-[50px] h-[50px] rounded-full bg-royal text-white border-none cursor-pointer flex items-center justify-center transition-all shadow-[0_2px_10px_rgba(0,0,0,0.2)] animate-fade-in-up hover:bg-dark-blue hover:-translate-y-[3px] hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
    >
      <i className="arrow_carrot-up"></i>
    </button>
  );
}
