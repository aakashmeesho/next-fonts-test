import React from 'react';
import styled from 'styled-components';
import { Icon } from '@mesh-atoms/Icon';
import { getGreyBase, getGreyT1 } from '@mesh-helpers/themeHelper';
import { Caption1, Subtitle2 } from '@mesh-atoms/typography';
import { ControlProps } from '../BaseControls';
import { CheckboxFilledIcon, CheckboxLineIcon } from '@mesh-icons/index';

const S_Checkbox = styled.div<CheckboxProps>`
  display: flex;
  flex-direction: row;
  align-items: initial;
  padding: 0px;
  font-size: 13px;
  color: ${(props) => (props.checked ? getGreyBase : getGreyT1)};
  ${(props) =>
    props.disabled
      ? `:disabled{
    pointer-events: none;
  }`
      : ''}
  cursor: pointer;
`;

const S_Subtitle = styled(Subtitle2)`
  margin-left: 8px;
`;

const S_Caption = styled(Caption1)`
  margin-left: 8px;
`;

interface CheckboxProps extends ControlProps {
  disabled?: boolean;
  icon?: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { checked, label } = props;
  return (
    // @ts-ignore
    <S_Checkbox {...props} onClick={props.onChange}>
      {checked ? (
        <>
          <span>
            <Icon as={CheckboxFilledIcon} fill="pinkBase" />
          </span>
          {label && <S_Subtitle color="greyBase">{label}</S_Subtitle>}
        </>
      ) : (
        <>
          <span>
            <Icon as={CheckboxLineIcon} />
          </span>
          {label && (
            <S_Caption color="greyT1" textAlign="initial">
              {label}
            </S_Caption>
          )}
        </>
      )}
    </S_Checkbox>
  );
};

Checkbox.defaultProps = {
  checked: false,
};
