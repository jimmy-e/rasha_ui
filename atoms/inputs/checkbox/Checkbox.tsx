import React from 'react';
import {
  EuiCheckbox,
  EuiCheckboxProps,
  useGeneratedHtmlId,
} from '@elastic/eui';
import { CommonProps } from '@ui/types';

export interface CheckboxProps extends CommonProps {
  /** Is the checkbox checked */
  checked: boolean;
  /** Is the checkbox disabled */
  disabled?: boolean;
  /** The label of the checkbox */
  label?: string;
  /** Unique checkbox identifier */
  id: string;
  /** The function invoked when the checkbox is clicked */
  onChange: EuiCheckboxProps['onChange'];
}

export const Checkbox: React.FC<CheckboxProps> = ({
  'data-testid': dataTestId,
  checked,
  disabled = false,
  label = null,
  id,
  onChange,
}) => (
  <EuiCheckbox
    data-testid={dataTestId || 'ui-atom-input-checkbox'}
    id={useGeneratedHtmlId({ prefix: id })}
    checked={checked}
    disabled={disabled}
    label={label}
    onChange={onChange}
  />
);
