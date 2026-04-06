"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export default function ImageZoom({ src, alt, className, imageClassName = "object-cover", priority }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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

  if (!src || hasError) {
    return (
      <div 
        className={`relative w-full bg-gray-200 overflow-hidden rounded-xl ${className || ""}`}
        style={{ aspectRatio: "16 / 9" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <>
      <div 
        className={`relative cursor-zoom-in ${className} overflow-hidden`} 
        onClick={() => setIsOpen(true)}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className={`${imageClassName} transition-transform duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
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
