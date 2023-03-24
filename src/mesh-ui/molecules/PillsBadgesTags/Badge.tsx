import {
  getGreyT1,
  getGreyT5Subdued,
  getColorFromProp,
} from '@mesh-helpers/themeHelper';
import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
  color?: string;
  children: React.ReactNode;
}

const StyledBadge = styled.div<any>`
  pointer-events: none;
  color: ${getGreyT1};
  background: ${(props) => (props.color ? getColorFromProp : getGreyT5Subdued)};
  padding: 4px 8px;
  border-radius: 48px;
  display: inline-flex;
`;
export const Badge = (props: BadgeProps) => (
  <StyledBadge {...props}>{props.children}</StyledBadge>
);
