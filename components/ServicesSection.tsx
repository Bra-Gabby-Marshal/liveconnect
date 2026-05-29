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
            <div
              className="group relative h-full overflow-hidden rounded-[16px] border border-white/[0.07] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-royal/40 hover:bg-white/[0.05] hover:shadow-[0_30px_60px_-30px_rgba(2,105,187,0.7)]"
            >
              {/* Top accent bar grows in on hover */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-0 bg-[linear-gradient(90deg,#0269BB,#22d3ee)] transition-[width] duration-300 group-hover:w-full"
              />
              {/* Soft corner glow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 w-36 h-36 rounded-full bg-royal/25 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative w-14 h-14 rounded-[14px] bg-[linear-gradient(135deg,#0269BB,#013079)] inline-flex items-center justify-center mb-6 shadow-[0_10px_24px_-10px_rgba(2,105,187,0.9)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 [&>i]:text-white [&>i]:text-[24px]">
                <i className={s.icon}></i>
              </div>
              <h3 className="relative text-white uppercase tracking-[0.5px] text-[17px] font-semibold mb-[10px]">
                {s.title}
              </h3>
              <p className="relative text-[#bcc6d4] text-[14px] leading-[1.7] m-0">
                {s.desc}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
