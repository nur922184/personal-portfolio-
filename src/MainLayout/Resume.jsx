import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEye, FaFilePdf, FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-scroll";

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1TY4hrgfVKLmMxo0PsSuiz25kQp7PPyuW/view";
  const downloadLink = "https://drive.google.com/uc?export=download&id=1TY4hrgfVKLmMxo0PsSuiz25kQp7PPyuW";

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux Toolkit", "Next.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "REST API Development", "MongoDB", "Firebase Authentication"],
    tools: ["Git & GitHub", "Webpack", "VS Code", "Figma", "Adobe Photoshop", "Adobe Illustrator"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"]
  };

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Programming Hero",
      period: "Jan 2024 - Present",
      details: [
        "Developed web applications using React.js, Node.js, Express.js and MongoDB",
        "Gained experience in Responsive Web Design, REST API integration, and Authentication",
        "Worked on Performance Optimization and Deployment strategies"
      ]
    },
    {
      role: "Microsoft Office Application Instructor",
      company: "Open IT Institute",
      period: "Jun 2021 - Present",
      details: [
        "Instructor for Microsoft Office courses (MS Word, Excel, PowerPoint, Access)",
        "Graphics Designer using Adobe Photoshop, Illustrator, InDesign, Canva",
        "Trained students in office automation, data management, and presentation design"
      ]
    }
  ];

  const education = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kendua Government College",
      period: "2025 - 2026"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kendua Joyhori Spri Government High School",
      period: "2023 - 2024"
    },
    {
      degree: "Web Design Course",
      institution: "Open IT Institute",
      period: "2024 - Present"
    }
  ];

  return (
    <section id="resume" className="py-16 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-teal-300">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Download my resume to learn more about my skills and experience
          </p>
        </motion.div>

        {/* Resume Actions */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEye className="mr-3" />
            View Resume
          </motion.a>

          <motion.a
            href={downloadLink}
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-3" />
            Download PDF
          </motion.a>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20 shadow-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Resume Preview</h3>
            <div className="flex items-center text-teal-300">
              <FaGoogleDrive className="mr-2" />
              <span>Google Drive</span>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/30">
            <div className="flex items-center mb-6">
              <FaFilePdf className="text-red-500 text-4xl mr-4" />
              <div>
                <h4 className="text-white text-lg font-medium">Md_Moniruzzaman_Resume.pdf</h4>
                <p className="text-gray-400 text-sm">Updated: December 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="text-teal-300 font-medium mb-3">Professional Experience</h5>
                <ul className="space-y-2">
                  {experiences.map((exp, index) => (
                    <li key={index} className="text-gray-300 text-sm">
                      <span className="font-medium">{exp.role}</span> at {exp.company}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-teal-300 font-medium mb-3">Education</h5>
                <ul className="space-y-2">
                  {education.map((edu, index) => (
                    <li key={index} className="text-gray-300 text-sm">
                      <span className="font-medium">{edu.degree}</span> - {edu.institution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-teal-900/30 p-4 rounded-lg">
              <p className="text-teal-300 text-sm text-center">
                Click "View Resume" to see the complete document with detailed information about my skills, experience, and projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Technical Skills */}
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20">
            <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>

            <div className="mb-6">
              <h4 className="text-teal-300 font-medium mb-2">Frontend Development</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="bg-teal-400/20 text-teal-300 text-xs px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-teal-300 font-medium mb-2">Backend Development</h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="bg-teal-400/20 text-teal-300 text-xs px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-teal-300 font-medium mb-2">Tools & Software</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-teal-400/20 text-teal-300 text-xs px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills & Additional Info */}
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20">
            <h3 className="text-xl font-semibold text-white mb-4">Soft Skills & Additional Information</h3>

            <div className="mb-6">
              <h4 className="text-teal-300 font-medium mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="bg-purple-400/20 text-purple-300 text-xs px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-teal-300 font-medium mb-2">Languages</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <span className="text-white font-medium mr-2">Bengali:</span>
                  <span className="text-gray-300">Native</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white font-medium mr-2">English:</span>
                  <span className="text-gray-300">Fluent</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white font-medium mr-2">Hindi:</span>
                  <span className="text-gray-300">Basic</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-teal-300 font-medium mb-2">Availability</h4>
              <p className="text-gray-300">
                Currently available for freelance projects and full-time opportunities.
                Open to remote work and willing to relocate for the right opportunity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-300 mb-6">
            Interested in working together? Feel free to contact me for any opportunities or projects.
          </p>
          <Link to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}>

            <motion.a

              className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;