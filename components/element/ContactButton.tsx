import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";

const ContactButton = () => {
  return (
    <div>
      <div className='flex flex-row justify-center md:justify-start gap-3 md:gap-6'>
        <Link href='https://t.me/alvinxal'>
          <button className='hover:bg-slate-700 border border-gray-800 w-12 h-12 rounded-full flex justify-center items-center'>
            <BiLogoTelegram size='1.5em' fill='#1f2937' />
          </button>
        </Link>
        <Link href='https://github.com/alvin-al'>
          <button className='hover:bg-slate-700 border  border-gray-800 w-12 h-12 rounded-full flex justify-center items-center'>
            <FaGithub size='1.5em' fill='#1f2937' />
          </button>
        </Link>
        <Link href='mailto:alvvxal@gmail.com'>
          <button className='hover:bg-slate-700 border  border-gray-800 w-12 h-12 rounded-full flex justify-center items-center'>
            <BiLogoGmail size='1.5em' fill='#1f2937' />
          </button>
        </Link>
        <Link href='https://www.linkedin.com/in/alvinxal/'>
          <button className='hover:bg-slate-700 border border-gray-800 w-12 h-12 rounded-full flex justify-center items-center'>
            <FaLinkedin size='1.5em' fill='#1f2937' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactButton;
