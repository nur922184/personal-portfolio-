import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <>
      {/* হোলোগ্রামিক গ্রিড এনিমেশন */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Animated Grid */}
        <div
          className="absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
          bg-[size:50px_50px]
          [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]
          animate-grid-move"
        />

        {/* Grid Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-transparent to-purple-500/10 animate-grid-glow" />

        {/* Additional Grid Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_50%)] animate-pulse-medium" />

        {/* Floating Grid Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;
