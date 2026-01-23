import { SVGProps } from 'react';

interface PawIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  strokeColor?: string;
  size?: number;
}

export const PawIcon = ({ 
  fillColor = '#F6B17A', 
  strokeColor = '#1a3a52',
  size = 32,
  ...props 
}: PawIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Main pad (center bottom) */}
    <path
      d="M 60 100 Q 40 110, 35 95 Q 30 75, 45 65 Q 60 60, 75 65 Q 90 75, 85 95 Q 80 110, 60 100 Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinejoin="round"
    />
    
    {/* Top left toe */}
    <ellipse
      cx="25"
      cy="40"
      rx="13"
      ry="20"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinejoin="round"
      transform="rotate(-25 25 40)"
    />
    
    {/* Top middle-left toe */}
    <ellipse
      cx="45"
      cy="15"
      rx="14"
      ry="21"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinejoin="round"
      transform="rotate(-10 45 15)"
    />
    
    {/* Top middle-right toe */}
    <ellipse
      cx="75"
      cy="15"
      rx="14"
      ry="21"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinejoin="round"
      transform="rotate(10 75 15)"
    />
    
    {/* Top right toe */}
    <ellipse
      cx="95"
      cy="40"
      rx="13"
      ry="20"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinejoin="round"
      transform="rotate(25 95 40)"
    />
  </svg>
);
