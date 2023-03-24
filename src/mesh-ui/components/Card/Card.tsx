import React from 'react';
import styled from 'styled-components';
import { getColorFromProp } from '@mesh-helpers/themeHelper';
import { BaseProps } from '@mesh-typings/Base';
import { Theme } from '@mesh-typings/Theme';
import * as common from '@mesh-helpers/common';

export interface BaseCardProps extends BaseProps {
  color?: keyof Theme['colors'];
}

const BaseCard = styled.div.attrs((props) => ({
  color: 'white',
  ...props,
}))<BaseCardProps>`
  background-color: ${getColorFromProp};
  border-radius: ${({ borderRadius, theme: { isMobile } }) =>
    borderRadius ?? (isMobile ? '0px' : '8px')};
  ${common.getAllMargin}
  ${common.getTopMargin}
  ${common.getBottomMargin}
  ${common.getLeftMargin}
  ${common.getRightMargin}
  ${common.getAllPadding}
  ${common.getTopPadding}
  ${common.getBottomPadding}
  ${common.getLeftPadding}
  ${common.getRightPadding}
  ${common.getBordered}
  ${common.getHoverable}
`;

export const Card: React.FC<BaseCardProps> = (props: BaseCardProps) => (
  <BaseCard {...props} />
);
