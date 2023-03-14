import React, { useEffect, useState } from 'react';
import { EuiComboBox, EuiComboBoxProps } from '@elastic/eui';
import { CommonProps } from '@ui/types';
import { SearchSelectOption } from './SearchSelect.types';
import { getOption } from './SearchSelect.utils';

export interface SearchSelectProps extends CommonProps {
  /** Is the select component clearable */
  clearable?: boolean;
  /** Is the button disabled */
  disabled?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** Should we visually indicate to the user that the value of the component is invalid */
  invalid?: boolean;
  /** The function invoked when selecting options */
  onChange: (value: string) => void;
  /** When the component loses focus */
  onBlur?: EuiComboBoxProps<any>['onBlur'];
  /** The options that can be selected */
  options: SearchSelectOption[];
  /** The field placeholder */
  placeholder?: string;
  /** The current value of the dropdown */
  value?: string;
}

export const SearchSelect: React.FC<SearchSelectProps> = ({
  'data-testid': dataTestId,
  clearable = true,
  disabled = false,
  fullWidth = false,
  invalid = false,
  onBlur,
  onChange,
  options,
  placeholder,
  value,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<SearchSelectOption[]>(getOption(options, value));

  useEffect(() => {
    setSelectedOptions(getOption(options, value));
  }, [value])

  const handleChange = (option) => {
    setSelectedOptions(option);
    if (onChange && option?.length > 0) {
      onChange(option[0].value);
    } else {
      onChange(null);
    }
  };

  return (
    <EuiComboBox
      data-testid={dataTestId || 'ui-atom-input-search-select'}
      fullWidth={fullWidth}
      isClearable={clearable}
      isDisabled={disabled}
      isInvalid={invalid}
      onBlur={onBlur}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      selectedOptions={selectedOptions}
      singleSelection={{ asPlainText: true }}
    />
  );
};
