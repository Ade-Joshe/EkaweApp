import React from 'react'
import Svg, { Path } from 'react-native-svg';

const SortIcon = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <Path
                fill="#0B0B0B"
                d="M4 13.333l2.667-2.666h-2v-8H3.333v8h-2L4 13.333zm3.333-8h6v1.334h-6V5.333zm0 2.667H12v1.333H7.333V8zm0-5.333h7.334V4H7.333V2.667zm0 8h3.334V12H7.333v-1.333z"
            ></Path>
        </Svg>
    );
}

export { SortIcon }
