const portfolioImages = [
  "prtf-1.jpg",
  "prtf-2.jpg",
  "prtf-3.gif",
  "prtf-4.jpg",
  "prtf-5.jpg",
  "prtf-6.jpg",
];

const services = [
  { icon: "icon-layers", title: "Interface Design" },
  { icon: "icon-tools", title: "Themes Development" },
  { icon: "icon-bargraph", title: "Content Marketing" },
  { icon: "icon-phone", title: "Mobile Apps" },
  { icon: "icon-bike", title: "Responsive Design" },
  { icon: "icon-genius", title: "Free Updates" },
];

export default function Home() {
  return (
    <>
      <div className="site-preloader-wrap">
        <div className="spinner"></div>
      </div>

      <header id="header" className="header-section">
        <div className="container">
          <nav className="navbar">
            <a href="#" className="navbar-brand">
              <img src="/img/logo.png" alt="Live Connect" />
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
                    <a data-scroll className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a data-scroll className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a data-scroll className="nav-link" href="#works">
                      Works
                    </a>
                  </li>
                  <li>
                    <a data-scroll className="nav-link" href="#contact">
                      Contact
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
            <h5>WEB DEVELOPER &amp; UX DESIGNER</h5>
            <h1>
              <span className="rotate">Creativity, Designing, Developing</span>
            </h1>
            <p>
              I&rsquo;m a Creative Designer and I make things work.
              <br /> Turning your dreams into reality.
            </p>
            <ul className="social-link">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="down-arrow">
          <a data-scroll href="#about" className="arrow-animated">
            Scroll Down <i className="ti-arrow-down"></i>
          </a>
        </div>
      </section>

      <section id="about" className="about-section bg-dark">
        <div className="container-fluid">
          <div className="row about-wrap">
            <div className="col-md-6">
              <div className="about-content pdl-80">
                <div className="section-heading mb-20">
                  <h2>About Us</h2>
                </div>
                <p>
                  I&rsquo;m a Graphic Designer and I make things work.without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas. Dramatically maintain clicks-and-mortar
                  solutions without functional solutions.
                </p>
                <p>
                  {" "}
                  Completely synergize resource taxing relationships premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas.
                </p>
                <a href="#" className="default-btn">
                  See Our Works
                </a>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img src="/img/about-background.jpg" alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="service-section padding">
        <div className="container-fluid">
          <div className="row service-area d-flex align-items-center">
            <div className="col-lg-4 col-md-4 xs-padding">
              <div className="section-heading pdl-80">
                <h2 className="mb-20">Services</h2>
                <p className="mb-20">
                  I&rsquo;m a Creative Designer and I make things work.
                  <br /> Turning your dreams into reality.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-8 xs-padding">
              <div className="row service-wrap">
                {services.map((s) => (
                  <div className="col-lg-4 col-sm-6 pd-15" key={s.title}>
                    <div className="service-content">
                      <i className={s.icon}></i>
                      <h3>{s.title}</h3>
                      <p>Lorem Ipsum is simply more dummy the industry.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="portfolio-section bg-dark">
        <div className="container-fluid">
          <div className="row portfolio-wrap d-flex align-items-center">
            <div className="col-md-4 xs-padding">
              <div className="section-heading pdl-80">
                <h2 className="mb-20">Portfolio</h2>
                <p className="mb-20">
                  I&rsquo;m a Creative Designer and I make things work.
                  <br /> Turning your dreams into reality.
                </p>
                <a href="#" className="default-btn">
                  Our All Works
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row portfolio-items">
                {portfolioImages.map((src) => (
                  <div className="col-lg-4 col-sm-6" key={src}>
                    <div className="portfolio-box">
                      <div className="portfolio-thumb">
                        <img src={`/img/${src}`} alt="img" />
                      </div>
                      <a
                        href={`/img/${src}`}
                        className="hover img-popup"
                        data-gall="galleryimg"
                      >
                        <div>
                          <img src="/img/zoom.png" alt="icon" />
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

      <section className="cta-section padding">
        <div className="container">
          <div className="cta-wrap text-center">
            <div className="cta-content">
              <h2>
                A Creative studio in Melbourne, <br /> passionate about design,
                art and <br />
                creativity, since 1950.
              </h2>
              <a href="#" className="default-btn">
                Contact With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section bg-dark">
        <div className="container-fluid">
          <div className="row contact-wrap">
            <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 pdl-80">
              <div className="contact-info mb-30">
                <h2>
                  let&apos;s work together projects <br /> just send me email
                  here
                </h2>
              </div>
              <div className="contact-form">
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
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
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
                        placeholder="Message"
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
        <div id="google-map"></div>
      </section>

      <footer className="footer-section align-center">
        <div className="container">
          <p>&copy; 2019 Live Connect Powered by TeamXcel</p>
        </div>
      </footer>

      <a data-scroll href="#header" id="scroll-to-top">
        <i className="arrow_carrot-up"></i>
      </a>
    </>
  );
}
