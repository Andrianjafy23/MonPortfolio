import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const getBackgroundColor = () => {
    switch (theme) {
      case 'dark':
        return '#333';
      case 'light':
        return '#fff';
      case 'auto':
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? '#333' : '#b3a8a8';
      default:
        return '#b3a8a8';
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, getBackgroundColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
