"use client";
import React from "react";
import { Syne } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const syne = Syne({
  subsets: ["latin"],
});

const itemMenu = [
  { title: "Projects", link: "/projects" },
  // { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const Navigation = () => {
  const path = usePathname();

  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Jika scroll ke bawah dan lebih dari 50px, sembunyikan
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      // Jika scroll ke atas, tampilkan kembali
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Update posisi scroll terakhir
      setLastScrollY(currentScrollY);
    };
    // Tambahkan event listener
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [isOpen, setIsOpen] = React.useState(false);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`w-full h-[80px] flex items-center justify-between sticky z-50 top-0 px-8 md:px-20 transition-transform duration-300 
          ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link href='/' className='w-fit h-full z-50' onClick={() => setIsOpen(false)}>
          <p
            className={`${syne.className} font-extrabold text-[#F8F0E5] bg-gray-800 w-full h-full items-center flex px-4 text-2xl`}
          >
            AL
          </p>
        </Link>
        {!path.startsWith("/dashboard") && (path == "/" || path.startsWith("/projects") || path.startsWith("/blog") || path.startsWith("/contact")) ? (
          <div className='w-full'>
            <ul className='hidden md:flex gap-8 text-base 2xl:text-lg font-medium justify-end'>
              {itemMenu.map((item, index) => (
                <li className='hover:text-gray-500' key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
        
        {/* Mobile Menu Button */}
           <button 
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 ml-auto" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-8 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-8 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-8 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#F8F0E5] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <ul className='flex flex-col gap-8 text-3xl font-medium text-center'>
            {itemMenu.map((item, index) => (
              <li 
                key={index}
                className={`transition-all duration-500 delay-[${index * 100}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <Link 
                  href={item.link} 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
        
        {/* Copyright */}
        <div className={`absolute bottom-12 text-sm text-gray-400 font-medium transition-all duration-500 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          © {new Date().getFullYear()} Alvin Al. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Navigation;
