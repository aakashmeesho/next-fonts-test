import { Theme } from '@mesh-typings/Theme';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Text, TextClientProps } from '../Text';

export const ButtonLarge: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="span"
      fontSize={isMobile ? '15px' : '18px'}
      lineHeight={isMobile ? '20px' : '24px'}
      fontWeight="demi"
      {...props}
    />
  );
};

export const ButtonSmall: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="span"
      fontSize={isMobile ? '13px' : '16px'}
      fontWeight="demi"
      lineHeight={isMobile ? '16px' : '20px'}
      {...props}
    />
  );
};

const StyledTextLink = styled(Text)`
  text-transform: uppercase;
`;
export const ButtonLink: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <StyledTextLink
      elm="span"
      fontSize={isMobile ? '13px' : '16px'}
      lineHeight={isMobile ? '16px' : '20px'}
      fontWeight="bold"
      {...props}
    />
  );
};
