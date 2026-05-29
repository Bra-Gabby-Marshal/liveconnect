"use client";

import { useState, useRef, useEffect } from "react"
import { contactInfo } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import PlatformsSection from "@/components/PlatformsSection";
import ContactSection from "@/components/ContactSection";
import FlyerPopup from "@/components/FlyerPopup";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";

const whatsappNumber = contactInfo.whatsappNumber;

export default function Home() {
  const [showFlyer, setShowFlyer] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preloader: hide once the window has finished loading
  // (replaces the old jQuery `body.loaded` toggle).
  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }
    const onLoad = () => setLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  // Handle smooth scrolling
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('[data-scroll]');
      if (!link) return;
      
      e.preventDefault();
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const closeFlyer = async () => {
    setShowFlyer(false);
    
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        await audioRef.current.play();
      }
    } catch (err) {
      console.log("Audio playback failed:", err);
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* AUDIO */}
      <audio ref={audioRef} preload="auto">
        <source src="/audio/jingle.mpeg" type="audio/mpeg" />
      </audio>
      
      <div
        className={`fixed inset-0 z-[9999] bg-navy transition-[opacity,visibility] duration-500 ${
          loaded ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <div className="absolute left-1/2 top-1/2 -ml-5 -mt-5 w-10 h-10 rounded-full bg-white animate-sk-scaleout"></div>
      </div>

      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <PlatformsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat whatsappNumber={whatsappNumber} />
      <ScrollToTop />
      <FlyerPopup showFlyer={showFlyer} closeFlyer={closeFlyer} />
    </main>
  );
}