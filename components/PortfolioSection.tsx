"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionDecor from "./SectionDecor";
import { portfolioImages } from "@/constants";

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const count = portfolioImages.length;

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + count) % count)),
    [count]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % count)),
    [count]
  );

  // Keyboard controls + lock background scroll while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prev, next]);

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#0A4498_0%,#0A2A5E_100%)] py-[100px] max-md:py-[60px]"
    >
      <SectionDecor variant="portfolio" />
      <div className="container relative z-[1]">
        {/* Centered heading */}
        <Reveal className="text-center mb-[50px]">
          <h5 className="text-royal uppercase tracking-[3px] text-[12px] font-bold mb-[12px] inline-block">
            Recent productions
          </h5>
          <h2>Behind the lens</h2>
          <p className="text-[#cfd6e1] max-w-[720px] mx-auto text-[15px]">
            A glimpse at our control rooms, camera setups, and live stages from
            recent broadcasts.
          </p>
        </Reveal>

        {/* Uniform gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 80}>
            <a
              href={`/img/pics/${src}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(i);
              }}
              className="group relative block overflow-hidden rounded-[14px] border border-white/[0.08] aspect-[4/3] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)] cursor-pointer"
            >
              <Image
                src={`/img/pics/${src}`}
                alt="Production still"
                fill
                sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay + magnifier */}
              <span className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(to_top,rgba(1,23,63,0.92),rgba(2,105,187,0.2))] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="w-14 h-14 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-[18px] translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <i className="fa fa-search"></i>
                </span>
              </span>
            </a>
            </Reveal>
          ))}
        </div>

        {/* CTA — gradient-blend button */}
        <Reveal className="text-center mt-[50px]">
          <a
            href="#contact"
            data-scroll
            className="group inline-flex items-center gap-2 rounded-full px-9 py-[14px] text-[11px] font-bold uppercase tracking-[2px] text-white
                       bg-[linear-gradient(135deg,#013079_0%,#0269BB_45%,#22d3ee_100%)] bg-[length:200%_200%] bg-left
                       shadow-[0_12px_30px_-8px_rgba(2,105,187,0.38)]
                       transition-[background-position,box-shadow,transform] duration-500 ease-out
                       hover:bg-right hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_rgba(34,211,238,0.48)]"
          >
            View all projects
            <i className="fa fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </Reveal>
      </div>

      {/* Lightbox — centered on all screens */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- lightbox image has dynamic intrinsic size; next/image fill doesn't fit object-contain centering */}
          <img
            src={`/img/pics/${portfolioImages[activeIndex!]}`}
            alt="Production still"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-[8px] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-[22px] flex items-center justify-center transition-colors"
          >
            <i className="fa fa-times"></i>
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-[26px] flex items-center justify-center transition-colors"
              >
                <i className="fa fa-angle-left"></i>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-[26px] flex items-center justify-center transition-colors"
              >
                <i className="fa fa-angle-right"></i>
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
