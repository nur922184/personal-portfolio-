import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { 
  FaBook, FaBriefcase, FaDev, FaGraduationCap, 
  FaHome, FaUser, FaFileAlt, FaGithub, FaLinkedin,
  FaTwitter, FaBars, FaTimes, FaRocket, FaCode
} from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import AdvancedAnimatedName from './AdvancedAnimatedName';

const Navber = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Active section detection
    const sections = ['home', 'about', 'education', 'work', 'contact', 'blog', 'resume'];
    const handleSectionChange = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'contact', label: 'Contact', icon: <MdContactPhone /> },
    { id: 'work', label: 'Projects', icon: <FaBriefcase /> },
    { id: 'blog', label: 'Blog', icon: <FaBook /> },
    { id: 'resume', label: 'Resume', icon: <FaFileAlt /> },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/nur922184', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/moniruzzaman_24', label: 'Twitter' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gradient-to-br from-gray-900/95 via-black/95 to-teal-900/90 backdrop-blur-xl shadow-2xl'
            : 'bg-gradient-to-br from-gray-900/80 via-black/80 to-teal-900/70 backdrop-blur-lg'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <div className="text-white font-bold">
                <AdvancedAnimatedName />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-100}
                  onSetActive={() => setActiveSection(item.id)}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-teal-500/20 to-emerald-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-t-full"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Social Links */}
              <div className="hidden md:flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <BsMoon size={18} /> : <BsSun size={18} />}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 opacity-30" />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 z-50 h-screen w-80 bg-gradient-to-br from-gray-900 via-black to-teal-900/30 backdrop-blur-xl shadow-2xl lg:hidden"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                      <FaRocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Navigation</div>
                      <div className="text-gray-400 text-sm">Md Moniruzzaman</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-lg font-bold text-white">50+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-lg font-bold text-white">3+</div>
                    <div className="text-xs text-gray-400">Years Exp</div>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Items */}
              <div className="p-4">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.id}
                      smooth={true}
                      duration={800}
                      spy={true}
                      offset={-100}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ x: 10 }}
                        className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white'
                            : 'bg-white/5 text-gray-400'
                        }`}>
                          {item.icon}
                        </div>
                        <div className="font-medium">{item.label}</div>
                        {activeSection === item.id && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 animate-pulse" />
                        )}
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* Social Links in Mobile Menu */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-gray-400 text-sm mb-4">Connect with me</div>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 p-3 rounded-xl bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {social.icon}
                        <span className="text-xs">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Download Resume Button */}
                <Link
                  to="resume"
                  smooth={true}
                  duration={800}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <FaFileAlt />
                      <span>Download Resume</span>
                    </div>
                  </motion.button>
                </Link>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <div className="text-center text-gray-500 text-sm">
                  © {new Date().getFullYear()} Md Moniruzzaman
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation for Small Screens */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative"
        >
          {/* Floating Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-50" />
          
          {/* Navigation Container */}
          <div className="relative bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
            <ul className="flex justify-around items-center w-80 h-14 px-4">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-100}
                    onSetActive={() => setActiveSection(item.id)}
                  >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className={`relative p-2 rounded-lg cursor-pointer transition-all ${
                        activeSection === item.id
                          ? 'text-white bg-gradient-to-r from-teal-500/30 to-emerald-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="text-lg">{item.icon}</div>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="mobileActive"
                          className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
                        />
                      )}
                    </motion.div>
                  </Link>
                </li>
              ))}
              
              {/* More Menu Button */}
              <li>
                <motion.button
                  onClick={() => setMobileMenuOpen(true)}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  <FaBars size={18} />
                </motion.button>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navber;