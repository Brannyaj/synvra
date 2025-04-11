'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
            className="relative w-24 h-24"
          >
            {/* Outer rotating circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity
              }}
              className="absolute inset-0"
            >
              <div className="w-full h-full rounded-full border-4 border-blue-500/30 border-t-blue-500" />
            </motion.div>

            {/* "S" Logo */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-4xl font-bold text-blue-500">S</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
