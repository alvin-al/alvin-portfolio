import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail, BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";

const contactList = [
  {
    href: "https://t.me/alvinxal",
    icon: <BiLogoTelegram size='1.2em' />,
    label: "Telegram",
  },
  {
    href: "https://github.com/alvinxal",
    icon: <FaGithub size='1.2em' />,
    label: "GitHub",
  },
  {
    href: "mailto:alvvxalw@gmail.com",
    icon: <BiLogoGmail size='1.2em' />,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/alvinxal/",
    icon: <FaLinkedin size='1.2em' />,
    label: "LinkedIn",
  },
];

const HomeFooter = () => {
  return (
    <div className='relative w-full border-t border-gray-300 pt-12 pb-8 px-6 md:px-8 lg:px-20'>
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
        
        <div className='flex flex-col gap-2'>
          <p className='text-gray-800 font-medium'>Temanggung, Indonesia</p>
          <p className='text-gray-500 text-sm'>© Alvin Al - 2026</p>
        </div>

        <div>
          <ul className='flex flex-row gap-4'>
            {contactList.map((item, index) => (
              <li key={index}>
                <Link href={item.href} aria-label={item.label}>
                  <div className='hover:text-gray-500 transition-colors duration-200'>
                    {item.icon}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HomeFooter;
