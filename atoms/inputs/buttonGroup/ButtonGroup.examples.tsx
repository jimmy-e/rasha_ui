import React, { useState } from 'react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

export const DemoExample: React.FC = () => {
  const [idSelected, setIdSelected] = useState<string>('1');

  const options: ButtonGroupProps['options'] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  return (
    <ButtonGroup
      legend="button-group-story"
      idSelected={idSelected}
      onChange={(id) => setIdSelected(id)}
      options={options}
    />
  );
};

export const NotFullWidthExample: React.FC = () => {
  const [idSelected, setIdSelected] = useState<string>('1');

  const options: ButtonGroupProps['options'] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  return (
    <ButtonGroup
      fullWidth={false}
      idSelected={idSelected}
      legend="button-group-story"
      onChange={(id) => setIdSelected(id)}
      options={options}
    />
  );
};

export const FullWidthExample: React.FC = () => {
  const [idSelected, setIdSelected] = useState<string>('1');

  const options: ButtonGroupProps['options'] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  return (
    <ButtonGroup
      fullWidth
      idSelected={idSelected}
      legend="button-group-story"
      onChange={(id) => setIdSelected(id)}
      options={options}
    />
  );
};

export const NoIconsExample: React.FC = () => {
  const [idSelected, setIdSelected] = useState<string>('1');

  const options: ButtonGroupProps['options'] = [
    { id: '1', label: 'Download' },
    { id: '2', label: 'Settings' },
    { id: '3', label: 'Map' },
  ];

  return (
    <ButtonGroup
      idSelected={idSelected}
      legend="button-group-story"
      onChange={(id) => setIdSelected(id)}
      options={options}
    />
  );
};

export const IconsExample: React.FC = () => {
  const [idSelected, setIdSelected] = useState<string>('1');

  const options: ButtonGroupProps['options'] = [
    { iconName: 'download', id: '1', label: 'Download' },
    { iconName: 'gear', id: '2', label: 'Settings' },
    { iconName: 'mapPin', id: '3', label: 'Map' },
  ];

  return (
    <ButtonGroup
      idSelected={idSelected}
      legend="button-group-story"
      onChange={(id) => setIdSelected(id)}
      options={options}
    />
  );
};

export const IconsOnlyExample: React.FC = () => {
  const [idSelected, setIdSelected] = useState<string>('1');

  const options: ButtonGroupProps['options'] = [
    { iconName: 'download', id: '1', label: 'Download' },
    { iconName: 'gear', id: '2', label: 'Settings' },
    { iconName: 'mapPin', id: '3', label: 'Map' },
  ];

  return (
    <ButtonGroup
      iconOnly
      idSelected={idSelected}
      legend="button-group-story"
      onChange={(id) => setIdSelected(id)}
      options={options}
    />
  );
};

export const LargeExample: React.FC = () => {
  const [idSelected, setIdSelected] = useState<string>('1');

  const options: ButtonGroupProps['options'] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  return (
    <ButtonGroup
      idSelected={idSelected}
      legend="button-group-story"
      onChange={(id) => setIdSelected(id)}
      options={options}
      size="l"
    />
  );
};

export const MediumExample: React.FC = () => {
  const [idSelected, setIdSelected] = useState<string>('1');

  const options: ButtonGroupProps['options'] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  return (
    <ButtonGroup
      idSelected={idSelected}
      legend="button-group-story"
      onChange={(id) => setIdSelected(id)}
      options={options}
      size="m"
    />
  );
};

export const SmallExample: React.FC = () => {
  const [idSelected, setIdSelected] = useState<string>('1');

  const options: ButtonGroupProps['options'] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  return (
    <ButtonGroup
      idSelected={idSelected}
      legend="button-group-story"
      onChange={(id) => setIdSelected(id)}
      options={options}
      size="s"
    />
  );
};
