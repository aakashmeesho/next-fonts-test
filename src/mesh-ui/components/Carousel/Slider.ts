import styled, { css } from 'styled-components';

export const SliderTrack = styled.div<any>`
  width: auto;
  position: relative;
  height: auto;
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
  ${(props) => (props.vertical ? VerticalSliderTrack : HorizontalSliderTrack)};
`;

const VerticalSliderTrack = css<any>`
  padding-bottom: ${({ slideMargin }) =>
    slideMargin ? `${slideMargin - 1}px` : 0};
`;

const HorizontalSliderTrack = css<any>`
  padding-right: ${({ slideMargin }) =>
    slideMargin ? `${slideMargin - 1}px` : 0};
`;

export const SliderList = styled.div<any>`
  height: 100%;
  transform: ${({ translate, isVertical }) => {
    const type = isVertical ? 'translateY' : 'translateX';
    return `${type}(${translate ? `-${translate}%` : '0%'})`;
  }};
  transition: transform 0.6s ease-in-out;
`;

export const SliderWrapper = styled.div<any>`
  position: relative;
  margin: ${(props) => props.margin || '0px 0px'};
  max-height: 100%;
  max-width: 100%;
  display: flex;
`;
