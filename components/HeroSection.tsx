"use client";

import TikTokIcon from "./TikTokIcon";
import DefaultButton from "./DefaultButton";
import { socialLinks, siteConfig } from "@/constants";

export default function HeroSection() {
  // Filter social links for hero section (first 4)
  const heroSocialLinks = socialLinks.slice(0, 4);

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden bg-navy flex items-center h-screen max-[1024px]:h-[650px] max-lg:h-[570px] bg-[url('/img/pics/hero-background.jpeg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Gradient overlays (ported from the old ::before / ::after) */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(1,23,63,0.92)_0%,rgba(1,48,121,0.82)_45%,rgba(2,105,187,0.55)_100%)]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(2,105,187,0.35),transparent_55%),radial-gradient(circle_at_15%_80%,rgba(1,48,121,0.45),transparent_55%)]" />

      <div className="container relative z-[2]">
        <div className="text-center">
          <h5 className="text-[14px] max-md:text-[11px] text-[#b9d0ea] tracking-[4px] max-md:tracking-[3px] font-semibold mb-[18px] uppercase">
            Live Streaming &amp; Event Production
          </h5>
          <h1 className="text-[72px] max-lg:text-[52px] max-md:!text-[38px] uppercase tracking-[-0.02em] [text-shadow:0_4px_24px_rgba(0,0,0,0.35)]">
            Stream Your Events{" "}
            <span className="text-[#FF0000] relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[6px] after:h-[3px] after:bg-[#FF0000] after:rounded-[2px] after:opacity-[0.85]">
              Live
            </span>
          </h1>
          <p className="text-[#e6ecf4] max-w-[640px] mx-auto mb-[38px] text-[16px]">
            {siteConfig.description}
          </p>
          <div className="flex justify-center gap-[14px] max-md:gap-[10px] flex-wrap mb-[10px]">
            <DefaultButton href="#contact" data-scroll className="m-[5px]">
              Book a Service
            </DefaultButton>
            <DefaultButton href="#contact" data-scroll variant="ghost" className="m-[5px]">
              Contact Us
            </DefaultButton>
          </div>
          <ul className="mt-[30px]">
            {heroSocialLinks.map((social) => (
              <li key={social.label} className="inline-block mx-[10px]">
                <a
                  href={social.url}
                  aria-label={social.label}
                  className="inline-flex items-center text-[#bbb] text-[18px] hover:text-white [&_svg]:w-[18px] [&_svg]:h-[18px]"
                >
                  {social.isTikTok ? <TikTokIcon /> : <i className={social.icon}></i>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
