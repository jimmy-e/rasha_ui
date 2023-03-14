import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const Construction: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="1" y="1" width="22" height="22" rx="3" stroke={color} strokeWidth="2"/>
    <path d="M1 8H23" stroke={color} strokeWidth="2"/>
    <path d="M1 15H23" stroke={color} strokeWidth="2"/>
    <path d="M12 1V8" stroke={color} strokeWidth="2"/>
    <path d="M12 15V22" stroke={color} strokeWidth="2"/>
    <path d="M7 7V14" stroke={color} strokeWidth="2"/>
    <path d="M17 7V14" stroke={color} strokeWidth="2"/>
  </svg>
);

export default Construction;
