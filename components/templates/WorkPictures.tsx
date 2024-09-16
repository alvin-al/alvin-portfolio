import React from "react";
import Image from "next/image";
import SubHeader2 from "../ui/SubHeader2";

interface WorkPicturesProps {
  src: string;
  title: string;
  link: string;
}

function WorkPictures({ src, title, link }: WorkPicturesProps) {
  return (
    <div className='mb-8'>
      <a href={link}>
        <Image
          src={src}
          alt={title}
          className='cursor-pointer rounded-sm hover:scale-[97%] hover:opacity-90 transition ease-in-out delay-30'
        />
      </a>
      <SubHeader2 classname='text-2xl'>{title}</SubHeader2>
    </div>
  );
}

export default WorkPictures;
