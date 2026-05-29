"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky header: ported from the old jQuery main.js (triggerPoint = 80px).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = [
    "fixed top-0 left-0 w-full z-[999] transition-all duration-300",
    scrolled
      ? "h-[100px] py-0 bg-dark-blue shadow-[0px_16px_28px_0px_rgba(0,0,0,0.05)]"
      : "h-[110px] py-5 bg-transparent",
  ].join(" ");

  const navLinkClasses = (active: boolean) =>
    [
      "inline-block align-middle px-[10px] max-lg:px-[5px] tracking-[1px] text-[11px] max-lg:text-[10px]",
      "font-semibold uppercase leading-[70px] transition-all hover:text-white",
      active ? "text-white" : scrolled ? "text-[#ddd]" : "text-white/90",
    ].join(" ");

  const downloadBtnClasses = [
    "inline-block px-5 py-[10px] rounded-[30px] uppercase text-[10px] text-white font-semibold",
    "leading-[25px] my-[14px] transition-all hover:rounded-none hover:shadow-none",
    scrolled ? "bg-navy" : "bg-royal shadow-[0_10px_35px_2px_rgba(2,105,187,0.6)]",
  ].join(" ");

  return (
    <header id="header" className={headerClasses}>
      <div className="container">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="inline-block" data-scroll>
            <img
              src="/img/logo.png"
              alt="Live Connect"
              width={112}
              height={90}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    data-scroll
                    className={navLinkClasses(link.active)}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                    {link.active && <span className="sr-only">(current)</span>}
                  </a>
                </li>
              ))}
              <li>
                <a data-scroll className={`ml-[10px] ${downloadBtnClasses}`} href="#contact">
                  Book a Service
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span className={`w-[18px] h-0.5 transition-colors ${scrolled ? "bg-[#777]" : "bg-white"}`} />
            <span className={`w-[18px] h-0.5 transition-colors ${scrolled ? "bg-[#777]" : "bg-white"}`} />
            <span className={`w-[18px] h-0.5 transition-colors ${scrolled ? "bg-[#777]" : "bg-white"}`} />
          </button>
        </nav>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    data-scroll
                    className="block px-[15px] py-[10px] text-[#777] hover:text-[#333] uppercase text-[12px] font-semibold tracking-[1px]"
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  data-scroll
                  className="block px-[15px] py-[10px] text-[#777] hover:text-[#333] uppercase text-[12px] font-semibold tracking-[1px]"
                  href="#contact"
                  onClick={() => setOpen(false)}
                >
                  Book a Service
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
