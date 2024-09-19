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
          Hi, I’m Alvin, a passionate web developer from Bogor, Indonesia. I’m
          currently pursuing a degree in Information Systems at the Open
          University. My interests span across design, technology, and web
          development, and I’m always eager to learn and explore new things.
          Feel free to check out my works and thoughts below!
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
