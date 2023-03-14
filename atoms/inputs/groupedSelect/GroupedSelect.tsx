import React from "react";
import { EuiSuperSelect, EuiSuperSelectProps } from "@elastic/eui";
import { CommonProps } from "@ui/types";
import { GroupedSelectOption } from "./GroupedSelect.types";
import { useGetDisplayOptions } from "./GroupedSelect.utils";
import styles from "./GroupedSelect.emotion";

export interface GroupedSelectProps extends CommonProps {
  /** Is the select disabled */
  disabled?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** The function invoked when the select is selected */
  onChange: EuiSuperSelectProps<string>["onChange"];
  /** The available select options */
  options: GroupedSelectOption[];
  /** The current selected value */
  value?: string;
}

export const GroupedSelect: React.FC<GroupedSelectProps> = ({
  "data-testid": dataTestId,
  disabled = false,
  fullWidth = false,
  onChange,
  options,
  value,
}) => {
  const displayOptions = useGetDisplayOptions(options);

  return (
    <EuiSuperSelect
      className={styles.select}
      data-testid={dataTestId || "ui-atom-input-grouped-select"}
      disabled={disabled}
      fullWidth={fullWidth}
      onChange={onChange}
      options={displayOptions}
      valueOfSelected={value}
    />
  );
};
