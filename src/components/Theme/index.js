import React from 'react'
import { ThemeProvider } from 'styled-components';

const theme = {
  navy: '#203C53',
  brightBlue: '#1E6ECA',
  green: '#7CA74E',
  gray: '#9B9B9B',
  red: '#D0021B',

  white: '#FFFFFF',
  black: '#000000',
};

/**
 * Theme Provider
 */
const Theme = (props) => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);

export default Theme