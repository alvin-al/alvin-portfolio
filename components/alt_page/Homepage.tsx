import React from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

const Homepage = () => {
  return (
    <div className='h-4/5 flex flex-col pt-32 gap-16'>
      {/* title */}
      <div className='flex flex-col gap-8'>
        <p className='text-5xl w-4/5 leading-snug font-medium'>
          Clean, minimalist. <br />
          Sometimes, simplicity is the most useful tool.
        </p>
        <p className='text-base font-medium'>Alvin Al - Web Developer</p>
        <div className='w-fit h-fit flex gap-4 text-gray-800'>
          <FaReact size='1.5em' />
          <RiNextjsLine size='1.5em' />
          <RiTailwindCssFill size='1.5em' />
          <IoLogoJavascript size='1.5em' />
          <SiTypescript size='1.5em' />
          <FaFigma size='1.5em' />
        </div>
      </div>
      <div>
        <button className='px-8 py-4 bg-gray-800 text-white text-lg rounded-full hover:bg-transparent border border-gray-800 hover:text-gray-800 transition ease-in-out delay-76 flex gap-1'>
          Contact me
          <MdArrowOutward size='1.2em' className="transition"/>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
