"use client";

import { useState } from "react";
import DefaultButton from "./DefaultButton";
import Reveal from "./Reveal";
import SectionDecor from "./SectionDecor";
import { phones, contactInfo } from "@/constants";

const whatsappNumber = contactInfo.whatsappNumber;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });
  // Controlled so we can show a custom placeholder over the native date input
  // and clear it on a successful submit (form.reset() can't reset React state).
  const [eventDate, setEventDate] = useState("");
  const [dateFocused, setDateFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ type: "", text: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormMessage({ type: "success", text: "Message sent successfully! We'll get back to you soon." });
        form.reset();
        setEventDate("");
      } else {
        const serverText = await response.text();
        throw new Error(serverText || "Failed to send message");
      }
    } catch (error) {
      const detail = error instanceof Error ? error.message : "";
      setFormMessage({
        type: "error",
        text: detail || "Failed to send message. Please try again or call us directly.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClasses =
    "w-full border border-white/[0.12] bg-white/[0.04] rounded-[10px] px-4 py-[10px] h-12 mb-5 text-base text-white outline-none focus:border-royal focus:bg-[rgba(2,105,187,0.08)]";

  return (
    <section id="contact" className="relative z-[1] overflow-hidden bg-navy">
      <SectionDecor variant="contact" />
      <div className="container relative z-[1]">
        <div className="flex flex-wrap items-center -mx-[15px] py-[120px] max-lg:pt-0 max-lg:pb-[100px] max-lg:text-center max-md:pb-[60px]">
          <div className="w-full px-[15px] md:w-full lg:w-5/12 max-lg:mb-[40px] max-lg:text-left">
            <Reveal>
            <div className="mb-[30px]">
              <h5 className="text-royal uppercase tracking-[3px] text-[12px] font-bold mb-[12px] inline-block">
                Get in touch
              </h5>
              <h2>Let&apos;s plan your live broadcast</h2>
              <p className="text-[#cfd6e1] max-w-[720px] mx-auto text-[15px]">
                Tell us about your event and we&apos;ll send back a tailored
                production plan, gear list, and quote.
              </p>
            </div>
            <ul className="mt-[10px] [&>li]:flex [&>li]:items-start [&>li]:gap-4 [&>li]:py-4 [&>li]:border-t [&>li]:border-white/[0.08] [&>li:last-child]:border-b">
              <li>
                <span className="w-12 h-12 rounded-[12px] bg-[linear-gradient(135deg,#0269BB,#013079)] text-white inline-flex items-center justify-center shrink-0 [&>i]:text-[18px]">
                  <i className="fa fa-phone"></i>
                </span>
                <div>
                  <span className="block uppercase tracking-[2px] text-[11px] text-royal font-bold mb-[6px]">
                    Call us
                  </span>
                  {phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="block text-white text-[18px] font-semibold leading-[1.5] hover:text-royal"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <div>
                  <span className="block uppercase tracking-[2px] text-[11px] text-royal font-bold mb-[6px]">
                    Chat on WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1DA851] text-white px-4 py-2 rounded-[30px] font-semibold text-[13px] mt-1 hover:bg-[#17853f] hover:text-white"
                  >
                    <i className="fa fa-whatsapp"></i> Message us
                  </a>
                </div>
              </li>
            </ul>
            </Reveal>
          </div>
          <div className="w-full px-[15px] md:w-full lg:w-7/12">
            <Reveal delay={120} className="pr-[40px] max-lg:pr-0">
              <form onSubmit={handleSubmit} id="ajax_form">
                <div className="flex flex-wrap -mx-[15px]">
                  <div className="w-full px-[15px] sm:w-1/2">
                    <input type="text" id="name" name="name" className={fieldClasses} placeholder="Your Name" required />
                  </div>
                  <div className="w-full px-[15px] sm:w-1/2">
                    <input type="email" id="email" name="email" className={fieldClasses} placeholder="Email Address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-[15px]">
                  <div className="w-full px-[15px] md:w-full">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={fieldClasses}
                      placeholder="Phone Number"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-[15px]">
                  <div className="w-full px-[15px] sm:w-1/2">
                    <input type="text" id="event_type" name="event_type" className={fieldClasses} placeholder="Event Type (e.g. Wedding)" />
                  </div>
                  <div className="w-full px-[15px] sm:w-1/2">
                    <div className="relative">
                      <input
                        type="date"
                        id="event_date"
                        name="event_date"
                        aria-label="Event Date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        onFocus={() => setDateFocused(true)}
                        onBlur={() => setDateFocused(false)}
                        onClick={(e) => {
                          // Open the picker on tap/click where supported; on mobile
                          // a native date input opens its picker on tap anyway.
                          try {
                            e.currentTarget.showPicker?.();
                          } catch {
                            /* not allowed in this context — ignore */
                          }
                        }}
                        className={`${fieldClasses} [color-scheme:dark] ${
                          !eventDate && !dateFocused ? "lc-date-placeholder" : ""
                        }`}
                      />
                      {!eventDate && !dateFocused && (
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#ddd] text-base">
                          Event Date
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-[15px]">
                  <div className="w-full px-[15px] md:w-full">
                    <textarea
                      id="message"
                      name="message"
                      cols={30}
                      rows={5}
                      className={`${fieldClasses} h-[140px] pt-[14px]`}
                      placeholder="Tell us about your event"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-[15px]">
                  <div className="w-full px-[15px] md:w-full text-center">
                    <DefaultButton
                      type="submit"
                      disabled={isSubmitting}
                      className="!rounded-[30px] !px-[32px]"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </DefaultButton>
                  </div>
                </div>
                {formMessage.text && (
                  <div
                    role="alert"
                    className={`mt-4 px-5 py-3 rounded border ${
                      formMessage.type === "success"
                        ? "text-[#155724] bg-[#d4edda] border-[#c3e6cb]"
                        : "text-[#721c24] bg-[#f8d7da] border-[#f5c6cb]"
                    }`}
                  >
                    {formMessage.text}
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
