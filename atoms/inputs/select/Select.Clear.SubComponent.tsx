import React from 'react';
import { EuiFormControlLayout } from '@elastic/eui';

interface Props {
  fullWidth: boolean;
  onClear: () => void;
  value: string;
}

const SelectClear: React.FC<Props> = ({ children, fullWidth, onClear, value }) => (
  <EuiFormControlLayout
    clear={value ? { onClick: onClear } : undefined}
    fullWidth={fullWidth}
    icon={{ side: 'right', type: 'arrowDown' }}
  >
    {children}
  </EuiFormControlLayout>
);

export default SelectClear;
