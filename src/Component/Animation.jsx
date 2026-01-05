import React, { useCallback, useMemo, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const GRADIENTS = [
  "linear-gradient(90deg, #22d3ee, #3b82f6)",
  "linear-gradient(90deg, #8b5cf6, #ec4899)",
  "linear-gradient(90deg, #10b981, #22d3ee)",
  "linear-gradient(90deg, #f97316, #ef4444)",
  "linear-gradient(90deg, #a855f7, #3b82f6)",
];

const Animation = () => {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const soundEnabled = useRef(false);

  const nextGradient = useCallback(() => {
    setIndex((prev) => (prev + 1) % GRADIENTS.length);
  }, []);

  const playSound = () => {
    if (!soundEnabled.current) {
      soundEnabled.current = true;
      return;
    }
    const audio = new Audio("/typing.mp3");
    audio.volume = 0.25;
    audio.play().catch(() => {});
  };

  const sequence = useMemo(
    () => [
      "Md",
      () => playSound(),
      600,
      "Md Monir",
      () => playSound(),
      600,
      "Md Monirzzaman",
      () => playSound(),
      1200,
      () => nextGradient(),
      "",
      500,
    ],
    [nextGradient]
  );

  return (
    <div className="flex flex-col items-center">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={nextGradient}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 
                   font-extrabold text-center py-3 cursor-pointer
                   select-none"
        style={{
          backgroundImage: GRADIENTS[index],
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientMove 4s linear infinite",
          textShadow: hover
            ? "0 0 18px rgba(99,102,241,0.8)"
            : "0 0 6px rgba(99,102,241,0.4)",
          transition: "text-shadow 0.3s ease",
        }}
        title="Click to change style"
      >
        <TypeAnimation
          sequence={sequence}
          repeat={Infinity}
          wrapper="span"
          cursor
        />
      </div>

      

      {/* CSS animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>
    </div>
  );
};

export default Animation;
