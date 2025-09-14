import React from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { SiMicrosoft } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
// import { SiMicrosoft, SiMicrosoftoffice } from "react-icons/si";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Programming Hero",
      period: "Jan 2024 - Present",
      location: "Remote",
      description: "I am a Full Stack Developer, recently completed my course and did an internship. I can develop web applications using React.js, Node.js, Express.js and MongoDB. During the internship, I gained experience in real-world projects, where I worked on Responsive Web Design, REST API integration, and Authentication. Also, I have worked on various individual and team-based projects, where I have gained expertise in Performance Optimization and Deployment, as well as improving the functionality of Frontend and Backend. I have a keen interest in learning new trends in technology and am always ready to take on new challenges to solve problems.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Authentication", "Performance Optimization", "Deployment"],
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      url: "https://www.programming-hero.com/",
      type: "development"
    },
    {
      id: 2,
      title: "Microsoft Office Application Instructor",
      company: "Open IT Institute",
      period: "Jun 2021 - Present",
      location: "Kendua, Netrokona",
      description: "I am Md. Moniruzzaman, a Level 1 Instructor, Executive Mentor, and Graphics Designer. Currently working as an Instructor for Microsoft Office courses at Open IT Institute and also doing Label One Courses. I am proficient in all the important tools of Microsoft Office such as MS Word, Excel, PowerPoint, Access, etc. and provide practical training to students. I help students become proficient in the workplace by teaching office automation, data management, and presentation design. At the same time, I am an experienced Graphics Designer, where I work using Adobe Photoshop, Illustrator, InDesign, Canva, and other design tools. I have gained experience by working on Logo Design, Branding, Banner & Poster Design, Social Media Design, and various print and digital design projects.",
      technologies: ["MS Word", "Excel", "PowerPoint", "Access", "Office Automation", "Data Management", "Presentation Design", "Adobe Photoshop", "Illustrator", "InDesign", "Canva"],
      logo: "https://cdn-icons-png.flaticon.com/512/732/732222.png",
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e] min-h-screen flex items-center">
      <div className="container mx-auto max-w-10xl">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-teal-300">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            My professional journey and career experiences
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-teal-400/30 transform -translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center relative`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-teal-400 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:pl-4' : 'md:pl-8 md:pr-4'} mt-6 md:mt-0 ml-12 md:ml-0`}>
                  <motion.div
                    className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Company Logo and Title */}
                    <div className="flex items-start mb-4">
                      <div className={`p-3 rounded-full mr-4 ${exp.type === 'development' ? 'bg-blue-500/20' : 'bg-purple-500/20'}`}>
                        {exp.type === 'development' ? (
                          <img src={exp.logo} alt={exp.company} className="w-8 h-8" />
                        ) : (
                          <SiMicrosoft className="text-purple-500 text-2xl" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex items-center text-teal-300 font-medium">
                          {exp.company}
                          {exp.url && (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-sm"
                            >
                              <FaExternalLinkAlt />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
                      <div className="flex items-center mr-4 mb-2">
                        <FaCalendar className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-200 mb-4">
                      <TypeAnimation
                        splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                        sequence={[
                          ` ${exp.description}`,

                          15000,
                          '',
                        ]}
                        speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                        omitDeletionAnimation={true}
                        style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
                        repeat={1}
                      />
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Skills & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-teal-400/20 text-teal-300 text-xs px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

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
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">My Professional Philosophy</h3>
          <p className="text-gray-200 text-center">
            I believe in continuous learning and adapting to new technologies. My experience in both development
            and instruction has taught me the importance of clear communication, problem-solving, and creating
            solutions that make a real impact. I'm always eager to take on new challenges and expand my skill set.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;