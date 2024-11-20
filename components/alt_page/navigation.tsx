import React from "react";
import { Syne } from "next/font/google";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
});

const Navigation = () => {
  return (
    <div className='w-full h-[80px] flex items-center justify-between'>
      <Link href='/' className='w-fit h-full'>
        <p
          className={`${syne.className} font-extrabold text-[#F8F0E5] bg-gray-800 w-full h-full items-center flex px-4`}
        >
          AL
        </p>
      </Link>
      <div className='flex gap-5 text-lg font-medium justify-center'>
        <Link href='/'>
          <p>Home</p>
        </Link>
        <Link href='/'>
          <p>Project</p>
        </Link>
        <Link href='/'>
          <p>About</p>
        </Link>
      </div>
      <div className=' bg-[#F8F0E5] w-[82px] h-full '></div>
    </div>
  );
};

export default Navigation;
