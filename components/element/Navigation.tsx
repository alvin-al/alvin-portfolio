import React from "react";
import { Syne } from "next/font/google";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
});

const itemMenu = [
  { title: "Home", link: "/alt" },
  { title: "Project", link: "/" },
  { title: "About", link: "/" },
];

const Navigation = () => {
  return (
    <div className="w-full h-[80px] flex items-center justify-between">
      <Link href="/" className="w-fit h-full">
        <p
          className={`${syne.className} font-extrabold text-[#F8F0E5] bg-gray-800 w-full h-full items-center flex px-4`}
        >
          AL
        </p>
      </Link>
      <div className="w-full">
        <ul className="hidden md:flex gap-8 text-base 2xl:text-lg font-medium justify-center">
          {itemMenu.map((item, index) => (
            <li className="hover:text-gray-500" key={index}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" bg-[#F8F0E5] w-[82px] h-full "></div>
    </div>
  );
};

export default Navigation;
