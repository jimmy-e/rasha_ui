import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const PowerpointFile: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 32 40" fill="none">
    <path d="M26.085 38.99H5.915c-2.711 0-4.91-2.205-4.91-4.926V5.936c0-2.721 2.199-4.927 4.91-4.927h12.93c.928 0 1.814.382 2.453 1.055l8.764 9.246c.598.631.932 1.47.932 2.342v20.414c0 2.72-2.197 4.925-4.91 4.925z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
    <path d="M20.571 1.743v7.354c0 1.56 1.26 2.824 2.814 2.824h6.878" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
    <path d="M13.975 22.092h.851c.795 0 1.39-.156 1.785-.468.395-.318.592-.779.592-1.381 0-.609-.166-1.058-.5-1.348-.328-.29-.845-.435-1.552-.435h-1.176zm5.84-1.941c0 1.316-.412 2.324-1.235 3.021-.818.698-1.983 1.046-3.495 1.046h-1.11v4.353H11.39V16.333h3.896c1.48 0 2.602.321 3.37.963.773.636 1.16 1.588 1.16 2.854z" fill={color}/>
  </svg>
);

export default PowerpointFile;
