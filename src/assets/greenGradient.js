import React from 'react'
import Svg, { LinearGradient, Rect, Stop, Defs } from 'react-native-svg';

const GreenGradient = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="250"
            fill="none"
            viewBox="0 0 330 250"
        >
            <Rect
                width="424"
                height="320"
                x="-49"
                y="-70"
                fill="url(#paint0_linear)"
                rx="50"
            ></Rect>
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1="328.865"
                    x2="-17.696"
                    y1="50.791"
                    y2="49.36"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#92C19B"></Stop>
                    <Stop offset="1" stopColor="#77CE87"></Stop>
                </LinearGradient>
            </Defs>
        </Svg>
    );
}

export { GreenGradient }
