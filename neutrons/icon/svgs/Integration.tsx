import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const Integration: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = '#28343E',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.1052" cy="19.9472" r="2.89474" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.7085 4.89453H17.2103C18.809 4.89453 20.105 6.19055 20.105 7.78927V17.0524" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.0243 7.21032L10.7085 4.89453" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.0243 2.57886L10.7085 4.89465" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="3.89474" cy="4.89474" r="2.89474" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.2915 19.9474H6.78976C5.19104 19.9474 3.89502 18.6514 3.89502 17.0527V7.78955" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.9751 17.6318L13.2909 19.9476" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.9751 22.2633L13.2909 19.9475" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default Integration;
