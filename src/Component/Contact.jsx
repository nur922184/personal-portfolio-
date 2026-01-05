import React, { useState } from "react";
import { motion } from "framer-motion";
import Me from "../assets/me.jpg";
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
  FaSpinner,
  FaTimes
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "a9b6bb6c-f178-437d-a90a-f26a96a2c11d");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5]
                 dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-teal-300">Me</span>
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-4" />
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaboration, freelance work, or any queries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-5 text-gray-200">
              <Info
                icon={<FaMapMarkerAlt />}
                text="Kendua, Netrokona, Bangladesh"
              />

              <Info
                icon={<FaEnvelope />}
                text="moniruzzaman2428@gmail.com"
                href="mailto:moniruzzaman2428@gmail.com"
              />

              <Info
                icon={<FaWhatsapp />}
                text="+8801618160869"
                href="https://wa.me/8801618160869?text=Hello%20Moniruzzaman"
              />

              <Info
                icon={<FaPhone />}
                text="+8801618160869"
                href="tel:+8801618160869"
              />
            </div>

            <div className="mt-8 text-center">
              <img
                src={Me}
                alt="Profile"
                className="w-24 h-24 mx-auto rounded-full border-4 border-teal-400"
              />

              <div className="flex justify-center gap-3 mt-6">
                <Social href="https://github.com/nur922184"><FaGithub /></Social>
                <Social href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/"><FaLinkedin /></Social>
                <Social href="https://x.com/moniruzzaman_24"><FaTimes /></Social>
                <Social href="https://facebook.com"><FaFacebook /></Social>
                <Social href="https://youtube.com"><FaYoutube /></Social>
                <Social href="https://wa.me/8801618160869"><FaWhatsapp /></Social>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>

            {isSubmitted ? (
              <div className="bg-teal-400/20 border border-teal-400 text-teal-200 p-4 rounded-lg text-center">
                <FaPaperPlane className="inline mr-2" />
                Message sent successfully!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input icon={<FaUser />} name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                <Input icon={<FaEnvelope />} name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-teal-400"
                />

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-white
                    ${loading ? "bg-teal-300 cursor-not-allowed" : "bg-teal-400 hover:bg-teal-500"}`}
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ===== Reusable Components ===== */
const Info = ({ icon, text, href }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-teal-400/20 rounded-full text-teal-300">
      {icon}
    </div>

    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-teal-300 transition-colors duration-200"
      >
        {text}
      </a>
    ) : (
      <p className="text-gray-200">{text}</p>
    )}
  </div>
);

const Input = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      {...props}
      required
      className="w-full pl-10 p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-teal-400"
    />
  </div>
);

const Social = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -4, scale: 1.05 }}
    className="p-3 rounded-full bg-white/10 text-white hover:bg-teal-400/30"
  >
    {children}
  </motion.a>
);

export default Contact;
