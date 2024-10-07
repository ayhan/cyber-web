import React from "react";

interface GradientBorderPolygonIconProps {
  sides?: number; // Kenar sayısı (altıgen, beşgen, vb.)
  size?: number;
  borderGradientStart?: string;
  borderGradientEnd?: string;
  fillGradientStart?: string;
  fillGradientEnd?: string;
  borderWidth?: number;
  className?: string;
}

export default function GradientBorderPolygonIcon({
  sides = 4,
  size = 30,
  borderGradientStart = "hsl(var(--primary))",
  borderGradientEnd = "hsl(var(--secondary))",
  fillGradientStart = "hsl(var(--primary))",
  fillGradientEnd = "hsl(var(--secondary))",
  borderWidth = 4,
  className = "",
}: GradientBorderPolygonIconProps) {
  const outerPoints = Array.from({ length: sides }, (_, i) => {
    const angle = (i * (360 / sides) - 90) * (Math.PI / 180);
    const x = size / 2 + (size / 2) * Math.cos(angle);
    const y = size / 2 + (size / 2) * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  const innerPoints = Array.from({ length: sides }, (_, i) => {
    const angle = (i * (360 / sides) - 90) * (Math.PI / 180);
    const x = size / 2 + (size / 2 - borderWidth) * Math.cos(angle);
    const y = size / 2 + (size / 2 - borderWidth) * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  const borderGradientId = `polygon-border-gradient-${Math.random().toString(
    36
  )}`;
  const fillGradientId = `polygon-fill-gradient-${Math.random().toString(36)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={borderGradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={borderGradientStart} />
          <stop offset="100%" stopColor={borderGradientEnd} />
        </linearGradient>
        <linearGradient id={fillGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={fillGradientStart} />
          <stop offset="100%" stopColor={fillGradientEnd} />
        </linearGradient>
      </defs>
      <polygon points={outerPoints} fill={`url(#${borderGradientId})`} />
      <polygon points={innerPoints} fill={`url(#${fillGradientId})`} />
    </svg>
  );
}
