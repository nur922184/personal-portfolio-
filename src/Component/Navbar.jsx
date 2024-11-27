import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaBook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="md:fixed w-full bg-gradient-to-r from-black via-gray-900 to-green-900 bg-opacity-30 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Location */}
        <div className="text-white text-sm">Asia/Dhaka</div>

        {/* Center: Links */}
        <ul className="hidden md:flex items-center gap-6 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaUser />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaBriefcase />
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaBook />
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Right: Resume */}
        <div className="text-teal-500 font-medium">
          <a href="/resume" className="hover:underline">
            Resume
          </a>
        </div>
      </div>

      {/* Bottom Navigation for Small Screens */}
      <div className="w-52 h-8 items-center mx-auto md:hidden fixed bottom-2 inset-x-4 rounded-lg bg-slate-500 bg-opacity-30 shadow-lg">
        <ul className="items-center flex justify-around w-52 h-8 mx-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'text-white hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'text-white hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaUser />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'text-white hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaBriefcase />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'text-white hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaBook />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
