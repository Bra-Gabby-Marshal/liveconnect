"use client";

import TikTokIcon from "./TikTokIcon";
import { platforms } from "@/constants";

export default function PlatformsSection() {
  return (
    <section className="relative bg-dark-blue py-[100px] max-md:py-[60px]">
      <div className="container">
        <div className="text-center">
          <h5 className="text-royal uppercase tracking-[3px] text-[12px] font-bold mb-[12px] inline-block">
            Stream anywhere
          </h5>
          <h2 className="mb-[20px]">We stream to all major platforms</h2>
          <p className="text-[#cfd6e1] max-w-[720px] mx-auto text-[15px] mb-[40px]">
            Your audience picks the platform. We deliver to every one of them
            — simultaneously, in HD, without dropping a frame.
          </p>
          <ul className="flex justify-center items-center flex-wrap gap-[40px] max-md:gap-[26px] mt-[10px]">
            {platforms.map((p) => (
              <li
                key={p.label}
                title={p.label}
                className="inline-flex flex-col items-center gap-3 text-white transition-all hover:-translate-y-1 hover:text-[#b9d0ea]"
              >
                {p.tiktok ? (
                  <span className="inline-flex w-[44px] h-[44px] max-md:w-[34px] max-md:h-[34px] items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                    <TikTokIcon />
                  </span>
                ) : (
                  <i className={`${p.icon} text-[44px] max-md:text-[34px] text-white`}></i>
                )}
                <span className="text-[12px] tracking-[2px] uppercase font-semibold">
                  {p.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
