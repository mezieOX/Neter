import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator, navigationRef} from './src/navigation';
import React, {createContext, useState} from 'react';
import {s as tw} from 'react-native-wind';
import {Text, TouchableOpacity} from 'react-native';

// Create theme context
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <NavigationContainer ref={navigationRef}>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={tw``}>Mode: {theme}</Text>
        </TouchableOpacity>
        <RootNavigator />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
