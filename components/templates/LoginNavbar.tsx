import { useUser, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

import React from "react";

const LoginNavbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log(isSignedIn);
  return (
    <div>
      {isSignedIn ? (
        <div className='self-center text-center bg-white text-black py-4 px-8 flex justify-between'>
          <div>Welcome, {user.fullName}</div>
          <div className='flex gap-8'>
            <Link href='/dashboard'>
              <button className='underline font-semibold'>Dashboard</button>
            </Link>
            <div className="text-red-500 font-bold">
              <SignOutButton />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LoginNavbar;
