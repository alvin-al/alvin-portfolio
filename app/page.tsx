import React from "react";
import Loader from "@/components/Preloader";
import Homepage from "@/components/pages/Homepage";
import { useState, useEffect } from "react";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <div className='App flex p-4 bg-[#171717] flex-col !scroll-smooth'>
      {/* {isLoading ? (
        <Loader />
      ) : (
        <>
          <Homepage />
        </>
      )} */}
      <Homepage />
    </div>
  );
}
