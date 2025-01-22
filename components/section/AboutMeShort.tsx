import React from "react";
import TechStackIcon from "../element/TechStackIcon";

const AboutMeShort = () => {
  return (
    <div
      className='flex flex-col lg:flex-row w-full gap-8 scroll-mt-48'
      id='about'
    >
      <div className='text-lg font-medium text-gray-500 lg:w-1/5 xl:w-1/5'>
        About me
      </div>
      <div className='lg:w-4/5 xl:w-3/5 flex flex-col gap-12'>
        <p className='leading-relaxed text-2xl lg:leading-normal lg:text-3xl font-medium text-gray-800'>
          Hi, Im Alvin, a passionate web developer from Bogor, Indonesia. Im
          currently pursuing a degree in Information Systems at the Open
          University. <br />
          <br /> My interests span across design, technology, and web
          development, and Im always eager to learn and explore new things.
        </p>
        <TechStackIcon />
      </div>
      <div className='hidden xl:flex lg:w-1/5'></div>
    </div>
  );
};

export default AboutMeShort;
