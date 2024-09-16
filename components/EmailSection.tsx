import React from "react";
import EmailForm from "./templates/EmailForm";
import github from "../public/icons/github.svg";
import gmail from "../public/icons/gmail.svg";
import linkedin from "../public/icons/linkedin.svg";
import Image from "next/image";
import SubHeader from "./ui/SubHeader";

const emailDescription =
  "If you like my work or have any questions, feel free to contact me directly. I would love to hear from you and discuss your web development needs. You can reach me by email.";

const EmailSection = () => {
  return (
    <div id='getintouch'>
      <SubHeader>Get In Touch</SubHeader>
      <p className='pt-4 pb-10 lg:pl-[55%]  xl:pl-[60%] xl:text-lg'>
        {emailDescription}
      </p>
      <div>
        <EmailForm />
        <div className='flex flex-row justify-center md:justify-start gap-3 md:gap-6 lg:pl-[55%] xl:pl-[60%] md:px-52 md:items-start mt-24'>
          <a href='https://github.com/alvin-al'>
            <button className='hover:bg-slate-700 border border-white w-12 h-12 rounded-full flex justify-center items-center'>
              <Image src={github} alt='github' />
            </button>
          </a>
          <a href='mailto:alvvxal@gmail.com'>
            <button className='hover:bg-slate-700 border border-white w-12 h-12 rounded-full flex justify-center items-center'>
              <Image src={gmail} alt='gmail' />
            </button>
          </a>
          <a href='https://www.linkedin.com/in/alvinxal/'>
            <button className='hover:bg-slate-700 border border-white w-12 h-12 rounded-full flex justify-center items-center'>
              <Image src={linkedin} alt='linkedin' />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
