import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import {
  getPinkBase,
  getSpaceCSSFromProps,
  getWhite,
} from '@mesh-helpers/themeHelper';
import { Icon } from '@mesh-atoms/Icon';
import { getBlock } from '@mesh-helpers/common';

import { ButtonLarge, ButtonLink, ButtonSmall } from '@mesh-atoms/typography';
import { BaseButtonProps, ButtonSizeProps, ColorType } from './BaseButtonProps';

const getTypeProps = (props: BaseButtonProps): ButtonSizeProps | undefined => {
  let btnProps;
  const common = {
    pv: 0,
    ph: 0,
    textTransform: 'capitalize',
    fontSize: '13px',
    lineHeight: '16px',
  };

  if (props.btnType === 'link') {
    btnProps = {
      minWidth: '0',
      minHeight: '0',
      ...common,
    };
  } else if (props.btnType === 'icon') {
    const isBig = props.size === 'big';
    btnProps = {
      minWidth: isBig ? '72' : '60',
      minHeight: isBig ? '72' : '36',
      ...common,
    };
  }
  return btnProps;
};

const getSizeProps = (props: BaseButtonProps): ButtonSizeProps => {
  const isBig = props.size === 'big';
  let btnProps: ButtonSizeProps | undefined = getTypeProps(props);

  if (!btnProps) {
    // 'small' is default size
    btnProps = {
      minWidth: '38',
      minHeight: '28',
      pv: 6,
      ph: 8,
      fontSize: '13px',
      lineHeight: '16px',
    };

    if (isBig) {
      btnProps = {
        minWidth: '328',
        minHeight: '44',
        pv: 12,
        ph: 12,
        fontSize: '15px',
        lineHeight: '20px',
      };
    } else if (props.size === 'medium') {
      btnProps = {
        minWidth: '92',
        minHeight: '36',
        pv: 8,
        ph: 12,
        fontSize: '15px',
        lineHeight: '20px',
      };
    }
  }

  return btnProps;
};

const buttonHelper = (props: BaseButtonProps): BaseButtonProps => {
  // Default/Ghost button
  let bgColor = getWhite(props) as ColorType;
  let color = props.color ?? (getPinkBase(props) as ColorType);
  let border = `1px solid ${color}`;
  const borderRadius = '4';

  if (props.btnType === 'solid') {
    [color, bgColor] = [bgColor, color]; // toggle color
    border = 'none';
  }

  if (props.btnType === 'link' || props.btnType === 'icon') {
    border = 'none';
    bgColor = 'inherit';
  }

  return {
    ...props,
    bgColor,
    color,
    border,
    borderRadius,
    ...getSizeProps(props),
  };
};

const ripple = css<BaseButtonProps>`
  background-position: center;
  transition: background 0.8s;
  :hover {
    background: ${({ bgColor }) => bgColor}
      radial-gradient(circle, transparent 1%, ${({ bgColor }) => bgColor} 1%)
      center/15000%;
  }
  :active {
    background-color: ${getWhite};
    background-size: 100%;
    transition: background 0s;
  }
`;

export const BaseButton = styled.button.attrs(buttonHelper)<BaseButtonProps>`
  cursor: pointer;
  text-align: center;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.0015em;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  color: ${({ color }) => color};
  background: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
  padding: ${({ ph, pv }) => `${pv}px ${ph}px`};
  text-transform: ${({ textTransform }) => textTransform};
  :disabled {
    opacity: 40%;
    cursor: not-allowed;
    pointer-events: none;
  }
  ${({ theme }) => theme.isMobile && ripple}
  ${getBlock};
  ${getSpaceCSSFromProps};
`;

const ButtonWrapper = styled.div<BaseButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ alignIcon }) => {
    switch (alignIcon) {
      case 'top':
        return 'column';
      case 'bottom':
        return 'column-reverse';
      case 'right':
        return 'row-reverse';
      case 'left':
      default:
        return 'row';
    }
  }};
`;

const btnTypography = {
  big: ButtonLarge,
  medium: ButtonLarge,
  small: ButtonSmall,
  link: ButtonLink,
};

// Exported Components
export const Button: React.FC<
  BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }: BaseButtonProps) => {
  const isSolid = rest.btnType === 'solid';
  const isIcon = rest.btnType === 'icon';
  const Typography = btnTypography[rest.size ?? rest.btnType ?? ''];
  const theme = useContext(ThemeContext);
  const color = isSolid
    ? getWhite({ theme })
    : rest.color
    ? rest.color
    : getPinkBase({ theme });

  return (
    <BaseButton {...rest}>
      <ButtonWrapper>
        {rest.icon && (
          <Icon
            {...rest}
            ml={4}
            mr={4}
            as={rest.icon}
            fill={isSolid || isIcon ? 'transparent' : color}
            stroke={isSolid || isIcon ? color : 'transparent'}
            onClick={null}
          />
        )}
        {Typography ? (
          <Typography color={color}>{children}</Typography>
        ) : (
          children
        )}
      </ButtonWrapper>
    </BaseButton>
  );
};
