import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const ZipFile: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 32 40" fill="none">
    <path d="M26.0847 38.9909H5.91557C3.2038 38.9909 1.00586 36.7854 1.00586 34.0643V5.93588C1.00586 3.21478 3.2038 1.00928 5.91557 1.00928H18.8454C19.7725 1.00928 20.6593 1.39093 21.2975 2.06432L30.0619 11.3102C30.6598 11.9414 30.9944 12.7799 30.9944 13.6515V34.0662C30.9944 36.7854 28.7965 38.9909 26.0847 38.9909Z" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.5713 1.74316V9.09729C20.5713 10.6569 21.8312 11.9211 23.3855 11.9211H30.2627" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="12" y="2" width="3" height="3" fill={color}/>
    <rect x="12" y="8" width="3" height="3" fill={color}/>
    <rect x="12" y="14" width="3" height="3" fill={color}/>
    <rect x="15" y="5" width="3" height="3" fill={color}/>
    <rect x="15" y="11" width="3" height="3" fill={color}/>
    <rect x="15" y="17" width="3" height="3" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M18 21H12V28C12 28.5523 12.4477 29 13 29H17C17.5523 29 18 28.5523 18 28V21ZM16 24H14V26.5C14 26.7761 14.2239 27 14.5 27H15.5C15.7761 27 16 26.7761 16 26.5V24Z" fill={color}/>
  </svg>
);

export default ZipFile;
