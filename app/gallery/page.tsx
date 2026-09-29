import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Go behind the scenes with Live Connect: explore our camera setups, control rooms, and live event productions.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Live Connect",
    description: "A look behind the scenes at our live event productions.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[110px] bg-dark-blue min-h-screen">
        <GallerySection gallery />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
