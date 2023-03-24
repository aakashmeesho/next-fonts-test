import React, { useContext } from 'react';
import { Icon } from '@mesh-atoms/Icon';
import styled, { ThemeContext } from 'styled-components';
import { Caption1, Subtitle2Caps } from '@mesh-atoms/typography';
import { Theme } from '@mesh-typings/Theme';
import { Card } from '@mesh-components/Card';
import { BackIcon, BackDIcon, CloseIcon, CloseDIcon } from '@mesh-icons/index';

interface HeadersProps {
  title?: string;
  subtitle?: string;
  showNavArrow?: boolean;
  handleClose?: Function;
  handleArrowClick?: Function;
  isPopupHeader?: boolean;
  hideCloseButton?: boolean;
  borderRadius?: string;
}

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderWrapper = styled(Card)`
  flex-direction: column;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 90%;
`;

const StyledSubtitle2Caps = styled(Subtitle2Caps)`
  word-break: break-all;
`;

export const Headers: React.FC<HeadersProps> = ({
  title,
  subtitle,
  showNavArrow,
  handleArrowClick,
  handleClose,
  isPopupHeader = false,
  hideCloseButton = false,
  borderRadius,
}) => {
  const { isMobile }: Theme = useContext(ThemeContext);
  return (
    <HeaderWrapper
      block
      color="white"
      borderRadius={borderRadius ?? isMobile ? '8px 8px 0 0' : 'none'}
      p={isMobile || isPopupHeader ? 16 : 24}
    >
      <HeaderTop>
        <TitleWrap>
          {showNavArrow && (
            <Icon
              clickable
              mr={10}
              onClick={handleArrowClick}
              as={isMobile ? BackIcon : BackDIcon}
              iconSize={isMobile ? '20' : '28'}
            />
          )}
          {/* TO-DO can be updated once design team makes it consistent for popup header */}
          <StyledSubtitle2Caps
            pt={isPopupHeader && hideCloseButton ? '4px' : 0}
            pb={isPopupHeader && hideCloseButton ? '4px' : 0}
            textAlign="left"
            color="greyBase"
          >
            {title}
          </StyledSubtitle2Caps>
        </TitleWrap>
        {!hideCloseButton && (
          <>
            {isMobile ? (
              <Icon
                clickable
                iconSize={20}
                as={CloseIcon}
                onClick={handleClose}
              />
            ) : (
              <Icon
                clickable
                iconSize={28}
                as={CloseDIcon}
                onClick={handleClose}
              />
            )}
          </>
        )}
      </HeaderTop>
      {subtitle && (
        <Caption1 textAlign="left" color="greyBase">
          {subtitle}
        </Caption1>
      )}
    </HeaderWrapper>
  );
};
