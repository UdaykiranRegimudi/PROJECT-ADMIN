import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {MdNotificationsActive} from 'react-icons/md'
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Students", href: "/students" },
    { name: "Problems", href: "/problems" },
    { name: "Projects", href: "/projects" },
    { name: "Register", href: "/student-registration" },
  ];

  const profileNav = [
    { name: "Profile", href: "/something" },
    { name: "Something", href: "/algo" },
  ];

  const [toggle, setToggle] = useState(false);

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
          <div onClick={() => setToggle(!toggle)} className="ml-6 mr-6">
            <div className="flex bg-gray-500 px-2 rounded-md cursor-pointer">
              <div className="w-auto h-auto px-3 my-1 bg-black rounded-md" />
              <div className="text-white rounded-md px-3 py-2 text-md font-bold">
                Profile
              </div>
              <IoIosArrowDropdownCircle className="my-3" />
            </div>
          </div>
        </div>
        {/* <div
          className={
            toggle
              ? "block float-right shadow-md shadow-black h-fit w-44 bg-gray-700 p-2 rounded-md"
              : "hidden"
          }
        >
          <div className="flex flex-col">
            {profileNav.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
                children={item.name}
              />
            ))}
            <LogoutButton />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
