import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Icon } from '@mesh-atoms/Icon/Icon';
import { Caption1 } from '@mesh-atoms/typography/Caption';
import { Card } from '@mesh-components/Card';
import { Theme } from '@mesh-typings/Theme';
import { SuccessIcon, AlertIcon, WarningDIcon } from '@mesh-icons/index';

type ToastClientProps = {
  showToast: boolean;
  text: string;
  width?: any;
  top?: any;
  left?: any;
  bottom?: any;
  center?: any;
  right?: any;
  toggleToast?: () => {};
};

type ToastProps = {
  icon?: any;
  color: keyof Theme['colors'];
} & ToastClientProps;

const StyledCard = styled(Card)<ToastClientProps>`
  display: flex;
  justify-content: start;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
  width: ${(props) => props.width && props.width}px;

  position: fixed;
  z-index: 1000;

  top: ${(props) => props.top && props.top}px;
  left: ${(props) => props.left && props.left}px;
  bottom: ${(props) => props.bottom && props.bottom}px;
  right: ${(props) => props.right && props.right}px;

  ${(props) => props.center && `left:50%;transform: translateX(-50%);`}
  box-shadow: 0px 2px 16px 2px rgba(34, 34, 34, 0.12);
`;

export const Toast: FC<ToastProps> = (props) => {
  const { showToast, toggleToast, icon, text } = props;
  const [show, setShow] = useState(props.showToast);
  useEffect(() => {
    let timeout;
    if (showToast) {
      setShow(true);
      timeout = setTimeout(() => {
        setShow(false);
        if (toggleToast) {
          toggleToast();
        }
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showToast]);

  return (
    <>
      {show ? (
        <StyledCard p={8} borderRadius="0px" {...props}>
          {icon && <Icon as={icon} fill="white" iconSize={16} />}
          <Caption1 color="white" ml={8}>
            {text}
          </Caption1>
        </StyledCard>
      ) : null}
    </>
  );
};

export const SuccessToast: FC<ToastClientProps> = (props) => (
  <Toast icon={SuccessIcon} color="greenBase" {...props} />
);

export const ErrorToast: FC<ToastClientProps> = (props) => (
  <Toast icon={AlertIcon} color="redBase" {...props} />
);

export const InformativeToast: FC<ToastClientProps> = (props) => (
  <Toast color="greyBase" {...props} />
);

export const InformativeToastWithIcon: FC<ToastClientProps> = (props) => (
  <Toast icon={WarningDIcon} color="greyBase" {...props} />
);
