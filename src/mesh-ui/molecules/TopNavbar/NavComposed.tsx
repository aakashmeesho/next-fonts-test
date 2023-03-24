import { Divider } from '@mesh-atoms/Divider';
import React, { memo } from 'react';

import * as Styled from './NavComposed.styled';

type NavComposedType = {
  LeftContent?: React.ReactNode;
  children?: React.ReactNode;
  RightIcons?: React.ReactNode;
  hasDivider?: boolean;
};

const Nav: React.FC<NavComposedType> = ({
  LeftContent,
  children,
  RightIcons,
  hasDivider = true,
}) => (
  <Styled.NavComposedStyled id="sticky">
    <Styled.NavStyled id="sticky-content">
      <Styled.NavContainer>
        <Styled.LogoSection>
          {LeftContent}
          <Styled.TitleCard ml={16}>{children}</Styled.TitleCard>
        </Styled.LogoSection>

        <Styled.IconSection>{RightIcons}</Styled.IconSection>
      </Styled.NavContainer>
      {hasDivider && <Divider />}
    </Styled.NavStyled>
  </Styled.NavComposedStyled>
);

export const NavComposed = memo(Nav);
