import { Property } from 'csstype';
import React from 'react';

export interface SpaceProps {
  m?: Property.Margin | number;
  mt?: Property.MarginTop | number;
  mb?: Property.MarginBottom | number;
  ml?: Property.MarginLeft | number;
  mr?: Property.MarginRight | number;

  p?: Property.Padding | number;
  pt?: Property.PaddingTop | number;
  pb?: Property.PaddingBottom | number;
  pl?: Property.PaddingLeft | number;
  pr?: Property.PaddingRight | number;
}

export interface CommonProps {
  hoverable?: boolean;
  block?: boolean;
  loading?: boolean;
  bordered?: boolean;
  shadowed?: boolean;
  borderRadius?: string;
  isMobile?: boolean;
}

export interface BaseProps
  extends CommonProps,
    SpaceProps,
    React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}
