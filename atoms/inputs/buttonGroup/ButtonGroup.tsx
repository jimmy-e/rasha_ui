import React, { useEffect, useState } from 'react';
import { EuiButtonGroup } from '@elastic/eui';
import { CommonProps, Size } from '@ui/types';
import { ButtonGroupOption, EuiButtonGroupSize } from './ButtonGroup.types';
import { updateOptions } from './ButtonGroup.utils';

export interface ButtonGroupProps extends CommonProps {
  /** data-tourid used for stream tour */
  'data-tourid'?: string;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** Hides the button labels to only show the icons */
  iconOnly?: boolean;
  /** The id corresponding to the selected button */
  idSelected: string;
  /** A hidden group title that is required for accessibility */
  legend: string;
  /** The function invoked when the button is clicked */
  onChange: (id: string) => void;
  /** The array of button options for the button group */
  options: ButtonGroupOption[];
  /** The size of the buttons in the group */
  size?: Size;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  'data-testid': dataTestId,
  'data-tourid': dataTourId,
  fullWidth,
  iconOnly = false,
  idSelected,
  legend,
  onChange,
  options,
  size = 'm',
}) => {
  const [finalOptions, setFinalOptions] = useState<ButtonGroupOption[]>(options);
  const buttonSize: Record<Size, EuiButtonGroupSize> = {
    l: 'm',
    m: 's',
    s: 'compressed',
  };

  useEffect(() => {
    updateOptions({ options, setFinalOptions });
  }, []);

  return (
    <EuiButtonGroup
      data-testid={dataTestId || 'ui-atom-input-button-group'}
      data-tourid={dataTourId}
      buttonSize={buttonSize[size]}
      color="primary"
      idSelected={idSelected}
      isFullWidth={fullWidth}
      isIconOnly={iconOnly}
      legend={legend}
      onChange={onChange}
      options={finalOptions}
    />
  );
};
