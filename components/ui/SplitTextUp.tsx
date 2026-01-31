import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SplitTextUpProps {
  children: string;
  className?: string;
}

const SplitTextUp: React.FC<SplitTextUpProps> = ({
  children,
  className = "",
}: SplitTextUpProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const letters = Array.from(textRef.current.children) as HTMLSpanElement[];

      gsap.fromTo(
        letters,
        { opacity: 0, y: 20 }, // Start state
        {
          delay: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.04, // Interval between each letter
          ease: "back.out(1.7)", // Easing
        }
      );
    }
  }, [children]); // Run effect when children changes

  return (
    <div
      ref={textRef}
      className={`${className} flex overflow-hidden flex-wrap`}
    >
      {children.split(" ").map((word, index) => (
        <span key={index} className='inline-block' style={{ marginRight: '0.25em' }}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default SplitTextUp;
