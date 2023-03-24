import React from 'react';
import { Button } from './BaseButton';
import { align, BaseButtonProps, ColorType } from './BaseButtonProps';

// Solid Button
export const SolidButtonBig: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps
> = (props) => <Button {...props} btnType="solid" size="big" />;

export const SolidButtonMedium: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps
> = (props) => <Button {...props} btnType="solid" size="medium" />;

export const SolidButtonSmall: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps
> = (props) => <Button {...props} btnType="solid" size="small" />;

//  Ghost Button
export const GhostButtonBig: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps
> = (props) => <Button {...props} btnType="ghost" size="big" />;

export const GhostButtonMedium: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps
> = (props) => <Button {...props} btnType="ghost" size="medium" />;

export const GhostButtonSmall: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps
> = (props) => <Button {...props} btnType="ghost" size="small" />;

// Link Button
export const LinkButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps
> = (props) => <Button {...props} btnType="link" />;

//  Icon Button
type IconButtonProps = {
  name: React.ComponentType<any>;
  color?: ColorType;
  alignIcon?: align;
};

export const IconButtonBig: React.FC<
  IconButtonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    BaseButtonProps
> = (props) => <Button {...props} btnType="icon" size="big" />;

export const IconButtonSmall: React.FC<
  IconButtonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    BaseButtonProps
> = (props) => <Button {...props} btnType="icon" size="small" />;
