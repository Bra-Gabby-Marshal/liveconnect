"use client";

import TikTokIcon from "./TikTokIcon";
import { platforms } from "@/constants";

export default function PlatformsSection() {
  return (
    <section className="lc-platforms-section padding">
      <div className="container">
        <div className="text-center">
          <h5 className="lc-eyebrow">Stream anywhere</h5>
          <h2 className="mb-20">We stream to all major platforms</h2>
          <p className="lc-section-lead mb-40">
            Your audience picks the platform. We deliver to every one of them
            — simultaneously, in HD, without dropping a frame.
          </p>
          <ul className="lc-platforms-list">
            {platforms.map((p) => (
              <li key={p.label} title={p.label}>
                {p.tiktok ? (
                  <span className="lc-platform-svg">
                    <TikTokIcon />
                  </span>
                ) : (
                  <i className={p.icon}></i>
                )}
                <span className="lc-platform-label">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}