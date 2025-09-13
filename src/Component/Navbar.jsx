import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FaBook, FaBriefcase, FaDev, FaGraduationCap, FaHome, FaUser } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { Link } from 'react-scroll';

const Navber = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
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

  return (
    <nav className={`bg-opacity-25 md:fixed w-full z-50 bg-gradient-to-r from-[#E8CBC0] via-[#536976] to-[#636FA4] p-4 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-blue-950 dark:text-white text-sm font-bold cursor-pointer">
          Moni<span className='text-teal-600 dark:text-teal-400'>Ruzz</span>aman
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex items-center gap-6 text-white dark:text-gray-200">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-teal-400 border-b-2 border-teal-400"
              className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-teal-400 border-b-2 border-teal-400"
              className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
            >
              <FaUser /> About
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-teal-400 border-b-2 border-teal-400"
              className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
            >
              <FaGraduationCap  /> Education
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-teal-400 border-b-2 border-teal-400"
              className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
            >
              <FaBriefcase /> Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-teal-400 border-b-2 border-teal-400"
              className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
            >
              <MdContactPhone /> Contact
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-teal-400 border-b-2 border-teal-400"
              className="flex items-center gap-2 cursor-pointer hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400 transition"
            >
              <FaBook /> Blog
            </Link>
          </li>
        </ul>

        {/* Right: Resume + Theme Button */}
        <div className="text-teal-500 dark:text-teal-400 font-medium flex items-center">
          <Link
            to="resume"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="cursor-pointer hover:underline mr-4"
          >
            Resume
          </Link>
          <Link
            to="dev"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}>
            <button
              className="p-2 rounded-full ml-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors duration-300 hover:bg-teal-200 dark:hover:bg-teal-700"
            >
              <FaDev size={18} />
            </button>
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full ml-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors duration-300 hover:bg-teal-200 dark:hover:bg-teal-700"
          >
            {theme === "light" ? <BsMoon size={16} /> : <BsSun size={16} />}
          </button>
        </div>
      </div>

      {/* Bottom Navigation for Small Screens */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        {/* Gradient Border */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500">
          {/* Inner Navbar */}
          <div className="rounded-full bg-slate-900 bg-opacity-90 backdrop-blur-md shadow-lg">
            <ul className="flex justify-around items-center w-[300px] h-10 px-4">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-teal-400"
                  className="cursor-pointer text-white hover:text-teal-400 transition"
                >
                  <FaHome size={16} />
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-teal-400"
                  className="cursor-pointer text-white hover:text-teal-400 transition"
                >
                  <FaUser size={16} />
                </Link>
              </li>
              <li>
                <Link
                  to="education"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-teal-400"
                  className="cursor-pointer text-white hover:text-teal-400 transition"
                >
                  <FaGraduationCap size={18} />
                </Link>
              </li>
              <li>
                <Link
                  to="work"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-teal-400"
                  className="cursor-pointer text-white hover:text-teal-400 transition"
                >
                  <FaBriefcase size={16} />
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-teal-400"
                  className="cursor-pointer text-white hover:text-teal-400 transition"
                >
                  <MdContactPhone size={16} />
                </Link>
              </li>
              <li>
                <Link
                  to="blog"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-teal-400"
                  className="cursor-pointer text-white hover:text-teal-400 transition"
                >
                  <FaBook size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;