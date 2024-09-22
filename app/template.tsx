"use client";
import { animatePageIn } from "@/utils/animation";
import React, { useEffect, useRef } from "react";

interface templateProps {
  children: React.ReactNode;
}

const Template = ({ children }: templateProps) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className='overflow-y-hidden'>
      <div
        id='banner-1'
        className='h-screen bg-white z-10 fixed top-0 left-0 w-1/2 overflow-hidden'
      />
      <div
        id='banner-2'
        className='h-screen bg-white z-10 fixed top-0 left-1/2 w-1/2 overflow-hidden'
      />
      {children}
    </div>
  );
};

export default Template;
