import React, { useEffect, useRef, useState } from "react";

const ViewCursor = ({ children }: { children: React.ReactNode }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const element = elementRef.current;
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className='relative w-fit h-fit hide-cursor'>
      {children}
      {visible && (
        <div
          className='fixed flex items-center justify-center text-white font-semibold text-sm '
          style={{
            left: cursorPos.x - 15,
            top: cursorPos.y - 15,
            width: 80,
            height: 80,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderRadius: "50%",
            position: "fixed",
            transform: "translate(-50%, -50%)",
            transition: "0.1s",
          }}
        >
          View
        </div>
      )}
    </div>
  );
};

export default ViewCursor;
