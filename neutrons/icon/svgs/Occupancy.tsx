import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const Occupancy: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 26 24" fill="none">
    <path d="M22 10V20.9416C22 22.0783 21.2212 23 20.2607 23H5.73933C4.77883 23 4 22.0783 4 20.9416V10" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="10" y="16" width="6" height="7" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20.6462 1.61499H5.35382C4.45232 1.61499 3.63873 2.15526 3.28842 2.9857L1.95325 6.15304C1.95325 6.15441 1.95325 6.15577 1.95325 6.15714C1.95325 8.18838 3.60001 9.8356 5.6317 9.8356C7.66294 9.8356 9.31016 8.18883 9.31016 6.15714C9.31016 6.15577 9.31016 6.15441 9.31016 6.15304C9.31016 6.15441 9.31016 6.15577 9.31016 6.15714C9.31016 8.18838 10.9569 9.8356 12.9886 9.8356C15.0203 9.8356 16.6671 8.18883 16.6671 6.15714C16.6671 6.15577 16.6671 6.15441 16.6671 6.15304C16.6671 6.15441 16.6671 6.15577 16.6671 6.15714C16.6671 8.18838 18.3138 9.8356 20.3455 9.8356C22.3772 9.8356 24.024 8.18883 24.024 6.15714C24.024 6.15577 24.024 6.15441 24.024 6.15304H24.0481L22.7129 2.9857C22.3617 2.15526 21.5477 1.61499 20.6462 1.61499Z" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.31016 6.13528L9.76433 1.61499" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.6429 6.13528L16.1888 1.61499" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Occupancy;
