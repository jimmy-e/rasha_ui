import { MouseEvent } from 'react';
import { CommonProps, IconName, StatusType } from '@ui/types';

export interface ContextMenuItem extends CommonProps {
  iconName?: IconName;
  label: string;
  nestedPanel?: ContextMenuPanel;
  onClick?: (event: MouseEvent) => void;
  type?: Extract<StatusType, 'danger'>;
}

export interface ContextMenuPanel {
  items: ContextMenuItem[];
  title?: string;
}
