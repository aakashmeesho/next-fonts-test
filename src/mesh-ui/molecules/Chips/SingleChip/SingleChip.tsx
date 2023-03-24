import React from 'react';
import { Subtitle1 } from '@mesh-atoms/typography';
import { Divider } from '@mesh-atoms/Divider';

// styled
import styled from 'styled-components';
import {
  getGreyBase,
  getPinkBase,
  getPinkT1,
  getPinkT2,
  getWhite,
  greyT3Divider,
} from '@mesh-helpers/themeHelper';

// types
import { Theme } from '@mesh-typings/Theme';

interface StyledChipProps {
  isDisabled?: boolean;
  isSelected?: boolean;
  color?: keyof Theme['colors'];
  borderColor?: keyof Theme['colors'];
  bgColor?: keyof Theme['colors'];
}

const StyledChip = styled.span<StyledChipProps>`
  background: ${({ isSelected, bgColor }) =>
    isSelected ? getPinkT2 : bgColor ?? getWhite};
  padding: 6px 16px;
  border-radius: 40px;
  border: 1px solid
    ${({ isSelected, isDisabled, color, borderColor }) =>
      getChipColor(isSelected, isDisabled, color, borderColor).border};
  margin: 6px 12px 6px 0;
  min-width: 46px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

interface DividerSectionProps {
  color?: string;
}

const DividerSection = styled(Divider)<DividerSectionProps>`
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 100%;
  background: ${({ color }) => color ?? greyT3Divider};
  transform: translate(-1px, 1px);
`;

interface SingleChipProps {
  isSelected?: boolean;
  isDisabled?: boolean;
  handleClick?: () => void;
  label: string | number;
  color?: keyof Theme['colors'];
  borderColor?: keyof Theme['colors'];
  bgColor?: keyof Theme['colors'];
}

const getChipColor = (
  selected,
  disabled,
  textColor,
  borderColor,
): { color: keyof Theme['colors']; border: any } => {
  if (selected && disabled) {
    return {
      color: 'pinkT1',
      border: getPinkT1,
    };
  }
  if (selected && !disabled) {
    return {
      color: 'pinkBase',
      border: getPinkBase,
    };
  }
  if (!selected && disabled) {
    return {
      color: 'greyT3Divider',
      border: greyT3Divider,
    };
  }
  return {
    color: textColor ?? 'greyBase',
    border: borderColor ?? getGreyBase,
  };
};

export const SingleChip: React.FC<SingleChipProps> = ({
  label,
  isDisabled = false,
  isSelected = false,
  handleClick,
  color: textColor,
  borderColor,
  bgColor,
}: SingleChipProps) => {
  const { color, border } = getChipColor(
    isSelected,
    isDisabled,
    textColor,
    borderColor,
  );
  return (
    <StyledChip
      isDisabled={isDisabled}
      isSelected={isSelected}
      onClick={handleClick}
      borderColor={borderColor}
      bgColor={bgColor}
    >
      <Subtitle1 textAlign="center" color={color ?? 'greyBase'}>
        {label}
      </Subtitle1>
      {isDisabled && <DividerSection color={border} />}
    </StyledChip>
  );
};
