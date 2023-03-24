import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Card } from '@mesh-components/Card';
import { Theme } from '@mesh-typings/Theme';
import { Drawer } from '@mesh-components/Drawer';
import {
  getGreyT4BG,
  getSnackBarFABBoxShadow,
  getWhite,
} from '@mesh-helpers/themeHelper';

const StyledSpan = styled.span`
  position: relative;
`;

const TooltipCard = styled(Card)<{ width?: string }>`
  width: ${({ width }) => width || '300px'};
  ${getSnackBarFABBoxShadow}
  border: 1px solid ${getGreyT4BG};
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;
  left: -76px;
  top: calc(100% + 12px);
  z-index: 1;

  ::before {
    content: ' ';
    position: absolute;
    left: 77px;
    top: -12px;
    border-bottom: 12px solid ${getWhite};
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }
`;

type TooltipProps = {
  title: string;
  indicator: React.ReactNode;
  width?: string;
  open: boolean;
  onStateChange: (open: boolean) => void;
  children?: React.ReactNode;
};

export const Tooltip: FC<TooltipProps> = (props: TooltipProps) => {
  const { open, onStateChange } = props;
  const { isMobile }: Theme = useContext(ThemeContext);
  const onIconClick = () => {
    if (!open) onStateChange(true);
  };

  return (
    <StyledSpan
      className={`tooltip-span ${
        props.indicator ? '' : 'tooltip-span--absolute'
      }`}
      onMouseEnter={() => !isMobile && onStateChange(true)}
      onMouseLeave={() => !isMobile && onStateChange(false)}
      onClick={onIconClick}
      {...props}
    >
      {props.indicator}
      {isMobile ? (
        <Drawer
          title={props.title}
          open={open}
          position="bottom"
          isMobile={isMobile}
          handleClose={() => onStateChange(false)}
        >
          {open && props.children}
        </Drawer>
      ) : (
        open && <TooltipCard width={props?.width}>{props.children}</TooltipCard>
      )}
    </StyledSpan>
  );
};
