import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
  FaPhone, FaWhatsapp, FaPaperPlane, FaMapMarkerAlt,
  FaUser, FaSpinner, FaCheck, FaGlobe, FaClock,
  FaShareAlt, FaCopy, FaCalendar, FaVideo,
  FaChevronDown, FaChevronUp, FaQrcode,
  FaFacebook
} from "react-icons/fa";
import { SiGmail, SiMessenger, SiTelegram } from "react-icons/si";
import QRlogo from "../assets/blog_img/qr_logo.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const [expandedInfo, setExpandedInfo] = useState(false);

  const contactRef = useRef(null);
  const tabsRef = useRef(null);

  const contactInfo = {
    email: "moniruzzaman2428@gmail.com",
    phone: "+8801618160869",
    whatsapp: "+8801618160869",
    location: "Kendua, Netrokona, Bangladesh",
    timezone: "GMT+6 (Bangladesh Standard Time)",
    workingHours: "9:00 AM - 6:00 PM (Sunday-Thursday)"
  };

  const socialLinks = [
    { platform: "GitHub", icon: <FaGithub />, url: "https://github.com/nur922184", color: "from-gray-800 to-black", username: "@nur922184" },
    { platform: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/", color: "from-blue-700 to-blue-800", username: "Md Moniruzzaman" },
    { platform: "Twitter", icon: <FaTwitter />, url: "https://x.com/moniruzzaman_24", color: "from-cyan-500 to-blue-500", username: "@moniruzzaman_24" },
    { platform: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/md.moniruzzaman.tonoy", color: "from-blue-700 to-blue-800", username: "md.moniruzzaman.tonoy" },
    { platform: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/8801618160869", color: "from-green-600 to-green-700", username: "+8801618160869" },
    { platform: "Telegram", icon: <SiTelegram />, url: "https://t.me/username", color: "from-blue-500 to-blue-600", username: "@username" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "a9b6bb6c-f178-437d-a90a-f26a96a2c11d");
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickContact = (type) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${contactInfo.email}?subject=Let's Connect!&body=Hello Moniruzzaman,`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=Hello%20Moniruzzaman!`);
        break;
      case 'call':
        window.open(`tel:${contactInfo.phone}`);
        break;
      case 'calendar':
        window.open('https://calendar.google.com/calendar/u/0/r/eventedit');
        break;
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setTimeout(() => {
      if (tabsRef.current) {
        tabsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    }, 100);
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-teal-900/30 overflow-hidden py-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Floating Elements */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-3 sm:px-4 py-8 md:py-16 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-3 md:mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
              <FaPaperPlane className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Have a project in mind? Let's collaborate and create something amazing together!
          </p>
        </motion.div>

        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden space-y-6">
          {/* Contact Information Card - Always Visible */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-teal-500 rounded-full"></div>
              Contact Information
            </h3>

            <div className="space-y-3">
              {[
                { icon: <FaEnvelope />, label: "Email", value: contactInfo.email, color: "text-red-400" },
                { icon: <FaPhone />, label: "Phone", value: contactInfo.phone, color: "text-green-400" },
                { icon: <FaMapMarkerAlt />, label: "Location", value: contactInfo.location, color: "text-blue-400" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-teal-500/30 transition-all duration-300">
                  <div className={`p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-400 truncate">{item.label}</div>
                    <div className="text-white font-medium text-sm truncate">{item.value}</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(item.value)}
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-teal-400 transition-colors flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    {copied ? <FaCheck className="text-green-400 w-3 h-3" /> : <FaCopy className="w-3 h-3" />}
                  </button>
                </div>
              ))}
            </div>

            {/* Expandable Additional Info */}
            <div className="mt-4">
              <button
                onClick={() => setExpandedInfo(!expandedInfo)}
                className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-teal-500/30 transition-all text-sm"
              >
                <span className="text-gray-300">More Information</span>
                {expandedInfo ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
              </button>

              <AnimatePresence>
                {expandedInfo && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 bg-white/5 rounded-lg">
                          <div className="text-teal-400 font-bold text-sm">24h</div>
                          <div className="text-xs text-gray-400">Response Time</div>
                        </div>
                        <div className="text-center p-2 bg-white/5 rounded-lg">
                          <div className="text-teal-400 font-bold text-sm">100%</div>
                          <div className="text-xs text-gray-400">Response Rate</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          onClick={() => handleQuickContact('whatsapp')}
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm font-medium w-full"
                        >
                          <FaWhatsapp className="inline mr-2" />
                          WhatsApp Me
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Tabs Section */}
          <div
            ref={tabsRef}
            tabIndex={-1}
            className="sticky top-4 z-20 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-1"
          >
            <div className="flex justify-between">
              {["contact", "social", "quick"].map(tab => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`flex-1 px-2 py-3 rounded-lg font-medium transition-all text-xs sm:text-sm ${activeTab === tab
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white'
                    : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {tab === "contact" && "Send Message"}
                  {tab === "social" && "Social Links"}
                  {tab === "quick" && "Quick Contact"}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content based on Active Tab */}
          <div className="space-y-6">
            {/* Contact Form */}
            {activeTab === "contact" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FaPaperPlane className="text-teal-400" />
                  Send a Message
                </h3>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-xl p-6 text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-3">
                        <FaCheck className="w-6 h-6 text-teal-400" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Message Sent!</h4>
                      <p className="text-gray-300 text-sm">
                        Thank you for reaching out. I'll respond within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-gray-400 mb-1 text-sm">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 mb-1 text-sm">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 mb-1 text-sm">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Project Inquiry"
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 mb-1 text-sm">Message *</label>
                        <textarea
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell me about your project..."
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30 resize-none text-sm"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all text-sm ${loading
                          ? 'bg-teal-400/50 cursor-not-allowed'
                          : 'bg-gradient-to-r from-teal-500 to-emerald-500'
                          }`}
                      >
                        {loading ? (
                          <>
                            <FaSpinner className="animate-spin w-4 h-4" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Social Links */}
            {activeTab === "social" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FaShareAlt className="text-teal-400" />
                  Social Links
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.slice(0, 6).map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden rounded-lg p-3 text-center ${social.color} bg-gradient-to-br`}
                    >
                      <div className="relative z-10">
                        <div className="text-lg mb-1">{social.icon}</div>
                        <div className="text-white font-semibold text-xs truncate">{social.platform}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Quick Contact */}
            {activeTab === "quick" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FaPaperPlane className="text-teal-400" />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <FaEnvelope />, label: "Email", action: () => handleQuickContact('email'), color: "from-red-500 to-red-600" },
                    { icon: <FaWhatsapp />, label: "WhatsApp", action: () => handleQuickContact('whatsapp'), color: "from-green-500 to-green-600" },
                    { icon: <FaPhone />, label: "Call", action: () => handleQuickContact('call'), color: "from-blue-500 to-blue-600" },
                    { icon: <FaCalendar />, label: "Schedule", action: () => handleQuickContact('calendar'), color: "from-purple-500 to-purple-600" }
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={item.action}
                      className={`group relative overflow-hidden rounded-lg p-4 text-center ${item.color} bg-gradient-to-br`}
                    >
                      <div className="relative z-10">
                        <div className="text-xl mb-2 text-white">{item.icon}</div>
                        <div className="text-white font-semibold text-sm">{item.label}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Location Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <FaMapMarkerAlt className="text-teal-400" />
                Location
              </h3>
              <div className="relative h-40 rounded-lg overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">Kendua, Netrokona</p>
                    <p className="text-gray-300 text-xs">Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-gray-400 text-xs">Available for remote work worldwide</p>
                <button
                  onClick={() => window.open('https://maps.google.com/?q=Kendua+Netrokona+Bangladesh', '_blank')}
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-teal-600/20 border border-teal-500/30 rounded-lg text-teal-300 text-xs font-medium w-full"
                >
                  Open in Google Maps
                </button>
              </div>
            </div>

            {/* QR Code Card - Fixed */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <FaQrcode className="text-teal-400" />
                QR Code
              </h3>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-3 p-1">
                  {/* QR Code ছবি */}
                  <div className="w-28 h-28 bg-white rounded-lg overflow-hidden">
                    <img
                      src={QRlogo}
                      alt="QR Code"
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        // যদি ছবি লোড না হয়, তাহলে fallback দেখাবে
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        parent.innerHTML = `
              <div class="w-full h-full flex flex-col items-center justify-center">
                <FaQrcode class="w-10 h-10 text-gray-800 mb-1" />
                <div class="text-xs font-bold text-gray-800">Md. Moniruzzaman</div>
                <div class="text-[10px] text-gray-600">Full Stack Developer</div>
              </div>
            `;
                      }}
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-xs px-2 mb-2">
                  Scan QR code to save contact information
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => copyToClipboard(contactInfo.email)}
                    className="px-3 py-1.5 bg-teal-500/20 text-teal-300 rounded-lg text-xs hover:bg-teal-500/30 transition-all"
                  >
                    <FaCopy className="inline mr-1 w-3 h-3" />
                    Copy Email
                  </button>
                  <button
                    onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`, '_blank')}
                    className="px-3 py-1.5 bg-green-500/20 text-green-300 rounded-lg text-xs hover:bg-green-500/30 transition-all"
                  >
                    <FaWhatsapp className="inline mr-1 w-3 h-3" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Contact Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-500 rounded-full"></div>
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  { icon: <FaEnvelope />, label: "Email", value: contactInfo.email, color: "text-red-400" },
                  { icon: <FaPhone />, label: "Phone", value: contactInfo.phone, color: "text-green-400" },
                  { icon: <FaMapMarkerAlt />, label: "Location", value: contactInfo.location, color: "text-blue-400" },
                  { icon: <FaClock />, label: "Working Hours", value: contactInfo.workingHours, color: "text-yellow-400" },
                  { icon: <FaGlobe />, label: "Timezone", value: contactInfo.timezone, color: "text-purple-400" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">{item.label}</div>
                      <div className="text-white font-medium truncate">{item.value}</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(item.value)}
                      className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-teal-400 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setExpandedInfo(!expandedInfo)}
                  className="w-full flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-teal-500/30 transition-all"
                >
                  <span className="text-gray-300">Additional Information</span>
                  {expandedInfo ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                <AnimatePresence>
                  {expandedInfo && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4">
                        <p className="text-gray-400 text-sm">
                          I typically respond within 24 hours. For urgent matters, please use WhatsApp or call.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-white/5 rounded-lg">
                            <div className="text-teal-400 font-bold">24h</div>
                            <div className="text-xs text-gray-400">Response Time</div>
                          </div>
                          <div className="text-center p-3 bg-white/5 rounded-lg">
                            <div className="text-teal-400 font-bold">100%</div>
                            <div className="text-xs text-gray-400">Response Rate</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* QR Code Section - Fixed */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaQrcode className="text-teal-400" />
                Quick Connect
              </h3>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 p-2">
                  {/* QR Code ছবি */}
                  <div className="w-40 h-40 bg-white rounded-xl overflow-hidden">
                    <img
                      src={QRlogo}
                      alt="QR Code"
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        // যদি ছবি লোড না হয়, তাহলে fallback দেখাবে
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        parent.innerHTML = `
              <div class="w-full h-full flex flex-col items-center justify-center p-2">
                <FaQrcode class="w-14 h-14 text-gray-800 mb-2" />
                <div class="text-sm font-bold text-gray-800">Md. Moniruzzaman</div>
                <div class="text-xs text-gray-600">Full Stack Developer</div>
              </div>
            `;
                      }}
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Scan this QR code to save my contact information directly to your phone
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => copyToClipboard(contactInfo.email)}
                    className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-xl text-sm hover:bg-teal-500/30 transition-all flex items-center gap-2"
                  >
                    <FaCopy className="w-3.5 h-3.5" />
                    Copy Email
                  </button>
                  <button
                    onClick={() => copyToClipboard(contactInfo.phone)}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-sm hover:bg-blue-500/30 transition-all flex items-center gap-2"
                  >
                    <FaCopy className="w-3.5 h-3.5" />
                    Copy Phone
                  </button>
                  <button
                    onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`, '_blank')}
                    className="px-4 py-2 bg-green-500/20 text-green-300 rounded-xl text-sm hover:bg-green-500/30 transition-all flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-xs">
                    Contains: Email, Phone, LinkedIn & Portfolio links
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Dynamic Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Desktop Tabs */}
            <div
              ref={tabsRef}
              tabIndex={-1}
              className="flex justify-center mb-4"
            >
              <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 w-full max-w-md">
                {["contact", "social", "quick"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all ${activeTab === tab
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white'
                      : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {tab === "contact" && "Send Message"}
                    {tab === "social" && "Social Links"}
                    {tab === "quick" && "Quick Contact"}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            {activeTab === "contact" && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-teal-500 rounded-full"></div>
                  Send a Message
                </h3>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-2xl p-8 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                        <FaCheck className="w-8 h-8 text-teal-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                      <p className="text-gray-300">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                      <motion.button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-400 mb-2">Full Name *</label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="John Doe"
                              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">Email Address *</label>
                          <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="john@example.com"
                              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-400 mb-2">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Project Inquiry"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 mb-2">Message *</label>
                        <textarea
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell me about your project..."
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30 resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold transition-all ${loading
                          ? 'bg-teal-400/50 cursor-not-allowed'
                          : 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:shadow-lg hover:shadow-teal-500/25'
                          }`}
                      >
                        {loading ? (
                          <>
                            <FaSpinner className="animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Social Links */}
            {activeTab === "social" && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaShareAlt className="text-teal-400" />
                  Connect on Social Media
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative overflow-hidden rounded-2xl p-6 text-center ${social.color} bg-gradient-to-br`}
                    >
                      <div className="relative z-10">
                        <div className="text-2xl mb-3">{social.icon}</div>
                        <div className="text-white font-semibold">{social.platform}</div>
                        <div className="text-white/70 text-sm truncate">{social.username}</div>
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Contact */}
            {activeTab === "quick" && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaPaperPlane className="text-teal-400" />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <FaEnvelope />, label: "Email Me", action: () => handleQuickContact('email'), color: "from-red-500 to-red-600" },
                    { icon: <FaWhatsapp />, label: "WhatsApp", action: () => handleQuickContact('whatsapp'), color: "from-green-500 to-green-600" },
                    { icon: <FaPhone />, label: "Call Now", action: () => handleQuickContact('call'), color: "from-blue-500 to-blue-600" },
                    { icon: <FaCalendar />, label: "Schedule Call", action: () => handleQuickContact('calendar'), color: "from-purple-500 to-purple-600" },
                    { icon: <FaVideo />, label: "Video Call", action: () => window.open('https://meet.google.com/new'), color: "from-cyan-500 to-blue-500" },
                    { icon: <SiTelegram />, label: "Telegram", action: () => window.open('https://t.me/username'), color: "from-blue-400 to-blue-500" }
                  ].map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={item.action}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative overflow-hidden rounded-2xl p-6 text-center ${item.color} bg-gradient-to-br`}
                    >
                      <div className="relative z-10">
                        <div className="text-2xl mb-3 text-white">{item.icon}</div>
                        <div className="text-white font-semibold">{item.label}</div>
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Map/Address Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-teal-400" />
                Location
              </h3>
              <div className="relative h-64 rounded-xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">Kendua, Netrokona</p>
                    <p className="text-gray-400">Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-400">Available for remote work worldwide</p>
                <button
                  onClick={() => window.open('https://maps.google.com/?q=Kendua+Netrokona+Bangladesh', '_blank')}
                  className="mt-3 px-6 py-2 bg-gradient-to-r from-teal-500/20 to-teal-600/20 border border-teal-500/30 rounded-xl text-teal-300 hover:bg-teal-500/30 transition-all"
                >
                  Open in Google Maps
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-8 md:mt-16 text-center px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-teal-500/20 mb-4 md:mb-6">
            <FaClock className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
          </div>
          <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">Response Time</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            I strive to respond to all inquiries within 24 hours. For urgent matters,
            please use WhatsApp or give me a call directly.
          </p>
          <div className="flex justify-center gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-teal-400">24h</div>
              <div className="text-gray-400 text-xs md:text-sm">Max Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-teal-400">100%</div>
              <div className="text-gray-400 text-xs md:text-sm">Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-teal-400">7/7</div>
              <div className="text-gray-400 text-xs md:text-sm">Days Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;