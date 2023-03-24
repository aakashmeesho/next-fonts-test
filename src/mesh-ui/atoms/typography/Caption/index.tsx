import { Theme } from '@mesh-typings/Theme';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Text, TextClientProps } from '../Text';

export const Caption1: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="span"
      fontSize={isMobile ? '13px' : '16px'}
      lineHeight={isMobile ? '16px' : '20px'}
      fontWeight="book"
      {...props}
    />
  );
};

export const Caption2: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);

  return (
    <Text
      elm="span"
      fontSize={isMobile ? '11px' : '12px'}
      fontWeight={isMobile ? 'book' : 'demi'}
      lineHeight="16px"
      {...props}
    />
  );
};

export const Caption3: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="span"
      fontSize={isMobile ? '10px' : '12px'}
      fontWeight="demi"
      lineHeight={isMobile ? '12px' : '16px'}
      {...props}
    />
  );
};

export const Caption3_1: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="span"
      fontSize={isMobile ? '10px' : '12px'}
      fontWeight="book"
      lineHeight={isMobile ? '12px' : '16px'}
      {...props}
    />
  );
};
