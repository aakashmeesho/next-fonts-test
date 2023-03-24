import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '@mesh-config/theme';
import { mergeDeep } from '@mesh-helpers/mergeDeep';
import { Theme } from '@mesh-typings/Theme';
import { GlobalStyles } from '@mesh-helpers/global';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { gridThemeMobile, gridThemeDesktop } from '@mesh-atoms/Grid';

export interface ProviderProps {
  children: React.ReactChild;
  theme: Theme;
}
export const CustomThemeProvider = ({
  children,
  theme,
  ...rest
}: ProviderProps) => {
  const customTheme = mergeDeep(defaultTheme, theme);
  const gridTheme = theme.isMobile ? gridThemeMobile : gridThemeDesktop;

  return (
    <>
      <ThemeProvider theme={customTheme} {...rest}>
        <GlobalStyles />
        <GridThemeProvider gridTheme={gridTheme}>{children}</GridThemeProvider>
      </ThemeProvider>
    </>
  );
};
