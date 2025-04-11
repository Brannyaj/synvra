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
    }, 5000); // 5 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const segments = [
    // Top
    { transform: 'translate(-50%, -100%) rotate(0deg)', top: '0', left: '50%' },
    // Top Right
    { transform: 'translate(50%, -50%) rotate(45deg)', top: '0', right: '0' },
    // Right
    { transform: 'translate(100%, -50%) rotate(90deg)', top: '50%', right: '0' },
    // Bottom Right
    { transform: 'translate(50%, 50%) rotate(135deg)', bottom: '0', right: '0' },
    // Bottom
    { transform: 'translate(-50%, 100%) rotate(180deg)', bottom: '0', left: '50%' },
    // Bottom Left
    { transform: 'translate(-50%, 50%) rotate(225deg)', bottom: '0', left: '0' },
    // Left
    { transform: 'translate(-100%, -50%) rotate(270deg)', top: '50%', left: '0' },
    // Top Left
    { transform: 'translate(-50%, -50%) rotate(315deg)', top: '0', left: '0' }
  ];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1d21]"
        >
          <div className="relative w-24 h-24">
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                className="absolute w-4 h-1.5 bg-blue-500 origin-center"
                style={segment}
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
            
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-3xl font-bold text-white">S</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
