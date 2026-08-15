"use client";

import React from "react";

interface LogoProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function LogoIcon({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "w-7 h-7 rounded-lg text-xs",
    md: "w-9 h-9 rounded-xl text-sm",
    lg: "w-11 h-11 rounded-2xl text-base",
  };

  const iconDimension = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  const dim = iconDimension[size];

  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-b from-zinc-800/90 to-zinc-950/90 border border-emerald-500/30 shadow-[0_0_15px_rgba(52,211,153,0.15)] group-hover:border-emerald-400/60 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.35)] transition-all duration-300 ${sizeClasses[size]} ${className}`}
    >
      {/* Subtle top-left light accent */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
      
      {/* Modern stylized code / monogram symbol */}
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-emerald-400 group-hover:scale-105 transition-transform duration-300"
      >
        <path
          d="M7 19L12 4L17 19"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 14.2H14.8"
          stroke="#34d399"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="12" cy="7.5" r="1.5" fill="#34d399" className="animate-pulse" />
      </svg>
    </div>
  );
}

export function Logo({
  className = "",
  iconSize = "md",
  showTagline = false,
}: LogoProps) {
  const textClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg sm:text-xl",
  };

  return (
    <div className={`group flex items-center gap-3 select-none ${className}`}>
      <LogoIcon size={iconSize} />
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight text-white flex items-center gap-1 ${textClasses[iconSize]}`}>
          <span>Akash</span>
          <span className="text-zinc-300 font-semibold">Agrahari</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium font-mono -mt-0.5">
            Full-Stack & WP Developer
          </span>
        )}
      </div>
    </div>
  );
}
