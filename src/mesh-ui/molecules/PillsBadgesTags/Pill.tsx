import React from 'react';
import {
  getBorderRadiusPill,
  getGreyT4BG,
  getPinkT1,
  getPinkT2,
  getWhite,
} from '../../helpers/themeHelper';
import styled, { css } from 'styled-components';
import { Icon } from '@mesh-atoms/Icon';
import { ParagraphBody3, Subtitle2 } from '@mesh-atoms/typography';

interface StyleProps {
  disabled?: boolean;
  onClick?: any;
  checked?: any;
  [x: string]: any;
}

const checkedStyles = css`
  background: ${getPinkT2};
  font-weight: 'bold';
  border: 1px solid ${getPinkT1};
`;

const S_Pill = styled.span<StyleProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => (props.theme.isMobile ? '8px 12px' : '8px 16px')};
  font-size: 13px;
  ${(props) =>
    props.disabled
      ? `:disabled{
    pointer-events: none;
  }`
      : ''}
  background: ${({ background }) => background || getWhite};
  font-weight: 'normal';
  border: 1px solid ${getGreyT4BG};
  border-radius: ${getBorderRadiusPill};
  cursor: pointer;
  ${(props) => props.checked && checkedStyles}
`;

interface IconWrapperProps {
  position: 'left' | 'right';
  [x: string]: any;
}
const IconWrapper = styled.span<IconWrapperProps>`
  padding-right: ${(props) => props.position === 'left' && '4px'};
  padding-left: ${(props) => props.position === 'right' && '4px'};
`;

export interface PillProps {
  checked: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  name?: string;
  label: string;
  disabled?: boolean;
  position?: 'left' | 'right';
  icon?: React.ComponentType<any>;
  [x: string]: any;
}

export const Pill: React.FC<PillProps> = (props) => {
  const { checked, onChange, position, label, icon } = props;

  const iconContent = (
    <IconWrapper {...props} position={position}>
      <Icon {...props} as={icon} />
    </IconWrapper>
  );

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <S_Pill {...props} onClick={onChange}>
      {position === 'left' && icon && iconContent}
      {checked ? (
        <Subtitle2 color="pinkBase" textAlign="initial">
          {label}
        </Subtitle2>
      ) : (
        <ParagraphBody3 color="greyT1" textAlign="initial">
          {label}
        </ParagraphBody3>
      )}

      {position === 'right' && icon && iconContent}
    </S_Pill>
  );
};
