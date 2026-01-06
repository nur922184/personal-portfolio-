import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaDownload, FaEye, FaFilePdf, FaGoogleDrive, 
  FaBriefcase, FaGraduationCap, FaCode, FaUser,
  FaCalendar, FaMapMarkerAlt, FaGlobe, FaStar,
  FaChevronRight, FaExternalLinkAlt, FaCopy,
  FaCheck, FaPrint, FaShareAlt, FaBook,
  FaTools, FaLanguage, FaCertificate
} from "react-icons/fa";
import { Link } from "react-scroll";
import { 
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss,
  SiFirebase, SiExpress, SiNextdotjs, SiRedux,
  SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiGit, SiVite, SiWebpack, SiFigma,
  SiAdobephotoshop, SiAdobeillustrator
} from "react-icons/si";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [copied, setCopied] = useState(false);

  const resumeLink = "https://drive.google.com/file/d/1hfl9l7i_Z5apg3KA0GW0LPy8XwIXJgjl/view";
  const downloadLink = "https://drive.google.com/uc?export=download&id=1hfl9l7i_Z5apg3KA0GW0LPy8XwIXJgjl";

  const professionalSummary = `
    Passionate Full Stack Developer with expertise in modern web technologies 
    including React.js, Node.js, and MongoDB. Proven ability to deliver 
    high-quality solutions with clean code and best practices. Strong 
    background in teaching and mentoring with excellent communication skills. 
    Seeking opportunities to contribute to innovative projects and grow 
    professionally in a collaborative environment.
  `;

  const skills = {
    frontend: [
      { name: "React.js", icon: <SiReact />, level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "from-gray-800 to-black" },
      { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "from-blue-600 to-blue-700" },
      { name: "JavaScript", icon: <SiJavascript />, level: 90, color: "from-yellow-500 to-yellow-600" },
      { name: "HTML5", icon: <SiHtml5 />, level: 95, color: "from-orange-500 to-orange-600" },
      { name: "CSS3", icon: <SiCss3 />, level: 90, color: "from-blue-400 to-blue-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92, color: "from-cyan-400 to-teal-500" },
      { name: "Redux", icon: <SiRedux />, level: 85, color: "from-purple-600 to-pink-600" }
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 88, color: "from-green-600 to-green-700" },
      { name: "Express.js", icon: <SiExpress />, level: 85, color: "from-gray-600 to-gray-700" },
      { name: "MongoDB", icon: <SiMongodb />, level: 82, color: "from-green-700 to-green-800" },
      { name: "Firebase", icon: <SiFirebase />, level: 78, color: "from-yellow-500 to-orange-500" },
      { name: "REST APIs", icon: <FaCode />, level: 90, color: "from-blue-500 to-indigo-500" },
      { name: "Authentication", icon: <FaUser />, level: 85, color: "from-red-500 to-pink-500" }
    ],
    tools: [
      { name: "Git", icon: <SiGit />, level: 88, color: "from-orange-600 to-red-600" },
      { name: "Vite", icon: <SiVite />, level: 85, color: "from-purple-500 to-pink-500" },
      { name: "Webpack", icon: <SiWebpack />, level: 75, color: "from-blue-400 to-cyan-400" },
      { name: "Figma", icon: <SiFigma />, level: 80, color: "from-purple-400 to-pink-400" },
      { name: "Photoshop", icon: <SiAdobephotoshop />, level: 70, color: "from-blue-300 to-cyan-300" },
      { name: "Illustrator", icon: <SiAdobeillustrator />, level: 65, color: "from-orange-400 to-yellow-400" }
    ],
    soft: [
      "Problem Solving", "Team Collaboration", "Communication", 
      "Time Management", "Adaptability", "Leadership",
      "Critical Thinking", "Creativity"
    ]
  };

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Programming Hero",
      period: "Jan 2024 - Present",
      location: "Remote",
      details: [
        "Developed full-stack web applications using React, Node.js, Express, and MongoDB",
        "Implemented responsive designs with Tailwind CSS and modern UI/UX principles",
        "Built RESTful APIs with authentication, authorization, and data validation",
        "Optimized application performance and implemented best practices",
        "Collaborated with team members using Git and agile methodologies"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Redux"]
    },
    {
      role: "Microsoft Office & Graphics Instructor",
      company: "Open IT Institute",
      period: "Jun 2021 - Present",
      location: "Netrokona, Bangladesh",
      details: [
        "Instructed students in Microsoft Office Suite (Word, Excel, PowerPoint, Access)",
        "Taught graphic design using Adobe Creative Suite and Canva",
        "Developed curriculum and training materials for various skill levels",
        "Mentored students in office automation and professional skills",
        "Maintained high student satisfaction through engaging teaching methods"
      ],
      technologies: ["MS Office", "Adobe Creative Suite", "Canva", "Teaching"]
    }
  ];

  const education = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kendua Government College",
      period: "2025 - 2026",
      grade: "Pending",
      description: "Science Group with focus on Mathematics and Computer Science"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kendua Joyhori Spri Govt. High School",
      period: "2023 - 2024",
      grade: "GPA: 5.00",
      description: "Science Group with excellent academic performance"
    },
    {
      degree: "Web Design & Development",
      institution: "Open IT Institute",
      period: "2024 - Present",
      grade: "Ongoing",
      description: "Comprehensive web development program focusing on modern technologies"
    }
  ];

  const certificates = [
    { name: "Complete Web Development", issuer: "Programming Hero", year: "2024" },
    { name: "React Developer Certificate", issuer: "Online Platform", year: "2024" },
    { name: "Microsoft Office Specialist", issuer: "Microsoft", year: "2022" },
    { name: "Graphic Design Fundamentals", issuer: "Adobe", year: "2023" }
  ];

  const languages = [
    { language: "Bengali", level: "Native", proficiency: 100 },
    { language: "English", level: "Fluent", proficiency: 85 },
    { language: "Hindi", level: "Conversational", proficiency: 65 }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(resumeLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const printResume = () => {
    window.open(resumeLink, '_blank');
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: <FaEye /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> }
  ];

  return (
    <section id="resume" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-teal-900/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
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
              <FaFilePdf className="w-6 h-6 text-teal-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Resume
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive overview of my skills, experience, and qualifications. Download the complete document for detailed information.
          </p>
        </motion.div>

        {/* Resume Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEye />
            View Resume
            <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href={downloadLink}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/10 font-semibold rounded-2xl hover:border-teal-500/30 hover:bg-teal-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download PDF
          </motion.a>

          <motion.button
            onClick={copyToClipboard}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/10 font-semibold rounded-2xl hover:border-teal-500/30 hover:bg-teal-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
            {copied ? "Copied!" : "Copy Link"}
          </motion.button>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Info Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <FaUser className="text-teal-400" />
                Quick Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCalendar className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">Experience</div>
                    <div className="text-white font-medium">3+ Years</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-medium">Netrokona, BD</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">Availability</div>
                    <div className="text-white font-medium">Immediate</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">Employment</div>
                    <div className="text-white font-medium">Open to Work</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <FaLanguage className="text-teal-400" />
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{lang.language}</span>
                      <span className="text-gray-400 text-sm">{lang.level}</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-teal-500 to-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <FaCertificate className="text-teal-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-white font-medium">{cert.name}</div>
                      <div className="text-gray-400 text-sm">{cert.issuer}</div>
                    </div>
                    <div className="text-teal-400 text-sm">{cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {professionalSummary}
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-white mb-2">50+</div>
                      <div className="text-gray-300">Projects Completed</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-white mb-2">100%</div>
                      <div className="text-gray-300">Client Satisfaction</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-white mb-2">3+</div>
                      <div className="text-gray-300">Years Experience</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-white mb-2">24/7</div>
                      <div className="text-gray-300">Availability</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Work Experience</h3>
                  <div className="relative pl-8 before:absolute before:left-[15px] before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-teal-500 before:via-teal-400 before:to-teal-500">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative mb-8 last:mb-0">
                        <div className="absolute -left-[25px] top-0 w-6 h-6 bg-teal-500 rounded-full border-2 border-gray-900" />
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                              <div className="flex items-center gap-2 text-teal-400">
                                <FaBriefcase className="w-4 h-4" />
                                <span>{exp.company}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                              <FaCalendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                              <FaMapMarkerAlt className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          <ul className="space-y-2 mb-4">
                            {exp.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-300">
                                <FaChevronRight className="w-3 h-3 text-teal-400 mt-1" />
                                {detail}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Skills Tab */}
              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>

                  {/* Frontend Skills */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                      <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                      Frontend Development
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {skills.frontend.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className={`relative group overflow-hidden rounded-2xl p-4 text-center bg-gradient-to-br ${skill.color}`}
                        >
                          <div className="relative z-10">
                            <div className="text-2xl mb-2">{skill.icon}</div>
                            <div className="text-white font-semibold mb-2">{skill.name}</div>
                            <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                            <div className="text-white/80 text-sm mt-2">{skill.level}%</div>
                          </div>
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                      <div className="w-2 h-6 bg-green-500 rounded-full"></div>
                      Backend Development
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {skills.backend.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className={`relative group overflow-hidden rounded-2xl p-4 text-center bg-gradient-to-br ${skill.color}`}
                        >
                          <div className="relative z-10">
                            <div className="text-2xl mb-2">{skill.icon}</div>
                            <div className="text-white font-semibold mb-2">{skill.name}</div>
                            <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                            <div className="text-white/80 text-sm mt-2">{skill.level}%</div>
                          </div>
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                      <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
                      Soft Skills
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.soft.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-white/5 backdrop-blur-sm text-white rounded-xl border border-white/10 hover:border-teal-500/30 transition-all"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Education Tab */}
              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Education & Training</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                              {edu.degree}
                            </h4>
                            <div className="flex items-center gap-2 text-teal-400 mt-1">
                              <FaGraduationCap className="w-4 h-4" />
                              <span>{edu.institution}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                            <FaCalendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-300">{edu.description}</span>
                          <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm">
                            {edu.grade}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 mb-6">
            <FaBriefcase className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities. 
            Let's discuss how we can create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="contact" smooth={true} duration={800}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
              >
                Contact Me
              </motion.button>
            </Link>
            <motion.a
              href={downloadLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/10 font-semibold rounded-2xl hover:border-teal-500/30 hover:bg-teal-500/10 transition-all"
            >
              Download Full Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;