"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLoading } from "../context/LoadingContext";

const BlogHeader = () => {
  const { isLoading } = useLoading();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={!isLoading ? "visible" : "hidden"}
      className="mt-12 md:pt-4 lg:pt-0 lg:h-screen lg:justify-center flex flex-col gap-16 2xl:gap-24"
    >
      <div className="flex flex-col gap-8">
        <motion.h1
          variants={itemVariants}
          className="text-5xl xl:text-[60px] w-full xl:w-4/5 leading-snug font-medium"
        >
          Blog
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg font-medium text-gray-600 xl:w-3/4"
        >
          Sharing thoughts, insights, and experiences about web development,
          design, and technology.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default BlogHeader;