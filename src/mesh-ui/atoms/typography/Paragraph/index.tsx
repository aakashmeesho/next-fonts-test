import { Theme } from '@mesh-typings/Theme';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Text, TextClientProps } from '../Text';

export const ParagraphBody1: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="p"
      fontSize={isMobile ? '17px' : '20px'}
      fontWeight="book"
      lineHeight={isMobile ? '24px' : '28px'}
      {...props}
    />
  );
};
export const ParagraphBody2: React.FC<TextClientProps> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm="p"
      fontSize={isMobile ? '15px' : '18px'}
      fontWeight="book"
      lineHeight={isMobile ? '20px' : '24px'}
      {...props}
    />
  );
};

export const ParagraphBody3: React.FC<
  TextClientProps & { elm?: React.ElementType | keyof JSX.IntrinsicElements }
> = (props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <Text
      elm={props.elm ? props.elm : 'p'}
      fontSize={isMobile ? '13px' : '16px'}
      fontWeight="book"
      lineHeight={isMobile ? '16px' : '20px'}
      {...props}
    />
  );
};

const StyledParagraphBody2StrikeThrough = styled(Text)`
  text-decoration: line-through;
`;
export const ParagraphBody2StrikeThrough: React.FC<TextClientProps> = (
  props,
) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <StyledParagraphBody2StrikeThrough
      elm="p"
      fontSize={isMobile ? '15px' : '16px'}
      fontWeight="book"
      lineHeight="20px"
      {...props}
    />
  );
};
