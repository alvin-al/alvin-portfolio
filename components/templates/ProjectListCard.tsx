import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectListCardProps {
  src: string;
  title: string;
  link: string;
  titledesc: string;
}

function ProjectListCard({ src, title, link, titledesc }: ProjectListCardProps) {
  return (
    <Link href={`${link}`}>
      <div className='group flex flex-col gap-4 lg:gap-6 rounded-md h-full w-full'>
        <div
          className={`w-full aspect-[4/3] lg:aspect-[16/9] cursor-pointer rounded-2xl hover:shadow-lg hover:duration-300 transition ease-in-out overflow-hidden relative justify-center flex items-center p-6 lg:p-10`}
          style={{ backgroundColor: "#B6CEB4" }}
        >
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={title}
              fill
              className='object-contain transition ease-in-out duration-300 rounded-lg shadow-sm'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className='transition duration-300 ease-in-out'>
          <p className='text-lg font-medium text-gray-500 mb-1 lg:mb-2'>
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

export default ProjectListCard;