import { MouseEventHandler } from 'react';
import { CommonProps } from '@ui/types';

export interface Tab extends CommonProps {
  content?: JSX.Element;
  href?: string;
  id: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
