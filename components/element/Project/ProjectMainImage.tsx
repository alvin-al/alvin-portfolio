import React from "react";
import urbia from "@/public/works/urbiaid.jpeg";
import Image from "next/image";
import ViewCursor from "../ViewCursor";

const ProjectMainImage = () => {
  return (
    <div>
      <div className='w-full h-full mb-6 lg:mb-12'>
        <ViewCursor>
          <Image
            className={`rounded-md w-full
          }`}
            src={urbia}
            width='1000'
            height='1000'
            alt='work'
            priority
          />
        </ViewCursor>
      </div>
    </div>
  );
};

export default ProjectMainImage;
