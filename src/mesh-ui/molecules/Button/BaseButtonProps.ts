import React from 'react';
import { Property } from 'csstype';
import { Colors } from '@mesh-typings/Theme';
import { SpaceProps } from '@mesh-typings/Base';

export type ColorType = Property.BackgroundColor | keyof Colors;
export type align = 'left' | 'right' | 'top' | 'bottom';

/**
 * @interface ButtonSizeProps
 * @param {minWidth} name (min width of the button)
 * @param {minHeight} name (min height of the button)
 * @param {ph} name (padding horizontal)
 * @param {pv} name (padding vertical)
 * @param {textTransform} name (text transform)
 */
export interface ButtonSizeProps {
  minWidth?: string;
  minHeight?: string;
  pv?: number;
  ph?: number;
  textTransform?: string;
  fontSize?: string;
  lineHeight?: string;
}

/**
 * @interface BaseButtonProps
 * @extends {ButtonSizeProps}
 * @param {bgColor} name (background color for the button)
 * @param {color} name (text color for the button)
 * @param {border} name (Border for the button)
 * @param {borderRadius} name (Border Radius for the button)
 * @param {icon} name (Name of Icon for the icon button)
 * @param {alignIcon} name (Algin Icon inside button)
 * @param {size} name (Size of the Button)
 */
export interface BaseButtonProps extends ButtonSizeProps, SpaceProps {
  bgColor?: ColorType;
  color?: ColorType;
  border?: Property.Border;
  borderRadius?: Property.BorderRadius;
  icon?: React.ComponentType<any>;
  alignIcon?: align;
  btnType?: 'solid' | 'ghost' | 'link' | 'icon';
  size?: 'small' | 'big' | 'medium';
  children?: React.ReactNode;
  block?: boolean;
}
