import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const Air: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7.5" stroke={color} />
    <path d="M0.5 8.5H2.5L5.5 12.5L10.5 4.5H14.5" stroke={color} />
  </svg>
);

export default Air;
