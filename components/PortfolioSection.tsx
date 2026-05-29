"use client";

import DefaultButton from "./DefaultButton";
import { portfolioImages } from "@/constants";

export default function PortfolioSection() {
  return (
    <section id="works" className="bg-navy">
      <div className="w-full mx-auto px-[15px]">
        <div className="flex flex-wrap items-center -mx-[15px]">
          <div className="w-full md:w-2/3 px-[15px]">
            <div className="flex flex-wrap -mx-[15px]">
              {portfolioImages.map((src) => (
                <div className="w-full sm:w-1/2 lg:w-1/3" key={src}>
                  <div className="group relative">
                    <div className="relative">
                      <img
                        src={`/img/pics/${src}`}
                        alt="Production still"
                        className="w-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <a
                      href={`/img/pics/${src}`}
                      className="img-popup absolute inset-0 p-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible"
                      data-gall="galleryimg"
                    >
                      <div className="bg-white/90 flex items-center justify-center w-full h-full">
                        <img src={`/img/pics/${src}`} alt="Open" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-[15px] max-md:p-[15px]">
            <div className="pl-[80px] max-lg:pl-0 max-md:py-[45px]">
              <h5 className="text-royal uppercase tracking-[3px] text-[12px] font-bold mb-[12px] inline-block">
                Recent productions
              </h5>
              <h2 className="mb-[20px]">Behind the lens</h2>
              <p className="text-[#ddd] mb-[20px]">
                A glimpse at our control rooms, camera setups, and live stages
                from recent broadcasts.
              </p>
              <DefaultButton href="#contact" data-scroll>
                Start a Project
              </DefaultButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
