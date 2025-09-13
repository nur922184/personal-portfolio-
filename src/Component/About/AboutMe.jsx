import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  FaDatabase,
  FaLaptopCode,
  FaGithub,
  FaBootstrap,
  FaBug,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiWebpack,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
import profileImage from "../../assets/mt.png";
import "../About/AboutMe.css";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 " />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" />, level: 88 },
  { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 85 },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" />, level: 80 },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white" />, level: 75 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 70 },
  { name: "Express.js", icon: <SiExpress className="text-gray-600 dark:text-white" />, level: 70 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, level: 65 },
  { name: "REST API Development", icon: <FaDatabase className="text-yellow-500" />, level: 75 },
  { name: "Responsive Web Design", icon: <FaLaptopCode className="text-purple-500" />, level: 90 },
  { name: "Firebase Authentication", icon: <SiFirebase className="text-yellow-400" />, level: 70 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" />, level: 85 },
  { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" />, level: 80 },
  { name: "Git & GitHub", icon: <FaGithub className="text-gray-900 dark:text-white" />, level: 75 },
  { name: "Webpack", icon: <SiWebpack className="text-blue-400" />, level: 65 },
  { name: "VS Code", icon: <FaLaptopCode className="text-blue-500" />, level: 90 },
  { name: "Figma", icon: <FaFigma className="text-purple-500" />, level: 70 },
  { name: "Problem Solving & Debugging", icon: <FaBug className="text-red-500" />, level: 85 },
];

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section
      id="about"
      className="py-16 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] 
      dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e] min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 50 + 20 + 'px',
              height: Math.random() * 50 + 20 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-teal-300">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </motion.div>

        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.6)] group">
              <img
                src={profileImage}
                alt="Md Moniruzzaman"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 mix-blend-overlay"></div>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-cyan-400/50 transition-all duration-700"></div>
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                I am a <span className="text-teal-300">Computer Specialist</span>
              </h3>

              <div className="text-lg text-gray-100 mb-4 leading-relaxed min-h-[120px]">
                <TypeAnimation
                  sequence={[
                    "I am now working as computer operator in Open IT Institute.",
                    1500,
                    "I studied from Kendua Joyhori Spri Government High School.",
                    1500,
                    "Now I am working on a special course 'Web Design'.",
                    1500,
                    "I'm a self-driven Frontend Developer with a strong passion for crafting beautiful, user-friendly web applications.",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                  className="type-animation"
                />
              </div>

              <p className="text-gray-200">
                I have experience in working with modern technologies like React,
                Tailwind CSS, and more. My focus is always on delivering clean,
                scalable code and a seamless user experience. I believe in the power
                of design and technology working together to create meaningful
                solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            My <span className="text-teal-300">Skills</span>
          </h3>

          <motion.div 
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                whileHover="hover"
                className="flex flex-col items-center justify-center p-5 rounded-2xl shadow-lg 
                           bg-white/10 dark:bg-gray-900/30 border border-white/10 dark:border-gray-700/30 
                           hover:bg-white/20 dark:hover:bg-gray-800/50 transition duration-300 cursor-pointer relative overflow-hidden group"
              >
                {/* Skill level indicator */}
                <div className="absolute text-sm top-0 left-0 h-1 bg-teal-400 transition-all duration-700" 
                  style={{ width: `${isVisible ? skill.level : 0}%` }}></div>
                
                <div className="text-xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-white text-center font-medium text-sm">{skill.name}</p>
                
                {/* Skill level percentage that appears on hover */}
                <div className="absolute bottom-2 right-2 text-teal-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;