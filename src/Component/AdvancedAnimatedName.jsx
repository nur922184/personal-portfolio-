import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdvancedAnimatedName = () => {
    const [currentEffect, setCurrentEffect] = useState(0);
    
    const effects = [
        // Effect 1: Gradient Flow
        {
            firstName: "from-teal-400 via-blue-500 to-purple-500",
            lastName: "from-purple-500 via-blue-500 to-teal-400",
            animation: "gradient-flow"
        },
        // Effect 2: Neon Glow
        {
            firstName: "from-cyan-400 to-blue-500",
            lastName: "from-purple-400 to-pink-500",
            animation: "neon-glow"
        },
        // Effect 3: Fire Effect
        {
            firstName: "from-yellow-400 via-orange-500 to-red-500",
            lastName: "from-red-500 via-orange-500 to-yellow-400",
            animation: "fire-effect"
        },
        // Effect 4: Ocean Wave
        {
            firstName: "from-green-400 via-cyan-500 to-blue-500",
            lastName: "from-blue-500 via-cyan-500 to-green-400",
            animation: "ocean-wave"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEffect((prev) => (prev + 1) % effects.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const current = effects[currentEffect];

    return (
        <motion.div 
            className="font-extrabold cursor-pointer text-xl lg:text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
                opacity: 1, 
                y: 0,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
            whileHover={{
                scale: 1.08,
                transition: { duration: 0.3 }
            }}
        >
            {/* Rafiq with animated gradient */}
            <motion.span
                key={`first-${currentEffect}`}
                animate={{
                    backgroundPosition: current.animation === "gradient-flow" ? 
                        ["0%", "100%", "0%"] : 
                        current.animation === "neon-glow" ?
                        ["0%", "50%", "0%"] :
                        ["0%", "100%", "0%"]
                }}
                transition={{
                    duration: current.animation === "neon-glow" ? 2 : 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`bg-gradient-to-r ${current.firstName} bg-clip-text text-transparent bg-[length:200%_auto] ${
                    current.animation === "neon-glow" ? "filter drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" : ""
                }`}
            >
                Moni 
            </motion.span>
            
            {/* Middle part - Static but with hover effect */}
            <motion.span 
                className='text-white mx-1'
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
            >
                RUZZ
            </motion.span>
            
            {/* Zaman with animated gradient */}
            <motion.span
                key={`last-${currentEffect}`}
                animate={{
                    backgroundPosition: current.animation === "gradient-flow" ? 
                        ["100%", "0%", "100%"] : 
                        current.animation === "neon-glow" ?
                        ["100%", "50%", "100%"] :
                        ["100%", "0%", "100%"]
                }}
                transition={{
                    duration: current.animation === "neon-glow" ? 2 : 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`bg-gradient-to-r ${current.lastName} bg-clip-text text-transparent bg-[length:200%_auto] ${
                    current.animation === "neon-glow" ? "filter drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]" : ""
                }`}
            >
                aman
            </motion.span>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-70"
                        style={{
                            left: `${20 + i * 25}%`,
                            top: '-5px'
                        }}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default AdvancedAnimatedName;