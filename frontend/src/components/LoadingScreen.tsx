'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Create an array of 4 dots for each side
  const dots = Array.from({ length: 4 });

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1d21]"
        >
          <div className="relative w-16 h-16">
            {/* Top dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`top-${index}`}
                className="absolute w-1 h-1 bg-[#00ffff]"
                style={{
                  left: '50%',
                  top: 0,
                  transform: `translateX(${(index - 1.5) * 8}px)`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "linear"
                }}
              />
            ))}

            {/* Bottom dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`bottom-${index}`}
                className="absolute w-1 h-1 bg-[#00ffff]"
                style={{
                  left: '50%',
                  bottom: 0,
                  transform: `translateX(${(index - 1.5) * 8}px)`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "linear"
                }}
              />
            ))}

            {/* Left dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`left-${index}`}
                className="absolute w-1 h-1 bg-[#00ffff]"
                style={{
                  left: 0,
                  top: '50%',
                  transform: `translateY(${(index - 1.5) * 8}px)`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "linear"
                }}
              />
            ))}

            {/* Right dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`right-${index}`}
                className="absolute w-1 h-1 bg-[#00ffff]"
                style={{
                  right: 0,
                  top: '50%',
                  transform: `translateY(${(index - 1.5) * 8}px)`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "linear"
                }}
              />
            ))}
            
            {/* "n" Logo */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl font-bold text-[#00ffff] font-mono lowercase">n</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
