import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }

  html{
    line-height:16px; // will change for desktop
  }
`;
