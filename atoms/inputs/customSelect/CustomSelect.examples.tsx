import React from 'react';
import { CustomSelect } from './CustomSelect';

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
  <CustomSelect
    onChange={() => {}}
    onCreateOption={() => {}}
    options={sampleOptions}
  />
);

export const DisabledExample: React.FC = () => (
  <CustomSelect
    disabled
    onChange={() => {}}
    onCreateOption={() => {}}
    options={sampleOptions}
  />
);

export const FullWidthExample: React.FC = () => (
  <CustomSelect
    fullWidth
    onChange={() => {}}
    onCreateOption={() => {}}
    options={sampleOptions}
  />
);

export const InvalidExample: React.FC = () => (
  <CustomSelect
    invalid
    onChange={() => {}}
    onCreateOption={() => {}}
    options={sampleOptions}
  />
);

export const PlaceholderExample: React.FC = () => (
  <CustomSelect
    options={sampleOptions}
    onChange={() => {}}
    onCreateOption={() => {}}
    placeholder="sample placeholder"
  />
);
