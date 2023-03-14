import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const DocumentFile: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 32 40" fill="none">
    <path d="M26.085 38.99H5.915c-2.711 0-4.91-2.205-4.91-4.926V5.936c0-2.721 2.199-4.927 4.91-4.927h12.93c.928 0 1.814.382 2.453 1.055l8.764 9.246c.598.631.932 1.47.932 2.342v20.414c0 2.72-2.197 4.925-4.91 4.925z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
    <path d="M20.571 1.743v7.354c0 1.56 1.26 2.824 2.814 2.824h6.878" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
    <path d="M21.006 28.571h-2.944l-1.652-6.428c-.061-.23-.167-.7-.317-1.415-.145-.72-.228-1.202-.25-1.448-.033.301-.117.787-.25 1.456a32.896 32.896 0 01-.31 1.423l-1.642 6.412h-2.937L7.593 16.333h2.544l1.56 6.68c.273 1.233.47 2.302.592 3.206.034-.318.109-.81.226-1.473.122-.67.236-1.189.342-1.557l1.776-6.856h2.444l1.777 6.856c.078.307.175.776.292 1.406s.206 1.172.267 1.624c.056-.435.145-.977.267-1.624.122-.653.234-1.18.334-1.582l1.551-6.68h2.545z" fill={color}/>
  </svg>
);

export default DocumentFile;
