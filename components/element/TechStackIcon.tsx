import React from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const TechStackIcon = () => {
  return (
    <div className="w-fit h-fit flex gap-4 text-gray-800">
      <FaReact size="1.5em" />
      <RiNextjsLine size="1.5em" />
      <RiTailwindCssFill size="1.5em" />
      <IoLogoJavascript size="1.5em" />
      <SiTypescript size="1.5em" />
      <FaFigma size="1.5em" />
    </div>
  );
};

export default TechStackIcon;
