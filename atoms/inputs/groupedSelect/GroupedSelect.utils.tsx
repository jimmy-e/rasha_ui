import React from 'react';
import { EuiSuperSelectOption, useEuiTheme } from '@elastic/eui';
import { GroupedSelectOption } from './GroupedSelect.types';
import styles from './GroupedSelect.emotion';

export const useGetDisplayOptions = (options: GroupedSelectOption[]): EuiSuperSelectOption<string>[] => {
  const { text }  = useEuiTheme().euiTheme.colors;
  const finalOptions: EuiSuperSelectOption<string>[] = [];

  options.forEach((option) => {
    finalOptions.push({
      disabled: true,
      inputDisplay: (
        <div className={styles.parent(text)}>
          <b>{option.label}</b>
        </div>
      ),
      value: null,
    });

    option.children.forEach((child) => {
      finalOptions.push({
        inputDisplay: <div className={styles.child}>{child.label}</div>,
        value: child.value,
      });
    });
  });

  return finalOptions;
};
