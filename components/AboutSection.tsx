"use client";

export default function AboutSection() {
  return (
    <section id="about" className="about-section bg-dark">
      <div className="container-fluid">
        <div className="row about-wrap">
          <div className="col-md-6">
            <div className="about-content pdl-80">
              <div className="section-heading mb-20">
                <h5 className="lc-eyebrow">About Live Connect</h5>
                <h2>Built for broadcasts you can trust</h2>
              </div>
              <p>
                Live Connect is a media-tech production company delivering
                reliable live streaming for events that matter. We bring the
                control-room discipline of broadcast TV to weddings, churches,
                campaigns, and corporate stages — so the moment plays back the
                way it happened.
              </p>
              <ul className="lc-feature-list">
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
              <a href="#contact" data-scroll className="default-btn">
                Plan Your Event
              </a>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
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