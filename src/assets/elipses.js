import React from 'react'
import Svg from 'react-native-svg';

const Elipses = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="15"
            fill="none"
            viewBox="0 0 3 15"
        >
            <Circle cx="1.5" cy="1.5" r="1.5" fill="#000"></Circle>
            <Circle cx="1.5" cy="7.5" r="1.5" fill="#000"></Circle>
            <Circle cx="1.5" cy="13.5" r="1.5" fill="#000"></Circle>
        </Svg>
    );
}

export { Elipses }
