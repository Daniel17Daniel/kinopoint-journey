import React from "react";

/**
 * CinematicIcon — premium floating 3D icon wrapper.
 * Clean, isolated presentation without artificial glowing panels.
 */

interface CinematicIconProps {
  src: string;
  alt?: string;
  /** Size in pixels for the image (default 96) */
  size?: number;
  /** Delay offset for float animation stagger (ms) */
  delay?: number;
  /** Legacy prop, kept for compatibility but visual effect removed/reduced */
  glow?: "gold" | "red" | "none";
  /** Float speed: 'normal' (6s) | 'slow' (9s) */
  speed?: "normal" | "slow";
  className?: string;
}

export const CinematicIcon = ({
  src,
  alt = "",
  size = 96,
  delay = 0,
  glow = "gold",
  speed = "normal",
  className = "",
}: CinematicIconProps) => {
  const animClass =
    speed === "slow" ? "animate-float-slow" : "animate-float";
    
  // Soft glow using drop-shadow instead of an artificial ring
  const shadowClass = glow === "red" 
    ? "drop-shadow-[0_8px_16px_rgba(220,38,38,0.25)]" 
    : glow === "gold" 
      ? "drop-shadow-[0_8px_16px_rgba(212,175,55,0.25)]"
      : "drop-shadow-xl";

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className={`relative select-none transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1 ${animClass} ${shadowClass}`}
        style={{
          width: size,
          height: size,
          objectFit: "contain",
          animationDelay: `${delay}ms`,
        }}
      />
    </div>
  );
};
