import styled, { css } from 'styled-components';
import { getGreyBase, getWhite } from '@mesh-helpers/themeHelper';

export const PopupOverlay = styled.div<{ isMobile?: boolean }>`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  overflow: hidden;
  background-color: ${getGreyBase};
  border-radius: ${({ isMobile }) => (isMobile ? '8px 8px 0 0' : 'none')};
  opacity: 0.9;
`;
export const PopupContent = styled.div<{
  isMobile?: boolean;
  padding?: boolean;
  customPadding?: string;
}>`
  overflow-y: auto;
  ${(props) =>
    props.padding &&
    props.isMobile &&
    css`
      padding: 0 20px 64px 20px;
    `}
  ${(props) =>
    props.padding &&
    !props.isMobile &&
    css`
      padding: ${props.customPadding
        ? props.customPadding
        : '0 24px 80px 24px'};
    `}
`;

export const PopupFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const PopupHeader = styled.div<{ isMobile?: boolean }>`
  padding: 20px 20px 12px 20px;
`;

export const SolidButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 24px;
`;

export const LinkButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px;
`;

export const PopupWrapper = styled.div<{
  isMobile: boolean;
  height: string;
  borderRadius: string;
}>`
  ${({ isMobile }) =>
    isMobile ? `width: calc(100vw - 72px);` : `width: calc(100vw - 200px);`}
  max-height: ${({ height, isMobile }) =>
    height ? height : isMobile ? '250px' : '500px'};
  max-width: 432px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: ${getWhite};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '4px')};
`;
