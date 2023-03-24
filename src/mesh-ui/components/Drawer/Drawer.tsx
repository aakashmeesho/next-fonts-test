import React, { useContext } from 'react';
import { Portal } from 'react-portal';
import styled, { ThemeContext, keyframes } from 'styled-components';
import { Divider } from '@mesh-atoms/Divider';
import { getGreyBase, getWhite } from '@mesh-helpers/themeHelper';
import { Headers } from '@mesh-molecules/Headers';
import { Theme } from '@mesh-typings/Theme';

const transforms = {
  top: 'translateY(-100%)',
  right: 'translateX(100%)',
  bottom: 'translateY(100%)',
  left: 'translateX(-100%)',
};

const placements = {
  top: {
    top: 0,
    right: 0,
    left: 0,
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0,
  },
  bottom: {
    right: 0,
    bottom: 0,
    left: 0,
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0,
  },
};

interface DrawerProps {
  isMobile?: boolean;
  open: boolean;
  title?: string;
  subtext?: string;
  children: React.ReactNode;
  position: 'left' | 'right' | 'top' | 'bottom';
  handleClose: Function;
  withDivider?: boolean;
  handleArrowClick?: Function;
  showNavArrow?: boolean;
  subtitle?: string;
  height?: string;
  width?: string;
  hideCloseButton?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  title,
  position,
  children,
  handleClose,
  withDivider = true,
  handleArrowClick,
  showNavArrow = false,
  subtitle,
  height,
  width,
  hideCloseButton,
}) => {
  const [render, setRender] = React.useState(open);
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setRender(true);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);
  const onAnimationEnd = () => {
    if (!open) setRender(false);
  };
  const theme: Theme = useContext(ThemeContext);
  const isMobile = theme?.isMobile;
  return render ? (
    <Portal>
      <DrawerOverlay onClick={() => handleClose('Outside Tap')} />
      <ContentWrapper
        height={height}
        isMobile={isMobile}
        position={position}
        width={width}
        open={open}
        onAnimationEnd={onAnimationEnd}
      >
        <Content>
          <HeaderTitleWrapper>
            <Headers
              showNavArrow={showNavArrow}
              handleArrowClick={handleArrowClick}
              title={title}
              handleClose={() => handleClose('Cross Click')}
              subtitle={subtitle}
              hideCloseButton={hideCloseButton}
            />
            {withDivider && <Divider />}
          </HeaderTitleWrapper>
          {children}
        </Content>
      </ContentWrapper>
    </Portal>
  ) : null;
};

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 12;
  background: ${getGreyBase};
  opacity: 0.9;
`;

const animateIn = (position) => keyframes`
0% {transform: ${transforms[position]} }
100% {transform: translate(0) }
`;

const animateOut = (position) => keyframes`
0% {transform: translate(0) }
100% {transform: ${transforms[position]} }
`;

const ContentWrapper = styled.div<ContentProps>`
  display: block;
  box-sizing: border-box;
  position: fixed;
  ${(props) => placements[props.position]};
  z-index: 12;
  max-height: ${({ position, isMobile }) =>
    isMobile && (position === 'bottom' || position === 'top') ? '90%' : '100%'};
  height: ${(props) => props.height};
  width: 100%;
  max-width: ${({ isMobile, width }) => (isMobile ? '100%' : width ?? '824px')};
  animation: ${(props) =>
      props.open ? animateIn(props.position) : animateOut(props.position)}
    0.3s ease-in-out;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${getWhite};
  border-radius: ${({ isMobile }) => (isMobile ? '8px 8px 0 0' : 'none')};
`;

const HeaderTitleWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

interface ContentProps {
  open: boolean;
  position: 'left' | 'right' | 'top' | 'bottom';
  isMobile?: boolean;
  height?: string;
  width?: string;
}

const Content = styled.div`
  position: relative;
`;
