import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Microphone = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 15 15"
        >
            <Path
                fill="#fff"
                d="M7.5 10C8.879 10 10 8.879 10 7.5V3.75c0-1.386-1.116-2.513-2.487-2.513a.583.583 0 00-.13.015A2.504 2.504 0 005 3.75V7.5C5 8.879 6.121 10 7.5 10z"
            ></Path>
            <Path
                fill="#fff"
                d="M6.875 12.457v1.293h1.25v-1.293A5.005 5.005 0 0012.5 7.5h-1.25a3.754 3.754 0 01-3.75 3.75A3.754 3.754 0 013.75 7.5H2.5a5.005 5.005 0 004.375 4.957z"
            ></Path>
        </Svg>
    );
}

export { Microphone }