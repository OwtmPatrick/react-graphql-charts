import { createContext, FC, ReactNode, useState, useMemo } from 'react';
import type { Theme as ThemeType, ThemeContext as ThemeContextType } from './types';
import { LocalStorageKeys } from '../../constants/localStorage';
import { BG_COLOR_LIGHT, BG_COLOR_DARK } from './constants/colors';
import { Theme } from '../../constants/theme';

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialTheme = (localStorage.getItem(LocalStorageKeys.THEME) as ThemeType) ?? Theme.LIGHT;

  const [theme, setTheme] = useState<ThemeType>(initialTheme);
  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(newTheme);
    localStorage.setItem(LocalStorageKeys.THEME, newTheme);
  };

  const backgroundColor = theme === Theme.LIGHT ? BG_COLOR_LIGHT : BG_COLOR_DARK;
  document.body.style.backgroundColor = backgroundColor;

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
