import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCalendar, FaCode, FaServer } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiFirebase, SiExpress } from "react-icons/si";
import lifelink from '../assets/lifelink.png';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Winter Clothing Donation Website",
      description: "A platform to connect donors with volunteers to assist vulnerable populations during winter.",
      detailedDescription: "This platform facilitates winter clothing donations by connecting generous donors with volunteers who distribute items to those in need. It includes features like donation tracking, volunteer management, and real-time notifications.",
      liveDemo: "https://assignment-nine-4896f.web.app/",
      sourceCode: "https://github.com/username/donation-site",
      image: "https://i.ibb.co.com/gwNZ04s/Screenshot-2024-11-28-085754.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
      timeline: [
        { date: "Jan 2024", event: "Initial planning and design" },
        { date: "Feb 2024", event: "Frontend development" },
        { date: "Mar 2024", event: "Backend integration and testing" }
      ],
      testimonial: {
        text: "This donation platform has helped us reach more people in need during the harsh winter months. The interface is intuitive and the system works flawlessly!",
        author: "Sarah Johnson, NGO Director"
      }
    },
    {
      id: 2,
      title: "Gadget Heaven Accessories",
      description: "A web app to manage cricket player availability and selections for matches.",
      detailedDescription: "Gadget Heaven is an e-commerce platform specializing in tech accessories. It features product listings, shopping cart, user authentication, and payment processing for a seamless shopping experience.",
      liveDemo: "https://magical-gumption-061d0e.netlify.app/",
      sourceCode: "https://github.com/nur922184/gadget-heaven-accessories",
      image: "https://i.ibb.co.com/bHP8G53/Screenshot-2024-11-28-091404.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      timeline: [
        { date: "Apr 2024", event: "Market research and planning" },
        { date: "May 2024", event: "UI/UX design and development" },
        { date: "Jun 2024", event: "Backend API development" },
        { date: "Jul 2024", event: "Testing and deployment" }
      ],
      testimonial: {
        text: "Gadget Heaven has transformed our online sales with its sleek design and smooth user experience. Our conversion rates have increased by 40% since launch!",
        author: "Michael Chen, Product Manager"
      }
    },
    {
      id: 3,
      title: "Lifelink Facilitators",
      description: "To be the leading online platform for fostering meaningful and lasting relationships across Bangladesh and beyond.",
      detailedDescription: "Lifelink is a relationship-building platform that connects people based on shared interests and values. It includes advanced matching algorithms, chat functionality, and community features.",
      liveDemo: "https://my-final-project-36ab9.web.app/",
      sourceCode: "https://github.com/nur922184/life-link-client",
      image: lifelink,
      technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
      timeline: [
        { date: "Aug 2024", event: "Concept development" },
        { date: "Sep 2024", event: "Prototype design" },
        { date: "Oct 2024", event: "Full-stack development" },
        { date: "Nov 2024", event: "Beta testing and launch" }
      ],
      testimonial: {
        text: "Lifelink has created a safe and engaging platform for people to form genuine connections. The matching algorithm is impressively accurate!",
        author: "Dr. Emily Rodriguez, Relationship Counselor"
      }
    },
    {
      id: 4,
      title: "Crowd Funding",
      description: "CrowdFund is a platform where people can raise money for different projects, ideas, or causes by inviting others to contribute financially.",
      detailedDescription: "CrowdFund is a comprehensive crowdfunding platform that allows creators to launch campaigns, share their stories, and receive financial support from backers. It includes payment processing, progress tracking, and social sharing features.",
      liveDemo: "https://my-assignment-ten-57a0d.web.app/",
      sourceCode: "https://github.com/nur922184/crowd-funding-client-10",
      image: "https://i.ibb.co.com/m9RctdG/Screenshot-2024-12-20-233742.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      timeline: [
        { date: "Dec 2024", event: "Initial planning and wireframing" },
        { date: "Jan 2025", event: "Frontend development" },
        { date: "Feb 2025", event: "Backend and payment integration" },
        { date: "Mar 2025", event: "Security testing and deployment" }
      ],
      testimonial: {
        text: "CrowdFund has enabled us to support countless creative projects that otherwise wouldn't have gotten off the ground. The platform is robust and user-friendly!",
        author: "Alex Turner, Venture Capitalist"
      }
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedProject(null), 300);
  };

  const getTechIcon = (tech) => {
    switch(tech) {
      case "React": return <SiReact className="text-blue-500" />;
      case "Node.js": return <SiNodedotjs className="text-green-600" />;
      case "MongoDB": return <SiMongodb className="text-green-700" />;
      case "Tailwind CSS": return <SiTailwindcss className="text-cyan-400" />;
      case "Firebase": return <SiFirebase className="text-yellow-500" />;
      case "Express": return <SiExpress className="text-gray-600" />;
      default: return <FaCode />;
    }
  };

  return (
    <section id="my-works" className="py-16 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e]">
      <div className="container mx-auto">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-teal-300">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 dark:border-gray-700/20 shadow-lg cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => openModal(project)}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-teal-400/20 text-teal-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-600/20 text-gray-300 text-xs px-3 py-1 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-300 hover:text-teal-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo <FaExternalLinkAlt className="ml-2" />
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code <FaGithub className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {modalOpen && selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white/95 dark:bg-gray-900/95 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 bg-gray-800/80 text-white p-2 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <FaTimes />
                  </button>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="flex space-x-3">
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                      >
                        Live Demo <FaExternalLinkAlt className="ml-2" />
                      </a>
                      <a
                        href={selectedProject.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Code <FaGithub className="ml-2" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {selectedProject.detailedDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FaCode className="mr-2 text-teal-500" /> Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-teal-400/20 text-teal-300 px-3 py-1 rounded-full flex items-center"
                          >
                            {getTechIcon(tech)}
                            <span className="ml-2">{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FaCalendar className="mr-2 text-teal-500" /> Project Timeline
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.timeline.map((item, index) => (
                          <li key={index} className="flex">
                            <span className="font-medium text-teal-500 dark:text-teal-400 min-w-[80px]">
                              {item.date}:
                            </span>
                            <span className="text-gray-600 dark:text-gray-400 ml-2">
                              {item.event}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Client Feedback
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                      "{selectedProject.testimonial.text}"
                    </p>
                    <p className="text-teal-600 dark:text-teal-400 font-medium">
                      — {selectedProject.testimonial.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;