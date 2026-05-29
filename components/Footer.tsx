"use client";

import TikTokIcon from "./TikTokIcon";
import { phones, footerLinks, socialLinks, contactInfo } from "@/constants";

const whatsappNumber = contactInfo.whatsappNumber;

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-[#cfd6e1] pt-[70px] pb-0">
      <div className="container">
        <div className="flex flex-wrap items-start -mx-[15px] pb-[50px] border-b border-white/[0.08]">
          <div className="w-full px-[15px] md:w-5/12 max-lg:mb-[30px]">
            <img
              src="/img/logo.png"
              alt="Live Connect"
              className="max-h-[44px] mb-4"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <p className="text-[#b8c2d4] text-[14px] max-w-[360px] mb-[18px]">
              Professional live streaming and event production. Reliable
              broadcasts for the moments that matter.
            </p>
            <ul className="[&>li]:inline-block [&>li]:mr-3 [&_a]:text-[#bbb] [&_a]:text-[18px] [&_a]:inline-flex [&_a]:items-center [&_a]:hover:text-white [&_svg]:w-[18px] [&_svg]:h-[18px]">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.isTikTok ? <TikTokIcon /> : <i className={social.icon}></i>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full px-[15px] md:w-1/4 max-lg:mb-[30px]">
            <h4 className="text-white uppercase text-[13px] tracking-[2px] mb-[18px]">Quick links</h4>
            <ul className="[&>li]:py-[5px] [&>li]:text-[14px] [&_a]:text-[#cfd6e1] [&_a]:hover:text-white">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} data-scroll>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full px-[15px] md:w-1/3 [&_i]:text-royal [&_i]:w-[18px] [&_i]:mr-1">
            <h4 className="text-white uppercase text-[13px] tracking-[2px] mb-[18px]">Contact</h4>
            <ul className="[&>li]:py-[5px] [&>li]:text-[14px] [&_a]:text-[#cfd6e1] [&_a]:hover:text-white">
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
        <div className="py-[22px] text-center">
          <p className="m-0 text-[12px] uppercase tracking-[2px] text-[#b8c2d4]">
            &copy; {new Date().getFullYear()} Live Connect. All rights
            reserved. <span className="max-md:hidden text-[10px] tracking-[1px] opacity-70">Designed by Sodey Haidor Gabriel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
