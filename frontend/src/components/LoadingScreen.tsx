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

  // Create arrays for the + shape
  const positions = [
    // Top dot
    { 
      left: '50%', 
      top: '-8px',
      transform: 'translateX(-50%)',
      delay: 0
    },
    // Right dot
    { 
      right: '-8px',
      top: '50%',
      transform: 'translateY(-50%)',
      delay: 0.1
    },
    // Bottom dot
    { 
      left: '50%',
      bottom: '-8px',
      transform: 'translateX(-50%)',
      delay: 0.2
    },
    // Left dot
    { 
      left: '-8px',
      top: '50%',
      transform: 'translateY(-50%)',
      delay: 0.3
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
          <div className="relative w-8 h-8">
            {positions.map((pos, index) => (
              <motion.div
                key={index}
                className={`absolute ${index % 2 === 0 ? 'w-2.5 h-1.5' : 'w-1.5 h-2.5'} bg-blue-500`}
                style={pos}
                animate={{
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: pos.delay,
                  ease: "linear"
                }}
              />
            ))}
            
            {/* "S" Logo */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 0.8 }}
            >
              <span className="text-lg font-bold text-blue-500 font-mono">S</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
