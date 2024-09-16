import { Syne } from "next/font/google";
import Navbar from "./templates/Navbar";

const syne = Syne({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div
      className='flex flex-col justify-between h-[90vh] md:h-[96vh]'
      id='heroBanner'
    >
      <div id='heroBanner-caption'>
        <p className='text-right pl-24 text-white text-base md:pl-96 lg:pl-[60%] xl:text-lg'>
          Hi, I am Alvin a web developer based in Bogor, Indonesia. Currently
          pursuing a degree in information systems at the Open University. I
          love to learn any field like design, tech, and web development. Feel
          free to explore my works and my thought
        </p>
      </div>
      <div id='heroBanner-name' className='flex flex-col '>
        <h1
          className={`${syne.className} font-extrabold text-6xl text-white text-center md:text-8xl md:text-left 2xl:text-[196px]`}
        >
          Alvin Al
        </h1>
        <p className='text-center md:text-left text-white text-xl uppercase'>
          Web Developer
        </p>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
