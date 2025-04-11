'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  // Create array for the 8 segments in a star pattern
  const positions = [
    // Top
    { 
      left: '50%',
      top: '-8px',
      transform: 'translateX(-50%)',
      width: '2px',
      height: '8px',
      rotate: '0deg'
    },
    // Top Right (angled)
    {
      right: '-2px',
      top: '2px',
      width: '8px',
      height: '2px',
      rotate: '-45deg',
      transformOrigin: '0 50%'
    },
    // Right
    {
      right: '-8px',
      top: '50%',
      width: '8px',
      height: '2px',
      transform: 'translateY(-50%)',
      rotate: '0deg'
    },
    // Bottom Right (angled)
    {
      right: '-2px',
      bottom: '2px',
      width: '8px',
      height: '2px',
      rotate: '45deg',
      transformOrigin: '0 50%'
    },
    // Bottom
    {
      left: '50%',
      bottom: '-8px',
      transform: 'translateX(-50%)',
      width: '2px',
      height: '8px',
      rotate: '0deg'
    },
    // Bottom Left (angled)
    {
      left: '-2px',
      bottom: '2px',
      width: '8px',
      height: '2px',
      rotate: '-45deg',
      transformOrigin: '100% 50%'
    },
    // Left
    {
      left: '-8px',
      top: '50%',
      width: '8px',
      height: '2px',
      transform: 'translateY(-50%)',
      rotate: '0deg'
    },
    // Top Left (angled)
    {
      left: '-2px',
      top: '2px',
      width: '8px',
      height: '2px',
      rotate: '45deg',
      transformOrigin: '100% 50%'
    }
  ];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1d21]"
        >
          <div className="relative w-16 h-16">
            {positions.map((pos, index) => (
              <motion.div
                key={index}
                className="absolute bg-[#00ffff]"
                style={{
                  ...pos,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "linear"
                }}
              />
            ))}
            
            {/* "S" Logo */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-3xl font-bold text-white font-mono">S</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
