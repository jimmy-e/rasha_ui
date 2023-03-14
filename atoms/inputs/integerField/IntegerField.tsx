import React, { ChangeEventHandler, KeyboardEventHandler } from 'react';
import { EuiFieldNumber, EuiFieldNumberProps } from '@elastic/eui';
import { CommonProps } from '@ui/types';
import { toNumber } from '../../../utils';

export interface IntegerFieldProps extends CommonProps {
  /** Is the integer field disabled */
  disabled?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** The unique identifier for the field */
  id?: string;
  /** The name of the field for form purposes */
  name?: string;
  /** When the component loses focus */
  onBlur?: EuiFieldNumberProps['onBlur'];
  /** The function invoked when the integer field is changed */
  onChange: (value?: number) => void;
  /** The field placeholder */
  placeholder?: string;
  /** Is the component in read only mode */
  readOnly?: boolean;
  /** The integer field value */
  value?: number | string;
}

export const IntegerField: React.FC<IntegerFieldProps> = ({
  'data-testid': dataTestId,
  disabled,
  fullWidth = false,
  id,
  name,
  onBlur,
  onChange,
  placeholder,
  readOnly,
  value,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => onChange(toNumber(event.target.value));

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === '.') {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <EuiFieldNumber
      data-testid={dataTestId || 'ui-atom-input-integer-field'}
      disabled={disabled}
      fullWidth={fullWidth}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      readOnly={readOnly}
      value={value}
    />
  );
};
