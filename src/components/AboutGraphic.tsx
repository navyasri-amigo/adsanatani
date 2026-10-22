import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '../utils/motion';

const ARC_TOP = 'M80 200 C 140 70, 260 70, 320 200';
const ARC_BOTTOM = 'M320 200 C 260 330, 140 330, 80 200';

export function AboutGraphic() {
  const reduced = useReducedMotion();

  return (
    <svg viewBox="0 0 400 400" className="h-auto w-full max-w-[440px]" role="img" aria-label="Advertisers and publishers connected through AdSanatani">
      <motion.g
        style={{ originX: '200px', originY: '200px' }}
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}>
        
        <circle cx="200" cy="200" r="180" fill="none" stroke="#20201E" strokeOpacity="0.12" strokeDasharray="2 8" />
      </motion.g>
      <circle cx="200" cy="200" r="130" fill="none" stroke="#20201E" strokeOpacity="0.08" />

      {[ARC_TOP, ARC_BOTTOM].map((d, i) =>
      <motion.path
        key={d}
        id={i === 0 ? 'arc-top' : 'arc-bottom'}
        d={d}
        fill="none"
        stroke={i === 0 ? '#C65D36' : '#20201E'}
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 + i * 0.25, ease: easeOut }} />

      )}

      {!reduced &&
      <>
          <circle r="5" fill="#C65D36">
            <animateMotion dur="5s" repeatCount="indefinite" path={ARC_TOP} />
          </circle>
          <circle r="5" fill="#20201E">
            <animateMotion dur="5s" begin="2.5s" repeatCount="indefinite" path={ARC_BOTTOM} />
          </circle>
        </>
      }

      <motion.circle
        cx="200"
        cy="200"
        r="46"
        fill="#F4C542"
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: easeOut }}
        style={{ originX: '200px', originY: '200px' }} />
      
      <path d="M186 224 V202 a14 14 0 0 1 28 0 V224 h-9 V203 a5 5 0 0 0 -10 0 V224 Z" fill="#C65D36" />

      <g>
        <circle cx="80" cy="200" r="22" fill="#20201E" />
        <circle cx="320" cy="200" r="22" fill="#C65D36" />
        <text x="80" y="250" textAnchor="middle" className="fill-charcoal font-sans text-[13px] font-medium">Advertisers</text>
        <text x="320" y="250" textAnchor="middle" className="fill-charcoal font-sans text-[13px] font-medium">Publishers</text>
      </g>
    </svg>);

}