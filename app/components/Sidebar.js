'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineDown,
} from 'react-icons/ai';
import { GrTrophy } from 'react-icons/gr';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GoSidebarCollapse } from 'react-icons/go';

const navElements = [
  {
    title: 'Dashboard',
    href: '/',
    icon: <AiOutlineDashboard className="w-6 h-6" />,
    dropdown: false,
  },
  {
    title: 'Attendance',
    href: '/profile',
    icon: <AiOutlineUser className="w-6 h-6" />,
    dropdown: false,
  },
  {
    title: 'Award',
    href: '/award',
    icon: <GrTrophy className="w-6 h-6" />,
    dropdown: true,
    subMenu: [
      { title: 'Annual Awards', href: '/award/annual' },
      { title: 'Employee of the Month', href: '/award/monthly' },
    ],
  },
  {
    title: 'Employee',
    href: '/employee',
    icon: <HiOutlineUserGroup className="w-6 h-6" />,
    dropdown: true,
    subMenu: [
      { title: 'Employee List', href: '/employee' },
      { title: 'Add Employee', href: '/employee/add' },
    ],
  },
  {
    title: 'Settings',
    href: '/settings',
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
      className={`min-h-full bg-gradient-to-l from-[#F3E7E9] to-[#E3EEFF] text-gray-700 flex flex-col ${
        isCollapsed ? 'w-20' : 'w-64'
      } transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-20 bg-gradient-to-r from-[#F3E7E9] to-[#E3EEFF] border-b border-gray-300 p-4">
        {!isCollapsed && (
          <Link href="/">
            <Image src="/images/ftex-logo.png" alt="Ftex Logo" width={150} height={30} />
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-700 focus:outline-none"
        >
          {isCollapsed ? <AiOutlineMenu size={24} /> : <GoSidebarCollapse size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 space-y-2">
        {navElements.map((navElement, index) => (
          <div key={navElement.title}>
            <div
              className={`flex items-center py-4 px-4 cursor-pointer transition duration-700 ease-in-out hover:bg-gray-300 hover:text-blue-800 ${
                isCollapsed ? 'justify-center' : ''
              }`}
              onClick={() => (navElement.dropdown ? toggleDropdown(index) : null)}
            >
              {navElement.icon}
              {!isCollapsed && (
                <span className="ml-4 text-lg">{navElement.title}</span>
              )}
              {navElement.dropdown && !isCollapsed && (
                <AiOutlineDown
                  className={`ml-2 transition-transform duration-300 ease-in-out ${
                    activeDropdown === index ? 'rotate-180' : ''
                  }`}
                  style={{
                    transformOrigin: 'center',
                  }}
                />
              )}
            </div>
            {navElement.dropdown && activeDropdown === index && (
              <div
                className="ml-8 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  height: activeDropdown === index ? 'auto' : '0px',
                  paddingTop: activeDropdown === index ? '10px' : '0',
                  paddingBottom: activeDropdown === index ? '10px' : '0',
                }}
              >
                {navElement.subMenu.map((subItem) => (
                  <Link
                    href={subItem.href}
                    key={subItem.title}
                    className="block text-sm text-gray-700 hover:text-blue-800"
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
            isCollapsed ? 'justify-center' : ''
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
