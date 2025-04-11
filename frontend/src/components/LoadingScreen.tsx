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
          <div className="relative w-20 h-20">
            {/* Top dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`top-${index}`}
                className="absolute w-2.5 h-1.5 bg-[#00ffff]"
                style={{
                  left: '50%',
                  top: 0,
                  transform: `translateX(${(index - 1.5) * 10}px)`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Bottom dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`bottom-${index}`}
                className="absolute w-2.5 h-1.5 bg-[#00ffff]"
                style={{
                  left: '50%',
                  bottom: 0,
                  transform: `translateX(${(index - 1.5) * 10}px)`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Left dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`left-${index}`}
                className="absolute w-1.5 h-2.5 bg-[#00ffff]"
                style={{
                  left: 0,
                  top: '50%',
                  transform: `translateY(${(index - 1.5) * 10}px)`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Right dots */}
            {dots.map((_, index) => (
              <motion.div
                key={`right-${index}`}
                className="absolute w-1.5 h-2.5 bg-[#00ffff]"
                style={{
                  right: 0,
                  top: '50%',
                  transform: `translateY(${(index - 1.5) * 10}px)`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* "S" Logo */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl font-bold text-[#00ffff] font-mono">S</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
