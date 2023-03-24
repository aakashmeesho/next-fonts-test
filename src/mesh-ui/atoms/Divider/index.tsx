import { Theme } from '@mesh-typings/Theme';
import styled from 'styled-components';

import { getBgColorFromProp } from '@mesh-helpers/themeHelper';

interface DividerProps {
  vertical?: boolean;
  bgColor?: keyof Theme['colors'];
}

export const Divider = styled.div.attrs((props) => ({
  bgColor: 'greyT3Divider',
  ...props,
}))<DividerProps>`
  height: ${(props: DividerProps) => (props.vertical ? '100%' : '1px')};
  background-color: ${getBgColorFromProp};
  border-radius: 2px;
  width: ${(props: DividerProps) => (props.vertical ? '1px' : '100%')};
`;
