import React from 'react';
import { BaseWidget } from './BaseWidget';

type WidgetProps = {
  textContent: string;
  btnText: string;
  handleClick?: () => void;
};
export const BigWidgetAction: React.FC<WidgetProps> = (props) => {
  const widgetActionData = {
    imageSize: '64px',
    btnType: 'button',
    btnText: props.btnText,
    textContent: props.textContent,
    contPadding: '0px',
    textContPadding: '16px 16px 16px 0',
    flexDirection: 'row',
    handleClick: props.handleClick,
  };
  return <BaseWidget {...widgetActionData} />;
};
export const MediumWidgetAction: React.FC<WidgetProps> = (props) => {
  const widgetActionData = {
    imageSize: '32px',
    btnType: 'button',
    btnText: props.btnText,
    textContent: props.textContent,
    contPadding: '16px',
    textContPadding: '0px',
    flexDirection: 'row',
    handleClick: props.handleClick,
  };
  return <BaseWidget {...widgetActionData} />;
};
export const LinkWidgetAction: React.FC<WidgetProps> = (props) => {
  const widgetActionData = {
    imageSize: '32px',
    btnType: 'link',
    btnText: props.btnText,
    textContent: props.textContent,
    contPadding: '12px 16px',
    textContPadding: '0px',
    flexDirection: 'column',
    handleClick: props.handleClick,
  };
  return <BaseWidget {...widgetActionData} />;
};
