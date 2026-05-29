"use client";

import DefaultButton from "./DefaultButton";

export default function AboutSection() {
  return (
    <section id="about" className="bg-navy">
      <div className="w-full mx-auto px-[15px]">
        <div className="flex flex-wrap items-center -mx-[15px]">
          <div className="w-full md:w-1/2 px-[15px]">
            <div className="pl-[80px] pr-[40px] max-lg:p-[60px_0]">
              <div className="mb-[20px]">
                <h5 className="text-royal uppercase tracking-[3px] text-[12px] font-bold mb-[12px] inline-block">
                  About Live Connect
                </h5>
                <h2>Built for broadcasts you can trust</h2>
              </div>
              <p className="text-[#bbb]">
                Live Connect is a media-tech production company delivering
                reliable live streaming for events that matter. We bring the
                control-room discipline of broadcast TV to weddings, churches,
                campaigns, and corporate stages — so the moment plays back the
                way it happened.
              </p>
              <ul className="mt-[18px] mb-[28px] [&>li]:text-[#d6dde7] [&>li]:text-[14px] [&>li]:py-2 [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&_i]:text-royal [&_i]:mt-1">
                <li>
                  <i className="fa fa-check"></i> Professional broadcast
                  equipment &amp; redundant connectivity
                </li>
                <li>
                  <i className="fa fa-check"></i> Multi-camera switching with
                  branded graphics
                </li>
                <li>
                  <i className="fa fa-check"></i> Reliable streaming to every
                  major platform
                </li>
                <li>
                  <i className="fa fa-check"></i> Experienced crew on the
                  ground and at the desk
                </li>
              </ul>
              <DefaultButton href="#contact" data-scroll className="mt-[20px]">
                Plan Your Event
              </DefaultButton>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-[15px] hidden md:block">
            <img
              src="/img/pics/about.jpg"
              alt="Live Connect crew"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/img/fallback.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
