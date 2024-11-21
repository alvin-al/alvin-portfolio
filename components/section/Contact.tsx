import React from "react";
import ContactButton from "../element/ContactButton";

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full gap-8 py-24'>
      <div className='text-lg font-medium text-gray-500 lg:w-1/5 xl:w-1/5'>
        Contact
      </div>
      <div className='lg:w-4/5 xl:w-3/5 flex flex-col gap-12'>
        <p className='leading-relaxed text-2xl lg:leading-normal lg:text-3xl font-medium text-gray-800'>
          Interested in collaborating together? You can contact me on the links
          below and lets have conversation.
        </p>
        <ContactButton />
      </div>
      <div className='hidden xl:flex lg:w-1/5'></div>
    </div>
  );
};

export default Contact;
