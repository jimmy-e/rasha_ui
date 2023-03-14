import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const Rms: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke={color}/>
    <path d="M4.5 12.5H8.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Rms;
