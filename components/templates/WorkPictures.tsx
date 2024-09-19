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
    <div className=' flex flex-col gap-2'>
      <Link href={link}>
        <div className="w-full h-fit bg-yellow-50 cursor-pointer rounded-md hover:shadow-xl hover:opacity-90 transition ease-in-out delay-30 overflow-hidden">
          <Image
            src={src}
            alt={title}
            className='w-full h-full object-cover '
            width={1000}
            height={630}
          />
        </div>
      </Link>
      <SubHeader2 classname='text-2xl'>{title}</SubHeader2>
    </div>
  );
}

export default WorkPictures;
