import { Theme } from '@mesh-typings/Theme';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { TextClientProps, Text } from '../Text';

export const Headline1: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="h1"
      fontSize={isMobile ? '35px' : '48px'}
      fontWeight="bold"
      lineHeight={isMobile ? '40px' : '52px'}
      {...props}
    />
  );
};
export const Headline2: React.FC<TextClientProps> = (props) => (
  <Text
    elm="h4"
    fontSize="29px"
    fontWeight="bold"
    lineHeight="36px"
    {...props}
  />
);

export const Headline3: React.FC<TextClientProps> = (props) => (
  <Text
    elm="h4"
    fontSize="25px"
    fontWeight="bold"
    lineHeight="28px"
    {...props}
  />
);

export const Headline4: React.FC<TextClientProps> = (props) => {
  const { isMobile, mierFontsBold  }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="h4"
      fontSize={isMobile ? '21px' : '32px'}
      fontWeight="book"
      className={mierFontsBold}
      lineHeight={isMobile ? '24px' : '40px'}
      {...props}
    />
  );
};

export const Headline5: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="h5"
      fontSize={isMobile ? '19px' : '24px'}
      fontWeight="bold"
      lineHeight={isMobile ? '24px' : '32px'}
      {...props}
    />
  );
};

export const Headline6: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="h6"
      fontSize={isMobile ? '17px' : '20px'}
      fontWeight="bold"
      lineHeight={isMobile ? '20px' : '28px'}
      {...props}
    />
  );
};
