"use client";

import { navLinks } from "@/constants";

export default function Navbar() {
  return (
    <header id="header" className="header-section">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="navbar-brand" data-scroll>
            <img
              src="/img/logo.png"
              alt="Live Connect"
              width={112}
              height={90}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </a>
          <div className="d-flex menu-wrap">
            <div id="navmenu" className="mainmenu">
              <ul className="nav">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a 
                      data-scroll 
                      className={`nav-link ${link.active ? 'active' : ''}`} 
                      href={link.href}
                    >
                      {link.label}
                      {link.active && <span className="sr-only">(current)</span>}
                    </a>
                  </li>
                ))}
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
  );
}