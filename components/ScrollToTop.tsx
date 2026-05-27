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

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top"
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <i className="arrow_carrot-up"></i>
        </button>
      )}

      <style jsx>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 99;
          background-color: #e31e24;
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          animation: fadeInUp 0.3s ease-out;
        }

        .scroll-to-top-btn:hover {
          background-color: #c41a1f;
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}