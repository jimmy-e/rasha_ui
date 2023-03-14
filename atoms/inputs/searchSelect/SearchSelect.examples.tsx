import React from 'react';
import { SearchSelect } from './SearchSelect';

export const sampleOptions = [
  { label: 'Alpha', value: 'a' },
  { label: 'Beta', value: 'b' },
  { label: 'Charlie', value: 'c' },
  { label: 'Delta', value: 'd' },
  { label: 'Echo', value: 'e' },
  { label: 'Foxtrot', value: 'f' },
  { label: 'Golf', value: 'g' },
  { label: 'Hotel', value: 'h' },
  { label: 'India', value: 'i' },
  { label: 'Juliet', value: 'j' },
  { label: 'Kilo', value: 'k' },
  { label: 'Lima', value: 'l' },
  { label: 'Mike', value: 'm' },
  { label: 'November', value: 'n' },
];

export const DefaultExample: React.FC = () => (
  <SearchSelect
    onChange={() => {}}
    options={sampleOptions}
  />
);

export const DisabledExample: React.FC = () => (
  <SearchSelect
    disabled
    onChange={() => {}}
    options={sampleOptions}
  />
);

export const FullWidthExample: React.FC = () => (
  <SearchSelect
    fullWidth
    onChange={() => {}}
    options={sampleOptions}
  />
);

export const InvalidExample: React.FC = () => (
  <SearchSelect
    invalid
    onChange={() => {}}
    options={sampleOptions}
  />
);

export const NotClearableExample: React.FC = () => (
  <SearchSelect
    clearable={false}
    onChange={() => {}}
    options={sampleOptions}
  />
);

export const PlaceholderExample: React.FC = () => (
  <SearchSelect
    options={sampleOptions}
    onChange={() => {}}
    placeholder="sample placeholder"
  />
);
