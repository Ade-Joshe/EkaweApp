import React from 'react';

export const ThemeContext = React.createContext({
    theme: {
        type: 'light',
        text: '#fff',
        primary: '#7FBB8A',
        background: '#F9F9F9',
    },
    setTheme: () => { }
})