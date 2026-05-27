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
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
      
      <div className="site-preloader-wrap">
        <div className="spinner"></div>
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