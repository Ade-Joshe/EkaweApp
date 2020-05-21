import React from 'react'
import Svg, { Rect } from 'react-native-svg';


const Flag = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="9"
            fill="none"
            viewBox="0 0 15 9"
        >
            <Rect width="15" height="9" fill="#117023" rx="2"></Rect>
            <Rect width="5" height="9" x="5" fill="#fff" rx="2"></Rect>
        </Svg>
    );
}

export { Flag }
