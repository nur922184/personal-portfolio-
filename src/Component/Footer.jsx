import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook, FaYoutube, FaHeart, FaArrowUp, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-6 px-4 relative">
      {/* Main Footer Content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Md Moniruzzaman
            </h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer & UI/UX Enthusiast passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex flex-row justify-center md:justify-start space-x-4">
              <a
                href="mailto:moniruzzaman2428@gmail.com"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                aria-label="Email"
              >
                <span>moniruzzaman2428@gmail.com</span><FaEnvelope size={18} />
              </a>
            </div>
            <div className="flex flex-row justify-center md:justify-start space-x-4">
              <a
                href="tel:+8801618160869"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 ml-2"
                aria-label="Phone"
              >
                <span className="text-sm">+8801618-160869</span>
              </a>
            </div>
          </div>
      
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-teal-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Connect With Me */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Connect With Me</h4>
              <p className="text-gray-400 mb-4">Let's work together on something amazing!</p>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://github.com/nur922184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://x.com/moniruzzaman_24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://www.facebook.com/md.moniruzzaman.tonoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://wa.me/8801618160869?text=Hello%20Moniruzzaman,%20I%20want%20to%20connect%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  aria-label="Whatsapp"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
        
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex  md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Made with <FaHeart className="inline text-red-500 mx-1" /> by Md Moniruzzaman Tonoy
          </div> <br /> <br /><br /> <br /><br />

          <div className="flex justify-between items-center space-x-6">
            <a
              href="https://www.youtube.com/@moniruzzamam2428"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full transition-colors duration-300 flex items-center"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-12 left-1/4 w-24 h-24 bg-teal-500 rounded-full filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-8 right-1/4 w-16 h-16 bg-purple-500 rounded-full filter blur-xl opacity-20"></div>
      </div>
    </footer>
  );
};

export default Footer;