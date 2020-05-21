import React from 'react'
import Svg, { Path } from 'react-native-svg';

const BackIcon = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <Path
                fill="#000"
                d="M6.954 2.354L6 1.4.667 6.733 6 12.067l.954-.954-4.38-4.38 4.38-4.38z"
            ></Path>
        </Svg>
    );
}

export { BackIcon }
