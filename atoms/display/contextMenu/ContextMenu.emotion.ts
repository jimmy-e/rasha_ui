import { css } from '@emotion/css';
import { colors } from '../../../neutrons/colors/colors';

const menu = css`
  .euiContextMenuItem.danger {
    color: ${colors.danger} !important;
  }
  svg {
    margin-right: 8px;
  }
`;

const singlePanelMenu = css`
  width: initial !important;

  .euiContextMenu {
    width: initial !important;
  }
  .euiContextMenuPanel {
    width: initial !important;
    position: initial !important;
  }
`;

export default {
  menu,
  singlePanelMenu,
};
