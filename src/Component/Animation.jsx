import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
const Animation = () => {
    const [textColor, setTextColor] = useState('white');
    return (
        <div>
            <div
                style={{
                    fontSize: '45px',
                    fontWeight: '900',
                    color: textColor,
                    /* when working without ref and classNames, the manipulated style needs to be
                     applied to the parent element, because the TypeAnimation component is perma-memoized */
                }}
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
                    setTextColor(items[Math.floor(Math.random() * items.length)]); // set random color
                }}
            >
            </button>
        <div/>

        </div >
    );
};

export default Animation;