"use client";
import React, { useState } from "react";
import { Syne } from "next/font/google";
import BlogDashboard from "@/components/templates/BlogDashboard";

const syne = Syne({
  subsets: ["latin"],
});

type MenuItems = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const menuItems: MenuItems[] = [
  { id: "blog", label: "Blog", content: <BlogDashboard /> },
  {
    id: "test",
    label: "Test",
    content: <></>,
  },
];

const Dashboard: React.FC = () => {
  const [menu, setMenu] = useState<string>("blog");

  const getButtonClassname = (currentMenu: string) =>
    `p-8 w-full items-start flex text-lg font-semibold text-[#E0E0E0] ${
      menu === currentMenu ? "bg-gray-700" : ""
    }`;

  return (
    <div className='w-full h-screen flex'>
      {/* Side navbar */}
      <div className='w-1/5 bg-[#1A1A2E]'>
        <div className='px-8 py-12'>
          <p className={`${syne.className} text-3xl font-bold text-white`}>
            Dashboard
          </p>
        </div>
        <div>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className='border-y-[1px]'>
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
        <div className='w-full h-full p-16'>
          {menuItems.find((item) => item.id === menu)?.content}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
