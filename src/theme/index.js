import { useContext } from 'react';
import { ThemeContext } from './themeContext';

export * from './themeContext';
export * from './themeContextProvider';

export const theme = () => {
    const Theme = useContext(ThemeContext);

    return Theme.theme;
}