"use client";
import React, { useState } from "react";
import BlogDashboard from "@/components/templates/BlogDashboard";
import SidebarDashboard from "@/components/templates/SidebarDashboard";
import { MdOutlineEditNote } from "react-icons/md";

type MenuItems = {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

const menuItems: MenuItems[] = [
  {
    id: "blog",
    label: "Blog",
    icon: <MdOutlineEditNote size='2em' />,
    content: <BlogDashboard />,
  },
  {
    id: "test",
    label: "Test",
    icon: <></>,
    content: <></>,
  },
];

const Dashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("blog");

  return (
    <div className='w-full h-screen flex'>
      {/* Side navbar */}
      <SidebarDashboard
        menuItems={menuItems}
        activeMenu={activeMenu}
        onMenuChange={setActiveMenu}
      />
      {/* Main content */}
      <div className='w-4/5'>
        <div className='px-16 pt-12'>
          {menuItems.find((item) => item.id === activeMenu)?.content}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
