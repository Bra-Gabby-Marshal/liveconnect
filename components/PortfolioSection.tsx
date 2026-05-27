"use client";

import { portfolioImages } from "@/constants";

export default function PortfolioSection() {
  return (
    <section id="works" className="portfolio-section bg-dark">
      <div className="container-fluid">
        <div className="row portfolio-wrap d-flex align-items-center">
          <div className="col-md-8">
            <div className="row portfolio-items">
              {portfolioImages.map((src) => (
                <div className="col-lg-4 col-sm-6" key={src}>
                  <div className="portfolio-box">
                    <div className="portfolio-thumb">
                      <img 
                        src={`/img/pics/${src}`} 
                        alt="Production still"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <a
                      href={`/img/pics/${src}`}
                      className="hover img-popup"
                      data-gall="galleryimg"
                    >
                      <div>
                        <img src={`/img/pics/${src}`} alt="Open" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 xs-padding">
            <div className="section-heading pdl-80">
              <h5 className="lc-eyebrow">Recent productions</h5>
              <h2 className="mb-20">Behind the lens</h2>
              <p className="mb-20">
                A glimpse at our control rooms, camera setups, and live stages
                from recent broadcasts.
              </p>
              <a href="#contact" data-scroll className="default-btn">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}