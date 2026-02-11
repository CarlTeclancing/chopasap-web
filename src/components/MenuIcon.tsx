import React from 'react';

interface MenuIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const MenuIcon: React.FC<MenuIconProps> = ({
  size = 24,
  color = "#FFA500",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top line */}
      <line
        x1="2"
        y1="5"
        x2="18"
        y2="5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Middle line */}
      <line
        x1="2"
        y1="12"
        x2="18"
        y2="12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Bottom line */}
      <line
        x1="2"
        y1="19"
        x2="18"
        y2="19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Decorative square on the right */}
      <rect x="20" y="4" width="2" height="16" fill={color} />
    </svg>
  );
};
