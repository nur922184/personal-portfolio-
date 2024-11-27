import React from 'react';
import { FaGithub, FaLinkedin, FaTimes, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto md:flex  md:flex-row md:items-center md:justify-between">
        {/* Left Section: Copyright */}
        <div className="text-sm  md:text-left">
          © 2024 / Md Moniruzzaman Tonoy
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400 transition"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400 transition"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="#"
            className="text-white hover:text-teal-400 transition"
          >
            <FaTimes size={15} />
          </a>
          <a
            href="mailto:example@example.com"
            className="text-white hover:text-teal-400 transition"
          >
            <FaEnvelope size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
