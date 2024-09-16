import Image from "next/image";

interface PlaygroundImagesProps {
  ind: number;
  src: string;
  alt: string;
}

const PlaygroundImages = (props: PlaygroundImagesProps) => {
  return (
    <div>
      <div key={props.ind} className=''>
        <Image
          src={props.src}
          alt={props.alt}
          className='rounded-sm hover:scale-[97%] hover:opacity-90 transition ease-in-out delay-30 w-full h-full object-cover'
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default PlaygroundImages;
