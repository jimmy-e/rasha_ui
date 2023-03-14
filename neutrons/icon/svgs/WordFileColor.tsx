import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const WordFileColor: React.FC<IndividualIconProps> = ({ 'data-testid': dataTestId, size }) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" fill="#0270D4"/>
    <path d="M13 2V9H20" fill="white" fillOpacity="0.5"/>
    <path d="M9.54226 19H10.891L12.1342 14.7205H12.1854L13.4318 19H14.7805L16.6534 12.4545H15.1417L14.0582 17.0121H14.0007L12.8086 12.4545H11.5142L10.3189 17.0025H10.2646L9.18111 12.4545H7.66939L9.54226 19Z" fill="white"/>
  </svg>
);

export default WordFileColor;
