import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
  FaPhone, FaWhatsapp, FaPaperPlane, FaMapMarkerAlt,
  FaUser, FaSpinner, FaCheck, FaGlobe, FaClock,
  FaShareAlt, FaCopy, FaCalendar, FaVideo,
  FaChevronDown, FaChevronUp, FaQrcode
} from "react-icons/fa";
import { SiGmail, SiMessenger, SiTelegram } from "react-icons/si";

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
    { platform: "Gmail", icon: <SiGmail />, url: "mailto:moniruzzaman2428@gmail.com", color: "from-red-600 to-red-700", username: "moniruzzaman2428" },
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
    switch(type) {
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
        // Google Calendar link
        window.open('https://calendar.google.com/calendar/u/0/r/eventedit');
        break;
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-teal-900/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
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

      <div className="relative container mx-auto px-4 py-16 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
              <FaPaperPlane className="w-6 h-6 text-teal-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together!
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1">
            {["contact", "social", "quick"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${activeTab === tab
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

        <div className="grid lg:grid-cols-2 gap-8">
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

              {/* Expandable Additional Info */}
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

            {/* QR Code Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaQrcode className="text-teal-400" />
                Quick Connect
              </h3>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center">
                    {/* Placeholder for actual QR code */}
                    <div className="text-center">
                      <FaQrcode className="w-20 h-20 text-gray-800 mx-auto mb-2" />
                      <div className="text-xs text-gray-600">Scan to save contact</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Scan this QR code to save my contact information directly to your phone
                </p>
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
              <div className="relative h-64 rounded-xl overflow-hidden">
                {/* Map Placeholder */}
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
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-6">
            <FaClock className="w-6 h-6 text-teal-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Response Time</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I strive to respond to all inquiries within 24 hours. For urgent matters, 
            please use WhatsApp or give me a call directly.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">24h</div>
              <div className="text-gray-400">Max Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">100%</div>
              <div className="text-gray-400">Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">7/7</div>
              <div className="text-gray-400">Days Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;