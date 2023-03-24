import styled from 'styled-components';
import * as common from '@mesh-helpers/common';
import { BaseProps } from '@mesh-typings/Base';
import { getColorFromProp } from '@mesh-helpers/themeHelper';
import { Colors } from '@mesh-typings/Theme';

type ColorType = keyof Colors;

/**
 * @export
 * @interface IconProps
 */
export interface IconProps extends BaseProps {
  fill?: ColorType;
  iconSize?: number | string;
  clickable?: boolean;
  [x: string]: any;
}

export const Icon = styled.i.attrs((props: IconProps) => ({
  iconSize: props.iconSize ?? '20',
}))<IconProps>`
  ${common.getAllMargin}
  ${common.getTopMargin}
  ${common.getBottomMargin}
  ${common.getLeftMargin}
  ${common.getRightMargin}
  ${common.getAllPadding}
  ${common.getTopPadding}
  ${common.getBottomPadding}
  ${common.getLeftPadding}
  ${common.getRightPadding}
  height: ${({ iconSize, height }: IconProps) => height ?? iconSize}px;
  width: ${({ iconSize, width }: IconProps) => width ?? iconSize}px;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'inherit')};
  * {
    fill: ${(props) => {
      return (
        (props.fill && getColorFromProp({ ...props, color: props.fill })) ??
        props.fill
      );
    }};
    stroke: ${(props) => {
      return (
        (props.stroke && getColorFromProp({ ...props, color: props.stroke })) ??
        props.stroke
      );
    }};
  }
`;
