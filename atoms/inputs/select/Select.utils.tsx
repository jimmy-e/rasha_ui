import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { EuiSuperSelectOption } from '@elastic/eui';
import { SelectOption } from './Select.types';
import SelectBadge from './Select.Badge.SubComponent';
import SelectDescription from './Select.Description.SubComponent';

export const getOptions = (options: SelectOption[]): EuiSuperSelectOption<string>[] => options.map((option) => {
  const { badge, description, disabled, hashLink, label, value } = option;

  if (badge) {
    return {
      disabled: disabled,
      dropdownDisplay: <SelectBadge badge={badge} label={label} />,
      inputDisplay: label,
      value,
    };
  }

  if (description) {
    return {
      disabled: disabled,
      dropdownDisplay: <SelectDescription description={description} label={label} />,
      inputDisplay: label,
      value,
    };
  }

  if (hashLink) {
    return {
      disabled,
      dropdownDisplay: (
        <NavHashLink to={`#${hashLink}`}>
          {label}
        </NavHashLink>
      ),
      inputDisplay: label,
      value,
    };
  }

  return {
    disabled,
    inputDisplay: label,
    value,
  };
});
