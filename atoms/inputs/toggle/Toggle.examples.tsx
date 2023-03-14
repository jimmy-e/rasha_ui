import React, { useState } from 'react';
import { Toggle } from './Toggle';

export const ActiveExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Toggle
      checked={isChecked}
      label="active"
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Toggle
      disabled
      checked={isChecked}
      label="disabled"
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};

export const NoLabelExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Toggle
      checked={isChecked}
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};

export const LabelExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Toggle
      checked={isChecked}
      label="sample label"
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};

export const LargeExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Toggle
      checked={isChecked}
      label="large"
      onChange={() => setIsChecked((prevState) => !prevState)}
      size="l"
    />
  );
};

export const SmallExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Toggle
      checked={isChecked}
      label="small"
      onChange={() => setIsChecked((prevState) => !prevState)}
      size="s"
    />
  );
};

export const DemoExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Toggle
      checked={isChecked}
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
};
