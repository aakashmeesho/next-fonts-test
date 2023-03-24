import React from 'react';
import styled from 'styled-components';
import { SolidButtonBig } from '@mesh-molecules/Button';
import { Icon } from '@mesh-atoms/Icon';
import { Caption1 } from '@mesh-atoms/typography';
import { CDN_IMAGE_URL } from '../../common';
import { InfoPhone } from '@mesh-icons/index';

interface IWidgetProps {
  handleBtnClick: () => void;
  widgetIcon?: React.ComponentType<any>;
  btnText: string;
  btnIcon: React.ComponentType<any>;
  bgColor: string;
  iconSize?: number;
  widgetIconType: 'image' | 'icon';
  disabled?: boolean;
}

const StyledActionWidget = styled.div<{ bgColor: string }>`
  background: ${(props) => props.theme.colors[props.bgColor]};
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CaptionStyled = styled(Caption1)`
  letter-spacing: 0.0015em;
`;

const CardStyled = styled.div`
  display: flex;
  align-items: center;
`;

const SolidButtonBigStyled = styled(SolidButtonBig)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActionWidget = (props: IWidgetProps): React.ReactElement => (
  <StyledActionWidget {...props}>
    <CardStyled>
      {props.widgetIconType === 'image' ? (
        <img
          src={`${CDN_IMAGE_URL}/verified.png`}
          alt="verified icon"
          height="22"
          width="22"
        />
      ) : (
        <Icon as={props.widgetIcon} iconSize={props.iconSize} />
      )}

      <CaptionStyled color="greyBase" ml="8px" mr="12px">
        Shop quality product <br /> at low price
      </CaptionStyled>
    </CardStyled>
    <SolidButtonBigStyled
      {...props}
      icon={props.btnIcon}
      onClick={props.handleBtnClick}
    >
      {props.btnText}
    </SolidButtonBigStyled>
  </StyledActionWidget>
);

ActionWidget.defaultProps = {
  widgetIcon: InfoPhone,
  btnText: 'Download App',
  bgColor: 'blueT2',
};
