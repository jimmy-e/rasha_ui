import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const Fire: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M7.0844 22.5357C-1.64326 16.8884 11.1915 8.67409 8.62458 2C8.62458 2 16.8389 7.13392 15.8121 12.2678" stroke="#28343E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.8125 12.2679L18.2819 10.7739C20.854 14.763 22.887 19.3168 17.9123 22.5357" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.2992 18.6856C15.2992 20.2463 14.0362 21.5093 12.4755 21.5093C10.9148 21.5093 9.65186 20.2463 9.65186 18.6856C9.65186 17.1249 11.8286 14.3218 12.4755 14.3218C13.1224 14.3218 15.2992 17.1249 15.2992 18.6856Z" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Fire;
