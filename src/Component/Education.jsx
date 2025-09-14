import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Kendua Government College",
      period: "2025 - 2026",
      description: "I am currently completing my higher secondary education at this college."
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Kendua Joyhori Spri Government High School",
      period: "2023 - 2024",
      description: "I completed my secondary education from this school."
    },
    {
      title: "Web Design Course",
      institution: "Open IT Institute",
      period: "2024 - Present",
      description: "I am currently specializing in a web design course to enhance my skills."
    }
  ];

  return (
    <section id="education" className="py-16 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-teal-300">Education</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            My educational qualifications and ongoing training
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-teal-400/30 transform -translate-x-1/2"></div>
          
          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center relative`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-teal-400 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:pl-4 md:text-right' : 'md:pl-8 md:pr-4'} mt-6 md:mt-0 ml-12 md:ml-0`}>
                  <motion.div 
                    className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-teal-300 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-200">{edu.description}</p>
                    
                    {/* Decorative elements */}
                    <div className={`absolute top-4 ${index % 2 === 0 ? '-right-2' : '-left-2'} w-4 h-4 bg-teal-400 transform rotate-45`}></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">My Perspective on Education</h3>
          <p className="text-gray-200 text-center">
            I believe that education is a lifelong journey. Technology is rapidly evolving, 
            so I'm always prepared to learn new things and keep my skills updated with the latest industry trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;