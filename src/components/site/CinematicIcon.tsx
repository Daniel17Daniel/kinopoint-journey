import React from "react";

/**
 * CinematicIcon — premium floating 3D icon wrapper.
 * Renders an image asset with an optional ambient glow ring,
 * subtle float animation, and hover lift effect.
 */

interface CinematicIconProps {
  src: string;
  alt?: string;
  /** Size in pixels for the image (default 96) */
  size?: number;
  /** Delay offset for float animation stagger (ms) */
  delay?: number;
  /** Color of the ambient glow ring: 'gold' | 'red' | 'none' */
  glow?: "gold" | "red" | "none";
  /** Float speed: 'normal' (6s) | 'slow' (9s) */
  speed?: "normal" | "slow";
  className?: string;
}


const GLOW_STYLES: Record<"gold" | "red" | "none", React.CSSProperties> = {
  gold: {
    background:
      "radial-gradient(ellipse at 50% 60%, hsl(36 60% 55% / 0.18) 0%, transparent 70%)",
    boxShadow:
      "0 0 0 1px hsl(36 60% 55% / 0.18), 0 0 32px -8px hsl(36 60% 55% / 0.3)",
  },
  red: {
    background:
      "radial-gradient(ellipse at 50% 60%, hsl(4 78% 52% / 0.15) 0%, transparent 70%)",
    boxShadow:
      "0 0 0 1px hsl(4 78% 52% / 0.18), 0 0 32px -8px hsl(4 78% 52% / 0.28)",
  },
  none: {},
};

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
  const glowStyle = GLOW_STYLES[glow];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size + 32, height: size + 32 }}
    >
      {/* Ambient glow ring behind the icon */}
      {glow !== "none" && (
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={glowStyle}
          aria-hidden
        />
      )}

      {/* The icon itself */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className={`relative select-none transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1 ${animClass} animate-shimmer`}
        style={{
          width: size,
          height: size,
          objectFit: "contain",
          animationDelay: `${delay}ms`,
          mixBlendMode: "screen",
          // Shimmer delay matches float delay
        }}
      />
    </div>
  );
};
