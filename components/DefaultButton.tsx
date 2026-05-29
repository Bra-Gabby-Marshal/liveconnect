"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

/*
 * Ports the old `.default-btn` (+ `.default-btn--ghost`) theme button, including
 * its `::before` left/right wipe animation, as pure Tailwind utilities.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */

const base =
  "relative inline-block overflow-hidden z-[1] text-white px-[25px] rounded-none " +
  "text-[10px] font-bold uppercase tracking-[2px] cursor-pointer " +
  "transition-colors duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-navy " +
  "before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10 " +
  "before:origin-right before:scale-x-0 before:transition-transform before:duration-[400ms] " +
  "before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:origin-left hover:before:scale-x-100";

const variants = {
  solid: "bg-royal leading-[45px]",
  ghost: "bg-transparent border-2 border-white leading-[41px]",
} as const;

type CommonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  "data-scroll"?: boolean;
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export default function DefaultButton(props: AnchorProps | ButtonProps) {
  const { children, variant = "solid", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
