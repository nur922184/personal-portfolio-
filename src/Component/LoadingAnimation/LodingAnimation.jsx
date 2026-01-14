import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LodingAni.css';
import ProfileImage from "../../assets/blog_img/mtonoy.jpg";

const LoadingAnimation = ({ progress }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [progress]);

  return (
    <>
      {isVisible && (
        <motion.div 
          className="loading-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Minimal Background */}
          <div className="loading-background"></div>

          {/* Main Content */}
          <div className="loading-content">
            
            {/* Profile Image with Glow Effect */}
            <div className="profile-image-container">
              <div className="image-glow"></div>
              <motion.div 
                className="image-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <img 
                src={ProfileImage} 
                alt="Md Moniruzzaman" 
                className="profile-image" 
              />
            </div>

            {/* Animated Name */}
            <motion.div 
              className="name-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="name-wrapper">
                {['M', 'd', ' ', 'M', 'o', 'n', 'i', 'r', 'u', 'z', 'z', 'a', 'm', 'a', 'n'].map((letter, index) => (
                  <motion.span
                    key={index}
                    className="name-letter"
                    initial={{ y: 0 }}
                    animate={{ 
                      y: [0, -15, 0],
                      color: ['#ffffff', '#00d4ff', '#ffffff']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                      ease: "easeInOut"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              <motion.div 
                className="title-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
               Welcome My Portfolio...
              </motion.div>
            </motion.div>

            {/* Simple Progress Bar */}
            <div className="progress-container">
              <div className="progress-track">
                <motion.div 
                  className="progress-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="progress-text">{Math.round(progress)}%</div>
            </div>

            {/* Subtle Loading Indicator */}
            <motion.div 
              className="loading-indicator"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Preparing your experience
            </motion.div>
          </div>

          {/* Minimal Background Elements */}
          <div className="background-elements">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-element"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + Math.random() * 40}%`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default LoadingAnimation;