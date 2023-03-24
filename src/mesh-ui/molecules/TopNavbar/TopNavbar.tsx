import { Icon } from '@mesh-atoms/Icon';
import { CloseIcon, BackIcon, HamburgerIcon } from '@mesh-icons/index';
import React, { FC } from 'react';

import { NavComposed } from './NavComposed';

type NavType = {
  children?: React.ReactNode;
  toggleFn?: () => void;
  RightContent?: React.ReactNode;
  LeftContent?: React.ReactNode;
  goBack?: () => void;
  onClose?: () => void;
};
export const TopNavPlpMenu: FC<
  Pick<NavType, 'children' | 'toggleFn' | 'RightContent'>
> = ({ children, toggleFn, RightContent }) => (
  <NavComposed
    LeftContent={
      <Icon mt={5} onClick={toggleFn} as={HamburgerIcon} iconSize={24} />
    }
    RightIcons={RightContent}
    hasDivider={false}
  >
    {children}
  </NavComposed>
);

export const TopNav: FC<
  Pick<NavType, 'children' | 'RightContent' | 'goBack'>
> = ({ RightContent, children, goBack }) => (
  <NavComposed
    LeftContent={<Icon mt={2} onClick={goBack} as={BackIcon} iconSize={24} />}
    RightIcons={RightContent}
  >
    {children}
  </NavComposed>
);

export const TopNavTitle: FC<Pick<NavType, 'children' | 'goBack'>> = ({
  children,
  goBack,
}) => (
  <NavComposed LeftContent={<Icon onClick={goBack} as={BackIcon} />}>
    {children}
  </NavComposed>
);

export const TopNavMenu: FC<Pick<NavType, 'LeftContent' | 'onClose'>> = ({
  LeftContent,
  onClose,
}) => (
  <NavComposed
    LeftContent={LeftContent}
    RightIcons={<Icon as={CloseIcon} iconSize={20} onClick={onClose} />}
  />
);
