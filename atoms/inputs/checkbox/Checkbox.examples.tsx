import React, { useState } from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';

export const ActiveExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Checkbox
      checked={isChecked}
      label="active"
      id="demo-checkbox"
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Checkbox
      checked={isChecked}
      disabled
      label="disabled"
      id="demo-checkbox"
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};

export const NoLabelExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Checkbox
      checked={isChecked}
      id="demo-checkbox"
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};

export const LabelExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Checkbox
      checked={isChecked}
      label="sample label"
      id="demo-checkbox"
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};

export const DemoExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Checkbox
      checked={isChecked}
      id="demo-checkbox"
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};
