import { css } from 'styled-components';
import { CommonProps, SpaceProps } from '../typings/Base';
import { getGreyT4BG, getSnackBarFABBoxShadow } from './themeHelper';

// Padding Helper
/**
 * Common Helper for spacing
 * @param string
 * @position string
 * @value string or number or undefined
 */
const getSpace = (
  type: 'padding' | 'margin',
  position: string,
  value?: number | string,
) => {
  if (!value) return '';
  const p = position ? `${type}-${position}` : type;
  const val = typeof value === 'number' ? `${value}px` : value;
  return `${p}: ${val};`;
};

export const getAllPadding = (props: SpaceProps) =>
  getSpace('padding', '', props.p);
export const getTopPadding = (props: SpaceProps) =>
  getSpace('padding', 'top', props.pt);
export const getBottomPadding = (props: SpaceProps) =>
  getSpace('padding', 'bottom', props.pb);
export const getLeftPadding = (props: SpaceProps) =>
  getSpace('padding', 'left', props.pl);
export const getRightPadding = (props: SpaceProps) =>
  getSpace('padding', 'right', props.pr);

// Margin Helper
export const getAllMargin = (props: SpaceProps) =>
  getSpace('margin', '', props.m);
export const getTopMargin = (props: SpaceProps) =>
  getSpace('margin', 'top', props.mt);
export const getBottomMargin = (props: SpaceProps) =>
  getSpace('margin', 'bottom', props.mb);
export const getLeftMargin = (props: SpaceProps) =>
  getSpace('margin', 'left', props.ml);
export const getRightMargin = (props: SpaceProps) =>
  getSpace('margin', 'right', props.mr);

// Block Helper
export const getBlock = (props: any) =>
  props.block &&
  css`
    display: block;
    width: 100%;
  `;

export const getBordered = (props: CommonProps) =>
  props.bordered &&
  css`
    border: 1px solid ${getGreyT4BG};
  `;

export const getHoverable = (props: CommonProps) =>
  props.hoverable &&
  css`
    transition: 0.3s;
    &:hover {
      ${getSnackBarFABBoxShadow};
    }
  `;

export const getShadowed = (props: CommonProps) =>
  props.shadowed &&
  css`
    ${getSnackBarFABBoxShadow};
  `;

export const GridAlignCenter = css`
  display: grid;
  place-items: center;
`;

export const FlexVerticallyCenter = css`
  display: flex;
  align-items: center;
`;

export const FlexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const FlexSpaceBetweenCenter = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const FlexJustifyCenter = css`
  display: flex;
  justify-content: center;
`;

/* Align content horizontally and vertically center */
export const FlexCenter = css`
  ${FlexAlignCenter}
  justify-content: center;
`;

export const FlexSpaceBetweenAlignCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageCoverStyle = css`
  max-width: 100%;
  object-fit: cover;
`;

export const TextEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MultiLinesTextEllipsis = (lines = 2) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
