import React from 'react';
import { CommonProps } from '@ui/types';
import { EuiContextMenu, EuiPopover, EuiPopoverProps } from '@elastic/eui';
import { transformPanel } from './ContextMenu.utils';
import { ContextMenuPanel } from './ContextMenu.types';
import styles from './ContextMenu.emotion';

export interface ContextMenuProps extends CommonProps {
  /** The anchor position of the menu */
  anchorPosition?: EuiPopoverProps['anchorPosition'];
  /** The component used to control the visibility of the context menu */
  button: EuiPopoverProps['button'];
  /** The function invoked when the menu is closed (e.g. an outside click event is invoked) */
  onClose: EuiPopoverProps['closePopover'];
  /** Should the context menu be open or not */
  open: boolean;
  /** The panel that should be displayed in the context menu */
  panel: ContextMenuPanel;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  'data-testid': dataTestId,
  anchorPosition,
  button,
  onClose,
  open,
  panel,
}) => {
  const hasMultiplePanels = panel.items.some((item) => !!item.nestedPanel);

  return (
    <EuiPopover
      data-testid={dataTestId || 'ui-atom-display-context-menu-popover'}
      anchorPosition={anchorPosition}
      button={button}
      closePopover={onClose}
      isOpen={open}
      panelPaddingSize={hasMultiplePanels ? 's' : 'none'}
    >
      <EuiContextMenu
        data-testid="ui-atom-display-context-menu"
        className={[styles.menu, !hasMultiplePanels ? styles.singlePanelMenu : undefined].join(' ')}
        initialPanelId={0}
        panels={transformPanel(panel)}
      />
    </EuiPopover>
  );
};
