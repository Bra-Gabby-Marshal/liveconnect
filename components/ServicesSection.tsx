"use client";

import { services } from "@/constants";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[linear-gradient(180deg,#01173F_0%,#013079_100%)] py-[100px] max-md:py-[60px]"
    >
      <div className="container">
        <div className="text-center mb-[50px]">
          <h5 className="text-royal uppercase tracking-[3px] text-[12px] font-bold mb-[12px] inline-block">
            What we cover
          </h5>
          <h2>Services we live-stream</h2>
          <p className="text-[#cfd6e1] max-w-[720px] mx-auto text-[15px]">
            Every event is different. Our crew, gear, and workflow adapt to
            the moment — from intimate ceremonies to stadium-scale
            productions.
          </p>
        </div>
        <div className="flex flex-wrap -mx-3">
          {services.map((s) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3 flex" key={s.title}>
              <div className="w-full bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] border border-white/[0.06] rounded-[14px] p-[34px_26px] max-md:p-[26px_22px] transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-[rgba(2,105,187,0.55)] hover:shadow-[0_24px_50px_-20px_rgba(2,105,187,0.55)] hover:bg-[linear-gradient(160deg,rgba(2,105,187,0.18),rgba(1,48,121,0.05))]">
                <div className="w-14 h-14 rounded-[14px] bg-[linear-gradient(135deg,#0269BB,#013079)] inline-flex items-center justify-center mb-[22px] shadow-[0_10px_24px_-10px_rgba(2,105,187,0.7)] [&>i]:text-white [&>i]:text-[24px]">
                  <i className={s.icon}></i>
                </div>
                <h3 className="text-white uppercase tracking-[1px] text-[17px] font-semibold mb-[10px]">
                  {s.title}
                </h3>
                <p className="text-[#bcc6d4] text-[14px] leading-[1.7] m-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
