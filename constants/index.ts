export const navLinks = [
  { href: "#home", label: "Home", active: true },
  { href: "#services", label: "Services", active: false },
  { href: "#about", label: "About", active: false },
  { href: "#works", label: "Portfolio", active: false },
  { href: "#contact", label: "Contact", active: false },
];

// `image` paths are placeholders mapped to existing production stills —
// swap them for service-specific photos when available.
export const services = [
  {
    icon: "fa fa-heart",
    title: "Weddings",
    desc: "Multi-camera coverage and live streaming so distant family and friends never miss the day.",
    image: "/img/services/wedding.jpg",
  },
  {
    icon: "fa fa-pagelines",
    title: "Funerals",
    desc: "Respectful, discreet live broadcasts that let loved ones grieve together from anywhere.",
    image: "/img/services/Funerals.jpg",
  },
  {
    icon: "fa fa-laptop",
    title: "Webinars",
    desc: "Studio-grade audio and presenter switching for polished online sessions and panels.",
    image: "/img/services/Webinars.jpg",
  },
  {
    icon: "fa fa-microphone",
    title: "Conferences",
    desc: "Hybrid event production with screen capture, lower-thirds, and presenter feeds.",
    image: "/img/services/Conferences.jpg",
  },
  {
    icon: "fa fa-music",
    title: "Musical Concerts",
    desc: "Stage-grade multi-cam capture with audio board feeds for pristine live music streams.",
    image: "/img/services/Musical-Concerts.jpg",
  },
  {
    icon: "fa fa-bullhorn",
    title: "Crusades",
    desc: "Reliable streaming to your church platforms so the message reaches every congregant.",
    image: "/img/pics/prof-5.jpg",
  },
  {
    icon: "fa fa-flag-checkered",
    title: "Election Campaigns",
    desc: "Rally coverage, livestreams, and on-site media support for political events of any scale.",
    image: "/img/services/Election-Campaigns.jpg",
  },
  {
    icon: "fa fa-graduation-cap",
    title: "Educational Programs",
    desc: "Lectures, graduations, and school events broadcast to parents, alumni, and partners.",
    image: "/img/services/Educational-Programs.jpg",
  },
  {
    icon: "fa fa-trophy",
    title: "Award Ceremonies",
    desc: "Cinematic coverage with branded overlays for galas, ceremonies, and corporate awards.",
    image: "/img/services/Award-Ceremonies.jpg",
  },
];

export const portfolioImages = [
  "prof-1.jpg",
  "prof-2.jpg",
  "prof-3.jpg",
  "prof-4.jpg",
  "prof-5.jpg",
  "prof-6.jpg",
];

export const platforms = [
  { icon: "fa fa-youtube-play", label: "YouTube", url: "https://youtube.com" },
  { icon: "fa fa-facebook", label: "Facebook", url: "https://facebook.com" },
  { icon: "fa fa-instagram", label: "Instagram", url: "https://instagram.com" },
  { icon: "fa fa-music", label: "TikTok", tiktok: true, url: "https://tiktok.com" },
];

export const phones = [
  { display: "0551 380 990", tel: "+233551380990" },
  { display: "0551 807 047", tel: "+233551807047" },
];

export const socialLinks = [
  { icon: "fa fa-youtube-play", label: "YouTube", url: "https://www.youtube.com/@LiveConnectStudios" },
  { icon: "fa fa-facebook", label: "Facebook", url: "https://facebook.com/profile.php?id=61573432752859" },
  { icon: "fa fa-instagram", label: "Instagram", url: "#" },
  { icon: "fa fa-music", label: "TikTok", url: "https://www.tiktok.com/@live.connect5?_r=1&_t=ZS-96UEAvCAWBR", isTikTok: true },
];

export const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#works", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

// NOTE: Placeholder figures — replace with Live Connect's real numbers before launch.
export const stats = [
  { value: "150+", label: "Events Streamed" },
  { value: "50K+", label: "Live Viewers Reached" },
  { value: "8+", label: "Platforms Supported" },
  { value: "100%", label: "Reliable Broadcasts" },
];

export const contactInfo = {
  whatsappNumber: "233551380990",
  email: "info@liveconnect.com",
  address: "Accra, Ghana",
};

export const siteConfig = {
  name: "Live Connect",
  tagline: "Professional Live Streaming & Event Production",
  description: "Professional multi-camera live production setup. Reliable broadcasts to every major platform — anywhere your audience is.",
  logo: "/img/logo.png",
  // Set NEXT_PUBLIC_SITE_URL in your env to the real production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.liveconnect.com",
};