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

  const dots = Array.from({ length: 4 });

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1d21]"
        >
          <div className="relative w-20 h-20">
            {/* Top dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`top-${index}`}
                className="absolute w-2.5 h-1.5 bg-blue-500"
                style={{
                  left: '50%',
                  top: 0,
                  transform: `translateX(${(index - 1.5) * 10}px)`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "circOut"
                }}
              />
            ))}

            {/* Bottom dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`bottom-${index}`}
                className="absolute w-2.5 h-1.5 bg-blue-500"
                style={{
                  left: '50%',
                  bottom: 0,
                  transform: `translateX(${(index - 1.5) * 10}px)`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: (index * 0.1) + 0.4,
                  ease: "circOut"
                }}
              />
            ))}

            {/* Left dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`left-${index}`}
                className="absolute w-1.5 h-2.5 bg-blue-500"
                style={{
                  left: 0,
                  top: '50%',
                  transform: `translateY(${(index - 1.5) * 10}px)`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: (index * 0.1) + 0.2,
                  ease: "circOut"
                }}
              />
            ))}

            {/* Right dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`right-${index}`}
                className="absolute w-1.5 h-2.5 bg-blue-500"
                style={{
                  right: 0,
                  top: '50%',
                  transform: `translateY(${(index - 1.5) * 10}px)`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: (index * 0.1) + 0.6,
                  ease: "circOut"
                }}
              />
            ))}
            
            {/* "S" Logo */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl font-bold text-blue-500 font-mono">S</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
