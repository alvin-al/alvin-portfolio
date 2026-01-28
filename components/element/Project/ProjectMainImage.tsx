import React from "react";
import ImageZoom from "@/components/ui/ImageZoom";
// import ViewCursor from "../ViewCursor";
import { motion } from "motion/react";

interface ProjectMainImageProps {
  src: string;
  title: string;
}

const ProjectMainImage = ({ src, title }: ProjectMainImageProps) => {
  if (!src) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      className='w-full'
    >
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl">
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
