import { Theme } from '@mesh-typings/Theme';
import styled from 'styled-components';

export interface Option {
  label?: string;
  value?: any;
  [x: string]: any;
}

export interface ChipsProps {
  multiSelectable?: boolean;
  options: Option[];
  defaultSelectFirst?: boolean | number;
  onSelection: (currentOption: any, selectedOptions: Option[]) => void;
  color?: keyof Theme['colors'];
  borderColor?: keyof Theme['colors'];
  bgColor?: keyof Theme['colors'];
}

export const ChipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
