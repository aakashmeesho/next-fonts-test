import React from 'react';
import styled from 'styled-components';
import { Property } from 'csstype';
import { Theme } from '../../typings/Theme';
import { SpaceProps } from '../../typings/Base';
import {
  getColorFromProp,
  getFontWeight,
  getFrontSize,
  getLineHeight,
  getTextAlign,
  getDisplay,
  getSpaceCSSFromProps,
  getFontFamilyFromFontWeight,
} from '../../helpers/themeHelper';
import { FontWeights } from '../../typings/Theme';

export type TextClientProps = {
  color?: keyof Theme['colors'];
  display?: Property.Display;
  textAlign?: Property.TextAlign;
  onClick?: () => void;
  className?: string;
  type?: string;
  children: any;
} & SpaceProps;

export type TextProps = {
  elm?: React.ElementType | keyof JSX.IntrinsicElements;
  fontWeight: keyof FontWeights;
  fontSize: Property.FontSize;
  lineHeight: Property.LineHeight;
} & TextClientProps;

const StyledText = styled.span.attrs((props) => ({
  color: 'pinkBase',
  m: 0,
  p: 0,
  ...props,
}))<TextProps>`
  color: ${getColorFromProp};
  font-style: normal;
  font-weight: ${getFontWeight};
  font-size: ${getFrontSize};
  line-height: ${getLineHeight};
  ${getFontFamilyFromFontWeight};
  ${getTextAlign};
  ${getDisplay};
  ${getSpaceCSSFromProps};
`;

export const Text: React.FC<TextProps> = ({ elm, ...props }) => {
  console.log('props', props);
  
  return (
    <StyledText as={elm ? elm : 'span'} className={props.className} {...props}>
      {props.children}
    </StyledText>
  );
};
