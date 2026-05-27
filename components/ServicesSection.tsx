"use client";

import { services } from "@/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="lc-services-section padding">
      <div className="container">
        <div className="section-heading text-center mb-50">
          <h5 className="lc-eyebrow">What we cover</h5>
          <h2>Services we live-stream</h2>
          <p className="lc-section-lead">
            Every event is different. Our crew, gear, and workflow adapt to
            the moment — from intimate ceremonies to stadium-scale
            productions.
          </p>
        </div>
        <div className="row lc-services-grid">
          {services.map((s) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={s.title}>
              <div className="lc-service-card">
                <div className="lc-service-icon">
                  <i className={s.icon}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}