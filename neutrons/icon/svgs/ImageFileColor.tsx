import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const ImageFileColor: React.FC<IndividualIconProps> = ({ 'data-testid': dataTestId, size }) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" fill="#DCAD05"/>
    <path d="M13 2V9H20" fill="white" fillOpacity="0.5"/>
    <circle cx="8.75" cy="9.25" r="2.25" fill="white"/>
    <mask id="mask0_1183:36056" maskUnits="userSpaceOnUse" x="4" y="2" width="16" height="20">
      <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" fill="#FCDC6A"/>
    </mask>
    <g mask="url(#mask0_1183:36056)">
      <path d="M3 18.1911L4.9883 16.4527C7.24986 14.4755 10.6251 14.4755 12.8867 16.4527L19.875 22.5625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.375 17.25L17.1207 16.2434C18.3212 15.5512 19.7995 15.5512 21 16.2434V16.2434" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
    </g>
  </svg>
);

export default ImageFileColor;
