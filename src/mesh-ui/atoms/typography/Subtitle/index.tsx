import { Theme } from '@mesh-typings/Theme';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Text, TextClientProps } from '../Text';

export const Subtitle1: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="span"
      fontSize={isMobile ? '15px' : '18px'}
      fontWeight="demi"
      lineHeight={isMobile ? '20px' : '24px'}
      {...props}
    />
  );
};

export const Subtitle2: React.FC<TextClientProps> = (props) => {
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

const StyledSubtitle2Caps = styled(Text)`
  text-transform: uppercase;
`;
export const Subtitle2Caps: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <StyledSubtitle2Caps
      elm="span"
      fontWeight="demi"
      fontSize={isMobile ? '13px' : '16px'}
      lineHeight={isMobile ? '16px' : '20px'}
      {...props}
    />
  );
};
