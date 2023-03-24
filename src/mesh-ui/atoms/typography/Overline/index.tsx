import { Theme } from '@mesh-typings/Theme';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Text, TextClientProps } from '../Text';

export const Overline: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="span"
      fontSize={isMobile ? '11px' : '12px'}
      fontWeight="book"
      lineHeight="16px"
      {...props}
    />
  );
};

export const OverlineCaps: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);

  const StyledTransformedOverline = styled(Text)`
    text-transform: uppercase;
  `;

  return (
    <StyledTransformedOverline
      elm="span"
      fontSize={isMobile ? '11px' : '12px'}
      fontWeight="book"
      lineHeight="16px"
      {...props}
    />
  );
};
