  "use client";
import React from "react";
import RoundedItem from "@/components/element/RoundedItem";
import { Syne, Plus_Jakarta_Sans } from "next/font/google"; // Import both fonts
import SplitTextUp from "@/components/ui/SplitTextUp"; // Import Animation
import { motion } from "motion/react";
import ProjectMainImage from "./ProjectMainImage";
import Entrance from "@/components/ui/Entrance";

const syne = Syne({
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

interface ProjectHeadProps {
  title: string;
  description: string;
  date?: string;
  techStack?: string[];
  websiteLink?: string; 
  imageUrl?: string;
  imageAlt?: string;
  width?: number;
  height?: number;
}

const ProjectHead = ({ title, description, date, techStack, websiteLink, imageUrl, imageAlt, width, height }: ProjectHeadProps) => {
  return (
    <div className='flex flex-col mt-0 lg:mt-4'>
      {/* Title Section */}
      <div className='flex flex-col gap-6 mb-8'>
        <div className={`${plusJakarta.className} font-extrabold text-5xl md:text-7xl lg:text-8xl text-gray-900  mb break-normal py-auto`}>
           <SplitTextUp className="leading-tight">{title}</SplitTextUp>
        </div>
      </div>

       {/* Main Image */}
       {imageUrl && (
          <div className="mb-6 lg:mb-8">
            <ProjectMainImage 
              src={imageUrl} 
              title={imageAlt || title} 
              className="md:h-[85vh] w-full" 
              delay={2}
              width={width}
              height={height}
            />
          </div>
       )}

      {/* Metadata Grid */}
      <Entrance viewportMargin="0px 0px -20% 0px">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 pt-0'>
        {/* Description */}
        <div className="col-span-1 md:col-span-1 order-1 pt-0">
           <p className={`text-lg md:text-xl font-medium text-gray-900 leading-relaxed ${plusJakarta.className}`}>
             {description}
           </p>
        </div>

        <div className="flex flex-col gap-2 col-span-1 order-2">
           <span className="text-gray-400 uppercase text-sm font-semibold tracking-wider">Date</span>
           <span className="text-gray-900 text-lg font-medium">{date || "N/A"}</span>
        </div>
         
        <div className="flex flex-col gap-2 col-span-1 order-3">
           <span className="text-gray-400 uppercase text-sm font-semibold tracking-wider">Tech Stack</span>
           <div className='flex flex-wrap gap-2'>
            {techStack && techStack.length > 0 ? (
              techStack.map((tech) => (
                <RoundedItem key={tech}>{tech}</RoundedItem>
              ))
            ) : (
              <span>-</span>
            )}
          </div>
        </div>

        {websiteLink && (
          <div className="flex flex-col gap-2 items-start col-span-1 order-4">
            <span className="text-gray-400 uppercase text-sm font-semibold tracking-wider">Link</span>
            <a 
              href={websiteLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-900 border-b border-gray-900 pb-0.5 mt-0 hover:text-gray-600 hover:border-gray-600 transition-all font-medium text-lg leading-tight"
            >
              View Live Site
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
      </Entrance>

      {/* Divider */}
      <motion.div 
         initial={{ scaleX: 0 }}
         animate={{ scaleX: 1 }}
         transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
         className="w-full h-[1px] bg-gray-300 mt-12 mb-4 origin-left"
      />
    </div>
  );
};

export default ProjectHead;
