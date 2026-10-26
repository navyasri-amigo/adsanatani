
import React from 'react';

type LogoProps = {
  className?: string;
};

export function Logo({ className = '' }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{
        transform: 'translateY(-20px)',
      }}
    >
      <img
        src="/logo22.png"
        alt="AdSanatani"
        style={{
          width: '220px',
          height: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </span>
  );
}
