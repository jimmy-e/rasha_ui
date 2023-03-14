import { SearchSelectOption } from './SearchSelect.types';

export const getOption = (options: SearchSelectOption[], value: string): SearchSelectOption[] => {
  if (!value) {
    return [];
  }

  return options.filter((option) => option.value === value);
};
