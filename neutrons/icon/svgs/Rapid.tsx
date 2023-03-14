import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const Rapid: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke={color}/>
    <path d="M2.5 2.5V7C2.5 7.82843 3.17157 8.5 4 8.5C4.82843 8.5 5.5 7.82843 5.5 7V2.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 10.5V7.5M7.5 7.5V4.5H9C9.82843 4.5 10.5 5.17157 10.5 6C10.5 6.82843 9.82843 7.5 9 7.5H7.5Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10.5C11.1716 10.5 10.5 9.82843 10.5 9C10.5 8.17157 11.1716 7.5 12 7.5C12.6531 7.5 13.2087 7.9174 13.4146 8.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0006 10.5C12.829 10.5 13.5006 11.1716 13.5006 12C13.5006 12.8284 12.829 13.5 12.0006 13.5C11.3475 13.5 10.7919 13.0826 10.5859 12.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Rapid;
