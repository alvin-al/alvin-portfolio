import React from "react";
import Image from "next/image";
import SubHeader2 from "../ui/SubHeader2";
import Link from "next/link";

interface WorkPicturesProps {
  src: string;
  title: string;
  link: string;
}

function WorkPictures({ src, title, link }: WorkPicturesProps) {
  return (
    <div className='w-full h-full flex'>
      <div className='w-1/2 gap-2 flex flex-col'>
        <div className='relative w-full h-auto'>
          <Link href={link}>
            <Image
              src={src}
              alt={title}
              className='cursor-pointer rounded-sm hover:shadow-md hover:scale-[97%] hover:opacity-90 transition ease-in-out delay-30'
              width={1200}
              height={630}
            />
          </Link>
        </div>
        <SubHeader2 classname='text-2xl'>{title}</SubHeader2>
      </div>
      <div className='w-1/2'></div>
    </div>
  );
}

export default WorkPictures;
