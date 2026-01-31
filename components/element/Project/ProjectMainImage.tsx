import React from "react";
import ImageZoom from "@/components/ui/ImageZoom";
// import ViewCursor from "../ViewCursor";
import { motion } from "motion/react";

interface ProjectMainImageProps {
  src: string;
  title: string;
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
}

const ProjectMainImage = ({ src, title, className, delay = 0.2, width, height }: ProjectMainImageProps) => {
  if (!src) return null;
  
  const aspectRatio = width && height ? `${width} / ${height}` : "16 / 9";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: delay, duration: 1, ease: "easeOut" }}
      className='w-full'
    >
      <div 
        className={`relative w-full overflow-hidden rounded-xl ${className || ""}`}
        style={{ aspectRatio: aspectRatio }}
      >
        <ImageZoom
          src={src}
          alt={title}
          className="w-full h-full"
          imageClassName="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
};

export default ProjectMainImage;
