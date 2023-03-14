import { IconName } from '@ui/types';

export interface ButtonGroupOption {
  'data-testid'?: string;
  iconName?: IconName;
  id: string;
  label: string;
}

export type EuiButtonGroupSize = 'm' | 's' | 'compressed';
