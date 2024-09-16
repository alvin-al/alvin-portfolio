import React from "react";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
});

interface SubHeader2Props {
  children: string;
  classname: string;
}

const SubHeader2 = ({ children, classname }: SubHeader2Props) => {
  return (
    <div>
      <h2
        className={`${syne.className} ${classname} font-extrabold text-left text-white`}
      >
        {children}
      </h2>
    </div>
  );
};

export default SubHeader2;
