import React from 'react';
import styled from 'styled-components';
import { Caption1 } from '@mesh-atoms/typography';
import { GhostButtonMedium, SolidButtonMedium } from '@mesh-molecules/Button';

const S_InfoWith2CTA = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 13px 16px 16px;
  font-size: 13px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  button:last-of-type {
    margin-left: 12px;
    min-width: 104px;
  }
`;

interface InfoWith2CTAProps {
  title: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryBtnClick?: () => void;
  secondaryBtnClick?: () => void;
}

export const InfoWith2CTA: React.FC<InfoWith2CTAProps> = (props) => {
  const {
    title,
    primaryLabel,
    secondaryLabel,
    primaryBtnClick,
    secondaryBtnClick,
  } = props;
  return (
    //@ts-ignore
    <S_InfoWith2CTA {...props} onClick={props.onChange}>
      <Caption1 color="greyT1">{title}</Caption1>
      <ButtonWrapper>
        <GhostButtonMedium onClick={secondaryBtnClick}>
          {secondaryLabel}
        </GhostButtonMedium>
        <SolidButtonMedium onClick={primaryBtnClick}>
          {primaryLabel}
        </SolidButtonMedium>
      </ButtonWrapper>
    </S_InfoWith2CTA>
  );
};
