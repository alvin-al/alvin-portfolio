"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface SplitTextLineProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

const SplitTextLine: React.FC<SplitTextLineProps> = ({
  children,
  className = "",
  index = 0,
}) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      const line = Array.from(lineRef.current.children);
      const delayTime = (index || 0) * 0.05;

      gsap.fromTo(
        line,
        {
          y: 200,
          opacity: 0,
        },
        {
          delay: delayTime,
          opacity: 1,
          y: 0,
          duration: 2,
        }
      );
    }
  }, [index]);

  return (
    <div className={`flex overflow-hidden`} ref={lineRef}>
      <span className={`${className}`}>{children}</span>
    </div>
  );
};

export default SplitTextLine;
