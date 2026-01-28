"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string; // Class for the wrapper div
  imageClassName?: string; // Class for the Next.js Image component
  priority?: boolean;
}

export default function ImageZoom({ src, alt, className, imageClassName = "object-cover", priority }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
        document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div 
        className={`relative cursor-zoom-in ${className} overflow-hidden`} 
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`${imageClassName} transition-transform duration-500`}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-[90vw] max-h-[90vh]"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </motion.div>
            
             <button 
                className="absolute top-4 right-4 z-[101] text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
