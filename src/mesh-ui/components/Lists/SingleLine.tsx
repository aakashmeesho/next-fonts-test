import React from 'react';
import styled from 'styled-components';

import { Icon } from '@mesh-atoms/Icon';
import { Caption1, ParagraphBody2 as Paragraph } from '@mesh-atoms/typography';

import { getGreyBase, getGreyT5Subdued } from '../../helpers/themeHelper';
import { Checkbox, Radio } from '../../molecules';

interface StyleProps {
  onClick?: any;
  checked?: any;
}

const SingleLineStyled = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) =>
    props.theme.isMobile ? '12px 24px 12px 16px' : '16px 24px 16px 16px'};
  font-size: 15px;
  color: ${getGreyBase};
  cursor: pointer;
  font-weight: ${(props) => (props.checked ? 'bold' : 'normal')};
  &:hover {
    background: ${getGreyT5Subdued};
  }
`;

const ParagraphBody2 = styled(Paragraph)`
  margin-left: 8px;
`;

interface SingleLineProps {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  label: string;
  type?: 'checkbox' | 'radio' | 'icon' | 'plain';
  checked?: boolean;
  icon?: React.ComponentType<any>;
  iconSize?: string | number;
  onClick?: () => void;
}

export const SingleLineList: React.FC<SingleLineProps> = (props) => {
  switch (props.type) {
    case 'checkbox': {
      return (
        <SingleLineStyled checked={props.checked}>
          <Checkbox
            onChange={props.onChange}
            checked={props.checked}
            label={props.label}
          />
        </SingleLineStyled>
      );
    }
    case 'radio': {
      return (
        <SingleLineStyled checked={props.checked}>
          <Radio
            onChange={props.onChange}
            checked={props.checked}
            label={props.label}
          />
        </SingleLineStyled>
      );
    }
    case 'plain': {
      return (
        <SingleLineStyled onClick={props.onClick}>
          <Caption1 color="greyT1">{props.label}</Caption1>
        </SingleLineStyled>
      );
    }
    default: {
      return (
        <SingleLineStyled onClick={props.onChange}>
          <Icon as={props.icon} iconSize={props.iconSize} />
          <ParagraphBody2 color="greyBase" textAlign="initial">
            {props.label}
          </ParagraphBody2>
        </SingleLineStyled>
      );
    }
  }
};
