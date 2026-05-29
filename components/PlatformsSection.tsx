"use client";

import type { ReactNode } from "react";
import TikTokIcon from "./TikTokIcon";
import Reveal from "./Reveal";
import SectionDecor from "./SectionDecor";
import { platforms } from "@/constants";

// Brand glyphs as SVGs (24x24, fill=currentColor) so every platform icon fills
// the same box identically — matching the TikTok icon's size exactly.
const icons: Record<string, ReactNode> = {
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.3-8.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z" />
    </svg>
  ),
};

export default function PlatformsSection() {
  return (
    <section className="relative overflow-hidden bg-dark-blue py-[100px] max-md:py-[60px]">
      <SectionDecor variant="platforms" />
      <div className="container relative z-[1]">
        <div className="text-center">
          <Reveal>
            <h5 className="text-royal uppercase tracking-[3px] text-[12px] font-bold mb-[12px] inline-block">
              Stream anywhere
            </h5>
            <h2 className="mb-[20px]">We stream to all major platforms</h2>
            <p className="text-[#cfd6e1] max-w-[720px] mx-auto text-[15px] mb-[40px]">
              Your audience picks the platform. We deliver to every one of them
              — simultaneously, in HD, without dropping a frame.
            </p>
          </Reveal>
          <ul className="flex justify-center items-center flex-wrap gap-[40px] max-md:gap-[26px] mt-[10px]">
            {platforms.map((p, i) => (
              <Reveal as="li" key={p.label} delay={i * 90} className="inline-flex">
                <span
                  title={p.label}
                  className="inline-flex flex-col items-center gap-3 text-white transition-all duration-300 hover:-translate-y-1 hover:text-[#b9d0ea]"
                >
                  <span className="inline-flex w-[44px] h-[44px] max-md:w-[34px] max-md:h-[34px] items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                    {p.tiktok ? <TikTokIcon /> : icons[p.label]}
                  </span>
                  <span className="text-[12px] tracking-[2px] uppercase font-semibold">
                    {p.label}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
