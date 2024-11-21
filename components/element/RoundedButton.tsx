import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface RoundedButton {
  className?: string;
  children: string;
}

const RoundedButton = ({ className, children }: RoundedButton) => {
  return (
    <div>
      <button
        className={`${className} px-8 py-4 bg-gray-800 text-white text-lg rounded-full hover:bg-transparent border border-gray-800 hover:text-gray-800 transition ease-in-out duration-75 flex gap-1`}
      >
        {children}
        <MdArrowOutward size="1.2em" className="transition" />
      </button>
    </div>
  );
};

export default RoundedButton;
