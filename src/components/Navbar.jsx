import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Students", href: "/students" },
    { name: "Problems", href: "/problems" },
    { name: "Projects", href: "/projects" },
    { name: "Register", href: "/student-registration" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const location = useLocation();

  if (location.pathname === "/register") {
    return null; // Hide the navbar on the Register page
  }
  if (location.pathname === "/login") {
    return null; // Hide the navbar on the Register page
  }

  return (
    <div className="bg-gray-700">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="h-16 relative flex items-center justify-between">
          <div className="font-bold text-xl italic text-white">Proj-Admin</div>
          <div className="hidden md:ml-6 md:mr-6 md:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Need to change this  after authentication*/}
          <div onClick={toggleDropdown} className="ml-6 mr-6">
            <div className="flex bg-gray-500 px-2 rounded-md cursor-pointer">
              <div className="w-auto h-auto px-3 my-1 bg-black rounded-md" />
              <div className="text-white rounded-md px-3 py-[10px] text-md font-bold">
                Profile
              </div>
              <IoIosArrowDropdownCircle className="my-3" />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="origin-top-right absolute right-0 top-[48px] mt-2 mr-2 w-60 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="block w-full px-2 py-1 text-sm">
                <li className="bg-gray-200 px-2 py-1">Something</li>
              </div>
              <li>
                <a
                  href="/some"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="/some1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="/some2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <LogoutButton />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
