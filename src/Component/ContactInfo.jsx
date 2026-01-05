import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaTwitter
} from "react-icons/fa";

const contacts = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/nur922184" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/" },
  { name: "Twitter", icon: FaTwitter, url: "https://x.com/moniruzzaman_24" },
  { name: "Facebook", icon: FaFacebook, url: "https://www.facebook.com/md.moniruzzaman.tonoy" },
  { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@moniruzzamam2428" },
  { name: "Email", icon: FaEnvelope, url: "mailto:moniruzzaman2428@gmail.com" },
  { name: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/8801618160869" },
  { name: "Phone", icon: FaPhone, url: "tel:+8801618160869" }
];

const ContactInfo = () => {
  const [ripple, setRipple] = useState(null);

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now()
    });
    setTimeout(() => setRipple(null), 400);
  };

  return (
    <section className="py-14 px-4 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f766e]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact <span className="text-teal-400">Channels</span>
          </h2>
          <p className="text-gray-300 text-sm mt-2">
            Click any platform to connect instantly
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={createRipple}
                whileHover={{ y: -4 }}
                className="
                  relative group overflow-hidden
                  h-16
                  rounded-lg
                  bg-white/10 backdrop-blur-md
                  border border-white/10
                  flex items-center justify-center
                  transition-all duration-300
                  hover:border-teal-400/50
                "
              >
                {/* Ripple */}
                {ripple && (
                  <span
                    key={ripple.id}
                    className="absolute bg-teal-400/30 rounded-full animate-ping"
                    style={{
                      width: 70,
                      height: 70,
                      top: ripple.y - 35,
                      left: ripple.x - 35
                    }}
                  />
                )}

                {/* Icon */}
                <Icon className="text-lg text-white group-hover:text-teal-300 transition" />

                {/* Tooltip */}
                <span
                  className="
                    absolute -top-7
                    scale-0 group-hover:scale-100
                    bg-black/80 text-white text-[10px]
                    px-2 py-1 rounded-md
                    transition-all duration-200
                  "
                >
                  Open {item.name}
                </span>

                {/* Bottom glow line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-teal-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-300 text-xs mt-8">
          I usually reply within <span className="text-teal-400">24 hours</span>
        </p>

      </div>
    </section>
  );
};

export default ContactInfo;
