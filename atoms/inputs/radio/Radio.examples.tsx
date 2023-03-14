import React, { useState } from 'react';
import { Radio } from './Radio';

export const ActiveExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Radio
      checked={isChecked}
      label="active"
      id="demo-radio"
      onChange={(checked) => setIsChecked(checked)}
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Radio
      checked={isChecked}
      disabled
      label="disabled"
      id="demo-radio"
      onChange={(checked) => setIsChecked(checked)}
    />
  );
};

export const NoLabelExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Radio
      checked={isChecked}
      id="demo-radio"
      onChange={(checked) => setIsChecked(checked)}
    />
  );
};

export const LabelExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Radio
      checked={isChecked}
      label="sample label"
      id="demo-radio"
      onChange={(checked) => setIsChecked(checked)}
    />
  );
};

export const DemoExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Radio
      checked={isChecked}
      id="demo-radio"
      onChange={(checked) => setIsChecked(checked)}
    />
  );
};
