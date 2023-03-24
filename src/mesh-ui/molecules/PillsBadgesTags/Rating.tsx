import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  getGreenBase,
  getOrangeBase,
  getRedBase,
  getYellowBase,
  getblueT2,
  getWhite,
  getBlueBase,
  getLimeBase,
} from '@mesh-helpers/themeHelper';
import { Subtitle2 } from '@mesh-atoms/typography';
import { Icon } from '@mesh-atoms/Icon';
import { Theme } from '@mesh-typings/Theme';
import { StarFilledIcon } from '@mesh-icons/index';

const getPillColors = (props) => {
  const { label: rating, showDefault } = props;
  if (showDefault) {
    return {
      background: getWhite(props),
      fill: getBlueBase(props),
      'box-shadow': `inset 0px 0px 0px 1px ${getblueT2(props)}`,
    };
  }
  if (rating <= 1.9) {
    return {
      background: getRedBase(props),
      fill: getWhite(props),
    };
  }
  if (rating <= 2.9) {
    return {
      background: getOrangeBase(props),
      fill: getWhite(props),
    };
  }
  if (rating < 3.5) {
    return {
      background: getYellowBase(props),
      fill: getWhite(props),
    };
  }
  if (rating < 4) {
    return {
      background: getLimeBase(props),
      fill: getWhite(props),
    };
  }
  return {
    background: getGreenBase(props),
    fill: getWhite(props),
  };
};

interface RatingProps {
  label?: number;
  isMobile?: boolean;
  showDefault?: boolean;
  fewRatings?: boolean;
}

const StyledPill = styled.span<RatingProps>((props: any) => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '16px',
  padding: props.isMobile ? '3px 6px' : '4px 8px',
  ...getPillColors(props),
}));

export const Rating: React.FC<RatingProps> = (props: RatingProps) => {
  const theme: Theme = useContext(ThemeContext);
  const { fill } = getPillColors({ theme, ...props });
  return (
    <StyledPill {...props} isMobile={theme?.isMobile}>
      <Subtitle2 color={fill}>
        {props.fewRatings ? '--' : props.label?.toFixed(1)}
      </Subtitle2>
      <Icon fill={fill} as={StarFilledIcon} ml={4} iconSize={10} />
    </StyledPill>
  );
};
