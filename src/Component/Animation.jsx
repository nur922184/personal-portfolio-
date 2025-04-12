import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  const [textColor, setTextColor] = useState('white');

  return (
    <div>
      <div
        style={{
          fontWeight: '900',
          color: textColor,
        }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
      >
        <TypeAnimation
          sequence={[
            'Md',
            800,
            () => setTextColor('aqua'),
            'Md Monir',
            800,
            () => setTextColor('green'),
            'Md Monirzzaman',
            1000,
            () => setTextColor('darkkhaki'),
            '',
          ]}
          repeat={Infinity}
        />
      </div>

      <button
        onClick={() => {
          const items = [
            'blue',
            'green',
            'purple',
            'pink',
            'brown',
            'darkmagenta',
            'darksalmon',
            'dodgerblue',
            'firebrick',
            'darkviolet',
          ];
          setTextColor(items[Math.floor(Math.random() * items.length)]);
        }}
      >
      </button>
    </div>
  );
};

export default Animation;
