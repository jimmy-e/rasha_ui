import React, { ChangeEvent } from 'react';
import { EuiFieldNumber } from '@elastic/eui';
import { CommonProps } from '@ui/types';
import { toNumber } from '../../../utils';

export interface YearFieldProps extends CommonProps {
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** The function invoked when the year field is changed */
  onChange: (value?: number) => void;
  /** The field placeholder */
  placeholder?: string;
  /** The float field value */
  value?: string;
}

export const YearField: React.FC<YearFieldProps> = ({
  'data-testid': dataTestId,
  fullWidth = false,
  onChange,
  placeholder,
  value,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 4) {
      onChange(toNumber(event.target.value));
    }
  };

  return (
    <EuiFieldNumber
      data-testid={dataTestId || 'ui-atom-input-year-field'}
      fullWidth={fullWidth}
      max={9999}
      min={1000}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
};
