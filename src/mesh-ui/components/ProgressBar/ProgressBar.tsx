import React from 'react';
import { getGreyT4BG, getPinkBase } from '@mesh-helpers/themeHelper';
import styled, { keyframes } from 'styled-components';

interface Props {
  width?: string;
}
const ProgressBarAnimation = keyframes`
 0% {  width: 0%; transform: translateX(-25%); }
 100% { width:70%; transform: translateX(150%); }
`;

const ProgressBarContainer = styled.div<Props>`
  width: ${({ width }) => width || '100%'};
  height: 6px;
  background-color: ${getGreyT4BG};
  border-radius: 4px;
  overflow: hidden;
`;
const ProgressBarLoader = styled.div`
  height: 6px;
  background-color: ${getPinkBase};
  border-radius: 4px;
  animation: ${ProgressBarAnimation} 1.5s infinite;
`;

export const ProgressBar: React.FC<Props> = (props) => {
  return (
    <>
      <ProgressBarContainer width={props.width}>
        <ProgressBarLoader />
      </ProgressBarContainer>
    </>
  );
};
