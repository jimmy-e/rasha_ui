import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const RmsFile: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 32 40" fill="none">
    <g stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M26.085 38.99H5.915c-2.711 0-4.91-2.205-4.91-4.926V5.936c0-2.721 2.199-4.927 4.91-4.927h12.93c.928 0 1.814.382 2.453 1.055l8.764 9.246c.598.631.932 1.47.932 2.342v20.414c0 2.72-2.197 4.925-4.91 4.925z" strokeMiterlimit="10"/>
      <path d="M20.571 1.743v7.354c0 1.56 1.26 2.824 2.814 2.824h6.878" strokeMiterlimit="10"/>
      <rect height="16" rx="3" width="16" x="8" y="16"/>
    </g>
  </svg>
);

export default RmsFile;
