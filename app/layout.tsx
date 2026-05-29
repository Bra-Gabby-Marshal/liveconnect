import type { Metadata, Viewport } from "next";
import "./globals.css";

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
      </head>
      <body>{children}</body>
    </html>
  );
}
