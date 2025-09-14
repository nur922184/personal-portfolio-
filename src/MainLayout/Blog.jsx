import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from '../assets/me.jpg'
import react from '../assets/blog_img/React_Hooks.jpeg'
import css from '../assets/blog_img/Mastering_Tailwind_CSS.png'
import node from '../assets/blog_img/Node.js_Best_Practices.jpeg'
import Responsive_Design from '../assets/blog_img/Responsive_Design_Principles.jpeg'
import MongoDB from '../assets/blog_img/mongodb-cover.png'
import JavaScript from '../assets/blog_img/js.jpeg'
import { FaCalendar, FaClock, FaUser, FaArrowRight, FaTimes, FaHeart, FaComment, FaShare, FaBookmark, FaThumbsUp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [liked, setLiked] = useState({});
  const [bookmarked, setBookmarked] = useState({});
  const [comments, setComments] = useState({
    1: ["Great article! Really helped me understand React Hooks better.", "Thanks for sharing!"],
    2: ["Tailwind CSS is amazing for rapid development.", "Could you write more about custom configurations?"],
    3: ["Node.js best practices are essential for production apps.", "Would love to see more about error handling."],
    4: ["Responsive design is a must in 2024.", "Great examples in this post!"],
    5: ["MongoDB's flexibility is its biggest strength.", "How does it compare to SQL databases for large applications?"],
    6: ["ES6 features made JavaScript so much more powerful.", "Async/await is a game changer!"]
  });
  const [newComment, setNewComment] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      image: react,
      excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      content: `
        <p>React Hooks are a powerful feature introduced in React 16.8. They let you use state and other React features without writing a class component.</p>
        <p>Before Hooks, if you wanted to use state in a component, you had to convert it to a class. With Hooks, you can keep using functions and still have access to all React features.</p>
        <h3>Most Commonly Used Hooks</h3>
        <ul>
          <li><strong>useState</strong> - For managing state in functional components</li>
          <li><strong>useEffect</strong> - For handling side effects (API calls, subscriptions, etc.)</li>
          <li><strong>useContext</strong> - For accessing context without wrapping components</li>
          <li><strong>useReducer</strong> - For managing complex state logic</li>
        </ul>
        <p>Hooks have completely transformed how we write React components, making code more reusable and easier to understand.</p>
      `,
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "react",
      likes: 42,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Frontend Developer"
      }
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      image: css,
      excerpt: "Discover how to efficiently build modern websites with Tailwind CSS utility-first framework.",
      content: `
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML.</p>
        <p>Unlike other CSS frameworks like Bootstrap that provide pre-designed components, Tailwind provides low-level utility classes that let you build completely custom designs.</p>
        <h3>Benefits of Using Tailwind CSS</h3>
        <ul>
          <li>No more naming things - stop worrying about coming up with the perfect class name</li>
          <li>CSS stops growing - your CSS bundle size stays small regardless of project size</li>
          <li>Making changes feels safer - CSS is global and changes can have unintended consequences</li>
          <li>It's customizable - you can customize the design system to match your brand</li>
        </ul>
        <p>With its growing popularity and extensive documentation, Tailwind CSS has become the go-to choice for many developers.</p>
      `,
      date: "April 2, 2024",
      readTime: "7 min read",
      category: "css",
      likes: 38,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Frontend Developer"
      }
    },
    {
      id: 3,
      title: "Node.js Best Practices",
      image: node,
      excerpt: "Explore the best practices for building scalable and maintainable Node.js applications.",
      content: `
        <p>Node.js has become one of the most popular runtime environments for building server-side applications. Here are some best practices to follow:</p>
        <h3>Project Structure</h3>
        <p>Organize your code in a logical structure. Group related files together and separate concerns.</p>
        <h3>Error Handling</h3>
        <p>Always handle errors properly. Use try-catch blocks, error boundaries, and proper logging.</p>
        <h3>Security Practices</h3>
        <p>Implement security measures like input validation, authentication, and authorization.</p>
        <h3>Performance Optimization</h3>
        <p>Use clustering, caching, and other techniques to optimize your Node.js applications.</p>
      `,
      date: "April 18, 2024",
      readTime: "10 min read",
      category: "node",
      likes: 29,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Frontend Developer"
      }
    },
    {
      id: 4,
      title: "Responsive Design Principles",
      image: Responsive_Design,
      excerpt: "Learn the core principles of responsive web design to create websites that work on all devices.",
      content: `
        <p>Responsive web design has become essential in today's multi-device world. With the variety of screen sizes and devices, your website needs to adapt seamlessly.</p>
        <h3>Core Principles</h3>
        <ul>
          <li><strong>Fluid Grids</strong> - Use relative units like percentages instead of fixed units like pixels</li>
          <li><strong>Flexible Images</strong> - Ensure images resize appropriately within their containing elements</li>
          <li><strong>Media Queries</strong> - Apply different styles based on device characteristics</li>
        </ul>
        <h3>Mobile-First Approach</h3>
        <p>Start designing for the smallest screens first, then progressively enhance the experience for larger screens.</p>
        <p>This approach ensures that your website is accessible and functional on all devices, regardless of screen size.</p>
      `,
      date: "May 5, 2024",
      readTime: "6 min read",
      category: "web",
      likes: 35,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Frontend Developer"
      }
    },
    {
      id: 5,
      title: "Introduction to MongoDB",
      image: MongoDB,
      excerpt: "Get started with MongoDB, the popular NoSQL database, and learn how to integrate it with your applications.",
      content: `
        <p>MongoDB is a document-oriented NoSQL database that provides high performance, high availability, and easy scalability.</p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Document-Oriented Storage</strong> - Data is stored as JSON-like documents</li>
          <li><strong>Full Index Support</strong> - Index any field in a document for faster queries</li>
          <li><strong>Replication & High Availability</strong> - Mirror across LANs and WANs for scale and reliability</li>
          <li><strong>Auto-Sharding</strong> - Horizontal scalability across multiple servers</li>
        </ul>
        <h3>When to Use MongoDB</h3>
        <p>MongoDB is a great choice when you need to store large volumes of unstructured or semi-structured data, or when you need horizontal scalability.</p>
      `,
      date: "May 22, 2024",
      readTime: "8 min read",
      category: "database",
      likes: 27,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Frontend Developer"
      }
    },
    {
      id: 6,
      title: "JavaScript ES6+ Features",
      image: JavaScript,
      excerpt: "Explore the modern JavaScript features that make development more efficient and enjoyable.",
      content: `
        <p>ECMAScript 2015 (ES6) introduced significant new syntax for writing complex applications. Since then, JavaScript has continued to evolve with new features every year.</p>
        <h3>Important ES6+ Features</h3>
        <ul>
          <li><strong>Arrow Functions</strong> - Shorter syntax and lexical 'this' binding</li>
          <li><strong>Template Literals</strong> - String interpolation and multi-line strings</li>
          <li><strong>Destructuring</strong> - Extract data from arrays or objects</li>
          <li><strong>Modules</strong> - Import and export functionality between files</li>
          <li><strong>Async/Await</strong> - Write asynchronous code that looks synchronous</li>
        </ul>
        <p>These features have made JavaScript more expressive and powerful, enabling developers to write cleaner and more maintainable code.</p>
      `,
      date: "June 10, 2024",
      readTime: "9 min read",
      category: "javascript",
      likes: 45,
      author: {
        name: "Md Moniruzzaman",
        avatar: img,
        role: "Frontend Developer"
      }
    }
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "react", name: "React" },
    { id: "javascript", name: "JavaScript" },
    { id: "css", name: "CSS" },
    { id: "node", name: "Node.js" },
    { id: "web", name: "Web Development" },
    { id: "database", name: "Database" }
  ];

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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

  const handleLike = (postId) => {
    setLiked(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleBookmark = (postId) => {
    setBookmarked(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newComment]
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

  return (
    <section id="blog" className="py-16 px-4 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e] min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-teal-300">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and programming
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.id
                ? "bg-teal-500 text-white"
                : "bg-white/10 text-gray-200 hover:bg-white/20"
                }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 dark:border-gray-700/20 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Post Image */}
              <div className="h-48 bg-gradient-to-r from-teal-400 to-blue-500">
                <img src={post.image} alt="" />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category Tag */}
                <span className="inline-block bg-teal-400/20 text-teal-300 text-xs px-3 py-1 rounded-full mb-4 capitalize">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center text-sm dark:text-gray-400 text-black mb-4">
                  <FaCalendar className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <FaClock className="mr-1" />
                  <span>{post.readTime}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center pt-4 border-t border-white/10">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">{post.author.name}</p>
                    <p className="text-gray-600 text-xs">{post.author.role}</p>
                  </div>
                </div>

                {/* Read More Button */}
                <motion.button
                  className="w-full mt-6 flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal(post)}
                >
                  Read More <FaArrowRight className="ml-2" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {modalOpen && selectedPost && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center z-10">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedPost.title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Post Meta */}
                  <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center mr-4 mb-2">
                      <FaCalendar className="mr-1" />
                      <span>{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                      <FaClock className="mr-1" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                      <FaUser className="mr-1" />
                      <span>{selectedPost.author.name}</span>
                    </div>
                    <div className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-full text-xs capitalize">
                      {selectedPost.category}
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="h-64 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg mb-6">
                      <img className="h-64" src={selectedPost.image} alt="" />
                  </div>

                  {/* Post Content */}
                  <div
                    className="prose dark:prose-invert max-w-none mb-8"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between py-4 border-t border-b border-gray-200 dark:border-gray-700 mb-6">
                    <div className="flex items-center space-x-4">
                      <button
                        className={`flex items-center ${liked[selectedPost.id] ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}
                        onClick={() => handleLike(selectedPost.id)}
                      >
                        <FaHeart className="mr-1" />
                        <span>{selectedPost.likes + (liked[selectedPost.id] ? 1 : 0)}</span>
                      </button>

                      <button className="flex items-center text-gray-500 dark:text-gray-400">
                        <FaComment className="mr-1" />
                        <span>{(comments[selectedPost.id] || []).length}</span>
                      </button>

                      <button
                        className={`flex items-center ${bookmarked[selectedPost.id] ? 'text-teal-500' : 'text-gray-500 dark:text-gray-400'}`}
                        onClick={() => handleBookmark(selectedPost.id)}
                      >
                        <FaBookmark className="mr-1" />
                      </button>
                    </div>

                    <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Share:</span>
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => sharePost("facebook", selectedPost)}
                      >
                        <FaFacebook />
                      </button>
                      <button
                        className="text-blue-400 hover:text-blue-600"
                        onClick={() => sharePost("twitter", selectedPost)}
                      >
                        <FaTwitter />
                      </button>
                      <button
                        className="text-blue-700 hover:text-blue-900"
                        onClick={() => sharePost("linkedin", selectedPost)}
                      >
                        <FaLinkedin />
                      </button>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Comments ({(comments[selectedPost.id] || []).length})</h3>

                    <div className="space-y-4 mb-6">
                      {(comments[selectedPost.id] || []).map((comment, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <div className="flex items-start mb-2">
                            <img
                              src={`https://i.pravatar.cc/150?img=${index + 2}`}
                              alt="Commenter"
                              className="w-8 h-8 rounded-full mr-3"
                            />
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">User {index + 1}</p>
                              <p className="text-gray-700 dark:text-gray-300">{comment}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <button className="flex items-center mr-4">
                              <FaThumbsUp className="mr-1" />
                              <span>12</span>
                            </button>
                            <button className="text-gray-500 dark:text-gray-400">Reply</button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Comment Form */}
                    <form onSubmit={(e) => handleCommentSubmit(e, selectedPost.id)}>
                      <div className="flex items-start space-x-3">
                        <img
                          src="https://i.pravatar.cc/150?img=5"
                          alt="Your avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-grow">
                          <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            rows="3"
                          />
                          <div className="flex justify-end mt-2">
                            <button
                              type="submit"
                              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
                            >
                              Post Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* Author Bio */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src={selectedPost.author.avatar}
                        alt={selectedPost.author.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPost.author.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{selectedPost.author.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Passionate about web development and creating user-friendly applications.
                      Enjoys sharing knowledge through blog posts and tutorials.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl text-white mb-2">No posts found</h3>
            <p className="text-gray-300">There are no blog posts in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;