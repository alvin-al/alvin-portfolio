import React from "react";
import { Syne } from "next/font/google";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });

type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

type SidebarDashboardProps = {
  menuItems: MenuItem[];
  activeMenu: string;
  onMenuChange: (id: string) => void;
};

const SidebarDashboard = ({
  menuItems,
  activeMenu,
  onMenuChange,
}: SidebarDashboardProps) => {
  const getButtonClassname = (currentMenu: string) =>
    `p-8 w-full items-center flex text-lg font-semibold text-[#E0E0E0] gap-2 hover:bg-gray-600 ${
      activeMenu === currentMenu ? "bg-gray-700" : ""
    }`;
  return (
    <div className='w-1/5 bg-[#1A1A2E] flex flex-col'>
      <div className=' py-12 justify-center flex'>
        <Link href='/dashboard'>
          <p className={`${syne.className} text-3xl font-bold text-white`}>
            Dashboard
          </p>
        </Link>
      </div>
      <div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className='border-y-[1px]'>
              <button
                className={getButtonClassname(item.id)}
                onClick={() => onMenuChange(item.id)}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarDashboard;
