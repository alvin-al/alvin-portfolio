import React from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const TechStackIcon = () => {
  return (
    <div className='w-fit h-fit grid grid-flow-col grid-rows-2 md:grid-rows-1 gap-8 text-gray-800'>
      <FaReact size='2em' />
      <RiNextjsLine size='2em' />
      <RiTailwindCssFill size='2em' />
      <IoLogoJavascript size='2em' />
      <SiTypescript size='2em' />
      <FaFigma size='2em' />
    </div>
  );
};

export default TechStackIcon;
