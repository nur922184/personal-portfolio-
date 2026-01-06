import React, { useState, useEffect } from 'react';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, 
  FaFacebook, FaYoutube, FaHeart, FaArrowUp, 
  FaWhatsapp, FaCode, FaRocket, FaCoffee,
  FaMapMarkerAlt, FaPhone, FaPaperPlane,
  FaExternalLinkAlt, FaRegClock, FaRegCopyright
} from 'react-icons/fa';
import { SiGmail, SiTelegram, SiDiscord } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      // Here you would typically make an API call
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/nur922184", color: "hover:bg-gray-900" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/", color: "hover:bg-blue-700" },
    { icon: <FaTwitter />, label: "Twitter", url: "https://x.com/moniruzzaman_24", color: "hover:bg-cyan-500" },
    { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/md.moniruzzaman.tonoy", color: "hover:bg-blue-600" },
    { icon: <FaWhatsapp />, label: "WhatsApp", url: "https://wa.me/8801618160869", color: "hover:bg-green-600" },
    { icon: <SiGmail />, label: "Gmail", url: "mailto:moniruzzaman2428@gmail.com", color: "hover:bg-red-600" },
    { icon: <SiTelegram />, label: "Telegram", url: "#", color: "hover:bg-blue-500" },
    { icon: <SiDiscord />, label: "Discord", url: "#", color: "hover:bg-indigo-600" },
  ];

  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#my-works" },
    { name: "Resume", url: "#resume" },
    { name: "Blog", url: "#blog" },
    { name: "Contact", url: "#contact" },
  ];

  const services = [
    { name: "Web Development", icon: <FaCode /> },
    { name: "UI/UX Design", icon: <FaRocket /> },
    { name: "Frontend Solutions", icon: <FaCoffee /> },
    { name: "Consultation", icon: <FaPaperPlane /> },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Kendua, Netrokona, Bangladesh" },
    { icon: <FaPhone />, text: "+880 1618 160869" },
    { icon: <FaEnvelope />, text: "moniruzzaman2428@gmail.com" },
    { icon: <FaRegClock />, text: "Available 24/7 for emergencies" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-12 z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Md Moniruzzaman
                  </h3>
                  <p className="text-gray-400 text-sm">Frontend Developer</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Crafting exceptional digital experiences with modern web technologies. 
                Passionate about clean code, beautiful design, and user-focused solutions.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.slice(0, 6).map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 ${social.color} hover:text-white transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-teal-500 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.url}
                    className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors duration-300 group"
                  >
                    <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
              Services
            </h4>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-teal-500/30 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 text-teal-400">
                    {service.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {service.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
              Stay Updated
            </h4>
            
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                    <FaHeart className="w-6 h-6 text-teal-400" />
                  </div>
                  <h5 className="text-white font-semibold mb-2">Thank You!</h5>
                  <p className="text-gray-300 text-sm">
                    You've been subscribed to updates. Stay tuned for exciting content!
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <p className="text-gray-300 mb-4 text-sm">
                    Subscribe to get updates on new projects and tech insights.
                  </p>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30"
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
                    >
                      Subscribe Now
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-teal-400">
                  {info.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{info.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <FaRegCopyright className="w-4 h-4" />
            <span>{new Date().getFullYear()} All rights reserved.</span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="flex items-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by Md Moniruzzaman
            </span>
          </motion.div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Cookies
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-20 right-3 z-50 p-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <div className="relative">
              <FaArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-4xl"
        >
          {"</>"}
        </motion.div>
      </div>

      <div className="absolute top-20 right-10 opacity-20">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-3xl"
        >
          <FaRocket />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;