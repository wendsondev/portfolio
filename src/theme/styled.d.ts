import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    toggleTheme: () => void;

    colors: {
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
      };
      background: {
        primary: string;
        secondary: string;
      };
      gradient: string;
    };

    sizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
}
