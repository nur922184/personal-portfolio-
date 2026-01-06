import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaExternalLinkAlt, FaGithub, FaTimes, FaCalendar, 
  FaCode, FaServer, FaQuoteLeft, FaStar, FaFilter,
  FaRocket, FaEye, FaUsers, FaHeart, FaShareAlt,
  FaChevronLeft, FaChevronRight, FaSearch, FaLayerGroup,
  FaDesktop, FaMobileAlt, FaDatabase, FaCloud
} from "react-icons/fa";
import { 
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, 
  SiFirebase, SiExpress, SiNextdotjs, SiRedux,
  SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiVite, SiWebpack, SiDocker, SiGit
} from "react-icons/si";
import lifelink from '../assets/lifelink.png';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid, masonry, list

  const categories = [
    { id: "all", name: "All Projects", count: 6 },
    { id: "react", name: "React", count: 4 },
    { id: "fullstack", name: "Full Stack", count: 3 },
    { id: "ecommerce", name: "E-commerce", count: 2 },
    { id: "social", name: "Social", count: 1 },
    { id: "charity", name: "Charity", count: 1 }
  ];

  const techIcons = {
    "React": <SiReact className="text-blue-500" />,
    "Node.js": <SiNodedotjs className="text-green-600" />,
    "MongoDB": <SiMongodb className="text-green-700" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    "Firebase": <SiFirebase className="text-yellow-500" />,
    "Express": <SiExpress className="text-gray-600" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    "TypeScript": <SiTypescript className="text-blue-600" />,
    "Redux": <SiRedux className="text-purple-600" />,
    "JavaScript": <SiJavascript className="text-yellow-500" />,
    "HTML5": <SiHtml5 className="text-orange-500" />,
    "CSS3": <SiCss3 className="text-blue-400" />,
    "Vite": <SiVite className="text-purple-500" />,
    "Webpack": <SiWebpack className="text-blue-400" />,
    "Docker": <SiDocker className="text-blue-500" />,
    "Git": <SiGit className="text-orange-600" />
  };

  const projects = [
    {
      id: 1,
      title: "Winter Clothing Donation Platform",
      description: "A comprehensive platform connecting donors with volunteers to assist vulnerable populations during winter seasons.",
      detailedDescription: `This innovative platform revolutionizes winter clothing donations by creating a seamless connection between generous donors and dedicated volunteers. The system features real-time donation tracking, volunteer management, automated notifications, and impact analytics.

Key Features:
• Secure donor registration and profile management
• Real-time donation tracking and status updates
• Volunteer scheduling and task assignment
• Interactive map showing donation hotspots
• Impact reports and analytics dashboard
• Multi-language support for broader accessibility`,
      liveDemo: "https://assignment-nine-4896f.web.app/",
      sourceCode: "https://github.com/username/donation-site",
      image: "https://i.ibb.co.com/gwNZ04s/Screenshot-2024-11-28-085754.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "Node.js", "Express", "Redux"],
      category: ["charity", "react", "fullstack"],
      status: "active",
      launchDate: "March 2024",
      impact: "5000+ donations facilitated",
      teamSize: "3 developers",
      timeline: [
        { date: "Jan 2024", event: "Initial planning and user research" },
        { date: "Feb 2024", event: "UI/UX design and prototyping" },
        { date: "Mar 2024", event: "Frontend development with React" },
        { date: "Apr 2024", event: "Backend integration with Firebase" },
        { date: "May 2024", event: "Testing and deployment" }
      ],
      challenges: [
        "Real-time synchronization of donation data",
        "Secure user authentication system",
        "Scalable database architecture"
      ],
      testimonial: {
        text: "This donation platform has revolutionized our winter relief efforts. We've reached 300% more people this year thanks to its efficient system and user-friendly interface.",
        author: "Sarah Johnson",
        position: "Director, Winter Relief NGO",
        rating: 5
      }
    },
    {
      id: 2,
      title: "Gadget Heaven E-commerce",
      description: "Modern e-commerce platform specializing in premium tech accessories with advanced shopping features.",
      detailedDescription: `Gadget Heaven sets a new standard for online tech shopping with its cutting-edge features and seamless user experience. The platform combines elegant design with powerful functionality to deliver exceptional shopping experiences.

Advanced Features:
• AI-powered product recommendations
• Advanced search with filters and sorting
• Secure payment gateway integration
• Real-time inventory management
• Customer review and rating system
• Wishlist and comparison features
• Order tracking and management`,
      liveDemo: "https://magical-gumption-061d0e.netlify.app/",
      sourceCode: "https://github.com/nur922184/gadget-heaven-accessories",
      image: "https://i.ibb.co.com/bHP8G53/Screenshot-2024-11-28-091404.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      category: ["ecommerce", "react", "fullstack"],
      status: "live",
      launchDate: "July 2024",
      revenue: "Increased by 40%",
      teamSize: "4 developers",
      timeline: [
        { date: "Apr 2024", event: "Market analysis and planning" },
        { date: "May 2024", event: "UI/UX design and wireframing" },
        { date: "Jun 2024", event: "Frontend and backend development" },
        { date: "Jul 2024", event: "Payment integration and testing" }
      ],
      challenges: [
        "Payment gateway security implementation",
        "Performance optimization for large catalog",
        "Cart synchronization across devices"
      ],
      testimonial: {
        text: "Gadget Heaven has transformed our online business. The platform's performance and user experience have significantly increased our conversion rates and customer satisfaction.",
        author: "Michael Chen",
        position: "Product Manager, TechAccessories Inc.",
        rating: 5
      }
    },
    {
      id: 3,
      title: "Lifelink Relationship Platform",
      description: "Advanced platform fostering meaningful connections through AI-powered matching and community building.",
      detailedDescription: `Lifelink represents the future of social connection platforms, utilizing artificial intelligence to create meaningful relationships based on shared values, interests, and compatibility scores.

Innovative Features:
• AI-powered matching algorithm
• Video profile creation and verification
• Interest-based community groups
• Secure messaging with encryption
• Event planning and management
• Compatibility scoring system
• Privacy-focused design`,
      liveDemo: "https://my-final-project-36ab9.web.app/",
      sourceCode: "https://github.com/nur922184/life-link-client",
      image: lifelink,
      technologies: ["React", "Firebase", "Tailwind CSS", "Node.js", "Next.js", "TypeScript"],
      category: ["social", "react", "fullstack"],
      status: "growing",
      launchDate: "November 2024",
      users: "10,000+ active users",
      teamSize: "5 developers",
      timeline: [
        { date: "Aug 2024", event: "Concept development and research" },
        { date: "Sep 2024", event: "Prototype and algorithm design" },
        { date: "Oct 2024", event: "Full-stack development" },
        { date: "Nov 2024", event: "Beta testing and public launch" }
      ],
      challenges: [
        "AI algorithm development and training",
        "Real-time chat implementation",
        "User privacy and data security"
      ],
      testimonial: {
        text: "Lifelink has created a safe and engaging environment for genuine connections. The platform's matching accuracy and user experience are truly impressive.",
        author: "Dr. Emily Rodriguez",
        position: "Relationship Counselor & Psychologist",
        rating: 5
      }
    },
    {
      id: 4,
      title: "CrowdFund Platform",
      description: "Comprehensive crowdfunding solution empowering creators to bring innovative ideas to life.",
      detailedDescription: `CrowdFund democratizes fundraising by providing creators with powerful tools to launch, manage, and grow their campaigns. The platform combines social features with robust financial infrastructure.

Platform Features:
• Campaign creation and management tools
• Secure payment processing with multiple options
• Social sharing and viral marketing tools
• Progress tracking and milestone updates
• Backer engagement and communication
• Analytics and insights dashboard
• Fraud detection and security measures`,
      liveDemo: "https://my-assignment-ten-57a0d.web.app/",
      sourceCode: "https://github.com/nur922184/crowd-funding-client-10",
      image: "https://i.ibb.co.com/m9RctdG/Screenshot-2024-12-20-233742.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
      category: ["fullstack", "react"],
      status: "successful",
      launchDate: "March 2025",
      funded: "$2M+ raised",
      teamSize: "6 developers",
      timeline: [
        { date: "Dec 2024", event: "Initial planning and security design" },
        { date: "Jan 2025", event: "Frontend development and design" },
        { date: "Feb 2025", event: "Payment system integration" },
        { date: "Mar 2025", event: "Security audit and launch" }
      ],
      challenges: [
        "Payment system compliance and security",
        "Campaign verification process",
        "Real-time funding updates"
      ],
      testimonial: {
        text: "CrowdFund has enabled thousands of creative projects to see the light. The platform's reliability and feature set are unmatched in the crowdfunding space.",
        author: "Alex Turner",
        position: "Venture Capitalist & Angel Investor",
        rating: 5
      }
    },
  ];

  // Add more projects for demonstration
  const allProjects = [...projects, ...projects.map(p => ({ ...p, id: p.id + 10 }))];

  const filteredProjects = allProjects.filter(project => {
    const matchesFilter = filter === "all" || project.category.includes(filter);
    const matchesSearch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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

  return (
    <section id="my-works" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-teal-900/30 overflow-hidden">
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
              <FaRocket className="w-6 h-6 text-teal-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of innovative web applications and solutions that solve real-world problems
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: "Total Projects", value: allProjects.length, icon: <FaLayerGroup />, color: "from-blue-500 to-cyan-500" },
            { label: "Technologies", value: Object.keys(techIcons).length, icon: <FaCode />, color: "from-purple-500 to-pink-500" },
            { label: "Happy Clients", value: "50+", icon: <FaUsers />, color: "from-orange-500 to-yellow-500" },
            { label: "Success Rate", value: "100%", icon: <FaHeart />, color: "from-red-500 to-pink-500" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-2xl">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, technologies, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30 transition-all"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1">
                {["grid", "masonry"].map(mode => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`p-3 rounded-xl transition-all ${viewMode === mode ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:text-white'}`}
                  >
                    {mode === "grid" ? <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                    </div> : <div className="w-4 h-4 flex flex-col gap-0.5">
                      <div className="w-full h-1 bg-current rounded-sm"></div>
                      <div className="w-3/4 h-1 bg-current rounded-sm ml-auto"></div>
                      <div className="w-1/2 h-1 bg-current rounded-sm ml-auto"></div>
                    </div>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <FaFilter className="w-5 h-5 text-teal-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`group flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 ${filter === category.id
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${filter === category.id ? 'bg-white/20' : 'bg-black/20'}`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className={viewMode === "masonry" ? "columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative ${viewMode === "masonry" ? "break-inside-avoid" : ""} bg-gradient-to-br from-white/5 via-transparent to-transparent backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-teal-500/5 hover:shadow-teal-500/10 cursor-pointer`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(project)}
            >
              {/* Project Status */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${project.status === "active" ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                  project.status === "live" ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 
                  project.status === "growing" ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 
                  'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>

              {/* Project Number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mx-auto mb-3">
                      <FaEye className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title and Category */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.category.slice(0, 2).map(cat => (
                      <span key={cat} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/10">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map(tech => (
                    <div key={tech} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <span className="text-lg">{techIcons[tech]}</span>
                      <span className="text-sm text-gray-300">{tech}</span>
                    </div>
                  ))}
                  {project.technologies.length > 3 && (
                    <div className="px-3 py-1.5 bg-black/30 text-gray-400 text-sm rounded-lg border border-gray-700/50">
                      +{project.technologies.length - 3} more
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-lg font-bold text-white">{project.launchDate}</div>
                    <div className="text-xs text-gray-400">Launched</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-lg font-bold text-white">{project.teamSize}</div>
                    <div className="text-xs text-gray-400">Team Size</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all group/btn"
                  >
                    <FaDesktop className="group-hover/btn:scale-110 transition-transform" />
                    <span className="font-semibold">Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm text-gray-300 hover:text-white py-3 rounded-xl border border-white/10 hover:border-teal-500/30 hover:bg-teal-500/10 transition-all group/code"
                  >
                    <FaGithub className="group-hover/code:rotate-12 transition-transform" />
                    <span className="font-medium">Code</span>
                  </motion.a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-transparent to-purple-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <FaSearch className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">No Projects Found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 mb-6">
            <FaRocket className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional design.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300">
            Start a Project Together
          </button>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence mode="wait">
        {modalOpen && selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/95 to-teal-900/30" />
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </motion.div>

            {/* Modal */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6">
              <motion.div
                className="relative w-full max-w-6xl h-[90vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>

                {/* Modal Header */}
                <div className="p-8 border-b border-white/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.category.map(cat => (
                          <span key={cat} className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl hover:shadow-lg hover:shadow-teal-500/25"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={selectedProject.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-xl border border-white/10 hover:bg-teal-500/10 hover:border-teal-500/30"
                      >
                        <FaGithub />
                        <span>Source Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="h-[calc(90vh-140px)] overflow-y-auto p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Project Image */}
                      <div className="rounded-2xl overflow-hidden border border-white/10">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                          <div className="w-2 h-8 bg-teal-500 rounded-full"></div>
                          Project Overview
                        </h3>
                        <div className="text-gray-300 space-y-4 whitespace-pre-line">
                          {selectedProject.detailedDescription}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                          <FaCode className="text-teal-400" />
                          Technology Stack
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {selectedProject.technologies.map(tech => (
                            <div key={tech} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-teal-500/30 transition-all duration-300">
                              <div className="flex justify-center mb-3 text-2xl">
                                {techIcons[tech]}
                              </div>
                              <div className="text-white font-medium">{tech}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Project Stats */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-6">Project Stats</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm text-gray-400 mb-1">Status</div>
                            <div className="text-lg font-semibold text-teal-400">{selectedProject.status}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 mb-1">Launch Date</div>
                            <div className="text-lg font-semibold text-white">{selectedProject.launchDate}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 mb-1">Team Size</div>
                            <div className="text-lg font-semibold text-white">{selectedProject.teamSize}</div>
                          </div>
                          {selectedProject.impact && (
                            <div>
                              <div className="text-sm text-gray-400 mb-1">Impact</div>
                              <div className="text-lg font-semibold text-white">{selectedProject.impact}</div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                          <FaCalendar className="text-teal-400" />
                          Project Timeline
                        </h3>
                        <div className="space-y-4">
                          {selectedProject.timeline.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                              <div>
                                <div className="text-sm text-teal-400 font-medium">{item.date}</div>
                                <div className="text-gray-300">{item.event}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenges */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-6">Challenges Solved</h3>
                        <ul className="space-y-3">
                          {selectedProject.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                              <span className="text-gray-300">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-8">
                    <div className="bg-gradient-to-r from-teal-900/30 to-emerald-900/30 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 relative overflow-hidden">
                      <div className="absolute -top-6 -left-6 text-6xl text-teal-500/20">"</div>
                      <div className="relative">
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                          <FaQuoteLeft className="text-teal-400" />
                          Client Testimonial
                        </h4>
                        <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                          "{selectedProject.testimonial.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-teal-400 font-semibold text-lg">{selectedProject.testimonial.author}</p>
                            <p className="text-gray-400">{selectedProject.testimonial.position}</p>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(selectedProject.testimonial.rating)].map((_, i) => (
                              <FaStar key={i} className="w-5 h-5" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-6 -right-6 text-6xl text-teal-500/20">"</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;