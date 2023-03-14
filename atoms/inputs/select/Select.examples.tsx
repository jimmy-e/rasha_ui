import React, { useState } from 'react';
import { Select } from './Select';

export const DefaultExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  const options = [
    { label: 'option a', value: 'a' },
    { label: 'option b', value: 'b' },
    { label: 'option c', value: 'c' },
  ];

  return (
    <Select
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  const options = [
    { label: 'option a', value: 'a' },
    { label: 'option b', value: 'b' },
    { label: 'option c', value: 'c' },
  ];

  return (
    <Select
      disabled
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
    />
  );
};

export const NoOnClearExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('a');

  const options = [
    { label: 'option a', value: 'a' },
    { label: 'option b', value: 'b' },
    { label: 'option c', value: 'c' },
  ];

  return (
    <Select
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
    />
  );
};

export const OnClearExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('a');

  const options = [
    { label: 'option a', value: 'a' },
    { label: 'option b', value: 'b' },
    { label: 'option c', value: 'c' },
  ];

  return (
    <Select
      onChange={(value) => setSelectedValue(value)}
      onClear={() => setSelectedValue('')}
      options={options}
      value={selectedValue}
    />
  );
};

export const CustomOptionsExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('a');

  const options = [
    { label: 'normal option', value: 'a' },
    { badge: 'Sample badge', label: 'This option has a badge', value: 'b' },
    {
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
      label: 'This option has a description',
      value: 'c',
    },
    { disabled: true, label: 'disabled option', value: 'd' },
  ];

  return (
    <Select
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
    />
  );
};

export const FullWidthExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  const options = [
    { label: 'option a', value: 'a' },
    { label: 'option b', value: 'b' },
    { label: 'option c', value: 'c' },
  ];

  return (
    <Select
      fullWidth
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
    />
  );
};

export const InvalidExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  const options = [
    { label: 'option a', value: 'a' },
    { label: 'option b', value: 'b' },
    { label: 'option c', value: 'c' },
  ];

  return (
    <Select
      invalid
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
    />
  );
};

export const LoadingExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  const options = [
    { label: 'option a', value: 'a' },
    { label: 'option b', value: 'b' },
    { label: 'option c', value: 'c' },
  ];

  return (
    <Select
      loading
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
    />
  );
};

export const PlaceholderExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  const options = [
    { label: 'option a', value: 'a' },
    { label: 'option b', value: 'b' },
    { label: 'option c', value: 'c' },
  ];

  return (
    <Select
      onChange={(value) => setSelectedValue(value)}
      options={options}
      placeholder="sample placeholder"
      value={selectedValue}
    />
  );
};
