"use client";

import TikTokIcon from "./TikTokIcon";
import { phones, footerLinks, socialLinks, contactInfo } from "@/constants";

const whatsappNumber = contactInfo.whatsappNumber;

export default function Footer() {
  return (
    <footer className="lc-footer">
      <div className="container">
        <div className="row lc-footer-grid">
          <div className="col-md-5 lc-footer-brand">
            <img 
              src="/img/logo.png" 
              alt="Live Connect"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <p>
              Professional live streaming and event production. Reliable
              broadcasts for the moments that matter.
            </p>
            <ul className="social-link">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
          <div className="col-md-3 lc-footer-links">
            <h4>Quick links</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} data-scroll>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 lc-footer-contact">
            <h4>Contact</h4>
            <ul>
              {phones.map((p) => (
                <li key={p.tel}>
                  <i className="fa fa-phone"></i>{" "}
                  <a href={`tel:${p.tel}`}>{p.display}</a>
                </li>
              ))}
              <li>
                <i className="fa fa-whatsapp"></i>{" "}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lc-footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Live Connect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}