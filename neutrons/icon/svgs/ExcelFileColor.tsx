import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const ExcelFileColor: React.FC<IndividualIconProps> = ({ 'data-testid': dataTestId, size }) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" fill="#21B59A"/>
    <path d="M13 2V9H20" fill="white" fillOpacity="0.5"/>
    <path d="M10.5739 11.7273H8.83026L11.0639 15.3636L8.78764 19H10.549L12.0405 16.5178H12.0973L13.5888 19H15.3572L13.0881 15.3636L15.3075 11.7273H13.571L12.0973 14.206H12.0405L10.5739 11.7273Z" fill="white"/>
  </svg>
);

export default ExcelFileColor;
