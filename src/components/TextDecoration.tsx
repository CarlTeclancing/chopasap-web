import React from 'react';

interface TextDecorationProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const TextDecoration: React.FC<TextDecorationProps> = ({
  width = 60,
  height = 8,
  color = "#FFA500",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top thick line */}
      <rect x="0" y="0" width={width} height="3" fill={color} />
      {/* Gap */}
      {/* Bottom thin line with slight offset */}
      <rect x="2" y="5" width={width - 4} height="2" fill={color} />
    </svg>
  );
};
