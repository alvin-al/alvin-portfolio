import React from "react";

const AboutMeShort = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full gap-8'>
      <div className='text-lg font-medium text-gray-500 lg:w-1/5 xl:w-1/5'>
        About me
      </div>
      <div className='lg:w-4/5 xl:w-3/5'>
        <p className='leading-normal text-2xl lg:text-3xl font-medium text-gray-800'>
          Hi, Im Alvin, a passionate web developer from Bogor, Indonesia. Im
          currently pursuing a degree in Information Systems at the Open
          University. <br />
          <br /> My interests span across design, technology, and web
          development, and Im always eager to learn and explore new things.
        </p>
      </div>
      <div className='hidden xl:flex lg:w-1/5'></div>
    </div>
  );
};

export default AboutMeShort;
