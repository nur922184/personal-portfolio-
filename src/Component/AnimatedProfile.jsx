import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const rotateBorder = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.05); }
  100% { transform: rotate(360deg) scale(1); }
`;

const pulseBorder = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.07); opacity: 1; }
`;

export default function AnimatedProfile({ profileImage }) {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
      {/* Rotating Gradient Border */}
      <Reveal
        keyframes={rotateBorder}
        duration={7000}
        iterationCount="infinite"
        direction="alternate"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "9999px",
          padding: "4px",
          background:
            "linear-gradient(to right, #a855f7, #14b8a6, #ec4899)",
        }}
      >
        {/* Inner Dashed Border with Pulse */}
        <Reveal
          keyframes={pulseBorder}
          duration={2500}
          iterationCount="infinite"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "9999px",
            border: "3px dotted rgba(255,255,255,0.8)",
          }}
        />
      </Reveal>

      {/* Profile Image */}
      <img
        src={profileImage}
        alt="Profile"
        className="relative z-10 w-[88%] h-[88%] object-cover rounded-full border-[2px] border-gray-300 shadow-lg"
      />
    </div>
  );
}
