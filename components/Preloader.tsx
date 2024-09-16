import { React, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const comp = useRef(null);

  //Alvinalportfolio animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const webtitle = document.querySelector(".web-title");
      const t1 = gsap.timeline();
      t1.from(webtitle, {
        opacity: 0,
        y: "+=30",
        stagger: 1,
      }).to(webtitle, {
        opacity: 1,
        stagger: 0.5,
        delay: 0.1,
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  //progress bar animation
  useEffect(() => {
    const loadingBar = document.querySelector(".loading-bar");
    gsap.fromTo(loadingBar, { width: "0%" }, { width: "100%", duration: 3 });
  }, []);

  return (
    <div className='loader h-[95vh] lg:h-[97vh] flex flex-col justify-center border-white oflow w-full overflow-hidden'>
      <div className='flex flex-col gap-4 m-auto'>
        <div className='text-white font-semibold web-title'>
          <span>ALVIN</span>
          <span>AL</span>
          <span>PORTFOLIO</span>
        </div>
        <div className='max-w-full h-1 bg-white loading-bar p-[-5%]' />
      </div>
    </div>
  );
};

export default Loader;
