import React from 'react';
import { EuiRadio, useGeneratedHtmlId } from '@elastic/eui';
import { CommonProps } from '@ui/types';

export interface RadioProps extends CommonProps {
  /** Is the radio checked */
  checked: boolean;
  /** Is the radio disabled */
  disabled?: boolean;
  /** The label of the radio */
  label?: string;
  /** Unique radio identifier */
  id: string;
  /** The function invoked when the radio is clicked */
  onChange: (checked: boolean) => void;
}

export const Radio: React.FC<RadioProps> = ({
  'data-testid': dataTestId,
  checked,
  disabled = false,
  label = null,
  id,
  onChange,
}) => (
  <EuiRadio
    data-testid={dataTestId || 'ui-atom-input-radio'}
    id={useGeneratedHtmlId({ prefix: id })}
    checked={checked}
    disabled={disabled}
    label={label}
    onChange={(event) => onChange(event.target.checked)}
  />
);
