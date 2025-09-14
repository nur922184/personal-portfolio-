import React, { useState } from "react";
import { motion } from "framer-motion";
import Me from '../assets/me.jpg'
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaUser,
  FaTimes
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে ফর্ম সাবমিশন লজিক যোগ করুন
    console.log(formData);
    setIsSubmitted(true);

    // রিসেট ফর্ম
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-teal-300">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            I look forward to hearing from you. Please fill out the form below or contact me directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-teal-400/20 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-teal-300 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-200">Kendua, Netrokona, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-400/20 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-teal-300 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:moniruzzaman2428@gmail.com">moniruzzaman2428@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-400/20 p-3 rounded-full mr-4">
                  <FaWhatsapp className="text-teal-300 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-medium">WhatsApp</h4>
                  <a href="https://wa.me/8801618160869?text=Hello%20Moniruzzaman,%20I%20want%20to%20connect%20with%20you.">+8801618160869</a>
                  <p className="text-gray-200"></p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-400/20 p-3 rounded-full mr-4">
                  <FaPhone className="text-teal-300 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a href="tel:+88016181608690">+8801618160869</a>
                  <p className="text-gray-200"></p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <div className="flex justify-center mt-6">
                <img
                  src={Me} // Replace with actual image URL
                  alt="Contact us"
                  className="w-24 h-24 bg-cover rounded-full border-4 border-teal-900"
                />
              </div>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/nur922184"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaGithub size={18} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaLinkedin size={18} />
                </motion.a>

                <motion.a
                  href="https://x.com/moniruzzaman_24"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaTimes size={18} />
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/md.moniruzzaman.tonoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaFacebook size={18} />
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/@moniruzzamam2428"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaYoutube size={18} />
                </motion.a>

                <motion.a
                  href="https://wa.me/8801618160869?text=Hello%20Moniruzzaman,%20I%20want%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 dark:bg-gray-800/50 p-3 rounded-full text-white hover:bg-teal-400/20 transition-colors duration-300"
                >
                  <FaWhatsapp size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>

            {isSubmitted ? (
              <motion.div
                className="bg-teal-400/20 border border-teal-400/30 text-teal-300 p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FaPaperPlane className="inline-block mr-2" />
                আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমি শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 text-white rounded-lg focus:ring-teal-300 focus:border-teal-300 block w-full pl-10 p-3 placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 text-white rounded-lg focus:ring-teal-300 focus:border-teal-300 block w-full pl-10 p-3 placeholder-gray-400"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="bg-white/5 border border-white/10 text-white rounded-lg focus:ring-teal-300 focus:border-teal-300 block w-full p-3 placeholder-gray-400"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-teal-400 hover:bg-teal-500 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  Send Message <FaPaperPlane className="ml-2" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;