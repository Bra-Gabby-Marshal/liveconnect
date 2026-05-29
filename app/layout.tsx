import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  siteConfig,
  phones,
  socialLinks,
  contactInfo,
  services,
} from "@/constants";

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Live Connect | Professional Live Streaming & Event Production",
    template: "%s | Live Connect",
  },
  description:
    "Live Connect delivers professional multi-camera live streaming for weddings, funerals, conferences, concerts, crusades, and more — broadcast to every major platform.",
  applicationName: "Live Connect",
  authors: [{ name: "Live Connect" }],
  creator: "Live Connect",
  publisher: "Live Connect",
  keywords: [
    "live streaming",
    "event production",
    "multi-camera streaming",
    "wedding live stream",
    "funeral live stream",
    "conference streaming",
    "church live streaming",
    "concert streaming",
    "Accra",
    "Ghana",
    "Live Connect",
  ],
  alternates: { canonical: "/" },
  icons: {
    shortcut: "/img/favicon.png",
    icon: "/img/favicon.png",
    apple: "/img/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Live Connect",
    title: "Live Connect | Professional Live Streaming & Event Production",
    description:
      "Professional multi-camera live streaming and event production — broadcast to every major platform.",
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/img/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Live Connect — professional live streaming & event production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Connect | Professional Live Streaming & Event Production",
    description:
      "Professional multi-camera live streaming and event production — broadcast to every major platform.",
    images: ["/img/hero-background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Live Streaming & Event Production",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#01173F",
};

// JSON-LD structured data (LocalBusiness) for rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  logo: `${siteUrl}${siteConfig.logo}`,
  image: `${siteUrl}/img/hero-background.jpg`,
  email: contactInfo.email,
  telephone: phones.map((p) => p.tel),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  areaServed: "GH",
  priceRange: "$$",
  sameAs: socialLinks.map((s) => s.url).filter((u) => u && u !== "#"),
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.desc },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Icon fonts stay — they provide the glyphs used by <i> elements.
            Everything else is handled by Tailwind / React. */}
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/elegant-font-icons.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
