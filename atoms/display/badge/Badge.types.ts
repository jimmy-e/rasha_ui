import { FC } from 'react';
import { ThemeColor } from '@ui/types';

export interface AdditionalProps {
  iconType?: FC;
  iconSide?: 'right';
}

export type BadgeColor = ThemeColor | 'default' | 'white';
