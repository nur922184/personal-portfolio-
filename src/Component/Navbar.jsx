import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaBook } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';

const Navbar = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark" // Default to light theme
  );

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme class to the root element
  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [theme]);
//  className="bg-opacity-25 md:fixed w-full bg-gradient-to-r from-black via-gray-900 to-green-900 p-4"
  return (
    <nav className="bg-opacity-25 md:fixed w-full bg-gradient-to-r from-black via-gray-900 to-green-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Location */}
        <div className="text-white text-sm">
          <NavLink to={'/'}>
            Moni<span className='text-teal-400 font-bold'>RUZZ</span>aman
          </NavLink>
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex items-center gap-6 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 ${isActive
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
                `flex items-center gap-2 ${isActive
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
                `flex items-center gap-2 ${isActive
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
                `flex items-center gap-2 ${isActive
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
          <NavLink to="/resume" className="hover:underline">
            Resume
          </NavLink>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full ml-6 bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors duration-300"
          >
            {theme === "light" ? <BsMoon size={18} /> : <BsSun size={18} />}
          </button>
        </div>
      </div>

      {/* Bottom Navigation for Small Screens */}
      <div className="w-80 h-10 items-center align-middle mx-auto md:hidden fixed bottom-2 inset-x-4 rounded-lg bg-slate-500 bg-opacity-30 shadow-lg">
        <ul className="items-center flex justify-around w-80 h-10 mx-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive
                  ? 'text-teal-400 border-b-2 border-teal-400'
                  : 'text-white hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaHome size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive
                  ? 'text-teal-400 border-b-2 border-teal-400'
                  : 'text-white hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaUser size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `${isActive
                  ? 'text-teal-400 border-b-2 border-teal-400'
                  : 'text-white hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaBriefcase size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${isActive
                  ? 'text-teal-400 border-b-2 border-teal-400'
                  : 'text-white hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400'
                } transition`
              }
            >
              <FaBook size={25} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
