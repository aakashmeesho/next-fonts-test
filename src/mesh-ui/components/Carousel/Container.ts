import styled, { css } from 'styled-components';

export const Container = styled.div<any>`
  outline: none;
  min-height: 1px;
  padding: ${({ slidePadding }: any) => slidePadding ?? 0};
  vertical-align: top;
  white-space: normal;
  display: ${(props) => (props.isVertical ? 'block' : 'inline-block')};
  ${(props) => (props.isVertical ? VerticalContainer : HorizontalContainer)};
`;

const VerticalContainer = css<any>`
  margin-top: ${({ slideMargin }: any) => slideMargin && `${slideMargin}px`};
`;

const HorizontalContainer = css<any>`
  margin-left: ${({ slideMargin }: any) => slideMargin && `${slideMargin}px`};
  width: ${({ width, slideMargin }: any) =>
    `calc(${width}% - ${slideMargin ?? 0}px)`};
`;
