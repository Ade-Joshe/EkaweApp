import React from 'react';
import Svg, { Path } from "react-native-svg";

function SwapIcon({ active }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
        >
            <Path
                stroke={active ? "#7FBB8A" : "#D0CCCC"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.3"
                d="M11.813 6.75h1.406a1.406 1.406 0 011.406 1.406v6.75a1.406 1.406 0 01-1.406 1.406H4.78a1.406 1.406 0 01-1.406-1.406v-6.75A1.406 1.406 0 014.781 6.75h1.407M11.813 4.5L9 1.687 6.187 4.5M9 11.285V1.687"
            ></Path>
        </Svg>
    );
}


function HomeIcon({ active }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            fill="none"
            viewBox="0 0 16 18"
        >
            <Path
                stroke={active ? "#7FBB8A" : "#D0CCCC"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.3"
                d="M5.75 11.25v5.625h-4.5V6.75L8 1.125l6.75 5.625v10.125h-4.5V11.25h-4.5z"
            ></Path>
        </Svg>
    );
}


function BookShelfIcon({ active }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
        >
            <Path
                fill={active ? "#7FBB8A" : "#D0CCCC"}
                d="M6.75 2.25V13.5H9V2.25H6.75zM9 3.75l3 9.75 2.25-.75-3-9.75L9 3.75zm-5.25 0v9.75H6V3.75H3.75zm-1.5 10.5v1.5h13.5v-1.5H2.25z"
            ></Path>
        </Svg>
    );
}

function ProfileIcon({ active }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
        >
            <Path
                fill={active ? "#7FBB8A" : "#D0CCCC"}
                d="M9 4.425a1.575 1.575 0 110 3.15 1.575 1.575 0 010-3.15zm0 6.75c2.227 0 4.575 1.095 4.575 1.575v.825h-9.15v-.825c0-.48 2.348-1.575 4.575-1.575zM9 3a3 3 0 100 6 3 3 0 100-6zm0 6.75c-2.003 0-6 1.005-6 3V15h12v-2.25c0-1.995-3.998-3-6-3z"
            ></Path>
        </Svg>
    );
}

export {
    HomeIcon,
    SwapIcon,
    BookShelfIcon,
    ProfileIcon
}