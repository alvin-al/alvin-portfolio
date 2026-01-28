"use client";
import React from "react";
import ProjectMainImage from "../Project/ProjectMainImage";
import { motion } from "motion/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import SplitTextUp from "@/components/ui/SplitTextUp";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface BlogHeadProps {
  title: string;
  date: string;
  imageUrl?: string;
  imageAlt?: string;
}

const BlogHead = ({ title, date, imageUrl, imageAlt }: BlogHeadProps) => {
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
            <ProjectMainImage src={imageUrl} title={imageAlt || title} />
          </div>
       )}

      {/* Metadata Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 pt-0'
      >
        {/* Date */}
        <div className="flex flex-col gap-2 col-span-1">
           <span className="text-gray-400 uppercase text-sm font-semibold tracking-wider">Date</span>
           <span className="text-gray-900 text-lg font-medium">{date || "N/A"}</span>
        </div>
      </motion.div>

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

export default BlogHead;
