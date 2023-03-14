import React, { Dispatch, SetStateAction } from 'react';
import { ButtonGroupOption } from './ButtonGroup.types';
import { Icon } from '../../../neutrons/icon/Icon';

interface GetButtonGroupOptionsProps {
  options: ButtonGroupOption[];
  setFinalOptions: Dispatch<SetStateAction<ButtonGroupOption[]>>;
}

export const updateOptions = ({ options, setFinalOptions }: GetButtonGroupOptionsProps) => {
  if (options.some((option) => !!option.iconName)) {
    const finalOptions = options.map((option) => {
      if (option.iconName) {
        return {
          iconType: () => <Icon name={option.iconName} />,
          ...option,
        };
      }

      return option;
    });

    setFinalOptions(finalOptions);
  }
};
