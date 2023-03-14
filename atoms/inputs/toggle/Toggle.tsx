import React from 'react';
import { EuiSwitch, EuiSwitchProps } from '@elastic/eui';
import { BooleanSize, CommonProps } from '@ui/types';

export interface ToggleProps extends CommonProps {
  /** Is the toggle checked */
  checked: boolean;
  /** Is the toggle disabled */
  disabled?: boolean;
  /** The label of the toggle */
  label?: string;
  /** HTML Attribute used for forms */
  name?: string;
  /** The function invoked when the toggle is clicked */
  onChange: EuiSwitchProps['onChange'];
  /** The size of the toggle */
  size?: BooleanSize;
}

export const Toggle: React.FC<ToggleProps> = ({
  'data-testid': dataTestId,
  checked,
  disabled = false,
  label = null,
  name = null,
  onChange,
  size = 'l',
}) => (
  <EuiSwitch
    data-testid={dataTestId || 'ui-atom-input-toggle'}
    checked={checked}
    compressed={size === 's'}
    disabled={disabled}
    label={label}
    name={name}
    onChange={onChange}
  />
);
