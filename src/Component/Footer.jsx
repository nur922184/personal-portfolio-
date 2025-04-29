import React from 'react';
import { FaGithub, FaLinkedin, FaTimes, FaEnvelope, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto md:flex  md:flex-row md:items-center md:justify-between">
        {/* Left Section: Copyright */}
        <div className="text-sm  md:text-left">
          © 2025 / Md Moniruzzaman Tonoy
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <a
            href="https://github.com/nur922184"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400 transition"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400 transition"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="https://x.com/moniruzzaman_24"
            target="_blank"
            className="text-white hover:text-teal-400 transition"
          >
            <FaTimes size={15} />
          </a>
          <a
            href="https://www.facebook.com/md.moniruzzaman.tonoy"
            target="_blank"
            className="text-white hover:text-teal-400 transition"
          >
            <FaFacebook size={15} />
          </a>
          <a
            href="https://www.youtube.com/@moniruzzamam2428"
            target="_blank"
            className="text-white hover:text-teal-400 transition"
          >
            <FaYoutube size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
