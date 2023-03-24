import React, { memo, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
  getGreyBase,
  getGreyT4BG,
  getPinkBase,
} from '@mesh-helpers/themeHelper';
import { Icon } from '@mesh-atoms/Icon';
import { ParagraphBody3, Subtitle2 } from '@mesh-atoms/typography';
import { Theme } from '@mesh-typings/Theme';
import { ControlProps } from '../BaseControls';
import { ImageSelectedIcon } from '@mesh-icons/index';

const VisualFiltersStyled = styled.div<VisualFiltersProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  color: ${getGreyBase};
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.disabled
      ? `:disabled{
    pointer-events: none;
  }`
      : ''};
`;

const Img = styled.img<{ checked?: boolean }>`
  width: ${(props) => (props.theme.isMobile ? '56px' : '68px')};
  height: ${(props) => (props.theme.isMobile ? '56px' : '68px')};
  margin: 0 8px 8px 8px;
  border-radius: 32px;
  border: solid 1px ${getGreyT4BG};
  background: ${(props) => (props.checked ? getPinkBase : 'transparent')};
  margin-bottom: 8px;
`;

const IconStyled = styled(Icon)`
  position: absolute;
  right: ${(props) => (props.theme.isMobile ? '18%' : '3%')};
`;

const SubtitleStyled = styled(Subtitle2)`
  text-align: center;
`;

const ParagraphStyled = styled(ParagraphBody3)`
  text-align: center;
`;

interface VisualFiltersProps extends ControlProps {
  imageUrl?: string;
}

export const VisualFilters: React.FC<VisualFiltersProps> = memo((props) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  const { imageUrl, label, checked, onChange } = props;
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <VisualFiltersStyled {...props} onClick={onChange}>
      <Img checked={checked} src={imageUrl} alt={`${label} image`} />
      {checked ? (
        <>
          <IconStyled iconSize={isMobile ? 16 : 24} as={ImageSelectedIcon} />
          <SubtitleStyled color="greyBase">{label}</SubtitleStyled>
        </>
      ) : (
        <ParagraphStyled color="greyBase">{label}</ParagraphStyled>
      )}
    </VisualFiltersStyled>
  );
});
