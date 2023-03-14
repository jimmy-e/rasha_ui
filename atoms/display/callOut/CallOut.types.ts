import { ThemeColor, StatusType } from '@ui/types';

export type CallOutColor = Extract<ThemeColor, 'danger' | 'primary' | 'success' | 'warning'>

export type CallOutType = StatusType | 'reminder';
