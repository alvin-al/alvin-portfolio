"use client";
import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";

const SplitTextLine = ({ children, className, index }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current.children;
    const delayTime = index * 0.05;

    gsap.fromTo(
      line,
      {
        y: 200,
        opacity: 0,
      },
      {
        delay: delayTime, // Apply dynamic delay
        opacity: 1,
        y: 0,
        duration: 2,
      }
    );
  }, [index]);

  return (
    <div className={`flex overflow-hidden`} ref={lineRef}>
      <span className={`${className}`}>{children}</span>
    </div>
  );
};

export default SplitTextLine;
