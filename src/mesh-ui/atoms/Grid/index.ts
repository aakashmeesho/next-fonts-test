import { gridThemeDesktop, gridThemeMobile } from './GridTheme';
import {
  Row as RowGrid,
  Col,
  Container,
  BaseCSS,
  GridThemeProvider,
} from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Row = styled(RowGrid)`
  margin: 0;
`;

export {
  gridThemeDesktop,
  gridThemeMobile,
  Row,
  Col,
  Container,
  BaseCSS,
  GridThemeProvider,
};
