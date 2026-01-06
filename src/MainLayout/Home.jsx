import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from '../assets/me.jpg';
import Animation from '../Component/Animation';
import '../Animated/TextAnimation.css';
import '../Animated/ImageAnimation.css';
import { FaDownload, FaBriefcase, FaEnvelope, FaArrowDown, FaGithub, FaLinkedin, FaTwitter, FaCode, FaRocket, FaStar, FaMouse } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
    const textRef = useRef(null);
    const textRefs = useRef(null);
    const imageRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const socialLinks = [
        { icon: <FaGithub />, label: "GitHub", url: "#", color: "from-gray-800 to-gray-900" },
        { icon: <FaLinkedin />, label: "LinkedIn", url: "#", color: "from-blue-700 to-blue-800" },
        { icon: <FaTwitter />, label: "Twitter", url: "#", color: "from-cyan-500 to-blue-500" },
        { icon: <FaCode />, label: "CodePen", url: "#", color: "from-black to-gray-800" }
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40
            });
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const imageElement = imageRef.current;
        if (imageElement) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-image');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(imageElement);
        }
    }, []);

    useEffect(() => {
        const textElement = textRefs.current;
        if (textElement) {
            textElement.classList.add('animate-text');
        }
    }, []);

    useEffect(() => {
        const textElement = textRef.current;
        if (textElement) {
            textElement.classList.add('animate-text');
        }
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="relative">
            {/* Scroll Progress Indicator */}
            <motion.div 
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 z-50"
                style={{ width: `${scrollProgress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${scrollProgress}%` }}
                transition={{ type: "spring", damping: 30 }}
            />

            {/* Hero Section */}
            <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-teal-900/30">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating Particles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 50 - 25, 0],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}

                    {/* Gradient Orbs */}
                    <div className="absolute top-20 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>

                    {/* Grid Pattern */}
                    <div 
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px',
                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    />
                </div>

                {/* Main Content */}
                <div className="relative container mx-auto px-4 py-20 md:py-32 min-h-screen flex flex-col justify-center z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        {/* Left Content */}
                        <motion.div 
                            className="lg:w-1/2 order-2 lg:order-1"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="space-y-6">
                                {/* Greeting */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h4 ref={textRefs} className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2">
                                        Hey there! I'm
                                    </h4>
                                    <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                                        <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                            <Animation />
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <div className="relative inline-block">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                        <h2 ref={textRef} className="relative text-xl md:text-2xl text-white font-medium px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10">
                                            <span className="flex items-center gap-3">
                                                <FaCode className="text-teal-400" />
                                                Frontend Developer & UI/UX Enthusiast
                                            </span>
                                        </h2>
                                    </div>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                                >
                                    I craft exceptional digital experiences that blend beautiful design 
                                    with cutting-edge technology. Passionate about creating intuitive, 
                                    accessible, and pixel-perfect web applications.
                                </motion.p>

                                {/* Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6"
                                >
                                    {[
                                        { number: "50+", label: "Projects", icon: <FaRocket className="text-teal-400" /> },
                                        { number: "3+", label: "Years Exp", icon: <FaStar className="text-yellow-400" /> },
                                        { number: "100%", label: "Satisfaction", icon: <FaStar className="text-pink-400" /> },
                                        { number: "∞", label: "Passion", icon: <FaCode className="text-purple-400" /> }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
                                            <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                                                {stat.icon}
                                            </div>
                                            <div className="text-2xl font-bold text-white">{stat.number}</div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="flex flex-col sm:flex-row gap-4 pt-4"
                                >
                                    <Link to="work" smooth={true} duration={800}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <FaBriefcase className="relative z-10" />
                                            <span className="relative z-10">View My Work</span>
                                            <div className="absolute -right-4 w-8 h-8 bg-white/20 rounded-full group-hover:right-2 transition-all duration-500">
                                                <FaArrowDown className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                            </div>
                                        </motion.button>
                                    </Link>

                                    <Link to="resume" smooth={true} duration={800}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-2xl hover:bg-teal-500/10 hover:border-teal-500/30 transition-all duration-300"
                                        >
                                            <FaDownload />
                                            Download Resume
                                        </motion.button>
                                    </Link>
                                </motion.div>

                                {/* Social Links */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex items-center gap-4 pt-8"
                                >
                                    <span className="text-gray-400">Connect with me:</span>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.url}
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`p-3 rounded-xl bg-gradient-to-br ${social.color} text-white hover:shadow-lg transition-all duration-300`}
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div 
                            className="lg:w-1/2 order-1 lg:order-2 flex justify-center"
                            initial={{ opacity: 0, x: 100, rotateY: 90 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div 
                                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {/* Outer Glow */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/30 via-blue-500/30 to-purple-500/30 blur-3xl animate-pulse"></div>

                                {/* Rotating Rings */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-dashed border-teal-500/30"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                
                                <motion.div
                                    className="absolute inset-4 rounded-full border-2 border-dashed border-purple-500/30"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Main Image Container */}
                                <div className="absolute inset-8 rounded-full overflow-hidden">
                                    <motion.div
                                        className="relative w-full h-full rounded-full"
                                        animate={isHovering ? { scale: 1.05 } : { scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                                        
                                        {/* Profile Image */}
                                        <img
                                            src={profileImage}
                                            alt="Md Moniruzzaman - Frontend Developer"
                                            ref={imageRef}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                        
                                        {/* Floating Elements */}
                                        <motion.div
                                            className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-lg"
                                            animate={{ 
                                                y: [0, -10, 0],
                                                rotate: [0, 360]
                                            }}
                                            transition={{ 
                                                y: { duration: 2, repeat: Infinity },
                                                rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                                            }}
                                        >
                                            <FaCode className="w-5 h-5" />
                                        </motion.div>

                                        <motion.div
                                            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg"
                                            animate={{ 
                                                y: [0, 10, 0],
                                                rotate: [0, -360]
                                            }}
                                            transition={{ 
                                                y: { duration: 3, repeat: Infinity, delay: 0.5 },
                                                rotate: { duration: 6, repeat: Infinity, ease: "linear" }
                                            }}
                                        >
                                            <FaRocket className="w-6 h-6" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Floating Text */}
                                <motion.div
                                    className="absolute -right-20 top-1/2 transform -translate-y-1/2"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 blur-xl opacity-30"></div>
                                        <div className="relative px-6 py-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-white/10">
                                            <span className="text-white font-semibold text-sm">Frontend Developer</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Link to="about" smooth={true} duration={800}>
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-teal-400 transition-colors">
                                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 group-hover:bg-teal-400 transition-colors"></div>
                            </div>
                            <div className="flex items-center gap-2 text-white/50 group-hover:text-teal-400 transition-colors">
                                <FaMouse className="w-4 h-4" />
                                <span className="text-sm font-medium">Scroll</span>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </section>
        </div>
    );
};

export default Home;