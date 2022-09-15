const theme = {
  media: {
    desktop: 1400,
    tablet: 800,
  },
};

const lightTheme = {
  ...theme,
  colors: {
    white: '#ffffff',
    primary: '#000000',
    secondary: '#212121',
    orange: '#FF8839',
    light: '#303030',
    dark: '#252323',
    gray: '#AAAAAA',
  },
};

const darkTheme = {
  ...theme,
  colors: {
    primary: '#252323',
    secondary: '#F5EFED',
    orange: '#FF8839',
    light: '#F5EFED',
    dark: '#252323',
  },
};

export type ThemeTypes = typeof lightTheme;
export type ThemeModeTypes = 'dark' | 'light';
export type ThemeContextTypes = {
  theme: ThemeModeTypes;
  changeTheme: (theme: ThemeModeTypes) => void;
};

export { lightTheme, darkTheme };
