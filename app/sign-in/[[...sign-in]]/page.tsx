import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page(): React.ReactElement {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <SignIn />
    </div>
  );
}
