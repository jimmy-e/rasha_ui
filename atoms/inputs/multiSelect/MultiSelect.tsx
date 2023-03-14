import React, { useState } from 'react';
import { EuiComboBox, EuiComboBoxOptionsListProps } from '@elastic/eui';
import { CommonProps } from '@ui/types';
import { MultiSelectOption } from './MultiSelect.types';

export interface MultiSelectProps extends CommonProps {
  /** Is the button disabled */
  disabled?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** The initial options selected */
  initialSelected?: MultiSelectOption[];
  /** Should we visually indicate to the user that the value of the component is invalid */
  invalid?: boolean;
  /** Doesn't show the suggestions list / dropdown */
  noSuggestions?: boolean;
  /** The function invoked when selecting options */
  onChange: (options: MultiSelectOption[]) => void;
  /** Called every time the text query in the search box is parsed */
  onSearchChange?: (searchValue: string) => void;
  /** The function invoked when adding a custom option */
  onCreateOption?: EuiComboBoxOptionsListProps<any>['onCreateOption'];
  /** The options that can be selected */
  options: MultiSelectOption[];
  /** The field placeholder */
  placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  'data-testid': dataTestId,
  disabled = false,
  fullWidth = false,
  initialSelected,
  invalid = false,
  noSuggestions = false,
  onChange,
  onCreateOption,
  onSearchChange,
  options,
  placeholder,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiSelectOption[]>(initialSelected || []);

  const handleChange = (chosenOptions) => {
    setSelectedOptions(chosenOptions);
    if (onChange) {
      onChange(chosenOptions);
    }
  };

  const handleCreateOption = (value: string, options: MultiSelectOption[]) => {
    const createdOption = onCreateOption(value, options);
    if (createdOption !== false) {
      setSelectedOptions((prevState) => [...prevState, { label: value, value }]);
    }
  };

  return (
    <EuiComboBox
      data-testid={dataTestId || 'ui-atom-input-multi-select'}
      fullWidth={fullWidth}
      isClearable={true}
      isDisabled={disabled}
      isInvalid={invalid}
      noSuggestions={noSuggestions}
      onChange={handleChange}
      onCreateOption={onCreateOption ? handleCreateOption : undefined}
      onSearchChange={onSearchChange}
      options={options}
      placeholder={placeholder}
      selectedOptions={selectedOptions}
    />
  );
};
