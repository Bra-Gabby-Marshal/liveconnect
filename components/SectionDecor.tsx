"use client";

import type { CSSProperties } from "react";

/**
 * Decorative background "artifacts" for section layouts.
 *
 * Renders a tasteful, brand-themed decoration layer behind a section's content.
 * The motifs lean into Live Connect's live-streaming / broadcast identity:
 *   - soft floating glow orbs with glowing cores (radial gradients);
 *   - a "signal" motif — concentric arcs that pulse outward from a corner like a
 *     transmitter emitting a broadcast;
 *   - drifting bokeh-style light particles (the lights of a live event);
 *   - a faint dot-grid and an optional hairline divider.
 *
 * Purely ornamental (aria-hidden, pointer-events-none) and motion-safe — all
 * drift / spin / pulse honours `prefers-reduced-motion`.
 *
 * Usage: make the section `relative overflow-hidden`, drop <SectionDecor /> as
 * the first child, and give the content wrapper `relative z-[1]` so it sits on
 * top of the decoration.
 */

type Orb = {
  /** Position + size utilities (e.g. "-top-24 -left-20 w-[380px] h-[380px]"). */
  pos: string;
  /** Glow colour (rgba so opacity is baked into the radial core). */
  color: string;
  /** Float animation utility. */
  anim: "animate-lc-float-a" | "animate-lc-float-b";
};

/** Where the broadcast "signal" emits from — anchored to a corner. */
type Signal = "tl" | "tr" | "bl" | "br";

type DecorConfig = {
  orbs: Orb[];
  /** Concentric outline ring (position + size utilities), or omit to hide. */
  ring?: string;
  /** Broadcast signal-emission motif anchored to a corner. */
  signal?: Signal;
  /** Faint dot-grid overlay. */
  grid?: boolean;
  /** Drifting light particles. */
  particles?: boolean;
  /** Thin gradient hairline along the top edge (section divider). */
  hairline?: boolean;
};

export type DecorVariant =
  | "services"
  | "about"
  | "stats"
  | "portfolio"
  | "platforms"
  | "contact"
  | "footer";

const ROYAL = "rgba(2,105,187,0.45)";
const ROYAL_SOFT = "rgba(2,105,187,0.34)";
const CYAN = "rgba(34,211,238,0.32)";

const CONFIG: Record<DecorVariant, DecorConfig> = {
  services: {
    grid: true,
    signal: "tr",
    particles: true,
    orbs: [
      { pos: "-top-24 -left-24 w-[400px] h-[400px]", color: ROYAL, anim: "animate-lc-float-a" },
      { pos: "-bottom-32 -right-16 w-[440px] h-[440px]", color: CYAN, anim: "animate-lc-float-b" },
    ],
  },
  about: {
    grid: true,
    hairline: true,
    ring: "bottom-[-20%] left-[4%] w-[300px] h-[300px]",
    orbs: [
      { pos: "top-[-140px] right-[-80px] w-[420px] h-[420px]", color: ROYAL_SOFT, anim: "animate-lc-float-b" },
      { pos: "bottom-[-120px] left-[-100px] w-[360px] h-[360px]", color: CYAN, anim: "animate-lc-float-a" },
    ],
  },
  stats: {
    signal: "br",
    orbs: [
      { pos: "-top-24 left-[18%] w-[360px] h-[360px]", color: CYAN, anim: "animate-lc-float-a" },
    ],
  },
  portfolio: {
    grid: true,
    hairline: true,
    particles: true,
    signal: "bl",
    orbs: [
      { pos: "-top-28 right-[-60px] w-[420px] h-[420px]", color: ROYAL, anim: "animate-lc-float-b" },
      { pos: "bottom-[-140px] left-[-80px] w-[400px] h-[400px]", color: CYAN, anim: "animate-lc-float-a" },
    ],
  },
  platforms: {
    grid: true,
    signal: "tl",
    particles: true,
    orbs: [
      { pos: "top-[-120px] left-[-90px] w-[380px] h-[380px]", color: CYAN, anim: "animate-lc-float-a" },
      { pos: "bottom-[-130px] right-[-70px] w-[420px] h-[420px]", color: ROYAL, anim: "animate-lc-float-b" },
    ],
  },
  contact: {
    grid: true,
    hairline: true,
    ring: "top-[8%] left-[4%] w-[280px] h-[280px]",
    orbs: [
      { pos: "-bottom-32 -right-24 w-[460px] h-[460px]", color: ROYAL, anim: "animate-lc-float-b" },
      { pos: "top-[-120px] right-[16%] w-[340px] h-[340px]", color: CYAN, anim: "animate-lc-float-a" },
    ],
  },
  footer: {
    grid: true,
    hairline: true,
    signal: "br",
    orbs: [
      { pos: "top-[-160px] left-[-90px] w-[380px] h-[380px]", color: ROYAL_SOFT, anim: "animate-lc-float-a" },
      { pos: "bottom-[-180px] right-[8%] w-[360px] h-[360px]", color: CYAN, anim: "animate-lc-float-b" },
    ],
  },
};

