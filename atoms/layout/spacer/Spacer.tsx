import React from 'react';
import { EuiSpacer, EuiSpacerProps } from '@elastic/eui';
import { CommonProps } from '@ui/types';

export interface SpacerProps extends CommonProps {
  /** Size of the spacer */
  size?: EuiSpacerProps['size'];
}

export const Spacer: React.FC<SpacerProps> = ({ 'data-testid': dataTestId, size = 'l' }) => (
  <EuiSpacer data-testid={dataTestId || 'ui-atom-display-avatar'} size={size} />
);
