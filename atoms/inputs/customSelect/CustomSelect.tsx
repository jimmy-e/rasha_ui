import React, { useState } from 'react';
import { EuiComboBox, EuiComboBoxProps, EuiComboBoxOptionsListProps } from '@elastic/eui';
import { CommonProps } from '@ui/types';
import { CustomSelectOption } from './CustomSelect.types';

export interface CustomSelectProps extends CommonProps {
  /** Is the button disabled */
  disabled?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** The initial options selected */
  initialSelected?: CustomSelectOption[];
  /** Should we visually indicate to the user that the value of the component is invalid */
  invalid?: boolean;
  /** The function invoked when selecting options */
  onChange: (options: CustomSelectOption[]) => void;
  /** When the component loses focus */
  onBlur?: EuiComboBoxProps<any>['onBlur'];
  /** The function invoked when adding a custom option */
  onCreateOption: EuiComboBoxOptionsListProps<any>['onCreateOption'];
  /** The options that can be selected */
  options?: CustomSelectOption[];
  /** The field placeholder */
  placeholder?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  'data-testid': dataTestId,
  disabled = false,
  fullWidth = false,
  initialSelected,
  invalid = false,
  onBlur,
  onChange,
  onCreateOption,
  options,
  placeholder,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<CustomSelectOption[]>(initialSelected || []);

  const handleChange = (chosenOptions) => {
    setSelectedOptions(chosenOptions);
    if (onChange) {
      onChange(chosenOptions);
    }
  };

  const handleCreateOption = (value: string, options: CustomSelectOption[]) => {
    const createdOption = onCreateOption(value, options);
    if (createdOption !== false) {
      setSelectedOptions([{ label: value, value }]);
    }
  };

  return (
    <EuiComboBox
      data-testid={dataTestId || 'ui-atom-input-custom-select'}
      fullWidth={fullWidth}
      isClearable={true}
      isDisabled={disabled}
      isInvalid={invalid}
      onBlur={onBlur}
      onChange={handleChange}
      onCreateOption={onCreateOption ? handleCreateOption : undefined}
      options={options}
      placeholder={placeholder}
      selectedOptions={selectedOptions}
      singleSelection={{ asPlainText: true }}
    />
  );
};
