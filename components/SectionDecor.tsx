"use client";

import type { CSSProperties } from "react";

/**
 * Decorative background "artifacts" for section layouts.
 *
 * Renders a tasteful, brand-themed decoration layer behind a section's content:
 * soft floating glow orbs, a faint dot-grid, and a slowly rotating outline ring.
 * Purely ornamental (aria-hidden, pointer-events-none) and motion-safe — all
 * drift/spin honours `prefers-reduced-motion`.
 *
 * Usage: make the section `relative overflow-hidden`, drop <SectionDecor /> as
 * the first child, and give the content wrapper `relative z-[1]` so it sits on
 * top of the decoration.
 */

type Orb = {
  /** Position + size utilities (e.g. "-top-24 -left-20 w-[380px] h-[380px]"). */
  pos: string;
  /** Glow colour (rgba so opacity is baked in). */
  color: string;
  /** Float animation utility. */
  anim: "animate-lc-float-a" | "animate-lc-float-b";
};

type DecorConfig = {
  orbs: Orb[];
  /** Position utilities for the outline ring, or omit to hide it. */
  ring?: string;
  /** Faint dot-grid overlay. */
  grid?: boolean;
};

export type DecorVariant =
  | "services"
  | "about"
  | "stats"
  | "portfolio"
  | "platforms"
  | "contact";

const ROYAL = "rgba(2,105,187,0.22)";
const ROYAL_SOFT = "rgba(2,105,187,0.16)";
const CYAN = "rgba(34,211,238,0.14)";

const CONFIG: Record<DecorVariant, DecorConfig> = {
  services: {
    grid: true,
    ring: "top-[14%] right-[7%] w-[260px] h-[260px]",
    orbs: [
      { pos: "-top-24 -left-24 w-[400px] h-[400px]", color: ROYAL, anim: "animate-lc-float-a" },
      { pos: "-bottom-32 -right-16 w-[440px] h-[440px]", color: CYAN, anim: "animate-lc-float-b" },
    ],
  },
  about: {
    grid: true,
    orbs: [
      { pos: "top-[-140px] right-[-80px] w-[420px] h-[420px]", color: ROYAL_SOFT, anim: "animate-lc-float-b" },
      { pos: "bottom-[-120px] left-[-100px] w-[360px] h-[360px]", color: CYAN, anim: "animate-lc-float-a" },
    ],
  },
  stats: {
    ring: "bottom-[-30%] left-[6%] w-[300px] h-[300px]",
    orbs: [
      { pos: "-top-24 left-[20%] w-[360px] h-[360px]", color: CYAN, anim: "animate-lc-float-a" },
    ],
  },
  portfolio: {
    grid: true,
    ring: "bottom-[12%] left-[8%] w-[240px] h-[240px]",
    orbs: [
      { pos: "-top-28 right-[-60px] w-[420px] h-[420px]", color: ROYAL, anim: "animate-lc-float-b" },
      { pos: "bottom-[-140px] left-[-80px] w-[400px] h-[400px]", color: CYAN, anim: "animate-lc-float-a" },
    ],
  },
  platforms: {
    grid: true,
    orbs: [
      { pos: "top-[-120px] left-[-90px] w-[380px] h-[380px]", color: CYAN, anim: "animate-lc-float-a" },
      { pos: "bottom-[-130px] right-[-70px] w-[420px] h-[420px]", color: ROYAL, anim: "animate-lc-float-b" },
    ],
  },
  contact: {
    grid: true,
    ring: "top-[10%] left-[5%] w-[280px] h-[280px]",
    orbs: [
      { pos: "-bottom-32 -right-24 w-[460px] h-[460px]", color: ROYAL, anim: "animate-lc-float-b" },
      { pos: "top-[-120px] right-[18%] w-[340px] h-[340px]", color: CYAN, anim: "animate-lc-float-a" },
    ],
  },
};

const dotGridStyle: CSSProperties = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 72%)",
  maskImage: "radial-gradient(ellipse at center, black 0%, transparent 72%)",
};

export default function SectionDecor({ variant }: { variant: DecorVariant }) {
  const { orbs, ring, grid } = CONFIG[variant];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {grid && <div className="absolute inset-0 opacity-70" style={dotGridStyle} />}

      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[120px] ${orb.pos} ${orb.anim} motion-reduce:animate-none`}
          style={{ backgroundColor: orb.color }}
        />
      ))}

      {ring && (
        <svg
          className={`absolute ${ring} text-white/[0.05] animate-lc-spin-slow motion-reduce:animate-none`}
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="42" stroke="currentColor" strokeWidth="1" />
        </svg>
      )}
    </div>
  );
}
