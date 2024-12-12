"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineDown,
} from "react-icons/ai";
import { GrTrophy } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoSidebarCollapse } from "react-icons/go";

const navElements = [
  {
    title: "Dashboard",
    href: "/",
    icon: <AiOutlineDashboard className="w-6 h-6" />,
    dropdown: false,
  },
  {
    title: "Attendance",
    href: "/profile",
    icon: <AiOutlineUser className="w-6 h-6" />,
    dropdown: false,
  },
  {
    title: "Award",
    href: null, // No href for main dropdown
    icon: <GrTrophy className="w-6 h-6" />,
    dropdown: true,
    subMenu: [
      { title: "Annual Awards", href: "/award/annual" },
      { title: "Employee of the Month", href: "/award/monthly" },
    ],
  },
  {
    title: "Employee",
    href: null, // No href for main dropdown
    icon: <HiOutlineUserGroup className="w-6 h-6" />,
    dropdown: true,
    subMenu: [
      { title: "Employee List", href: "/employee" },
      { title: "Add Employee", href: "/employee-entry" },
    ],
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <AiOutlineSetting className="w-6 h-6" />,
    dropdown: false,
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-l from-[#F3E7E9] to-[#E3EEFF] text-gray-700 flex flex-col sticky top-0 ${
        isCollapsed ? "w-20" : "w-64"
      } transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-16 bg-gradient-to-l from-[#F3E7E9] to-[#E3EEFF] border-b border-gray-300 p-4">
        {!isCollapsed && (
          <Link href="/">
            <Image src="/images/ftex-logo.png" alt="Ftex Logo" width={150} height={30} />
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-700 focus:outline-none"
        >
          {isCollapsed ? <AiOutlineMenu className="ml-2" size={24} /> : <GoSidebarCollapse size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 space-y-2">
        {navElements.map((navElement, index) => (
          <div key={navElement.title} className="relative group">
            {navElement.dropdown ? (
              <div
                className={`flex items-center py-4 px-4 cursor-pointer transition duration-700 ease-in-out hover:bg-gray-300 hover:text-blue-800 ${
                  isCollapsed ? "justify-center" : ""
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    {navElement.icon}
                    {!isCollapsed && <span className="ml-4 text-lg">{navElement.title}</span>}
                  </div>
                  {!isCollapsed && (
                    <AiOutlineDown
                      className={`ml-2 transition-transform duration-300 ease-in-out ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
              </div>
            ) : (
              <Link href={navElement.href}>
                <div
                  className={`flex items-center py-4 px-4 cursor-pointer transition duration-700 ease-in-out hover:bg-gray-300 hover:text-blue-800 ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                >
                  <div className="flex items-center">
                    {navElement.icon}
                    {!isCollapsed && <span className="ml-4 text-lg">{navElement.title}</span>}
                  </div>
                </div>
              </Link>
            )}

            {/* Submenu (if dropdown is active) */}
            {navElement.dropdown && !isCollapsed && (
              <div
                className={`mt-2 text-center space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${
                  activeDropdown === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {navElement.subMenu.map((subItem) => (
                  <Link
                    href={subItem.href}
                    key={subItem.title}
                    className="block text-base p-2 w-full text-gray-700 hover:text-blue-800 hover:bg-slate-300"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="mb-6">
        <button
          className={`flex items-center py-2 px-4 w-full text-left rounded-md transition duration-300 ease-in-out hover:bg-red-700 hover:text-white ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <AiOutlineLogout className="w-6 h-6" />
          {!isCollapsed && <span className="ml-4 text-lg">Log Out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
