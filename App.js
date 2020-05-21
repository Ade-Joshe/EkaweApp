/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { AsyncStorage } from 'react-native';
import MainNavigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider, ThemeContext } from './src/theme';

const App = () => {

  const Theme = useContext(ThemeContext);

  React.useEffect(() => {
    AsyncStorage.setItem('theme', JSON.stringify(Theme.theme))
  }, [Theme.theme]);

  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <MainNavigation />
      </ThemeContextProvider>
    </NavigationContainer>
  )
}

export default App;
