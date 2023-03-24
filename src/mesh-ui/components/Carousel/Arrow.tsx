import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@mesh-atoms/Icon';
import { getWhite } from '@mesh-helpers/themeHelper';
import { ShapeLeftIcon, ShapeRightIcon } from '@mesh-icons/index';

const ArrowContainer = styled.span<any>`
  position: absolute;
  z-index: 1;
  height: 24px;
  width: 24px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${getWhite};
  box-shadow: 0px 2px 16px 2px rgba(34, 34, 34, 0.12);
  ${(props) => (props.isVertical ? VerticalArrowStyle : HorizontalArrowStyle)};
  svg {
    transform: ${(props) =>
      props.isDefault && props.isVertical && 'rotate(90deg)'};
  }
`;

//isDefault

const VerticalArrowStyle = css`
  left: 50%;
  transform: translateX(-50%);
`;

const HorizontalArrowStyle = css`
  top: 50%;
  transform: translateY(-50%);
`;

const LeftArrowContainer = styled(ArrowContainer)`
  top: ${({ isVertical }) => isVertical && '0px'};
  left: ${({ isVertical }) => !isVertical && `0px`};
`;

const RightArrowContainer = styled(ArrowContainer)`
  bottom: 0px;
  right: ${({ isVertical }) => !isVertical && `0px`};
`;
export const RightArrow = (props: any) => (
  <RightArrowContainer {...props} id="rightArrowContainer">
    <Icon as={ShapeRightIcon} iconSize={9} />
  </RightArrowContainer>
);

export const LeftArrow = (props: any) => (
  <LeftArrowContainer {...props} id="leftArrowContainer">
    <Icon as={ShapeLeftIcon} iconSize={9} />
  </LeftArrowContainer>
);
