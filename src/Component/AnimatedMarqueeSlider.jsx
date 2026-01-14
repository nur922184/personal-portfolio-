import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaPlay, 
  FaPause,
  FaRandom,
  FaExpand,
  FaCompress,
  FaVolumeUp,
  FaVolumeMute
} from 'react-icons/fa';

const AnimatedMarqueeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [direction, setDirection] = useState('right');
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const intervalRef = useRef(null);

  // Sample images - You can replace these with your logos
  const slides = [
    { 
      id: 1, 
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop", 
      title: "React Logo", 
      description: "Modern UI Library",
      color: "#61DAFB"
    },
    { 
      id: 2, 
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop", 
      title: "Node.js", 
      description: "JavaScript Runtime",
      color: "#339933"
    },
    { 
      id: 3, 
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w-800&auto=format&fit=crop", 
      title: "Tailwind CSS", 
      description: "Utility-First CSS",
      color: "#06B6D4"
    },
    { 
      id: 4, 
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=800&auto=format&fit=crop", 
      title: "MongoDB", 
      description: "NoSQL Database",
      color: "#47A248"
    },
    { 
      id: 5, 
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=800&auto=format&fit=crop", 
      title: "Firebase", 
      description: "Backend Platform",
      color: "#FFCA28"
    },
    { 
      id: 6, 
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w-800&auto=format&fit=crop", 
      title: "Next.js", 
      description: "React Framework",
      color: "#000000"
    },
    { 
      id: 7, 
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop", 
      title: "TypeScript", 
      description: "JavaScript Superset",
      color: "#3178C6"
    },
    { 
      id: 8, 
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop", 
      title: "GraphQL", 
      description: "API Query Language",
      color: "#E10098"
    }
  ];

  // Duplicate slides for seamless loop
  const allSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          if (direction === 'right') {
            return prev >= slides.length * 2 - 1 ? 0 : prev + 1;
          } else {
            return prev <= 0 ? slides.length * 2 - 1 : prev - 1;
          }
        });
      }, 3000 / animationSpeed);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, direction, animationSpeed, slides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => prev >= slides.length * 2 - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev <= 0 ? slides.length * 2 - 1 : prev - 1);
  };

  const randomSlide = () => {
    const randomIndex = Math.floor(Math.random() * slides.length);
    setCurrentSlide(randomIndex + slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 'random') {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const handleSpeedChange = (speed) => {
    setAnimationSpeed(speed);
  };

  const handleSlideClick = (index) => {
    setCurrentSlide(index + slides.length);
  };

  const animationVariants = {
    marquee: {
      x: direction === 'right' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30 / animationSpeed,
          ease: "linear"
        }
      }
    }
  };

  const slideVariants = {
    initial: { scale: 0.8, opacity: 0, rotateY: -90 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      rotateY: 0,
      transition: { type: "spring", stiffness: 100 }
    },
    exit: { scale: 0.8, opacity: 0, rotateY: 90 }
  };

  const hoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1, 
      rotateY: 15,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-gray-900' : 'min-h-screen'} bg-gradient-to-br from-gray-900 via-black to-teal-900/30 overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Animated Tech Showcase
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interactive marquee slider with multiple animations and effects
          </p>
        </motion.div>

        {/* Main Slider Container */}
        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 lg:p-8 mb-8 overflow-hidden">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlayPause}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-teal-500/20 hover:border-teal-500/30 transition-all"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-teal-500/20 hover:border-teal-500/30 transition-all"
              >
                <FaChevronLeft />
              </button>
              
              <button
                onClick={nextSlide}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-teal-500/20 hover:border-teal-500/30 transition-all"
              >
                <FaChevronRight />
              </button>
              
              <button
                onClick={randomSlide}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-teal-500/20 hover:border-teal-500/30 transition-all"
              >
                <FaRandom />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-gray-400">Speed:</span>
                {[0.5, 1, 2, 3].map(speed => (
                  <button
                    key={speed}
                    onClick={() => handleSpeedChange(speed)}
                    className={`px-3 py-1 rounded-lg transition-all ${animationSpeed === speed 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-white/5 text-gray-400 hover:text-white'}`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>

              <button
                onClick={toggleFullscreen}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-teal-500/20 hover:border-teal-500/30 transition-all"
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          </div>

          {/* Direction Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['left', 'right', 'random'].map(dir => (
              <button
                key={dir}
                onClick={() => handleDirectionChange(dir)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${direction === dir
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'}`}
              >
                {dir.charAt(0).toUpperCase() + dir.slice(1)}
              </button>
            ))}
          </div>

          {/* Current Slide Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8"
            >
              <img
                src={slides[currentSlide % slides.length].image}
                alt={slides[currentSlide % slides.length].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentSlide % slides.length].title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slides[currentSlide % slides.length].description}
                </motion.p>
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mt-3"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 0.4 }}
                />
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                {currentSlide % slides.length + 1} / {slides.length}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Marquee Section */}
          <div className="relative overflow-hidden rounded-xl">
            <motion.div
              ref={marqueeRef}
              className="flex"
              variants={direction !== 'random' ? animationVariants : undefined}
              animate={direction !== 'random' ? "marquee" : undefined}
            >
              {allSlides.map((slide, index) => (
                <motion.div
                  key={`${slide.id}-${index}`}
                  className="flex-shrink-0 w-40 h-40 mx-2 cursor-pointer"
                  variants={hoverVariants}
                  initial="initial"
                  whileHover="hover"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleSlideClick(index % slides.length)}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      hoveredIndex === index ? 'bg-black/50' : 'bg-black/30'
                    }`} />
                    
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${slide.color}20, transparent 70%)`,
                      }}
                    />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white text-sm font-semibold truncate">{slide.title}</p>
                      <div className="h-1 w-8 bg-gradient-to-r from-teal-400 to-blue-400 mt-1 rounded-full" />
                    </div>
                    
                    {/* Active Indicator */}
                    {((currentSlide % slides.length) === (index % slides.length)) && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient Overlays for Marquee */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  (currentSlide % slides.length) === index
                    ? 'bg-gradient-to-r from-teal-400 to-blue-400 w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMarqueeSlider;