import React from 'react';
import styled, { css } from 'styled-components';
import { getPinkBase, getWhite } from '@mesh-helpers/themeHelper';
import { Icon } from '@mesh-atoms/Icon';
import { ControlProps } from '../BaseControls';
import { ParagraphBody3, Subtitle2 } from '@mesh-atoms/typography';
import { RadioIcon, RadioFilledIcon } from '@mesh-icons/index';

const S_Radio = styled.div<RadioProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  font-size: 13px;
  color: ${(props) => (props.checked ? getPinkBase : getWhite)};
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      cursor: default;
      opacity: 0.8;
    `}
  justify-content:space-between;
  cursor: pointer;
`;

const S_Subtitle = styled(Subtitle2)`
  margin-right: 10px;
`;
const S_Paragraph = styled(ParagraphBody3)`
  margin-right: 10px;
`;

type RadioProps = ControlProps;

export const Radio: React.FC<RadioProps> = (props) => {
  const { checked, label } = props;

  return (
    //@ts-ignore
    <S_Radio {...props} onClick={props.onChange}>
      {checked ? (
        <>
          <S_Subtitle color="greyBase">{label}</S_Subtitle>
          <Icon as={RadioFilledIcon} fill="pinkBase" />
        </>
      ) : (
        <>
          <S_Paragraph color="greyT1">{label}</S_Paragraph>
          <Icon as={RadioIcon} />
        </>
      )}
    </S_Radio>
  );
};
