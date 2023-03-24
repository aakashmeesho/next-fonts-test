/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import { Caption2, Subtitle2 } from '@mesh-atoms/typography';
import { Theme } from '@mesh-typings/Theme';
import {
  getBlueBase,
  getblueT2,
  getGreenBase,
  getGreenT2,
  getGreyBase,
  getGreyT5Subdued,
  getOrangeBase,
  getOrangeT1,
  getRedBase,
  getRedT1,
} from '@mesh-helpers/themeHelper';
import { Icon } from '@mesh-atoms/Icon';
import { SuccessIcon, AlertIcon, InfoIcon } from '@mesh-icons/index';
interface InfoBannerProps {
  text: string;
  background?: any;
  color?: any;
  size?: string;
  icon?: React.ComponentType<any>;
}
interface IInfoBanner {
  type: 'neutral' | 'positive' | 'warning' | 'error' | 'highlight';
  withIcon?: boolean;
  text: string;
}

const S_Card = styled.div<{
  isMobile?: boolean;
  size?: string | undefined;
  background?: keyof Theme['colors'];
}>`
  display: flex;
  justify-content: ${(props) =>
    props.size === 'small' ? 'center' : 'flex-start'};
  align-items: center;
  color: ${getGreyBase};
  background-color: ${(props) => props.background || getblueT2};
  padding: ${(props) =>
    props.theme.isMobile
      ? props.size === 'big'
        ? '12px 16px'
        : '4px 16px'
      : '16px'};
  font-size: ${(props) => (props.theme.isMobile ? '13px' : '16px')};
`;

const StyledSubtitle = styled(Subtitle2)`
  flex: 1;
`;
export const InfoBanner: React.FC<InfoBannerProps> = (props) => {
  const { size, text, color, icon } = props;
  return (
    <S_Card {...props}>
      {size === 'big' ? (
        <>
          {icon && <Icon as={icon} fill={color} mr={8} />}
          <StyledSubtitle color={color}>{text}</StyledSubtitle>
        </>
      ) : (
        <Caption2 color={color}>{text}</Caption2>
      )}
    </S_Card>
  );
};

export const InfoBannerBig: React.FC<IInfoBanner> = (props) => {
  const { type, withIcon } = props;
  const getColors = () => {
    switch (type) {
      case 'neutral':
        return {
          color: getGreyBase,
          background: getGreyT5Subdued,
          ...(withIcon && {
            icon: InfoIcon,
          }),
        };
      case 'positive':
        return {
          color: getGreenBase,
          background: getGreenT2,
          ...(withIcon && {
            icon: SuccessIcon,
          }),
        };

      case 'warning':
        return {
          color: getOrangeBase,
          background: getOrangeT1,
          ...(withIcon && {
            icon: AlertIcon,
          }),
        };

      case 'error':
        return {
          color: getRedBase,
          background: getRedT1,
          ...(withIcon && {
            icon: AlertIcon,
          }),
        };

      case 'highlight':
        return {
          color: getBlueBase,
          background: getblueT2,
          ...(withIcon && {
            icon: InfoIcon,
          }),
        };

      default:
        break;
    }
  };

  return <InfoBanner {...getColors()} size="big" {...props} />;
};

export const InfoBannerSmall: React.FC<IInfoBanner> = (props) => {
  const { type } = props;
  const getColors = () => {
    switch (type) {
      case 'neutral':
        return {
          color: getGreyBase,
          background: getGreyT5Subdued,
        };
      case 'positive':
        return {
          color: getGreenBase,
          background: getGreenT2,
        };

      case 'warning':
        return {
          color: getOrangeBase,
          background: getOrangeT1,
        };

      case 'error':
        return {
          color: getRedBase,
          background: getRedT1,
        };

      case 'highlight':
        return {
          color: getBlueBase,
          background: getblueT2,
        };

      default:
        break;
    }
  };

  return <InfoBanner {...props} {...getColors()} size="small" />;
};
