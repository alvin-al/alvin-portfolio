const Navbar = () => {
  return (
    <div id='navbar' className='pr-48 md:pr-[500px] lg:pr-[75%]'>
      <ul className='flex text-left gap-2 flex-col text-white'>
        <li className='border-b-2 border-gray-100 pb-1 cursor-pointer xl:text-lg'>
          <a href='#work'>Work</a>
        </li>
        <li className='border-b-2 border-gray-100 pb-1 cursor-pointer xl:text-lg'>
          <a href='#playground'>Playground</a>
        </li>
        <li className='border-b-2 border-gray-100 pb-1 cursor-pointer xl:text-lg'>
          <a href='#getintouch'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
