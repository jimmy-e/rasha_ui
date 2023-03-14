import React from 'react';
import { MultiSelect } from './MultiSelect';

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

export const CreateCustomExample: React.FC = () => (
  <MultiSelect
    onChange={() => {}}
    onCreateOption={() => {}}
    options={sampleOptions}
  />
);

export const DefaultExample: React.FC = () => <MultiSelect onChange={() => {}} options={sampleOptions} />;

export const DisabledExample: React.FC = () => (
  <MultiSelect
    disabled
    onChange={() => {}}
    options={sampleOptions}
  />
);

export const FullWidthExample: React.FC = () => (
  <MultiSelect
    fullWidth
    onChange={() => {}}
    options={sampleOptions}
  />
);

export const InvalidExample: React.FC = () => (
  <MultiSelect
    invalid
    onChange={() => {}}
    options={sampleOptions}
  />
);

export const NoSuggestionsExample: React.FC = () => (
  <MultiSelect
    noSuggestions
    onChange={() => {}}
    onCreateOption={() => {}}
    options={sampleOptions}
  />
);

export const PlaceholderExample: React.FC = () => (
  <MultiSelect
    onChange={() => {}}
    options={sampleOptions}
    placeholder="sample placeholder"
  />
);
