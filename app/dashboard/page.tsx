"use client";
import React, { use, useState } from "react";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
});

type MenuItems = {
  id: string;
  label: string;
};

const menuItems: MenuItems[] = [
  { id: "blog", label: "Blog" },
  {
    id: "test",
    label: "Test",
  },
];

const Dashboard: React.FC = () => {
  const [menu, setMenu] = useState<string>("blog");

  const getButtonClassname = (currentMenu: string) =>
    `p-8 w-full items-start flex text-lg font-semibold ${
      menu === currentMenu ? "bg-gray-600" : ""
    }`;

  return (
    <div className='w-full h-screen flex'>
      {/* Side navbar */}
      <div className='w-1/5 bg-gray-400'>
        <div className='px-8 py-12'>
          <p className={`${syne.className} text-3xl font-bold`}>Dashboard</p>
        </div>
        <div>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={getButtonClassname(item.id)}
                  onClick={() => setMenu(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Main content */}
      <div className='w-4/5'>
        <div className='w-full h-full p-16'><p className="text-3xl font-semibold">Blog</p></div>
      </div>
    </div>
  );
};

export default Dashboard;
