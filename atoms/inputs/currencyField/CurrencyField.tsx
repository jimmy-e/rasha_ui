import React, { ChangeEventHandler } from 'react';
import { EuiFieldNumber, EuiFieldNumberProps, EuiText } from '@elastic/eui';
import { CommonProps } from '@ui/types';
import { toNumber } from '../../../utils';

export interface CurrencyFieldProps extends CommonProps {
  /** Is the currency field disabled */
  disabled?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** The unique identifier for the field */
  id?: string;
  /** The name of the field for form purposes */
  name?: string;
  /** When the component loses focus */
  onBlur?: EuiFieldNumberProps['onBlur'];
  /** The function invoked when the currency field is changed */
  onChange: (value?: number) => void;
  /** The field placeholder */
  placeholder?: string;
  /** A value prepended to the field to provide better context */
  prepend?: '$';
  /** Is the component in read only mode */
  readOnly?: boolean;
  /** The currency field value */
  value?: string;
}

export const CurrencyField: React.FC<CurrencyFieldProps> = ({
  'data-testid': dataTestId,
  disabled,
  fullWidth = false,
  id,
  name,
  onBlur,
  onChange,
  placeholder,
  prepend,
  readOnly = false,
  value,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValues = event.target.value?.split('.');
    if (inputValues[1] && inputValues[1].length > 2) {
      onChange(
        toNumber([inputValues[0], inputValues[1].substr(0, 2)].join('.'))
      );
    } else {
      onChange(toNumber(event.target.value));
    }
  };

  return (
    <EuiFieldNumber
      data-testid={dataTestId || 'ui-atom-input-currency-field'}
      disabled={disabled}
      fullWidth={fullWidth}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={handleChange}
      placeholder={placeholder}
      prepend={prepend && <EuiText>{prepend}</EuiText>}
      readOnly={readOnly}
      step="any"
      value={value}
    />
  );
};
