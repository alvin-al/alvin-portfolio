import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div
      className=' flex flex-col lg:flex-row w-full gap-8 py-24 scroll-mt-20'
      id='blog'
    >
      <div className='text-lg font-medium text-gray-500 lg:w-1/5 xl:w-1/5'>
        Write by me
      </div>
      <div className='lg:w-4/5 xl:w-3/5 flex flex-col '>
        {" "}
        <Link href='/'>
          <p className='text-gray-500 font-semibold text-sm mb-2 md:mb-0'>
            6 Dec, 2026
          </p>
          <p className='leading-relaxed text-2xl lg:leading-normal lg:text-3xl font-medium text-gray-800 flex flex-col'>
            Ini contoh judul artikel
            <span className='text-lg font-medium text-gray-500'>
              Blnk is a modern Framer template built for creative freelancers,
              ui, and visual designers to showcase their work and services. Blnk
              stands out with its minimal design approach, sleek animations, and
              elegant layout.
            </span>
          </p>
          <hr className='border-t border w-full border-gray-400 mt-8' />
        </Link>
      </div>
      <div className='hidden xl:flex lg:w-1/5'></div>
    </div>
  );
};

export default Blog;
