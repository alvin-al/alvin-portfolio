"use client";
import React from "react";
import { Syne } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const syne = Syne({
  subsets: ["latin"],
});

const itemMenu = [
  { title: "About", link: "/#about" },
  { title: "Project", link: "/#project" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/#contact" },
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

  return (
    <div
      className={`w-full h-[80px] flex items-center justify-between sticky z-10 top-0 px-8 md:px-20 transition-transform duration-300 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Link href='/' className='w-fit h-full'>
        <p
          className={`${syne.className} font-extrabold text-[#F8F0E5] bg-gray-800 w-full h-full items-center flex px-4 text-2xl `}
        >
          AL
        </p>
      </Link>
      {!path.startsWith("/dashboard") && (path == "/" || path == "/blog") ? (
        <div className='w-full'>
          <ul className='hidden md:flex gap-8 text-base 2xl:text-lg font-medium justify-center'>
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
      <div className='w-[82.5px] h-full '></div>
    </div>
  );
};

export default Navigation;
