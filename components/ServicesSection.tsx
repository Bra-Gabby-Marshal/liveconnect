"use client";

import Reveal from "./Reveal";
import { services } from "@/constants";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[linear-gradient(180deg,#01173F_0%,#013079_100%)] py-[100px] max-md:py-[60px]"
    >
      <div className="container">
        <Reveal className="text-center mb-[50px]">
          <h5 className="text-royal uppercase tracking-[3px] text-[12px] font-bold mb-[12px] inline-block">
            What we cover
          </h5>
          <h2>Services we live-stream</h2>
          <p className="text-[#cfd6e1] max-w-[720px] mx-auto text-[15px]">
            Every event is different. Our crew, gear, and workflow adapt to
            the moment — from intimate ceremonies to stadium-scale
            productions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90} className="h-full">
            <div className="group relative flex h-full min-h-[280px] lg:min-h-[340px] flex-col justify-end overflow-hidden rounded-[16px] border border-white/[0.08] transition-all duration-300 hover:-translate-y-2 hover:border-royal/50 hover:shadow-[0_30px_60px_-30px_rgba(2,105,187,0.8)]">
              {/* Fallback background (shows if the image fails) */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0269BB,#013079)]"
              />
              {/* Background image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Legibility overlay */}
              <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,23,63,0.96)_0%,rgba(1,23,63,0.72)_42%,rgba(1,23,63,0.2)_100%)]" />

              {/* Content over the image */}
              <div className="relative p-5 lg:p-7">
                <div className="mb-3 lg:mb-4 inline-flex h-11 w-11 lg:h-14 lg:w-14 items-center justify-center rounded-[12px] lg:rounded-[14px] bg-[linear-gradient(135deg,#0269BB,#013079)] shadow-[0_10px_24px_-10px_rgba(2,105,187,0.9)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 [&>i]:text-white [&>i]:text-[18px] lg:[&>i]:text-[22px]">
                  <i className={s.icon}></i>
                </div>
                <h3 className="text-white uppercase tracking-[0.5px] text-[15px] lg:text-[17px] font-semibold mb-[8px] lg:mb-[10px]">
                  {s.title}
                </h3>
                <p className="text-[#dbe3ee] text-[13px] lg:text-[14px] leading-[1.6] lg:leading-[1.7] m-0">
                  {s.desc}
                </p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
