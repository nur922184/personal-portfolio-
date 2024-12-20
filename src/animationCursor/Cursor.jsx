import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    // Selecting cursor elements
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    // Mouse move event handler
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Center dot cursor (subtract half the size: 5px / 2 = 2.5px)
      cursorDot.style.left = `${posX - 2.5}px`;
      cursorDot.style.top = `${posY - 2.5}px`;

      // Center outline cursor (subtract half the size: 35px / 2 = 17.5px)
      cursorOutline.animate(
        {
          left: `${posX - 17.5}px`,
          top: `${posY - 17.5}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Dot */}
      <div
        className="fixed top-0 left-0 w-[5px] h-[5px] bg-white rounded-full z-50 pointer-events-none 
                   shadow-lg transition-transform duration-300 transform scale-100 hover:scale-150 
                   animate-ping bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 backdrop-blur-sm"
        data-cursor-dot
      ></div>

      {/* Custom Cursor Outline */}
      <div
        className="fixed top-0 left-0 w-[35px] h-[35px] border-dotted border dark:border-white/50 border-blue-500
                   rounded-full z-50 pointer-events-none animate-spin"
        data-cursor-outline
      ></div>
    </>
  );
};

export default Cursor;
