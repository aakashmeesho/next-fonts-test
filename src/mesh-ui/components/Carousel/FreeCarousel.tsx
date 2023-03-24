import React, { memo } from 'react';
import styled from 'styled-components';

import { getSpaceCSSFromProps } from '@mesh-helpers/themeHelper';

interface CarouselProps {
  items: number;
  [x: string]: any;
}

const CarouselStyled = styled.div<CarouselProps>`
  display: flex;
  overflow-x: scroll;
  ${getSpaceCSSFromProps}
  gap: 8px;
  & > div {
    flex: 0 0 auto;
    ${({ items }) => items && `width:${100 / items}%`}
  }
`;

const Carousel = ({ children, ...props }) => (
  <CarouselStyled className="scrollHide" {...props}>
    {children}
  </CarouselStyled>
);

export const FreeCarousel = memo(Carousel);
