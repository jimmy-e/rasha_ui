import { IconName } from '@ui/types';
import { CallOutColor, CallOutType } from './CallOut.types';

export const colorList: Record<CallOutType, CallOutColor> = {
  danger: 'danger',
  info: 'primary',
  reminder: 'primary',
  success: 'success',
  warning: 'warning',
};

export const iconNameList: Record<CallOutType, IconName> = {
  danger: 'alertTriangle',
  info: 'info',
  reminder: 'clock',
  success: 'check',
  warning: 'alertTriangle',
};
