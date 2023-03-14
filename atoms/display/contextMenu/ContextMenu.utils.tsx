import React from 'react';
import { EuiContextMenuProps, EuiContextMenuPanelItemDescriptor } from '@elastic/eui';
import { ContextMenuItem, ContextMenuPanel } from './ContextMenu.types';
import { Icon } from '../../../neutrons/icon/Icon';

const getPanelItem = (item: ContextMenuItem, panelId: number): EuiContextMenuPanelItemDescriptor => ({
  // @ts-expect-error: allowing prop `data-testid`
  'data-testid': item['data-testid'] || 'ui-atom-navigation-context-menu-item',
  className: item.type,
  icon: item.iconName ? <Icon name={item.iconName} /> : undefined,
  onClick: item.onClick,
  name: item.label,
  panel: panelId,
});

export const transformPanel = (panel: ContextMenuPanel): EuiContextMenuProps['panels'] => {
  const finalPanels: EuiContextMenuProps['panels'] = [];
  let nestedPanelId = 1;

  const transformItems = (items: ContextMenuPanel['items']): EuiContextMenuPanelItemDescriptor[] => items.map((item) => {
    let itemPanelId = undefined;
    if (item.nestedPanel) {
      itemPanelId = nestedPanelId;
      nestedPanelId = nestedPanelId + 1;
      finalPanels.push({
        id: itemPanelId,
        items: transformItems(item.nestedPanel.items),
        title: item.nestedPanel.title,
      });
    }

    return getPanelItem(item, itemPanelId);
  });

  const finalItems = transformItems(panel.items);

  finalPanels.push({
    id: 0,
    items: finalItems,
    title: panel.title,
  });

  return finalPanels;
};
