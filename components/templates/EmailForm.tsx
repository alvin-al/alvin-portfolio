"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function EmailForm() {
  const [state, handleSubmit] = useForm("xeqykqgq");
  if (state.succeeded) {
    return <p className='text-white'>Thanks for contact me!</p>;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col mb-0 md:mb-0 lg:pl-[55%] xl:pl-[60%] md:px-52'
      >
        <input
          id='email'
          type='email'
          name='email'
          className='text-white bg-transparent border-b mb-8 p-1'
          placeholder='Email'
        />
        <textarea
          id='message'
          name='message'
          className='text-white bg-transparent border-b mb-8 p-1 h-24'
          placeholder='Message'
        />
        <ValidationError errors={state.errors} className='text-white' />
        <button
          type='submit'
          disabled={state.submitting}
          className='text-white border p-2 rounded-3xl'
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default EmailForm;
