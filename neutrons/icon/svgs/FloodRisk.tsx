import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const FloodRisk: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M2 19.8181C4.50068 19.8181 4.50068 16.0962 7.00135 16.0962C9.50203 16.0962 9.50203 19.8181 12.0027 19.8181C14.5034 19.8181 14.5034 16.0962 17.0041 16.0962C19.5047 16.0962 19.5047 19.8181 22.0054 19.8181" stroke={color} strokeWidth="2.01605" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M2 7.72194C4.50068 7.72194 4.50068 4 7.00135 4C9.50203 4 9.50203 7.72194 12.0027 7.72194C14.5034 7.72194 14.5034 4 17.0041 4C19.5047 4 19.5047 7.72194 22.0054 7.72194" stroke={color} strokeWidth="2.01605" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M2.07812 13.7703C4.5788 13.7703 4.5788 10.0483 7.07948 10.0483C9.58015 10.0483 9.58015 13.7703 12.0808 13.7703C14.5815 13.7703 14.5815 10.0483 17.0822 10.0483C19.5829 10.0483 19.5829 13.7703 22.0835 13.7703" stroke={color} strokeWidth="2.01605" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

export default FloodRisk;
