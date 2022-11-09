import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    red: 'red',
    darkGrey: '#444444',
    lightGrey: '#e5e5e5',
    white: 'white',
    purple: '#2A2349',
    cyan: '#00CCDB',
    blue: '#2A2349',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '16px',
    medium: '24px',
    large: '3em',
  },

  fontWeights: {
    normal: '400',
    bold: '600',
    bolder: '700',
  },
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '576px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const deviceMobileFirst = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const Theme = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
