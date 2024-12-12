import React from 'react';

interface DeveloperIllustrationProps {
  className?: string;
}

const DeveloperIllustration: React.FC<DeveloperIllustrationProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        {/* Developer sitting at desk */}
        <path
          d="M400 300C400 355.228 355.228 400 300 400C244.772 400 200 355.228 200 300C200 244.772 244.772 200 300 200C355.228 200 400 244.772 400 300Z"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <path
          d="M300 380C344.183 380 380 344.183 380 300C380 255.817 344.183 220 300 220C255.817 220 220 255.817 220 300C220 344.183 255.817 380 300 380Z"
          stroke="currentColor"
          strokeWidth="4"
        />
        {/* Monitor */}
        <rect
          x="250"
          y="260"
          width="100"
          height="80"
          rx="4"
          stroke="currentColor"
          strokeWidth="4"
        />
        {/* Screen content */}
        <path
          d="M265 280H335M265 300H305"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Desk */}
        <path
          d="M200 350H400"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Coffee cup */}
        <circle
          cx="360"
          cy="330"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        {/* Steam */}
        <path
          d="M355 315C355 315 360 310 365 315"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Decorative circles */}
        <circle
          cx="240"
          cy="240"
          r="5"
          fill="currentColor"
        />
        <circle
          cx="360"
          cy="240"
          r="5"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="800" height="600" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DeveloperIllustration;