"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { TransitionLink } from "@/components/layout/PageTransition";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  magnetic?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  iconPosition = "right",
  magnetic = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] group cursor-pointer select-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-xs sm:text-sm px-6 py-3 gap-2",
    lg: "text-sm sm:text-base px-7 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#F97316] text-[#0A0A0A] hover:bg-[#EA580C] hover:shadow-lg hover:shadow-[#F97316]/25 hover:-translate-y-0.5",
    secondary:
      "bg-[#161618] text-[#F5F5F2] border border-[#27272A] hover:bg-[#202024] hover:border-[#3F3F46] hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[#F5F5F2] border border-[#333338] hover:border-[#F97316] hover:text-[#F97316] hover:bg-[#F97316]/5 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]",
    ghost:
      "bg-transparent text-[#A1A1AA] hover:text-[#F5F5F2] hover:bg-[#161618]",
  };

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);
  const style = magnetic
    ? { transform: `translate3d(${position.x}px, ${position.y}px, 0)` }
    : undefined;

  if (href) {
    return (
      <TransitionLink
        href={href}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={classes}
      >
        {content}
      </TransitionLink>
    );
  }

  return (
    <button
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}
