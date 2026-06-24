import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Smooth handoff
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      id="app-loader"
      className="fixed inset-0 bg-zinc-950 z-50 flex flex-col items-center justify-center px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div className="text-center max-w-md">
        {/* Stylized Brand Icon */}
        <motion.div
          className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center rounded-full border border-amber-500/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Outer Rotating Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-amber-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner Core */}
          <div className="absolute inset-1.5 bg-zinc-900 rounded-full flex items-center justify-center shadow-inner">
            <span className="text-amber-500 text-3xl font-bold font-brand tracking-wider">OM</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-2xl md:text-3xl font-brand font-bold tracking-widest text-white mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          THE OM GYM
        </motion.h1>
        


        {/* Tagline */}
        <motion.p
          className="text-zinc-500 text-xs uppercase tracking-widest mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Transform Your Body, Transform Your Life
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-zinc-800/50">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-600 to-yellow-400 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Percentage */}
        <div className="mt-2 text-right">
          <span className="text-xs font-mono text-zinc-600">
            {progress}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
