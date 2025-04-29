import { useState, ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProviderCustom({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
