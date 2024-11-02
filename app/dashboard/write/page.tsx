"use client";
import React from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";

const syne = Syne({ subsets: ["latin"] });

const MyEditor = dynamic(() => import("@/components/MyEditor"), {
  ssr: false, // Ini buat matiin server-side rendering
});

const Write: React.FC = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      {/* Header */}
      <div className='flex flex-row justify-between items-center mb-8'>
        <div className='w-1/5 bg-[#1A1A2E]'>
          <div className=' py-12 justify-center flex'>
            <Link href='/dashboard'>
              <p className={`${syne.className} text-3xl font-bold text-white`}>
                Dashboard
              </p>
            </Link>
          </div>
        </div>
        <div className='w-auto mr-8'>
          <Button className='bg-white'>Post</Button>
        </div>
      </div>
      {/* Content */}
      <div className='w-[70vw] self-center placeholder:border-gray-400'>
        <input
          type='text'
          className='bg-transparent h-24 text-5xl w-full text-white px-8 border-b-2 placeholder:border-gray-400  focus:outline-none'
          placeholder='Title'
        />
        <MyEditor />
      </div>
    </div>
  );
};

export default Write;
