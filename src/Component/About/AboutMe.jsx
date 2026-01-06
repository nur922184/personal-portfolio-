import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profileImage from "../../assets/blog_img/mtonoy.jpg";
import Skills from "./Skills";
import "../About/AboutMe.css";
import { FaDownload, FaUser, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCalendar, FaCode, FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const personalInfo = [
    { icon: <FaUser />, label: "Full Name", value: "Md Moniruzzaman" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Kendua, Netrokona, Bangladesh" },
    { icon: <FaEnvelope />, label: "Email", value: "moniruzzaman2428@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+880 1618 160869" },
    { icon: <FaCalendar />, label: "Birth Date", value: "07 May 2007" },
    { icon: <FaCode />, label: "Freelance", value: "Available" }
  ];

  const education = [
    { year: "2010-2012", title: "Secondary School Certificate", institution: "Kendua Joyhori Spri Govt. High School" },
    { year: "2020-2021", title: "Web Development Course", institution: "Open IT Institute" },
    { year: "2022-Present", title: "Advanced JavaScript & React", institution: "Online Platforms & Self Study" }
  ];

  const experience = [
    { year: "2021-Present", title: "Computer Operator", company: "Open IT Institute", description: "Managing computer systems and assisting students" },
    { year: "2022-Present", title: "Frontend Developer", company: "Freelance", description: "Building web applications for various clients" }
  ];

  const interests = [
    { icon: <FaCode />, label: "Coding", color: "from-blue-500 to-cyan-500" },
    { icon: <FaRocket />, label: "Technology", color: "from-purple-500 to-pink-500" },
    { icon: <FaLightbulb />, label: "Learning", color: "from-yellow-500 to-orange-500" },
    { icon: <FaHeart />, label: "Open Source", color: "from-red-500 to-pink-500" }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-teal-900/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
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
              <FaUser className="w-6 h-6 text-teal-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code. Passionate developer, lifelong learner, and creative problem solver.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Image Card */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative group">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-lg z-20">
                <FaCode className="w-5 h-5" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg z-20">
                <FaRocket className="w-6 h-6" />
              </div>

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-white/10 backdrop-blur-sm bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <img
                  src={profileImage}
                  alt="Md Moniruzzaman"
                  className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Download CV Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
              >
                <FaDownload />
                Download CV
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "50+", label: "Projects" },
                { number: "100%", label: "Satisfaction" },
                { number: "24/7", label: "Availability" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-teal-500/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Information Tabs */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { id: "personal", label: "Personal Info", icon: <FaUser /> },
                { id: "education", label: "Education", icon: <FaGraduationCap /> },
                { id: "experience", label: "Experience", icon: <FaBriefcase /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/25'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              {activeTab === "personal" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                  
                  {/* Type Animation */}
                  <div className="mb-8">
                    <TypeAnimation
                      sequence={[
                        "I am a passionate Computer Specialist",
                        1500,
                        "Working as a Computer Operator at Open IT Institute",
                        1500,
                        "Studied at Kendua Joyhori Spri Govt. High School",
                        1500,
                        "Currently mastering Web Design & Development",
                        1500,
                        "I love building clean & interactive UIs",
                        1500,
                      ]}
                      speed={50}
                      repeat={Infinity}
                      className="text-xl text-teal-300 font-medium block mb-4 min-h-[28px]"
                    />
                    <p className="text-gray-300 leading-relaxed">
                      A dedicated professional with a passion for technology and problem-solving. 
                      With experience in computer operations and ongoing education in web development, 
                      I'm constantly expanding my skills to create innovative digital solutions. 
                      I believe in the power of technology to transform lives and businesses.
                    </p>
                  </div>

                  {/* Personal Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {personalInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-teal-500/30 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 flex items-center justify-center text-teal-400">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{info.label}</div>
                          <div className="text-white font-medium">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Education & Training</h3>
                  
                  <div className="relative pl-8 before:absolute before:left-[15px] before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-teal-500 before:via-teal-400 before:to-teal-500">
                    {education.map((edu, index) => (
                      <div key={index} className="relative mb-8 last:mb-0">
                        <div className="absolute -left-[25px] top-0 w-6 h-6 bg-teal-500 rounded-full border-2 border-gray-900" />
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-teal-400 font-semibold">{edu.year}</span>
                            <span className="text-sm bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">
                              Completed
                            </span>
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">{edu.title}</h4>
                          <p className="text-gray-300">{edu.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
                  
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-white group-hover:text-teal-300 transition-colors">
                              {exp.title}
                            </h4>
                            <p className="text-teal-400">{exp.company}</p>
                          </div>
                          <span className="text-sm bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full mt-2 md:mt-0">
                            {exp.year}
                          </span>
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-6">My Interests</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                      <div className="flex justify-center mb-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${interest.color} flex items-center justify-center text-white text-xl`}>
                          {interest.icon}
                        </div>
                      </div>
                      <div className="text-white font-medium">{interest.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mb-16"
        >
          <div className="absolute -top-6 -left-6 text-6xl text-teal-500/20">"</div>
          <div className="bg-gradient-to-r from-teal-900/30 to-emerald-900/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffaa' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl text-center text-white mb-6 leading-relaxed italic">
                "Technology is best when it brings people together. My goal is to create digital experiences that not only solve problems but also inspire and connect people."
              </p>
              <div className="text-center">
                <p className="text-teal-400 font-semibold text-xl">— Md Moniruzzaman</p>
                <p className="text-gray-400">Computer Specialist & Frontend Developer</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 text-6xl text-teal-500/20">"</div>
        </motion.div>

        {/* Skills Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Skills />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;