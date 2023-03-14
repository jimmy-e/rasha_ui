import React from 'react';
import { IndividualIconProps } from '../Icon.types';

const Stewardship: React.FC<IndividualIconProps> = ({
  'data-testid': dataTestId,
  color = 'black',
  size,
}) => (
  <svg data-testid={dataTestId} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M1 15.273L4.36467 13.3295C4.8602 13.0429 5.43578 12.9488 6.00143 13.0257C8.9892 13.432 13.9988 14.4404 14 15.1024C14.0017 16.3454 13.9152 16.8676 12.3474 16.9582C10.7796 17.0482 6.85983 16.9647 6.85983 16.9647" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M14 16L21.2437 12.0782C21.2437 12.0782 22.9977 11.4497 23 13.7558C23.0017 15.2434 13.3804 21.2085 13.3804 21.2085L6.53392 21.2181L2 23" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M12 5L12 14" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M12.0073 7.71517C12.0073 7.71517 12.5006 4.52392 10.8051 2.91437C9.10972 1.30483 5.86765 1.88649 5.86765 1.88649C5.86765 1.88649 5.37441 5.07774 7.06984 6.68729C8.76527 8.29684 11.8687 7.85517 12.0073 7.71517Z" stroke={color} strokeWidth="2"/>
    <path d="M13.1475 11.4577C13.1475 11.4577 16.3363 11.9669 17.9543 10.2796C19.5723 8.59223 19.0069 5.34729 19.0069 5.34729C19.0069 5.34729 15.8182 4.83808 14.2001 6.52542C12.5821 8.21276 13.0082 11.3184 13.1475 11.4577Z" stroke={color} strokeWidth="2"/>
  </svg>
);

export default Stewardship;
