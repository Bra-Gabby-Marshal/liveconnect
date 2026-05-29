"use client";

import { useState } from "react";
import { phones, contactInfo } from "@/constants";

const whatsappNumber = contactInfo.whatsappNumber;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });

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

  return (
    <section id="contact" className="contact-section bg-dark">
      <div className="container">
        <div className="row contact-wrap">
          <div className="col-lg-5 col-md-12 lc-contact-info-col">
            <div className="contact-info mb-30">
              <h5 className="lc-eyebrow">Get in touch</h5>
              <h2>Let&apos;s plan your live broadcast</h2>
              <p className="lc-section-lead">
                Tell us about your event and we&apos;ll send back a tailored
                production plan, gear list, and quote.
              </p>
            </div>
            <ul className="lc-contact-list">
              <li>
                <span className="lc-contact-icon">
                  <i className="fa fa-phone"></i>
                </span>
                <div>
                  <span className="lc-contact-label">Call us</span>
                  {phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="lc-contact-value"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <span className="lc-contact-icon">
                  <i className="fa fa-whatsapp"></i>
                </span>
                <div>
                  <span className="lc-contact-label">Chat on WhatsApp</span>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lc-whatsapp-btn"
                  >
                    <i className="fa fa-whatsapp"></i> Message us
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="contact-form lc-contact-form">
              <form
                onSubmit={handleSubmit}
                id="ajax_form"
                className="form-horizontal"
              >
                <div className="form-group colum-row row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                    />
                  </div>
                </div>
                <div className="form-group colum-row row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="event_type"
                      name="event_type"
                      className="form-control"
                      placeholder="Event Type (e.g. Wedding)"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="date"
                      id="event_date"
                      name="event_date"
                      className="form-control"
                      placeholder="Event Date"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      id="message"
                      name="message"
                      cols={30}
                      rows={5}
                      className="form-control message"
                      placeholder="Tell us about your event"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <button
                      id="submit"
                      className="default-btn submit-button"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
                {formMessage.text && (
                  <div 
                    id="form-messages" 
                    className={`alert alert-${formMessage.type === "success" ? "success" : "danger"}`} 
                    role="alert"
                  >
                    {formMessage.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}