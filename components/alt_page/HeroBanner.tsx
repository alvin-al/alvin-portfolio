import React from "react";
import TechStackIcon from "../element/TechStackIcon";
import RoundedButton from "../element/RoundedButton";

const HeroBanner = () => {
  return (
    <div className="h-4/5 flex flex-col pt-32 gap-16">
      {/* title */}
      <div className="flex flex-col gap-8">
        <p className="text-5xl md:w-4/5 leading-snug font-medium">
          Clean, minimalist. <br />
          Sometimes, simplicity is the most useful and effective tool.
        </p>
        <p className="text-base font-medium">Alvin Al - Web Developer</p>
        <TechStackIcon />
      </div>
      <div>
        <RoundedButton>Contact me</RoundedButton>
      </div>
    </div>
  );
};

export default HeroBanner;
