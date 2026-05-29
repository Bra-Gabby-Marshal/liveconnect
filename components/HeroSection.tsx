"use client";

import TikTokIcon from "./TikTokIcon";
import Reveal from "./Reveal";
import { socialLinks, siteConfig } from "@/constants";

export default function HeroSection() {
  // Filter social links for hero section (first 4)
  const heroSocialLinks = socialLinks.slice(0, 4);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy flex items-center min-h-screen pt-[130px] pb-[110px] bg-[url('/img/pics/hero-background.jpeg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(1,23,63,0.92)_0%,rgba(1,48,121,0.82)_45%,rgba(2,105,187,0.55)_100%)]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(2,105,187,0.35),transparent_55%),radial-gradient(circle_at_15%_80%,rgba(1,48,121,0.45),transparent_55%)]" />
      {/* Ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-royal/20 blur-[120px] z-[1]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-20 w-[440px] h-[440px] rounded-full bg-[#22d3ee]/15 blur-[130px] z-[1]" />

      <div className="container relative z-[2]">
        <div className="text-center max-w-[880px] mx-auto">
          {/* LIVE badge */}
          <Reveal delay={0} className="mb-7 inline-block">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF0000]"></span>
            </span>
            <span className="text-[11px] uppercase tracking-[2px] text-[#cfe0f5] font-semibold">
              Live Streaming &amp; Event Production
            </span>
          </span>
          </Reveal>

          <Reveal delay={120}>
          <h1 className="text-[72px] max-lg:text-[52px] max-md:!text-[38px] uppercase tracking-[-0.02em] [text-shadow:0_4px_24px_rgba(0,0,0,0.35)]">
            Stream Your Events{" "}
            <span className="text-[#FF0000] relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[6px] after:h-[3px] after:bg-[#FF0000] after:rounded-[2px] after:opacity-[0.85]">
              Live
            </span>
          </h1>
          </Reveal>

          <Reveal delay={240}>
          <p className="text-[#e6ecf4] max-w-[640px] mx-auto mt-5 mb-9 text-[16px] leading-[1.8]">
            {siteConfig.description}
          </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={340}>
          <div className="flex justify-center items-center gap-4 max-md:gap-3 flex-wrap">
            <a
              href="#contact"
              data-scroll
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-[15px] text-[11px] font-bold uppercase tracking-[2px] text-white
                         bg-[linear-gradient(135deg,#0269BB_0%,#22d3ee_100%)] bg-[length:200%_100%] bg-left
                         shadow-[0_12px_30px_-8px_rgba(34,211,238,0.7)]
                         transition-[background-position,transform,box-shadow] duration-500 ease-out
                         hover:bg-right hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_rgba(34,211,238,0.9)]
                         before:content-[''] before:absolute before:inset-0 before:-translate-x-full
                         before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)]
                         before:transition-transform before:duration-700 hover:before:translate-x-full"
            >
              <span className="relative z-[1]">Book a Service</span>
            </a>
            <a
              href="#works"
              data-scroll
              className="inline-flex items-center gap-2 rounded-full px-8 py-[15px] text-[11px] font-bold uppercase tracking-[2px] text-white border-2 border-white/60 transition-colors duration-300 hover:bg-white hover:text-navy"
            >
              <i className="fa fa-play-circle text-[14px]"></i> View Our Work
            </a>
          </div>
          </Reveal>

          {/* Social chips */}
          <Reveal delay={440}>
          <ul className="mt-9 flex justify-center items-center gap-4">
            {heroSocialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-white/5 text-[#cfe0f5] text-[16px] transition-colors hover:text-white hover:border-white/40 hover:bg-white/10 [&_svg]:w-[16px] [&_svg]:h-[16px]"
                >
                  {social.isTikTok ? <TikTokIcon /> : <i className={social.icon}></i>}
                </a>
              </li>
            ))}
          </ul>
          </Reveal>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#services"
        data-scroll
        aria-label="Scroll to services"
        className="absolute left-1/2 -translate-x-1/2 bottom-7 z-[2] flex flex-col items-center gap-1 text-[#b9d0ea] hover:text-white transition-colors animate-lc-bounce max-md:hidden"
      >
        <span className="text-[9px] uppercase tracking-[2px]">Scroll</span>
        <i className="fa fa-angle-down text-[20px]"></i>
      </a>
    </section>
  );
}
