import React from 'react';
import {
  getGreyBase,
  getGreyT1,
  getGreyT4BG,
  getPinkBase,
  getWhite,
} from '@mesh-helpers/themeHelper';
import styled, { css } from 'styled-components';
import { Divider } from '@mesh-atoms/Divider';

interface StyleProps {
  onClick?: any;
  active: boolean;
  filterSelected: boolean;
  vertical: boolean;
}

const filterSelectedStyle = css`
  &::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background: ${getPinkBase};
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
`;

const verticalTabActive = css`
  background: ${getWhite};
  color: ${getPinkBase};
  font-weight: bold; // change this to mier font weight later

  &::before {
    content: '';
    height: 100%;
    background: ${getPinkBase};
    width: 4px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0px 2px 2px 0px;
  }
`;

const S_VerticalTab = styled.div<StyleProps>`
  display: flex;
  width: 100%;
  position: relative;
  padding: 16px 12px 16px 16px;
  background: #fff;
  color: ${getGreyT1};
  background: ${getGreyT4BG};
  font-size: 13px;

  ${(props) => {
    return props.filterSelected && filterSelectedStyle;
  }}

  ${(props) => props.active && verticalTabActive}
`;

const horizontalTabActive = css`
  background: #fff;
  color: ${getPinkBase};

  &::after {
    content: '';
    height: 2px;
    background: ${getPinkBase};
    width: calc(100% - 32px);
    position: absolute;
    bottom: 0;
    border-radius: 2px 2px 0px 0px;
  }
`;
const S_HorizontalTab = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
  font-size: 13px;
  position: relative;
  color: ${(props) => (props.active ? getPinkBase : getGreyBase)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

  ${(props) => props.active && horizontalTabActive}
`;

interface TabProps {
  onClick?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  label: string;
  active: boolean;
  filterSelected: boolean;
  vertical: boolean;
}

export const Tab: React.FC<TabProps> = (props) => {
  const S_Tab = props.vertical ? S_VerticalTab : S_HorizontalTab;

  return (
    <>
      <S_Tab
        vertical={props.vertical}
        filterSelected={props.filterSelected}
        active={props.active}
        onClick={props.onClick}
      >
        <span>{props.label}</span>
      </S_Tab>
      {props.vertical && <Divider />}
    </>
  );
};

Tab.defaultProps = {
  active: false,
  vertical: false,
};
