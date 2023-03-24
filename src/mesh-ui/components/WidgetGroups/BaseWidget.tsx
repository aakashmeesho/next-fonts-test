import React from 'react';
import styled from 'styled-components';

import { ParagraphBody3 } from '@mesh-atoms/typography';
import { getWhite } from '@mesh-helpers/themeHelper';
import { GhostButtonMedium, LinkButton } from '@mesh-molecules/Button';
import { CDN_IMAGE_URL } from '../../common';

interface WidgetProps {
  handleClick?: () => void;
  imageSize: string;
  btnType: string;
  btnText: string;
  textContent: string;
  contPadding: string;
  textContPadding: string;
  flexDirection: string;
}

const StyledActionWidget = styled.div<WidgetProps>`
  background: ${getWhite};
  padding: ${(props) => props.contPadding};
  display: flex;
`;

const TextButtonCont = styled.div<WidgetProps>`
  width: 100%;
  display: flex;
  padding: ${(props) => props.textContPadding};
  flex-direction: ${(props) => props.flexDirection};
  margin-left: 8px;
  align-items: ${(props) => (props.btnType === 'link' ? 'initial' : 'center')};
`;
const LinkTypeButton = styled(LinkButton)`
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
`;
const CaptionStyle = styled.div`
  flex: 1;
  height: 32px;
  display: flex;
  align-items: center;
`;

export const BaseWidget: React.FC<WidgetProps> = (props) => (
  <StyledActionWidget {...props}>
    <img
      src={`${CDN_IMAGE_URL}/square.png`}
      height={props.imageSize}
      width={props.imageSize}
      alt="widget image"
    />
    <TextButtonCont {...props}>
      <CaptionStyle>
        <ParagraphBody3 color="greyBase">{props.textContent}</ParagraphBody3>
      </CaptionStyle>
      {props.btnType === 'link' ? (
        <div>
          <LinkTypeButton onClick={props.handleClick}>
            {props.btnText}
          </LinkTypeButton>
        </div>
      ) : (
        <GhostButtonMedium color="greyBase" onClick={props.handleClick}>
          {props.btnText}
        </GhostButtonMedium>
      )}
    </TextButtonCont>
  </StyledActionWidget>
);
