import React from 'react';

export const PlumbGuardLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width="80" 
        height="80" 
        viewBox="0 0 200 200" 
        className="h-20 w-auto object-contain rounded-lg shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield Background */}
        <defs>
          <linearGradient id="plumberShieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Main Shield Shape */}
        <path
          d="M100 20 L170 45 L170 100 Q170 150 100 180 Q30 150 30 100 L30 45 Z"
          fill="url(#plumberShieldGradient)"
          stroke="#f59e0b"
          strokeWidth="4"
        />
        
        {/* Inner Shield Detail */}
        <path
          d="M100 35 L155 55 L155 100 Q155 140 100 165 Q45 140 45 100 L45 55 Z"
          fill="#1e40af"
          opacity="0.5"
        />
        
        {/* Wrench Icon */}
        <g transform="translate(100, 100)">
          {/* Wrench handle */}
          <rect
            x="-6"
            y="-35"
            width="12"
            height="50"
            fill="#f59e0b"
            rx="2"
          />
          {/* Wrench head - open end */}
          <path
            d="M -15 -35 L -15 -50 L -6 -50 L -6 -35 Z"
            fill="#f59e0b"
          />
          <path
            d="M 6 -35 L 6 -50 L 15 -50 L 15 -35 Z"
            fill="#f59e0b"
          />
          {/* Wrench adjustment hole */}
          <circle
            cx="0"
            cy="-10"
            r="4"
            fill="#1e3a8a"
          />
        </g>
      </svg>
      <div className="flex flex-col">
        <span className="font-heading font-bold text-xl leading-none text-plumber-secondary tracking-tight">
          Plumb
        </span>
        <span className="font-heading font-bold text-xl leading-none text-plumber-primary tracking-tight">
          Guard
        </span>
      </div>
    </div>
  );
};
