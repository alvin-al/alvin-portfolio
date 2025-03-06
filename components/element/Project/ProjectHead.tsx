import React from "react";
import RoundedItem from "@/components/element/RoundedItem";

const ArticleHead = () => {
  return (
    <div>
      <div className='flex flex-col my-12'>
        <div className='flex flex-col gap-2'>
          <p className='text-base font-medium text-gray-500'>January 2024</p>
          <p className='text-5xl xl:text-[60px] w-full xl:w-4/5 leading-snug font-semibold text-gray-900'>
            Web Showcase for Urbia Project
          </p>
          <p className='text-lg font-medium text-gray-900'>
            Urbia Studio - Yogyakarta
          </p>
        </div>
        <div className='mt-4 grid grid-flow-col gap-2 w-fit'>
          <RoundedItem>Tailwind</RoundedItem>
          <RoundedItem>NextJS</RoundedItem>
          <RoundedItem>Shadcn</RoundedItem>
          <RoundedItem>React</RoundedItem>
        </div>
      </div>
    </div>
  );
};

export default ArticleHead;
