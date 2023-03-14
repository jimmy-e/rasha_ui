import React from 'react';
import { EuiLoadingSpinner } from '@elastic/eui';
import { CommonProps, SizeXXL } from '@ui/types';
import styles from './Spinner.emotion';

export interface SpinnerProps extends CommonProps {
  /** The size of the spinner */
  size?: SizeXXL;
}

export const Spinner: React.FC<SpinnerProps> = ({ 'data-testid': dataTestId, size = 'l' }) => {
  const isXXL = size === 'xxl';

  return (
    <EuiLoadingSpinner
      data-testid={dataTestId || 'ui-atom-display-spinner'}
      className={isXXL ? styles.xxl : undefined}
      size={isXXL ? 'xl' : size}
    />
  );
};
