'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Create an array of 8 dots positioned around the center
  const dots = Array.from({ length: 8 });

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1d21]"
        >
          <div className="relative w-16 h-16">
            {/* Dots around the letter */}
            {dots.map((_, index) => {
              const angle = (index * 360) / dots.length;
              const delay = index * 0.1;
              return (
                <motion.div
                  key={index}
                  className="absolute w-1.5 h-1.5 bg-blue-400"
                  style={{
                    borderRadius: '50%',
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${angle}deg) translate(20px, -50%)`,
                    transformOrigin: '0 50%',
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: delay,
                    ease: "linear"
                  }}
                />
              );
            })}
            
            {/* "S" Logo */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-3xl font-bold text-blue-400">S</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
