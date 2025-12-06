import React from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

const TechStackIcon = () => {
  return (
    <div className='w-fit h-fit grid grid-flow-col grid-rows-2 md:grid-rows-1 gap-8 text-gray-800'>
      <FaReact size='2em' className='hover:scale-125 transition duration-300' />
      <RiNextjsLine
        size='2em'
        className='hover:scale-125 transition duration-200'
      />
      <RiTailwindCssFill
        size='2em'
        className='hover:scale-125 transition duration-200'
      />
      <IoLogoJavascript
        size='2em'
        className='hover:scale-125 transition duration-200'
      />
      <SiTypescript
        size='2em'
        className='hover:scale-125 transition duration-200'
      />
      <FaFigma size='2em' className='hover:scale-125 transition duration-200' />
      <FaWordpress
        size='2em'
        className='hover:scale-125 transition duration-200'
      />
    </div>
  );
};

export default TechStackIcon;
