import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LodingAni.css';
import LogoImage from "../../assets/blog_img/mtonoy.jpg";
import { FaRocket, FaCode, FaStar, FaHeart, FaCheck, FaArrowRight, FaCoffee, FaBolt } from 'react-icons/fa';

const LodingAnimation = ({ progress, isFirstLoad }) => {
  const [currentTip, setCurrentTip] = useState(0);
  const [text, setText] = useState('');
  const [dots, setDots] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const loadingText = isFirstLoad ? 'Welcome to My Portfolio' : 'Loading Amazing Content';

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= loadingText.length) {
        setText(loadingText.substring(0, currentIndex));
        currentIndex++;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [loadingText, isFirstLoad]);

  // Dots animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Tips rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Hide when loading is complete
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setIsVisible(false), 1000);
    }
  }, [progress]);

  const tips = [
    { icon: <FaRocket />, text: "Launching an amazing experience", color: "var(--primary)" },
    { icon: <FaCode />, text: "Crafting digital excellence", color: "var(--secondary)" },
    { icon: <FaStar />, text: "Preparing something special", color: "var(--accent)" },
  ];

  const features = [
    { icon: <FaCheck />, text: "Interactive Portfolio", completed: progress > 25 },
    { icon: <FaCheck />, text: "Project Showcase", completed: progress > 50 },
    { icon: <FaCheck />, text: "Skills & Experience", completed: progress > 75 },
  ];

  const particleCount = 30;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="loading-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Background Particles */}
          <div className="particles-container">
            {[...Array(particleCount)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
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
          </div>

          {/* Gradient Orbs */}
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>

          {/* Main Container */}
          <motion.div 
            className="loading-container"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Logo with Orbit Animation */}
            <div className="logo-orbit-container">
              <motion.div 
                className="logo-wrapper"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="logo-glow"></div>
                <div className="logo-main">
                  <img src={LogoImage} alt="Md Moniruzzaman" className="logo-image" />
                </div>
              </motion.div>
              
              {/* Orbiting Elements */}
              <motion.div
                className="orbiting-element orbit-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="orbit-icon">
                  <FaCode />
                </div>
              </motion.div>
              
              <motion.div
                className="orbiting-element orbit-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className="orbit-icon">
                  <FaRocket />
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="loading-content">
              {/* Animated Title */}
              <motion.div 
                className="title-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="loading-title">
                  {text}
                  <span className="cursor">|</span>
                  <span className="loading-dots">{dots}</span>
                </h2>
              </motion.div>

              {/* Progress Section */}
              <div className="progress-section">
                <div className="progress-header">
                  <span className="progress-label">Loading Portfolio</span>
                  <span className="progress-percent">{Math.round(progress)}%</span>
                </div>
                
                <div className="progress-bar-wrapper">
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="progress-bar-shine"></div>
                    </motion.div>
                  </div>
                  
                  {/* Progress Steps */}
                  <div className="progress-steps">
                    {[0, 33, 66, 100].map((step, index) => (
                      <div 
                        key={index}
                        className={`progress-step ${progress >= step ? 'active' : ''}`}
                        style={{ left: `${step}%` }}
                      >
                        <div className="step-dot"></div>
                        <span className="step-label">{step}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Loading Features */}
              <div className="features-grid">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className={`feature-item ${feature.completed ? 'completed' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="feature-icon">
                      {feature.completed ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        >
                          <FaCheck />
                        </motion.div>
                      ) : (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="loading-icon"
                        />
                      )}
                    </div>
                    <span className="feature-text">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tips Carousel */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTip}
                  className="tip-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="tip-card" style={{ '--tip-color': tips[currentTip].color }}>
                    <div className="tip-icon-wrapper">
                      {tips[currentTip].icon}
                    </div>
                    <p className="tip-text">{tips[currentTip].text}</p>
                    
                    {/* Tip Indicators */}
                    <div className="tip-indicators">
                      {[0, 1, 2].map((i) => (
                        <button
                          key={i}
                          className={`tip-indicator ${i === currentTip ? 'active' : ''}`}
                          onClick={() => setCurrentTip(i)}
                          aria-label={`View tip ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stats */}
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-value">{Math.round(progress)}%</div>
                  <div className="stat-label">Loaded</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{((100 - progress) / 20).toFixed(1)}s</div>
                  <div className="stat-label">Estimated Time</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{features.filter(f => f.completed).length}/{features.length}</div>
                  <div className="stat-label">Components</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <motion.div 
              className="loading-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="footer-content">
                <div className="made-with">
                  <FaHeart className="heart-icon" />
                  <span>Made with passion by Md Moniruzzaman</span>
                </div>
                <div className="skip-hint">
                  <span>Press ESC to skip</span>
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Background Shapes */}
          <div className="floating-shapes">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="floating-shape"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                {i % 3 === 0 ? <FaCode /> : i % 3 === 1 ? <FaStar /> : <FaBolt />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LodingAnimation;