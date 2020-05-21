import React, { useState } from 'react';
import { ThemeContext } from './themeContext';
import { AsyncStorage, SafeAreaView } from 'react-native';

export const ThemeContextProvider = props => {

    const theme = {
        light: {
            type: 'light',
            text: '#000000',
            alt: '#ffffff',
            primary: '#7FBB8A',
            background: '#F9F9F9',
        },
        dark: {
            type: 'dark',
            text: '#ffffff',
            alt: '#000000',
            primary: '#7FBB8A',
            background: 'black',
        }
    }

    const setTheme = type => {
        setState({ ...state, theme: type === 'dark' ? theme.light : theme.dark });
    }

    const initState = () => {
        let setLin = AsyncStorage.getItem('theme');
        if (setLin && setLin.theme) {
            return {
                theme: theme[setLin.type],
                setTheme: setTheme
            }
        }
        else {
            return {
                theme: theme.light,
                setTheme: setTheme
            }
        }
    }

    const [state, setState] = useState(initState)

    return (
        <ThemeContext.Provider value={state}>
            <SafeAreaView style={{ flex: 1, backgroundColor: state.theme.background }}>
                {props.children}
            </SafeAreaView>
        </ThemeContext.Provider>
    )
}