const dotGridStyle: CSSProperties = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 72%)",
  maskImage: "radial-gradient(ellipse at center, black 0%, transparent 72%)",
};

/** Corner anchoring for the signal motif (position + which corner the arcs hug). */
const SIGNAL_POS: Record<Signal, string> = {
  tl: "top-[-90px] left-[-90px]",
  tr: "top-[-90px] right-[-90px]",
  bl: "bottom-[-90px] left-[-90px]",
  br: "bottom-[-90px] right-[-90px]",
};

// Deterministic particle layout (no Math.random — avoids SSR hydration drift).
const PARTICLES = [
  { className: "left-[12%] top-[22%] w-1.5 h-1.5", delay: "0s" },
  { className: "left-[78%] top-[16%] w-1 h-1", delay: "1.4s" },
  { className: "left-[34%] top-[68%] w-1 h-1", delay: "2.6s" },
  { className: "left-[62%] top-[54%] w-1.5 h-1.5", delay: "0.8s" },
  { className: "left-[88%] top-[74%] w-1 h-1", delay: "3.4s" },
  { className: "left-[24%] top-[40%] w-1 h-1", delay: "4.2s" },
];

export default function SectionDecor({ variant }: { variant: DecorVariant }) {
  const { orbs, ring, signal, grid, particles, hairline } = CONFIG[variant];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {grid && <div className="absolute inset-0 opacity-70" style={dotGridStyle} />}

      {hairline && (
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.4),rgba(2,105,187,0.4),transparent)]" />
      )}

      {/* Glowing orbs — radial cores fall off softly for depth, not flat discs. */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[110px] ${orb.pos} ${orb.anim} motion-reduce:animate-none`}
          style={{ background: `radial-gradient(circle at center, ${orb.color} 0%, transparent 70%)` }}
        />
      ))}

      {/* Broadcast signal — concentric arcs emit outward from a corner. */}
      {signal && (
        <div className={`absolute ${SIGNAL_POS[signal]} w-[420px] h-[420px]`}>
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="absolute inset-0 rounded-full border border-[#22d3ee]/25 animate-lc-emit motion-reduce:animate-none motion-reduce:opacity-30"
              style={{ animationDelay: `${i * 1.5}s` }}
            />
          ))}
        </div>
      )}

      {/* Slowly rotating outline ring. */}
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

      {/* Drifting bokeh particles — the lights of a live event. */}
      {particles &&
        PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-white/70 shadow-[0_0_8px_2px_rgba(34,211,238,0.5)] animate-lc-twinkle motion-reduce:animate-none ${p.className}`}
            style={{ animationDelay: p.delay }}
          />
        ))}
    </div>
  );
}
