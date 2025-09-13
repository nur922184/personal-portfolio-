import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaEnvelope, FaPhone, FaWhatsapp, FaTwitter } from "react-icons/fa";

const ContactInfo = () => {
  const contacts = [
    { icon: <FaGithub className="text-xl" />, name: "GitHub", url: "https://github.com/nur922184", color: "from-gray-800 to-gray-900" },
    { icon: <FaLinkedin className="text-xl" />, name: "LinkedIn", url: "https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/", color: "from-blue-700 to-blue-800" },
    { icon: <FaTwitter className="text-xl" />, name: "Twitter", url: "https://x.com/moniruzzaman_24", color: "from-blue-400 to-blue-500" },
    { icon: <FaFacebook className="text-xl" />, name: "Facebook", url: "https://www.facebook.com/md.moniruzzaman.tonoy", color: "from-blue-600 to-blue-700" },
    { icon: <FaYoutube className="text-xl" />, name: "YouTube", url: "https://www.youtube.com/@moniruzzamam2428", color: "from-red-600 to-red-700" },
    { icon: <FaEnvelope className="text-xl" />, name: "Email", url: "mailto:moniruzzaman2428@gmail.com", color: "from-red-400 to-red-500" },
    { icon: <FaWhatsapp className="text-xl" />, name: "WhatsApp", url: "https://wa.me/8801618160869", color: "from-green-500 to-green-600" },
    { icon: <FaPhone className="text-xl" />, name: "Phone", url: "tel:+8801618160869", color: "from-green-600 to-green-700" },
  ];

  return (
    <div className=" flex items-center justify-center py-8 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e]">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4"></h1>
          <p className="text-gray-200 max-w-xl mx-auto">You can contact me directly through any of the following means</p>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-4"></div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target={contact.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-0.5 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-5 border border-white/10 dark:border-gray-700/20 h-full flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-white/5 group-hover:border-teal-400/30">
                <div className="mb-3 p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-white font-medium text-center">{contact.name}</h3>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-teal-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          className="text-center mt-12 pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-300 text-sm">I usually respond within 24 hours.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactInfo;