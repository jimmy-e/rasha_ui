import React, { ChangeEventHandler } from 'react';
import { EuiFieldNumber, EuiFieldNumberProps, EuiText } from '@elastic/eui';
import { CommonProps } from '@ui/types';
import { toNumber } from '../../../utils';

export interface FloatFieldProps extends CommonProps {
  /** A value appended to the field to provide better context */
  append?: '%' | 'ft²' | 'm²';
  /** Is the float field disabled */
  disabled?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** The unique identifier for the field */
  id?: string;
  /** The name of the field for form purposes */
  name?: string;
  /** When the component loses focus */
  onBlur?: EuiFieldNumberProps['onBlur'];
  /** The function invoked when the float field is changed */
  onChange: (value?: number) => void;
  /** The field placeholder */
  placeholder?: string;
  /** Is the component in read only mode */
  readOnly?: boolean;
  /** The float field value */
  value?: string;
}

export const FloatField: React.FC<FloatFieldProps> = ({
  'data-testid': dataTestId,
  append,
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

  return (
    <EuiFieldNumber
      data-testid={dataTestId || 'ui-atom-input-float-field'}
      append={append && <EuiText>{append}</EuiText>}
      disabled={disabled}
      fullWidth={fullWidth}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={handleChange}
      placeholder={placeholder}
      readOnly={readOnly}
      step="any"
      value={value}
    />
  );
};
