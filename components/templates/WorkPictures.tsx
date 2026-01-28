import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkPicturesProps {
  src: string;
  title: string;
  slug: string;
  titledesc: string;
}

function WorkPictures({ src, title, slug, titledesc }: WorkPicturesProps) {
  return (
    <Link href={`/projects/${slug || 'unknown'}`}>
<div className='group flex flex-col gap-2 lg:gap-4 rounded-md h-full w-full'>
        <div
          className={`w-full h-full cursor-pointer rounded-2xl hover:shadow-lg hover:duration-300 transition ease-in-out overflow-hidden relative justify-center flex items-center `}
          style={{ backgroundColor: "#B6CEB4" }}
        >
          <Image
            src={src}
            alt={title}
            width={800}
          height={800}
            className='object-cover scale-90 transition ease-in-out duration-300 rounded-sm'
          />
        </div>
        <div className='transition duration-300 ease-in-out'>
          <p className=' text-lg font-medium text-gray-500 mb-1 lg:mb-2'>
            {title}
          </p>
          <p className='text-3xl font-medium text-gray-800 border-b-2 border-transparent group-hover:border-gray-800 duration-300 transition ease-in-out w-fit'>
            {titledesc}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default WorkPictures;
