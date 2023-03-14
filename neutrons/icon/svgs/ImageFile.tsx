import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const ImageFile: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 32 40" fill="none">
    <g clipPath="url(#clip0)">
      <path d="M26.0845 38.9909H5.91533C3.20356 38.9909 1.00562 36.7854 1.00562 34.0643V5.93588C1.00562 3.21478 3.20356 1.00928 5.91533 1.00928H18.8452C19.7722 1.00928 20.6591 1.39093 21.2973 2.06432L30.0616 11.3102C30.6596 11.9414 30.9942 12.7799 30.9942 13.6515V34.0662C30.9942 36.7854 28.7962 38.9909 26.0845 38.9909Z" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5715 1.74326V9.09738C20.5715 10.657 21.8314 11.9212 23.3857 11.9212H30.263" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.135 13.3333C15.135 15.4142 13.4548 17.0953 11.3894 17.0953C9.32399 17.0953 7.6438 15.4142 7.6438 13.3333C7.6438 11.2525 9.32399 9.57144 11.3894 9.57144C13.4548 9.57144 15.135 11.2525 15.135 13.3333Z" stroke={color} strokeWidth="2"/>
      <path d="M1.42358 30.4762L6.19026 25.6931C8.53506 23.3402 12.3453 23.3402 14.6901 25.6931L27.0497 38.0952" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.8296 31.4286L24.7751 28.2707C26.5446 26.3736 29.5512 26.3736 31.3207 28.2707V28.2707" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

export default ImageFile;
