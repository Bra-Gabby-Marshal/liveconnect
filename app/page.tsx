const services = [
  {
    icon: "fa fa-heart",
    title: "Weddings",
    desc: "Multi-camera coverage and live streaming so distant family and friends never miss the day.",
  },
  {
    icon: "fa fa-pagelines",
    title: "Funerals",
    desc: "Respectful, discreet live broadcasts that let loved ones grieve together from anywhere.",
  },
  {
    icon: "fa fa-laptop",
    title: "Webinars",
    desc: "Studio-grade audio and presenter switching for polished online sessions and panels.",
  },
  {
    icon: "fa fa-microphone",
    title: "Conferences",
    desc: "Hybrid event production with screen capture, lower-thirds, and presenter feeds.",
  },
  {
    icon: "fa fa-music",
    title: "Musical Concerts",
    desc: "Stage-grade multi-cam capture with audio board feeds for pristine live music streams.",
  },
  {
    icon: "fa fa-bullhorn",
    title: "Crusades",
    desc: "Reliable streaming to your church platforms so the message reaches every congregant.",
  },
  {
    icon: "fa fa-flag-checkered",
    title: "Election Campaigns",
    desc: "Rally coverage, livestreams, and on-site media support for political events of any scale.",
  },
  {
    icon: "fa fa-graduation-cap",
    title: "Educational Programs",
    desc: "Lectures, graduations, and school events broadcast to parents, alumni, and partners.",
  },
  {
    icon: "fa fa-trophy",
    title: "Award Ceremonies",
    desc: "Cinematic coverage with branded overlays for galas, ceremonies, and corporate awards.",
  },
];

const portfolioImages = [
  "prof-1.jpg",
  "prof-2.jpg",
  "prof-3.jpg",
  "prof-4.jpg",
  "prof-5.jpg",
  "prof-6.jpg",
];

const platforms = [
  { icon: "fa fa-youtube-play", label: "YouTube" },
  { icon: "fa fa-facebook", label: "Facebook" },
  { icon: "fa fa-instagram", label: "Instagram" },
  { icon: "fa fa-music", label: "TikTok", tiktok: true },
];

const phones = [
  { display: "0551 380 990", tel: "+233551380990" },
  { display: "0551 807 047", tel: "+233551807047" },
];

const whatsappNumber = "233551380990";

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="site-preloader-wrap">
        <div className="spinner"></div>
      </div>

      <header id="header" className="header-section">
        <div className="container">
          <nav className="navbar">
            <a href="#home" className="navbar-brand" data-scroll>
              <img
                src="/img/logo.png"
                alt="Live Connect"
                width={112}
                height={90}
                
              />
            </a>
            <div className="d-flex menu-wrap">
              <div id="navmenu" className="mainmenu">
                <ul className="nav">
                  <li>
                    <a data-scroll className="nav-link active" href="#home">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li>
                    <a data-scroll className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a data-scroll className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a data-scroll className="nav-link" href="#works">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a data-scroll className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a data-scroll className="download-btn" href="#contact">
                      Book a Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

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
              Professional multi-camera live production setup.
              <br /> Reliable broadcasts to every major platform — anywhere your
              audience is.
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
              <li>
                <a href="#" aria-label="YouTube">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="TikTok" className="lc-tiktok-link">
                  <TikTokIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="down-arrow">
          <a data-scroll href="#services" className="arrow-animated">
            Scroll Down <i className="ti-arrow-down"></i>
          </a>
        </div>
      </section>

      <section id="services" className="lc-services-section padding">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <h5 className="lc-eyebrow">What we cover</h5>
            <h2>Services we live-stream</h2>
            <p className="lc-section-lead">
              Every event is different. Our crew, gear, and workflow adapt to
              the moment — from intimate ceremonies to stadium-scale productions.
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
              <img src="/img/pics/about.jpeg" alt="Live Connect crew" />
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="portfolio-section bg-dark">
        <div className="container-fluid">
          <div className="row portfolio-wrap d-flex align-items-center">
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
            <div className="col-md-8">
              <div className="row portfolio-items">
                {portfolioImages.map((src) => (
                  <div className="col-lg-4 col-sm-6" key={src}>
                    <div className="portfolio-box">
                      <div className="portfolio-thumb">
                        <img src={`/img/pics/${src}`} alt="Production still" />
                      </div>
                      <a
                        href={`/img/pics/${src}`}
                        className="hover img-popup"
                        data-gall="galleryimg"
                      >
                        <div>
                          <img src="/img/zoom.png" alt="Open" />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  action="/api/contact"
                  method="post"
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
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                  <div id="form-messages" className="alert" role="alert"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="lc-footer">
        <div className="container">
          <div className="row lc-footer-grid">
            <div className="col-md-5 lc-footer-brand">
              <img src="/img/logo.png" alt="Live Connect" />
              <p>
                Professional live streaming and event production. Reliable
                broadcasts for the moments that matter.
              </p>
              <ul className="social-link">
                <li>
                  <a href="https://www.youtube.com/@LiveConnectStudios" aria-label="YouTube">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/profile.php?id=61573432752859" aria-label="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@live.connect5?_r=1&_t=ZS-96UEAvCAWBR" aria-label="TikTok" className="lc-tiktok-link">
                    <TikTokIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 lc-footer-links">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <a href="#home" data-scroll>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" data-scroll>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" data-scroll>
                    About
                  </a>
                </li>
                <li>
                  <a href="#works" data-scroll>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" data-scroll>
                    Contact
                  </a>
                </li>
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

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="lc-whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fa fa-whatsapp"></i>
      </a>

      <a data-scroll href="#header" id="scroll-to-top">
        <i className="arrow_carrot-up"></i>
      </a>
    </>
  );
}
