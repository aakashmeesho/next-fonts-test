import { Property } from 'csstype';
import { css } from 'styled-components';

import { theme } from '@mesh-config/theme';

import { SpaceProps } from '../typings/Base';
import { BoxShadow, Colors, FontWeights, OverrideFontWeights, Theme } from '../typings/Theme';

type ThemeResolver<R, P = {}> = <
  T extends {
    theme: Theme;
  },
>(
  props: T & P,
) => R;

export type BaseComponentProps = {
  theme: Theme;
};

type ColorProp = { color: keyof Colors };
type FontSizeProp = { fontSize: Property.FontSize };
type TextAlignProp = { textAlign?: Property.TextAlign };
type DisplayProp = { display?: Property.Display };
type LineHeightProp = { lineHeight: Property.LineHeight };
type PaddingProp = { padding: string };
type BgColorProp = { bgColor: keyof Colors };
type FontWightProp = { fontWeight: keyof FontWeights };

const getColors = (props: any): any => props?.theme?.colors ?? theme.colors;
const getFontWeights = (props: any): any =>
  props.theme.fontWeights ?? theme.fontWeights;
const getBorderRadius = (props: any): any =>
  props.theme.borderRadius ?? theme.borderRadius;
const getBoxShadows: ThemeResolver<BoxShadow> = (props) =>
  props.theme.boxShadow ?? theme.boxShadow;

export const getColorFromProp: ThemeResolver<string, ColorProp> = (props) =>
  props.theme.colors[props.color] ?? props.color;
export const getBgColorFromProp: ThemeResolver<string, BgColorProp> = (props) =>
  props.theme.colors[props.bgColor] ?? props.bgColor;
export const getFontFamily: ThemeResolver<string> = (props) =>
  props.theme.fontFamily.primary;
export const getFontWeight: ThemeResolver<number, FontWightProp> = (props) =>
  props.theme.fontWeights[props.fontWeight];
export const getFontFamilyFromFontWeight = (props: FontWightProp | OverrideFontWeights) =>
  `font-family: ${props['overrideFontFamilyValue'] ? props['overrideFontFamilyValue'] : "Mier ${props.fontWeight}" };`;

export const getBorderRadiusBase: any = (
  props: any, // check for any types later
) => getColors(props).borderRadiusBase;

export const getPrimaryColor: ThemeResolver<string> = (props) =>
  getColors(props).pinkBase;
export const getBaseColor = (props: any) => getColors(props).baseColor;
export const getShadowColor = (props: any) => getColors(props).shadowColor;
type CSSPropertyResolver<T, R> = (props: T) => R;

export const getFrontSize: CSSPropertyResolver<FontSizeProp, string> = (
  props,
) => `${props.fontSize}`;

export const getTextAlign = css<TextAlignProp>`
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign}` : '')}
`;

export const getDisplay = css<DisplayProp>`
  ${(props) => (props.display ? `display: ${props.display}` : '')}
`;

const addPx = <T>(value: number | T) =>
  typeof value === 'number' ? `${value}px` : value;

export const getSpaceCSSFromProps = css<SpaceProps>`
  ${({ m }) => (m !== undefined ? `margin: ${addPx(m)}` : '')};
  ${({ ml }) => (ml !== undefined ? `margin-left: ${addPx(ml)}` : '')};
  ${({ mr }) => (mr !== undefined ? `margin-right: ${addPx(mr)}` : '')};
  ${({ mb }) => (mb !== undefined ? `margin-bottom: ${addPx(mb)}` : '')};
  ${({ mt }) => (mt !== undefined ? `margin-top: ${addPx(mt)}` : '')};
  ${({ p }) => (p !== undefined ? `padding: ${addPx(p)}` : '')};
  ${({ pl }) => (pl !== undefined ? `padding-left: ${addPx(pl)}` : '')};
  ${({ pr }) => (pr !== undefined ? `padding-right: ${addPx(pr)}` : '')};
  ${({ pb }) => (pb !== undefined ? `padding-bottom: ${addPx(pb)}` : '')};
  ${({ pt }) => (pt !== undefined ? `padding-top: ${addPx(pt)}` : '')};
`;

export const getLineHeight: CSSPropertyResolver<LineHeightProp, string> = (
  props,
) => `${props.lineHeight}`;

export const getPadding: CSSPropertyResolver<PaddingProp, string> = (props) =>
  props.padding;

// Color helpers
export const getWhite = (props: any) => getColors(props).white;
export const getBlack = (props: any) => getColors(props).black;
export const getPinkBase = (props: any) => getColors(props).pinkBase;
export const getPinkT1 = (props: any) => getColors(props).pinkT1;
export const getPinkT2 = (props: any) => getColors(props).pinkT2;
export const getGreyBase = (props: any) => getColors(props).greyBase;
export const getGreyT1 = (props: any) => getColors(props).greyT1;
export const getGreyT2 = (props: any) => getColors(props).greyT2;
export const greyT3Divider = (props: any) => getColors(props).greyT3Divider;
export const getGreyT4BG = (props: any) => getColors(props).greyT4BG;
export const getGreyT5Subdued = (props: any) => getColors(props).greyT5Subdued;
export const getblueT2 = (props: any) => getColors(props).blueT2;
export const getLimeBase = (props: any) => getColors(props).limeBase;
export const getLimeT1 = (props: any) => getColors(props).limeT1;

// ratings
export const getRedBase = (props: any) => getColors(props).redBase;
export const getRedT1 = (props: any) => getColors(props).redT1;
export const getOrangeBase = (props: any) => getColors(props).orangeBase;
export const getOrangeT1 = (props: any) => getColors(props).orangeT1;
export const getYellowBase = (props: any) => getColors(props).yellowBase;
export const getYellowT1 = (props: any) => getColors(props).yellowT1;
export const getGreenBase = (props: any) => getColors(props).greenBase;
export const getGreenT1 = (props: any) => getColors(props).greenT1;
export const getGreenT2 = (props: any) => getColors(props).greenT2;
export const getGreenLightBase = (props: any) =>
  getColors(props).lightGreenBase;
export const getGreenLightT1 = (props: any) => getColors(props).lightGreenT1;
export const getBlueBase = (props: any) => getColors(props).blueBase;
export const getBlueT1 = (props: any) => getColors(props).blueT2;

export const getBorderRadiusButton = (props: any) =>
  getBorderRadius(props).button;
export const getBorderRadiusCard = (props: any) => getBorderRadius(props).card;
export const getBorderRadiusPill = (props: any) => getBorderRadius(props).pill;

export const getFontWeightBook = (props: any) => getFontWeights(props).book;
export const getFontWeightDemi = (props: any) => getFontWeights(props).demi;
export const getFontWeightBold = (props: any) => getFontWeights(props).bold;

export const getTopNavbarShadow: ThemeResolver<string> = (props) =>
  getBoxShadows(props).topNavbar;
export const getBottomNavbarShadow: ThemeResolver<string> = (props) =>
  getBoxShadows(props).bottomNavbar;
export const getSnackBarFABBoxShadow = css`
  box-shadow: ${(props) => getBoxShadows(props).snackBarFAB};
`;
export const getCardBoxShadow = css`
  box-shadow: ${(props) => getBoxShadows(props).card};
`;
