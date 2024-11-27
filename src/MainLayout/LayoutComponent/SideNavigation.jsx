import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 left-4 z-50 bg-gray-800 text-white p-3 rounded-md lg:hidden"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <nav
        className={` sticky top-0 left-0 h-[75%] w-64 bg-gray-800 text-white flex flex-col py-10 px-6 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        {/* Profile Section */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
            <img
              src="https://via.placeholder.com/150" // Replace with your profile image link
              alt="Md Moniruzzaman Tonoy"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-center">Md Moniruzzaman Tonoy</h2>
          <p className="text-gray-400 text-center text-sm">Full Stack Developer</p>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2">
          <li>
            <a
              href="#introduction"
              className="text-gray-400 hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Introduction
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-400 hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              href="#studies"
              className="text-gray-400 hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Studies
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Technical Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Language Switcher */}
        <div className="mt-auto">
          <p className="text-gray-400 text-sm mb-2">Language</p>
          <div className="flex space-x-4">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
              English
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
              Bangla
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default SideNavigation;
