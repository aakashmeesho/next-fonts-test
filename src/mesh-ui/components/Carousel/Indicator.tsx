import styled, { css } from 'styled-components';
import { getGreyT4BG, getPinkBase } from '@mesh-helpers/themeHelper';

type IndicatorProps = {
  active?: boolean;
};

const active = css`
  width: 12px;
  background: ${getPinkBase};
`;

const inactive = css`
  width: 8px;
  background: ${getGreyT4BG};
`;

export const Indicator = styled.li<IndicatorProps>`
  height: 4px;
  border-radius: 4px;
  display: inline-block;
  pointer-events: none;
  margin: 0px 4px;
  ${(props) => (props.active ? active : inactive)}
`;

export const IndicatorWrapper = styled.ul`
  display: block;
  list-style: none;
  text-align: center;
  padding: 0px;
  margin: 0px;
`;
