import React from "react";
import Image from "next/image";
import { syne } from "@/app/layout";

function WorkPictures({ src, title, link }) {
  return (
    <div className='mb-8'>
      <a href={link}>
        <Image
          src={src}
          alt={title}
          className='cursor-pointer rounded-sm hover:scale-[97%] hover:opacity-90 transition ease-in-out delay-30'
        />
      </a>
      <h2 className={`${syne.className} font-extrabold text-2xl text-left text-white my-2`}>
        {title}
      </h2>
    </div>
  );
}

export default WorkPictures;
