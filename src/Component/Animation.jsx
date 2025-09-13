import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  const [textColor, setTextColor] = useState('#22d3ee'); // Starting with teal-400
  const [isHovering, setIsHovering] = useState(false);

  // Array of attractive colors that work well on both light and dark backgrounds
  const colorPalette = [
    '#22d3ee', // teal-400
    '#3b82f6', // blue-500
    '#8b5cf6', // violet-500
    '#ec4899', // pink-500
    '#10b981', // emerald-500
    '#f59e0b', // amber-500
    '#ef4444', // red-500
    '#06b6d4', // cyan-500
    '#a855f7', // purple-500
    '#f97316', // orange-500
  ];

  const changeColor = () => {
    const currentIndex = colorPalette.indexOf(textColor);
    const nextIndex = (currentIndex + 1) % colorPalette.length;
    setTextColor(colorPalette[nextIndex]);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          fontWeight: '900',
          color: textColor,
          textShadow: isHovering ? '0 0 10px rgba(0,0,0,0.3)' : 'none',
          transition: 'all 0.3s ease',
        }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center py-2 cursor-pointer"
        onClick={changeColor}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        title="Click to change color"
      >
        <TypeAnimation
          sequence={[
            'Md',
            800,
            'Md Monir',
            800,
            'Md Monirzzaman',
            1000,
            '',
          ]}
          repeat={Infinity}
          wrapper="span"
        />
      </div>
      
      <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-md">
        {colorPalette.map((color, index) => (
          <button
            key={index}
            onClick={() => setTextColor(color)}
            className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 transition-transform hover:scale-110"
            style={{ backgroundColor: color }}
            title={`Change to ${color}`}
          />
        ))}
      </div>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Click the name or color dots to change color
      </p>
    </div>
  );
};

export default Animation;