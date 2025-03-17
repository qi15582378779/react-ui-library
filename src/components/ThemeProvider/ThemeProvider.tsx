import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeType, ThemeColors, presetThemes } from './themes';

interface ThemeContextType {
  theme: ThemeType | ThemeColors;
  setTheme: (theme: ThemeType | ThemeColors) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  theme: ThemeType | ThemeColors;
  children: ReactNode;
  onChange?: (theme: ThemeType | ThemeColors) => void;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: initialTheme,
  children,
  onChange
}) => {
  const [theme, setTheme] = React.useState<ThemeType | ThemeColors>(initialTheme);

  // 更新主题的函数
  const updateThemeVariables = React.useCallback((currentTheme: ThemeType | ThemeColors) => {
    const themeColors = typeof currentTheme === 'string' ? presetThemes[currentTheme] : currentTheme;
    if (themeColors) {
      document.documentElement.style.setProperty('--main', themeColors.main);
      document.documentElement.style.setProperty('--bg', themeColors.bg);
      document.documentElement.style.setProperty('--dark-bg', themeColors.darkBg);
    }
  }, []);

  // 初始化主题
  React.useEffect(() => {
    updateThemeVariables(initialTheme);
  }, [initialTheme, updateThemeVariables]);

  // 监听主题变化
  React.useEffect(() => {
    updateThemeVariables(theme);
    onChange?.(theme);
  }, [theme, onChange, updateThemeVariables]);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};