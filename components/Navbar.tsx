"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "#home");

  // Sticky header: ported from the old jQuery main.js (triggerPoint = 80px).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the link for whichever section crosses the
  // viewport's upper-middle band (replaces the old Bootstrap data-spy).
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const headerClasses = [
    "fixed top-0 left-0 w-full z-[999] transition-all duration-300",
    scrolled
      ? "h-[100px] py-0 bg-dark-blue shadow-[0px_16px_28px_0px_rgba(0,0,0,0.05)]"
      : "h-[110px] py-5 bg-transparent",
  ].join(" ");

  const navLinkClasses = (active: boolean) =>
    [
      "relative inline-block align-middle px-[10px] max-lg:px-[5px] tracking-[1px] text-[11px] max-lg:text-[10px]",
      "font-semibold uppercase leading-[70px] transition-all hover:text-white",
      // White underline indicator: hidden by default, shown on hover and when active.
      "after:content-[''] after:absolute after:inset-x-[10px] after:bottom-[22px] after:h-[2px] after:bg-white after:rounded after:opacity-0 after:transition-opacity hover:after:opacity-100",
      active ? "text-white after:opacity-100" : scrolled ? "text-[#ddd]" : "text-white/90",
    ].join(" ");

  const mobileLinkClasses = (active: boolean) =>
    [
      "block px-[15px] py-[10px] uppercase text-[12px] font-semibold tracking-[1px] transition-colors",
      active ? "text-royal" : "text-[#777] hover:text-royal",
    ].join(" ");

  // Catchy gradient CTA with a shine sweep + pulsing "live" dot.
  const bookBtnClasses =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-[10px] " +
    "text-[10px] font-bold uppercase tracking-[1.5px] text-white leading-[25px] " +
    "bg-[linear-gradient(135deg,#0269BB_0%,#22d3ee_100%)] bg-[length:200%_100%] bg-left " +
    "shadow-[0_8px_24px_-6px_rgba(34,211,238,0.7)] " +
    "transition-[background-position,transform,box-shadow] duration-500 ease-out " +
    "hover:bg-right hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-4px_rgba(34,211,238,0.95)] " +
    "before:content-[''] before:absolute before:inset-0 before:-translate-x-full " +
    "before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] " +
    "before:transition-transform before:duration-700 hover:before:translate-x-full";

  const BookButtonInner = (
    <span className="relative z-[1] flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
      </span>
      Book a Service
    </span>
  );

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
                    className={navLinkClasses(activeHref === link.href)}
                    href={link.href}
                    onClick={() => {
                      setActiveHref(link.href);
                      setOpen(false);
                    }}
                  >
                    {link.label}
                    {activeHref === link.href && (
                      <span className="sr-only">(current)</span>
                    )}
                  </a>
                </li>
              ))}
              <li>
                <a
                  data-scroll
                  href="#contact"
                  className={`ml-[14px] ${bookBtnClasses}`}
                  onClick={() => setActiveHref("#contact")}
                >
                  {BookButtonInner}
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
                    className={mobileLinkClasses(activeHref === link.href)}
                    href={link.href}
                    onClick={() => {
                      setActiveHref(link.href);
                      setOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  data-scroll
                  className={mobileLinkClasses(false)}
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
