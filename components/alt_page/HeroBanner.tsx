import React from "react";
import TechStackIcon from "../element/TechStackIcon";
import RoundedButton from "../element/RoundedButton";

const HeroBanner = () => {
  return (
    <div className='pt-24 md:pt-4 lg:pt-0 h-screen justify-center flex flex-col gap-16 2xl:gap-24'>
      {/* title */}
      <div className='flex flex-col gap-8'>
        <p className='text-5xl xl:text-[60px] w-full xl:w-4/5 leading-snug font-medium'>
          Clean, minimalist. <br />
          Sometimes, simplicity is the most useful and effective tool.
        </p>
        <p className='text-lg font-medium'>Alvin Al - Web Developer</p>
        <TechStackIcon />
      </div>
      <div>
        <RoundedButton>Contact me</RoundedButton>
      </div>
    </div>
  );
};

export default HeroBanner;
