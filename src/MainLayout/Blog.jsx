import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from '../assets/me.jpg';
import react from '../assets/blog_img/React_Hooks.jpeg';
import css from '../assets/blog_img/Mastering_Tailwind_CSS.png';
import node from '../assets/blog_img/Node.js_Best_Practices.jpeg';
import Responsive_Design from '../assets/blog_img/Responsive_Design_Principles.jpeg';
import MongoDB from '../assets/blog_img/mongodb-cover.png';
import JavaScript from '../assets/blog_img/js.jpeg';
import { 
  FaCalendar, FaClock, FaUser, FaArrowRight, FaTimes, FaHeart, 
  FaComment, FaShare, FaBookmark, FaThumbsUp, FaFacebook, 
  FaTwitter, FaLinkedin, FaGithub, FaExternalLinkAlt, FaCode, 
  FaHashtag, FaSearch, FaFilter, FaTags, FaEye, FaShareAlt, 
  FaBookOpen, FaLightbulb, FaRocket, FaStar, FaChevronLeft, 
  FaChevronRight, FaRegCommentAlt, FaRegBookmark, FaRegHeart
} from "react-icons/fa";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [liked, setLiked] = useState({});
  const [bookmarked, setBookmarked] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [comments, setComments] = useState({
    1: [
      { id: 1, user: "John Doe", avatar: "https://i.pravatar.cc/150?img=1", text: "Great article! Really helped me understand React Hooks better.", likes: 5, time: "2 hours ago" },
      { id: 2, user: "Sarah Smith", avatar: "https://i.pravatar.cc/150?img=5", text: "Thanks for sharing! This clarified a lot of doubts.", likes: 3, time: "1 day ago" }
    ],
    2: [
      { id: 1, user: "Alex Johnson", avatar: "https://i.pravatar.cc/150?img=3", text: "Tailwind CSS is amazing for rapid development.", likes: 8, time: "3 days ago" }
    ],
    3: [
      { id: 1, user: "Mike Chen", avatar: "https://i.pravatar.cc/150?img=7", text: "Node.js best practices are essential for production apps.", likes: 4, time: "1 week ago" }
    ],
    4: [
      { id: 1, user: "Emma Wilson", avatar: "https://i.pravatar.cc/150?img=4", text: "Responsive design is a must in 2024.", likes: 7, time: "2 days ago" }
    ],
    5: [
      { id: 1, user: "David Lee", avatar: "https://i.pravatar.cc/150?img=9", text: "MongoDB's flexibility is its biggest strength.", likes: 2, time: "5 days ago" }
    ],
    6: [
      { id: 1, user: "Lisa Park", avatar: "https://i.pravatar.cc/150?img=6", text: "ES6 features made JavaScript so much more powerful.", likes: 9, time: "1 day ago" }
    ]
  });

  const [newComment, setNewComment] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      image: react,
      excerpt: "Master React Hooks to simplify functional components and manage state effectively.",
      content: `
        <p>React Hooks revolutionized functional components by providing access to React features without classes. Introduced in React 16.8, they've become the standard for modern React development.</p>
        
        <h3>🚀 Why Use Hooks?</h3>
        <ul>
          <li>Simplify complex components</li>
          <li>Reuse stateful logic</li>
          <li>Reduce class component boilerplate</li>
          <li>Improve code organization</li>
        </ul>
        
        <h3>📚 Core Hooks</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-teal-500/10 p-4 rounded-xl">
            <h4 class="font-bold text-teal-400">useState</h4>
            <p>Add state to functional components</p>
          </div>
          <div class="bg-blue-500/10 p-4 rounded-xl">
            <h4 class="font-bold text-blue-400">useEffect</h4>
            <p>Handle side effects and lifecycle</p>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl">
            <h4 class="font-bold text-purple-400">useContext</h4>
            <p>Access context without nesting</p>
          </div>
          <div class="bg-pink-500/10 p-4 rounded-xl">
            <h4 class="font-bold text-pink-400">useReducer</h4>
            <p>Manage complex state logic</p>
          </div>
        </div>
        
        <p>Start using Hooks today to write cleaner, more maintainable React code!</p>
      `,
      date: "March 15, 2024",
      readTime: "5 min",
      category: "react",
      tags: ["react", "hooks", "frontend", "javascript"],
      likes: 142,
      views: 1250,
      shares: 45,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Senior Frontend Developer",
        bio: "Passionate about React ecosystem and modern web development. Loves teaching through practical examples."
      }
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      image: css,
      excerpt: "Build stunning UIs faster with Tailwind's utility-first approach and advanced features.",
      content: `
        <p>Tailwind CSS has transformed how we write CSS by adopting a utility-first approach that prioritizes speed and consistency.</p>
        
        <h3>🎨 Why Developers Love Tailwind</h3>
        <ul>
          <li>No context switching between HTML and CSS</li>
          <li>Consistent design system</li>
          <li>Incredibly fast prototyping</li>
          <li>Smaller production CSS bundles</li>
        </ul>
        
        <h3>⚡ Advanced Features</h3>
        <p>Explore JIT mode, custom configurations, and plugin development to supercharge your workflow.</p>
      `,
      date: "April 2, 2024",
      readTime: "7 min",
      category: "css",
      tags: ["tailwind", "css", "styling", "frontend"],
      likes: 238,
      views: 1890,
      shares: 67,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "UI/UX Specialist",
        bio: "CSS enthusiast focused on creating beautiful, responsive designs with modern tools."
      }
    },
    {
      id: 3,
      title: "Node.js Best Practices",
      image: node,
      excerpt: "Build scalable and maintainable Node.js applications with industry-proven patterns.",
      content: `
        <p>Node.js powers millions of applications worldwide. Following best practices ensures your app scales efficiently.</p>
        
        <h3>🏗️ Architecture Patterns</h3>
        <ul>
          <li>Layered Architecture</li>
          <li>Microservices</li>
          <li>Event-Driven Design</li>
        </ul>
      `,
      date: "April 18, 2024",
      readTime: "10 min",
      category: "node",
      tags: ["nodejs", "backend", "javascript", "server"],
      likes: 129,
      views: 950,
      shares: 34,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Full Stack Developer",
        bio: "Backend specialist with expertise in Node.js, databases, and system architecture."
      }
    },
    {
      id: 4,
      title: "Responsive Design Principles",
      image: Responsive_Design,
      excerpt: "Create flawless experiences across all devices with modern responsive techniques.",
      content: `
        <p>In today's multi-device world, responsive design isn't optional—it's essential.</p>
        
        <h3>📱 Mobile-First Approach</h3>
        <p>Start small and scale up for optimal performance and user experience.</p>
      `,
      date: "May 5, 2024",
      readTime: "6 min",
      category: "web",
      tags: ["responsive", "design", "mobile", "ui"],
      likes: 135,
      views: 1100,
      shares: 42,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Web Designer",
        bio: "Focused on creating accessible, responsive designs that work everywhere."
      }
    },
    {
      id: 5,
      title: "Introduction to MongoDB",
      image: MongoDB,
      excerpt: "Get started with MongoDB, the flexible NoSQL database for modern applications.",
      content: `
        <p>MongoDB offers a flexible, document-oriented approach to data storage that scales with your needs.</p>
        
        <h3>📄 Document Model Advantages</h3>
        <ul>
          <li>JSON-like documents</li>
          <li>Dynamic schemas</li>
          <li>Rich query language</li>
        </ul>
      `,
      date: "May 22, 2024",
      readTime: "8 min",
      category: "database",
      tags: ["mongodb", "database", "nosql", "backend"],
      likes: 127,
      views: 870,
      shares: 29,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Database Architect",
        bio: "Specializes in NoSQL databases and scalable data solutions."
      }
    },
    {
      id: 6,
      title: "JavaScript ES6+ Features",
      image: JavaScript,
      excerpt: "Supercharge your JavaScript with modern ES6+ syntax and features.",
      content: `
        <p>ES6+ brought JavaScript into the modern era with powerful features that make coding more enjoyable.</p>
        
        <h3>✨ Must-Know Features</h3>
        <ul>
          <li>Arrow Functions</li>
          <li>Destructuring</li>
          <li>Async/Await</li>
          <li>Modules</li>
        </ul>
      `,
      date: "June 10, 2024",
      readTime: "9 min",
      category: "javascript",
      tags: ["javascript", "es6", "modernjs", "frontend"],
      likes: 245,
      views: 2150,
      shares: 78,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "JavaScript Expert",
        bio: "Passionate about JavaScript evolution and teaching modern development practices."
      }
    }
  ];

  // Add more posts for pagination
  const allPosts = [...blogPosts, ...blogPosts.map(post => ({
    ...post,
    id: post.id + blogPosts.length,
    date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }))];

  const categories = [
    { id: "all", name: "All Posts", icon: <FaBookOpen />, count: allPosts.length },
    { id: "react", name: "React", icon: <FaCode />, count: allPosts.filter(p => p.category === "react").length },
    { id: "javascript", name: "JavaScript", icon: <FaLightbulb />, count: allPosts.filter(p => p.category === "javascript").length },
    { id: "css", name: "CSS", icon: <FaRocket />, count: allPosts.filter(p => p.category === "css").length },
    { id: "node", name: "Node.js", icon: <FaStar />, count: allPosts.filter(p => p.category === "node").length },
    { id: "web", name: "Web Dev", icon: <FaExternalLinkAlt />, count: allPosts.filter(p => p.category === "web").length },
    { id: "database", name: "Database", icon: <FaGithub />, count: allPosts.filter(p => p.category === "database").length }
  ];

  // Filter posts
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedPost(null), 300);
  };

  const handleLike = (postId, e) => {
    e?.stopPropagation();
    setLiked(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleBookmark = (postId, e) => {
    e?.stopPropagation();
    setBookmarked(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now(),
        user: "You",
        avatar: img,
        text: newComment,
        likes: 0,
        time: "Just now"
      };
      
      setComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newCommentObj]
      }));
      setNewComment("");
    }
  };

  const sharePost = (platform, post) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  const viewModes = [
    { id: "grid", icon: <div className="w-4 h-4 grid grid-cols-2 gap-0.5"><div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm"></div></div> },
    { id: "list", icon: <div className="w-4 h-4 flex flex-col gap-0.5"><div className="w-full h-1 bg-current rounded-sm"></div><div className="w-full h-1 bg-current rounded-sm"></div><div className="w-full h-1 bg-current rounded-sm"></div></div> }
  ];

  return (
    <section id="blog" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-teal-900/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 py-16 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
              <FaBookOpen className="w-6 h-6 text-teal-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dive into the latest web development trends, tutorials, and best practices. 
            <span className="block text-teal-300/80 mt-2">From React to Node.js, CSS to Databases</span>
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
            { label: "Total Posts", value: allPosts.length, icon: <FaBookOpen />, color: "from-blue-500 to-cyan-500" },
            { label: "Total Views", value: "10K+", icon: <FaEye />, color: "from-purple-500 to-pink-500" },
            { label: "Categories", value: categories.length - 1, icon: <FaTags />, color: "from-orange-500 to-yellow-500" },
            { label: "Avg Read Time", value: "7 min", icon: <FaClock />, color: "from-green-500 to-teal-500" }
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
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-2xl">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30 transition-all"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1">
              {viewModes.map(mode => (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id)}
                  className={`p-3 rounded-xl transition-all ${viewMode === mode.id ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:text-white'}`}
                >
                  {mode.icon}
                </button>
              ))}
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
            <h3 className="text-xl font-semibold text-white">Browse Categories</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`group flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
              >
                <div className={`transition-transform ${selectedCategory === category.id ? 'scale-110' : ''}`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${selectedCategory === category.id ? 'bg-white/20' : 'bg-black/20'}`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid/List */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={`group relative ${viewMode === "list" ? 'flex flex-col md:flex-row gap-6' : ''} bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all duration-500 cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => openModal(post)}
            >
              {/* Post Image */}
              <div className={`relative overflow-hidden ${viewMode === "list" ? 'md:w-1/3' : 'h-56'}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={(e) => handleBookmark(post.id, e)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${bookmarked[post.id] ? 'bg-teal-500/20 text-teal-400' : 'bg-black/30 text-white hover:bg-teal-500/20'}`}
                  >
                    {bookmarked[post.id] ? <FaBookmark /> : <FaRegBookmark />}
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className={`p-6 ${viewMode === "list" ? 'md:w-2/3' : ''}`}>
                {/* Post Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="w-3 h-3" />
                    <span>{post.readTime} read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEye className="w-3 h-3" />
                    <span>{post.views}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/10">
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-3 py-1 bg-black/20 text-gray-500 text-xs rounded-full">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full border-2 border-teal-500/30"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">{post.author.name}</p>
                      <p className="text-xs text-gray-400">{post.author.role}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => handleLike(post.id, e)}
                      className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      {liked[post.id] ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                      <span className="text-sm">{post.likes + (liked[post.id] ? 1 : 0)}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                      <FaRegCommentAlt />
                      <span className="text-sm">{(comments[post.id] || []).length}</span>
                    </button>
                  </div>
                </div>

                {/* Read More Arrow */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex items-center justify-center gap-2 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronLeft />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-xl transition-all ${currentPage === i + 1
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}

        {/* Newsletter */}
        <motion.div
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
  
        </motion.div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence mode="wait">
        {modalOpen && selectedPost && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-[201] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="min-h-screen flex items-center justify-center p-4">
                <motion.div
                  className="w-full max-w-6xl bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="sticky top-0 z-10 bg-gradient-to-b from-black via-black/95 to-transparent p-6 border-b border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={closeModal}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-teal-500/30 transition-all"
                      >
                        <FaChevronLeft />
                      </button>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{selectedPost.title}</h2>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                          <span className="flex items-center gap-2">
                            <FaCalendar className="w-3 h-3" /> {selectedPost.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaClock className="w-3 h-3" /> {selectedPost.readTime} read
                          </span>
                          <span className="flex items-center gap-2">
                            <FaEye className="w-3 h-3" /> {selectedPost.views} views
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => handleLike(selectedPost.id, e)}
                        className={`p-3 rounded-xl border transition-all ${liked[selectedPost.id] 
                          ? 'bg-red-500/10 border-red-500/30 text-red-400' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}
                      >
                        {liked[selectedPost.id] ? <FaHeart /> : <FaRegHeart />}
                      </button>
                      <button
                        onClick={(e) => handleBookmark(selectedPost.id, e)}
                        className={`p-3 rounded-xl border transition-all ${bookmarked[selectedPost.id]
                          ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}
                      >
                        <FaBookmark />
                      </button>
                      <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all">
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="max-h-[80vh] overflow-y-auto">
                    {/* Hero Image */}
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={selectedPost.image}
                        alt={selectedPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={selectedPost.author.avatar}
                              alt={selectedPost.author.name}
                              className="w-12 h-12 rounded-full border-2 border-teal-500"
                            />
                            <div>
                              <p className="font-semibold text-white">{selectedPost.author.name}</p>
                              <p className="text-sm text-gray-300">{selectedPost.author.role}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <a
                              href="#"
                              className="px-4 py-2 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors"
                            >
                              Follow
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {selectedPost.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-sm border border-teal-500/20"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Article Content */}
                      <div
                        className="prose prose-invert max-w-none mb-12"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                      />

                      {/* Stats & Share */}
                      <div className="flex flex-wrap items-center justify-between py-6 border-y border-white/10 mb-12">
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{selectedPost.likes + (liked[selectedPost.id] ? 1 : 0)}</div>
                            <div className="text-sm text-gray-400">Likes</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{(comments[selectedPost.id] || []).length}</div>
                            <div className="text-sm text-gray-400">Comments</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{selectedPost.shares}</div>
                            <div className="text-sm text-gray-400">Shares</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 mt-4 md:mt-0">
                          <span className="text-gray-400">Share:</span>
                          {[
                            { platform: "facebook", icon: <FaFacebook />, color: "hover:text-blue-500" },
                            { platform: "twitter", icon: <FaTwitter />, color: "hover:text-cyan-400" },
                            { platform: "linkedin", icon: <FaLinkedin />, color: "hover:text-blue-600" }
                          ].map(social => (
                            <button
                              key={social.platform}
                              onClick={() => sharePost(social.platform, selectedPost)}
                              className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 ${social.color} transition-all`}
                            >
                              {social.icon}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Comments Section */}
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                          <FaComment className="text-teal-400" />
                          Comments ({(comments[selectedPost.id] || []).length})
                        </h3>

                        {/* Comment Input */}
                        <div className="mb-8">
                          <div className="flex items-start gap-4">
                            <img
                              src={img}
                              alt="Your avatar"
                              className="w-12 h-12 rounded-full"
                            />
                            <form onSubmit={(e) => handleCommentSubmit(e, selectedPost.id)} className="flex-1">
                              <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Share your thoughts..."
                                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/30 resize-none"
                                rows="4"
                              />
                              <div className="flex justify-end mt-3">
                                <button
                                  type="submit"
                                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
                                >
                                  Post Comment
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>

                        {/* Comments List */}
                        <div className="space-y-6">
                          {(comments[selectedPost.id] || []).map(comment => (
                            <div key={comment.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={comment.avatar}
                                    alt={comment.user}
                                    className="w-10 h-10 rounded-full"
                                  />
                                  <div>
                                    <p className="font-semibold text-white">{comment.user}</p>
                                    <p className="text-sm text-gray-400">{comment.time}</p>
                                  </div>
                                </div>
                                <button className="flex items-center gap-2 text-gray-400 hover:text-red-400">
                                  <FaHeart className="w-4 h-4" />
                                  <span>{comment.likes}</span>
                                </button>
                              </div>
                              <p className="text-gray-300">{comment.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Author Bio */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <div className="flex items-center gap-6 mb-6">
                          <img
                            src={selectedPost.author.avatar}
                            alt={selectedPost.author.name}
                            className="w-20 h-20 rounded-full border-4 border-teal-500/30"
                          />
                          <div>
                            <h4 className="text-2xl font-bold text-white">{selectedPost.author.name}</h4>
                            <p className="text-teal-400 mb-2">{selectedPost.author.role}</p>
                            <p className="text-gray-300">{selectedPost.author.bio}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <button className="px-6 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors">
                            Follow Author
                          </button>
                          <button className="px-6 py-3 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-colors">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;