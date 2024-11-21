import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail, BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";

const contactList = [
  {
    href: "https://t.me/alvinxal",
    icon: <BiLogoTelegram size='1.5em' />,
  },
  {
    href: "https://github.com/alvin-al",
    icon: <FaGithub size='1.5em' />,
  },
  {
    href: "mailto:alvvxal@gmail.com",
    icon: <BiLogoGmail size='1.5em' />,
  },
  {
    href: "https://www.linkedin.com/in/alvinxal/",
    icon: <FaLinkedin size='1.5em' />,
  },
];

const ContactButton = () => {
  return (
    <div>
      <div className=''>
        <ul className='flex flex-row gap-3 md:gap-6'>
          {contactList.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <button className='hover:bg-slate-700 border text-gray-800 hover:text-[#f8f0e5] border-gray-800 w-12 h-12 rounded-full flex justify-center items-center'>
                  {item.icon}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactButton;
