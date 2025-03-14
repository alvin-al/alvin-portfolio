import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkPicturesProps {
  src: string;
  title: string;
  link: string;
  titledesc: string;
}

function WorkPictures({ src, title, link, titledesc }: WorkPicturesProps) {
  return (
    <Link href={`${link}`}>
      <div className='flex flex-col gap-2 lg:gap-4 rounded-md h-full w-full'>
        <div className='w-full h-full cursor-pointer rounded-2xl hover:shadow-lg hover:duration-300 hover:transition hover:ease-in-out overflow-hidden relative'>
          <Image
            src={src}
            alt='title'
            width={800}
            height={800}
            className='object-cover h-full w-full hover:scale-[110%] transition ease-in-out duration-300'
          />
        </div>
        <div>
          <p className='text-lg font-medium text-gray-500 mb-1 lg:mb-2'>
            {title}
          </p>
          <p className='text-3xl font-medium text-gray-800'>{titledesc}</p>
        </div>
      </div>
    </Link>
  );
}

export default WorkPictures;
