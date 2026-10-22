
import React from 'react';

type LogoProps = {
  className?: string;
};

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/logo11.png"
        alt="AdSanatani"
        style={{
          width: '260px',
          height: '110px',
          maxWidth: 'none',
          objectFit: 'fill',
          display: 'block',
        }}
      />
    </span>
  );
}
