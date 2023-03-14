import React, { useState } from 'react';
import { TextField } from './TextField';

export const DefaultExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <TextField
      onChange={(event) => setFieldValue(event.target.value)}
      value={fieldValue}
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <TextField
      disabled
      onChange={(event) => setFieldValue(event.target.value)}
      value={fieldValue}
    />
  );
};

export const NotFullWidthExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <TextField
      fullWidth={false}
      onChange={(event) => setFieldValue(event.target.value)}
      placeholder="not full width"
      value={fieldValue}
    />
  );
};

export const FullWidthExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <TextField
      fullWidth
      onChange={(event) => setFieldValue(event.target.value)}
      placeholder="full width"
      value={fieldValue}
    />
  );
};

export const IconExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <TextField
      iconName="search"
      onChange={(event) => setFieldValue(event.target.value)}
      value={fieldValue}
    />
  );
};

export const InvalidExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <TextField
      invalid
      onChange={(event) => setFieldValue(event.target.value)}
      value={fieldValue}
    />
  );
};

export const LoadingExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <TextField
      loading
      onChange={(event) => setFieldValue(event.target.value)}
      value={fieldValue}
    />
  );
};

export const PlaceholderExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <TextField
      onChange={(event) => setFieldValue(event.target.value)}
      placeholder="sample placeholder"
      value={fieldValue}
    />
  );
};

export const ReadOnlyExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <TextField
      onChange={(event) => setFieldValue(event.target.value)}
      readOnly
      value={fieldValue}
    />
  );
};
