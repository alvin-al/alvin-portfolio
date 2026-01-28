"use client";

import { useEffect, useState, forwardRef } from "react";
import { motion } from "motion/react";

const Preloader = forwardRef<HTMLDivElement, { onComplete: () => void }>(
  ({ onComplete }, ref) => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });

      // Simulate loading time
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);

      return () => clearTimeout(timer);
    }, [onComplete]);

    return (
      <motion.div
        ref={ref}
        variants={container}
        initial='initial'
        exit='exit'
        className='fixed inset-0 z-[9999] flex w-full'
        style={{ height: "100vh" }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={column}
            className='relative h-full flex-1 border-r border-[#333]'
            style={{ backgroundColor: "#0f0f0f" }}
          />
        ))}
      </motion.div>
    );
  }
);

Preloader.displayName = "Preloader";

export default Preloader;

const container = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const column = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
} as any;
