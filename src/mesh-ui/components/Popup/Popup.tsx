import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Portal } from 'react-portal';

import {
  LinkButtonWrapper,
  PopupContent,
  PopupFooter,
  PopupHeader,
  PopupOverlay,
  PopupWrapper,
  SolidButtonWrapper,
} from '@mesh-components/Popup/Popup.styled';
import { Divider } from '@mesh-atoms/Divider';
import { Theme } from '@mesh-typings/Theme';
import {
  GhostButtonMedium,
  LinkButton,
  SolidButtonMedium,
} from '@mesh-molecules/Button';
import { Headline6 } from '@mesh-atoms/typography';
import { Headers } from '@mesh-molecules/Headers';

export interface ActionButton {
  label: string;
  onClick: () => void;
  actionType?: 'primary' | 'secondary';
}
interface PopupProps {
  children?: React.ReactNode;
  handleClose?: () => void;
  withCloseButton?: boolean;
  title?: string;
  withDivider?: boolean;
  actionButtons?: ActionButton[];
  actionButtonType: 'link' | 'solid';
  padding?: boolean;
  height?: string;
  borderRadius?: string;
  customPadding?: string;
}

export const Popup: React.FC<PopupProps> = ({
  title,
  withCloseButton = false,
  handleClose,
  children,
  withDivider,
  actionButtons = [],
  actionButtonType,
  padding = true,
  height = '',
  borderRadius = '',
  customPadding,
}: PopupProps) => {
  const theme: Theme = useContext(ThemeContext);
  const isMobile = theme?.isMobile;

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const renderFooter = () => {
    const ButtonWrapper =
      actionButtonType === 'link' ? LinkButtonWrapper : SolidButtonWrapper;
    return (
      <>
        {!isMobile || (actionButtonType !== 'link' && <Divider />)}
        <ButtonWrapper>{renderButtons()}</ButtonWrapper>
      </>
    );
  };

  const renderButtons = () => {
    if (actionButtonType === 'link') {
      return actionButtons.map((ab) => (
        <LinkButton onClick={() => ab.onClick()} color="pinkBase">
          {ab.label}
        </LinkButton>
      ));
    }
    return actionButtons.map((ab) => {
      if (ab.actionType === 'primary') {
        return (
          <SolidButtonMedium
            style={{ width: '100%' }}
            color={ab.actionType === 'primary' ? 'deeppink' : 'greyT2'}
            onClick={() => ab.onClick()}
          >
            {ab.label}
          </SolidButtonMedium>
        );
      }
      return (
        <GhostButtonMedium
          onClick={() => ab.onClick()}
          style={{ width: '100%' }}
          color="grey"
        >
          {ab.label}
        </GhostButtonMedium>
      );
    });
  };

  return (
    <Portal>
      <PopupOverlay onClick={() => handleClose && handleClose()} />
      <PopupWrapper
        isMobile={isMobile}
        height={height}
        borderRadius={borderRadius}
      >
        {!isMobile && (
          <>
            <Headers
              title={title}
              hideCloseButton={!withCloseButton || isMobile}
              handleClose={handleClose}
              isPopupHeader
              borderRadius="4px"
            />
            {withDivider && <Divider />}
          </>
        )}
        {isMobile && title && (
          <PopupHeader>
            <Headline6 color="greyBase" textAlign="left">
              {title}
            </Headline6>
          </PopupHeader>
        )}
        <PopupContent
          isMobile={isMobile}
          padding={padding}
          customPadding={customPadding}
        >
          {children}
        </PopupContent>
        {actionButtons && actionButtonType && actionButtons.length > 0 && (
          <PopupFooter>{renderFooter()}</PopupFooter>
        )}
      </PopupWrapper>
    </Portal>
  );
};

export default Popup;
