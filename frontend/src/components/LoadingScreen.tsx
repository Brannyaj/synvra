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

  // Create arrays for each side
  const positions = [
    // Top dots (0-3)
    ...Array.from({ length: 4 }).map((_, i) => ({ 
      left: '50%', 
      top: 0,
      transform: `translateX(${(i - 1.5) * 10}px)`,
      delay: i * 0.1
    })),
    // Right dots (4-7)
    ...Array.from({ length: 4 }).map((_, i) => ({ 
      right: 0,
      top: '50%',
      transform: `translateY(${(i - 1.5) * 10}px)`,
      delay: (i + 4) * 0.1
    })),
    // Bottom dots (8-11)
    ...Array.from({ length: 4 }).map((_, i) => ({ 
      left: '50%',
      bottom: 0,
      transform: `translateX(${(1.5 - i) * 10}px)`,
      delay: (i + 8) * 0.1
    })),
    // Left dots (12-15)
    ...Array.from({ length: 4 }).map((_, i) => ({ 
      left: 0,
      top: '50%',
      transform: `translateY(${(1.5 - i) * 10}px)`,
      delay: (i + 12) * 0.1
    }))
  ];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1d21]"
        >
          <div className="relative w-20 h-20">
            {positions.map((pos, index) => (
              <motion.div
                key={index}
                className={`absolute ${index >= 4 && index < 12 ? 'w-1.5 h-2.5' : 'w-2.5 h-1.5'} bg-blue-500`}
                style={pos}
                animate={{
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{
                  duration: 1.6,
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
              <span className="text-2xl font-bold text-blue-500 font-mono">S</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
