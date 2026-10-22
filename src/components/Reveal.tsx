import React from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.3, delay, ease: easeOut }}>
      
      {children}
    </motion.div>);

}