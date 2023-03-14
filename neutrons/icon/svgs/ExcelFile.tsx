import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const ExcelFile: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 32 40" fill="none">
    <path d="M26.085 38.99H5.915c-2.711 0-4.91-2.205-4.91-4.926V5.936c0-2.721 2.199-4.927 4.91-4.927h12.93c.928 0 1.814.382 2.453 1.055l8.764 9.246c.598.631.932 1.47.932 2.342v20.414c0 2.72-2.197 4.925-4.91 4.925z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
    <path d="M20.571 1.743v7.354c0 1.56 1.26 2.824 2.814 2.824h6.878" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
    <path d="M21.835 28.571h-2.953l-2.836-4.629-2.836 4.63h-2.77l4.046-6.312-3.787-5.926h2.853l2.628 4.402 2.577-4.402h2.786l-3.828 6.068z" fill={color}/>
  </svg>
);

export default ExcelFile;
