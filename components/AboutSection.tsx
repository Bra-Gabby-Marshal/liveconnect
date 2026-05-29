"use client";

import DefaultButton from "./DefaultButton";

const features = [
  "Professional broadcast equipment & redundant connectivity",
  "Multi-camera switching with branded graphics",
  "Reliable streaming to every major platform",
  "Experienced crew on the ground and at the desk",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-navy py-[100px] max-md:py-[60px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[60px] max-lg:gap-[40px] items-center">
          {/* Text column */}
          <div>
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

            <DefaultButton href="#contact" data-scroll>
              Plan Your Event
            </DefaultButton>
          </div>

          {/* Image column */}
          <div className="relative">
            {/* Soft gradient glow behind the photo */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[24px] bg-[linear-gradient(135deg,#0269BB,#22d3ee)] opacity-25 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
              <img
                src="/img/pics/about.jpg"
                alt="Live Connect crew"
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/img/fallback.jpg";
                }}
              />
              {/* On-brand LIVE badge */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
