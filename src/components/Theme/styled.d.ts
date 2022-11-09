// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      darkGrey: string;
      powderWhite: string;
      persianGreen: string;
      lightBlue: string;
      red: string;
      lightGrey: string;
      purple: string;
      cyan: string;
      blue: string;
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeights: {
      normal: string;
      bold: string;
      bolder: string;
    };
  }
}
