import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Live Connect | Professional Live Streaming & Event Production",
  description:
    "Live Connect delivers professional multi-camera live streaming for weddings, funerals, conferences, concerts, crusades, and more — broadcast to every major platform.",
  authors: [{ name: "Live Connect" }],
  icons: { shortcut: "/img/favicon.png" },
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const googleMapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const googleMapsSrc = googleMapsKey
  ? `https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}`
  : null;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="stylesheet" href="/css/elegant-font-icons.css" />
        <link rel="stylesheet" href="/css/elegant-line-icons.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/venobox/venobox.css" />
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/simpletextrotator.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <Script
          src="/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body data-spy="scroll" data-target="#navmenu" data-offset="70">
        {children}

        <Script src="/js/vendor/jquery-1.12.4.min.js" strategy="afterInteractive" />
        <Script src="/js/vendor/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/vendor/tether.min.js" strategy="afterInteractive" />
        <Script src="/js/vendor/jquery.slicknav.min.js" strategy="afterInteractive" />
        <Script src="/js/vendor/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/vendor/smooth-scroll.min.js" strategy="afterInteractive" />
        <Script src="/js/vendor/venobox.min.js" strategy="afterInteractive" />
        <Script src="/js/vendor/jquery.simple-text-rotator.js" strategy="afterInteractive" />
        <Script src="/js/vendor/wow.min.js" strategy="afterInteractive" />
        {googleMapsSrc && (
          <Script src={googleMapsSrc} strategy="afterInteractive" />
        )}
        <Script src="/js/contact.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
