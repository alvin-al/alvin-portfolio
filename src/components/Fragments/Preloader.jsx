import {React, useEffect} from "react";
import gsap from "gsap";

const Loader = () => {
    //Loading bar animation
    // useEffect(() => {
    //     const loadingBar = document.querySelector('.loading-bar');
    //     gsap.to(loadingBar, { width: '120px', duration: 5, ease: 'power2.inOut', left: 0 });
    // }, []);

    useEffect(() => {
        

        
        const loadingBar = document.querySelector('.loading-bar');


        gsap.fromTo(loadingBar, {width: "0%"}, {width: "100%", duration: 4})
    }, []);



    return (
        <div className="loader h-[100vh] flex flex-col justify-center border-white oflow w-full overflow-hidden">
            <div className="flex flex-col gap-4 m-auto">
                <div className="text-white font-semibold">
                    <span>ALVIN</span>
                    <span>AL</span> 
                    <span>PORTFOLIO</span>
                </div>
                    <div className="max-w-full h-1 bg-white loading-bar p-[-5%]" />
            </div>
        </div>
    )

}

export default Loader;