"use client";

import TikTokIcon from "./TikTokIcon";
import { socialLinks, siteConfig } from "@/constants";

export default function HeroSection() {
  // Filter social links for hero section (first 4)
  const heroSocialLinks = socialLinks.slice(0, 4);
  
  return (
    <section
      id="home"
      className="section hero-section d-flex align-items-center"
    >
      <div className="container">
        <div className="hero-content text-center">
          <h5>Live Streaming &amp; Event Production</h5>
          <h1>
            Stream Your Events <span className="lc-live">Live</span>
          </h1>
          <p>
            {siteConfig.description}
          </p>
          <div className="hero-cta btn_group">
            <a href="#contact" data-scroll className="default-btn">
              Book a Service
            </a>
            <a
              href="#contact"
              data-scroll
              className="default-btn default-btn--ghost"
            >
              Contact Us
            </a>
          </div>
          <ul className="social-link mt-30">
            {heroSocialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.url} aria-label={social.label}>
                  {social.isTikTok ? (
                    <TikTokIcon />
                  ) : (
                    <i className={social.icon}></i>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}