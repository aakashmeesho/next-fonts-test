import { Card } from '@mesh-components/Card';
import {
  FlexSpaceBetweenCenter,
  FlexVerticallyCenter,
} from '@mesh-helpers/common';
import styled from 'styled-components';

export const NavComposedStyled = styled(Card)`
  height: 57px;
`;

export const NavStyled = styled(Card)`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: inherit;
`;

export const NavContainer = styled(Card)`
  ${FlexSpaceBetweenCenter};
  padding: 10px 18px 10px 18px;
  min-height: 56px;
`;

export const LogoSection = styled(Card)`
  ${FlexVerticallyCenter}
`;

export const IconSection = styled(Card)`
  display: flex;
  position: relative;
`;

export const TitleCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;
