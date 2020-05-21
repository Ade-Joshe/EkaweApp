import React from 'react'
import Svg, { Path } from "react-native-svg";

const SearchIcon = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="none"
            viewBox="0 0 13 13"
        >
            <Path
                fill="#fff"
                d="M9.772 7.914H9.32l-.16-.154a3.716 3.716 0 10-.4.4l.154.16v.452l2.86 2.853.851-.852-2.853-2.859zm-3.43 0a2.57 2.57 0 01-2.573-2.573A2.57 2.57 0 016.34 2.77 2.57 2.57 0 018.914 5.34a2.57 2.57 0 01-2.573 2.573z"
            ></Path>
        </Svg>
    );
}

export { SearchIcon }
