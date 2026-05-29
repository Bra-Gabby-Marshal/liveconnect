"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionDecor from "./SectionDecor";

const features = [
  "Professional broadcast equipment & redundant connectivity",
  "Multi-camera switching with branded graphics",
  "Reliable streaming to every major platform",
  "Experienced crew on the ground and at the desk",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy py-[100px] max-md:py-[60px]">
      <SectionDecor variant="about" />
      <div className="container relative z-[1]">
        <div className="grid lg:grid-cols-2 gap-[60px] max-lg:gap-[40px] items-center">
          {/* Text column */}
          <Reveal>
            <h5 className="text-royal uppercase tracking-[3px] text-[12px] font-bold mb-[12px] inline-block">
              About Live Connect
            </h5>
            <h2 className="mb-[18px]">Built for broadcasts you can trust</h2>
            <p className="text-[#bcc6d4] leading-[1.8]">
              Live Connect is a media-tech production company delivering
              reliable live streaming for events that matter. We bring the
              control-room discipline of broadcast TV to weddings, churches,
              campaigns, and corporate stages — so the moment plays back the
              way it happened.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 my-[30px]">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-[8px] bg-[linear-gradient(135deg,#0269BB,#013079)] text-white inline-flex items-center justify-center text-[12px] shadow-[0_8px_18px_-8px_rgba(2,105,187,0.8)]">
                    <i className="fa fa-check"></i>
                  </span>
                  <span className="text-[#d6dde7] text-[14px] leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              data-scroll
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-[14px] text-[11px] font-bold uppercase tracking-[2px] text-white
                         bg-[linear-gradient(135deg,#0269BB_0%,#22d3ee_100%)] bg-[length:200%_100%] bg-left
                         shadow-[0_12px_30px_-8px_rgba(34,211,238,0.4)]
                         transition-[background-position,transform,box-shadow] duration-500 ease-out
                         hover:bg-right hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_rgba(34,211,238,0.55)]
                         before:content-[''] before:absolute before:inset-0 before:-translate-x-full
                         before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent)]
                         before:transition-transform before:duration-700 hover:before:translate-x-full"
            >
              <span className="relative z-[1] flex items-center gap-2">
                <i className="fa fa-calendar-o"></i>
                Plan Your Event
              </span>
            </a>
          </Reveal>

          {/* Image column */}
          <Reveal delay={150} className="relative">
            {/* Soft gradient glow behind the photo */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[24px] bg-[linear-gradient(135deg,#0269BB,#22d3ee)] opacity-25 blur-2xl"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-white/[0.08] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
              <Image
                src="/img/pics/about.jpg"
                alt="Live Connect crew"
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
