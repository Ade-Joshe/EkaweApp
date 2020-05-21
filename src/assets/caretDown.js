import React from 'react'
import Svg from 'react-native-svg';

const CaretDown = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="5"
            fill="none"
            viewBox="0 0 8 5"
        >
            <Path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l3 3 3-3"
            ></Path>
        </Svg>
    );
}

export { CaretDown }
