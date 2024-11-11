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
    <Link href={`${link}`}>
      <div className='flex flex-col gap-2 rounded-md hover:scale-[98%] hover:opacity-90 transition ease-in-out delay-30 h-full w-full'>
        <div className='w-full h-fit bg-yellow-50 cursor-pointer rounded-md hover:shadow-xl overflow-hidden relative'>
          <Image
            src={src}
            alt='title'
            width={1000}
            height={800}
            className='object-cover'
          />
        </div>
        <SubHeader2 classname='text-2xl'>{title}</SubHeader2>
      </div>
    </Link>
  );
}

export default WorkPictures;
