import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profileImage from "../../assets/blog_img/mtonoy.jpg";
import Skills from "./Skills";
import "../About/AboutMe.css";
import AnimatedBackground from "./AnimatedBackground";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-gradient-to-br
                 from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5]
                 dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e]
                 min-h-screen"
    >
      <AnimatedBackground></AnimatedBackground>

      <div className="container mx-auto">

        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-teal-300">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-4" />
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 rounded-full overflow-hidden
                            shadow-[0_0_40px_rgba(0,255,255,0.6)]">
              <img
                src={profileImage}
                alt="Md Moniruzzaman"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              I am a <span className="text-teal-300">Computer Specialist</span>
            </h3>

            <TypeAnimation
              sequence={[
                "I am working as a Computer Operator at Open IT Institute.",
                1500,
                "I studied at Kendua Joyhori Spri Govt. High School.",
                1500,
                "Currently learning Web Design & Development.",
                1500,
                "I love building clean & interactive user interfaces.",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-gray-200 text-lg block mb-4"
            />

            <p className="text-gray-200">
              I have experience in working with modern technologies like React, Tailwind CSS, and more. My focus is always on delivering clean, scalable code and a seamless user experience. I believe in the power of design and technology working together to create meaningful solutions.
            </p>
          </motion.div>
        </div>

        {/* Skills Component */}
        <Skills />

      </div>
    </section>
  );
};

export default AboutMe;
