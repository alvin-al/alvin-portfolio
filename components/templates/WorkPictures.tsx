import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkPicturesProps {
  src: string;
  title: string;
  link: string;
}

function WorkPictures({ src, title, link }: WorkPicturesProps) {
  return (
    <Link href={`${link}`}>
      <div className="flex flex-col gap-2 lg:gap-4 rounded-md h-full w-full">
        <div className="w-full h-full cursor-pointer rounded-md hover:shadow-lg hover:delay-100 hover:transition hover:ease-in-out overflow-hidden relative">
          <Image
            src={src}
            alt="title"
            width={1000}
            height={800}
            className="object-cover h-full hover:scale-[110%] transition ease-in-out duration-300"
          />
        </div>
        <div>
          <p className="text-lg font-medium text-gray-500 mb:1 lg:mb-2">
            {title}
          </p>
          <p className="text-3xl font-medium text-gray-800">
            Website untuk {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default WorkPictures;
