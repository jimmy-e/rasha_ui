import React, { useEffect, useState } from "react";
import {
  EuiSuperSelect,
  EuiSuperSelectOption,
  EuiSuperSelectProps,
} from "@elastic/eui";
import { CommonProps } from "@ui/types";
import SelectClear from "./Select.Clear.SubComponent";
import { SelectOption } from "./Select.types";
import { getOptions } from "./Select.utils";

export interface SelectProps extends CommonProps {
  /** Is the select disabled */
  disabled?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** The unique identifier for the field */
  id?: string;
  /** Should we visually indicate to the user that the value of the component is invalid */
  invalid?: boolean;
  /** Is the component showing a loading indicator */
  loading?: boolean;
  /** The name of the field for form purposes */
  name?: string;
  /** The function invoked when the select is selected */
  onChange: (value: string) => void;
  /** When the component loses focus */
  onBlur?: EuiSuperSelectProps<any>["onBlur"];
  /** The function invoked when clearing the value in the select */
  onClear?: () => void;
  /** The available select options */
  options: SelectOption[];
  /** The field placeholder */
  placeholder?: string;
  /** The current selected value */
  value?: string;
}

export const Select: React.FC<SelectProps> = ({
  "data-testid": dataTestId,
  disabled = false,
  fullWidth = false,
  id,
  invalid = false,
  loading = false,
  name,
  onChange,
  onBlur,
  onClear,
  options,
  placeholder,
  value,
}) => {
  const [finalOptions, setFinalOptions] = useState<
    EuiSuperSelectOption<string>[]
  >([]);

  useEffect(() => {
    if (options) {
      setFinalOptions(getOptions(options));
    }
  }, [options]);

  const props = {
    "data-testid": dataTestId || "ui-atom-input-select",
    disabled: disabled || loading,
    fullWidth: fullWidth,
    id: id,
    isInvalid: invalid,
    isLoading: loading,
    name,
    onBlur,
    onChange: onChange,
    options: finalOptions,
    placeholder,
    valueOfSelected: value,
  };

  if (onClear) {
    return (
      <SelectClear fullWidth={fullWidth} onClear={onClear} value={value}>
        <EuiSuperSelect {...props} />
      </SelectClear>
    );
  }

  return <EuiSuperSelect {...props} />;
};
