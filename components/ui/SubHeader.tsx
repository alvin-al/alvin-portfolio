import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
});

import React from "react";

interface SubHeaderProps {
  children: string;
}

const SubHeader = ({ children }: SubHeaderProps) => {
  return (
    <div>
      <h2
        className={`${syne.className} font-extrabold text-4xl text-left text-white xl:text-6xl`}
      >
        {children}
      </h2>
    </div>
  );
};

export default SubHeader;
