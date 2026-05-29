"use client";

import Reveal from "./Reveal";
import SectionDecor from "./SectionDecor";
import { stats } from "@/constants";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0A4498_0%,#0a78d1_100%)] py-[60px]">
      <SectionDecor variant="stats" />
      <div className="container relative z-[1]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="text-center max-lg:[&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r border-white/15"
            >
              <div className="text-[44px] max-md:text-[34px] font-heading font-bold leading-none text-white">
                {s.value}
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-[2px] text-[#cfe0f5] font-semibold">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
