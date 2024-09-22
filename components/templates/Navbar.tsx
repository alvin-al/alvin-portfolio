import Link from "next/link";
import SplitTextLine from "../ui/SplitTextLine";

const Navbar = () => {
  return (
    <div id='navbar' className='pr-48 md:pr-[500px] lg:pr-[75%] w-full'>
      <ul className='flex text-left gap-2 flex-col text-white w-full'>
        <SplitTextLine index={20} className={`w-full`}>
          <li className='focus:outline-none hover:ml-4 transition-all ease duration-300 w-fit border-b-2 border-gray-100 pb-1 cursor-pointer xl:text-lg'>
            <Link href='#work'>Work</Link>
          </li>
        </SplitTextLine>
        <SplitTextLine index={21}>
          <li className='focus:outline-none hover:ml-4 transition-all ease duration-300 w-fit border-b-2 border-gray-100 pb-1 cursor-pointer xl:text-lg'>
            <Link href='#playground'>Playground</Link>
          </li>
        </SplitTextLine>
        <SplitTextLine index={22}>
          <li className='focus:outline-none hover:ml-4 transition-all ease duration-300 w-fit border-b-2 border-gray-100 pb-1 cursor-pointer xl:text-lg'>
            <Link href='#getintouch'>Contact</Link>
          </li>
        </SplitTextLine>
      </ul>
    </div>
  );
};

export default Navbar;
