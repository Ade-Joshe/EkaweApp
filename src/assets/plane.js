import React from 'react'
import Svg, { G, Defs, ClipPath, Path } from 'react-native-svg'

const Plane = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <G
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                clip-path="url(#clip0)"
            >
                <Path d="M21.429 11.756l-10.356.563M21.429 11.756l-12.376 6.81 2.02-6.247-2.686-5.99 13.042 5.427z"></Path>
            </G>
            <Defs>
                <ClipPath id="clip0">
                    <Path
                        fill="#fff"
                        d="M11.4 0.971H27.4V16.971H11.4z"
                        transform="rotate(41.885 11.4 .971)"
                    ></Path>
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export { Plane }
