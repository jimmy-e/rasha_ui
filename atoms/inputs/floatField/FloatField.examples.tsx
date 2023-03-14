import React, { useState } from 'react';
import { FloatField } from './FloatField';

export const DefaultExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <FloatField
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <FloatField
      disabled
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const PercentExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <FloatField
      append="%"
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const FeetExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <FloatField
      append="ft²"
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const MetersExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <FloatField
      append="m²"
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const NotFullWidthExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <FloatField
      fullWidth={false}
      onChange={(value) => setFieldValue(String(value))}
      placeholder="not full width"
      value={fieldValue}
    />
  );
};

export const FullWidthExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <FloatField
      fullWidth
      onChange={(value) => setFieldValue(String(value))}
      placeholder="full width"
      value={fieldValue}
    />
  );
};

export const PlaceholderExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <FloatField
      onChange={(value) => setFieldValue(String(value))}
      placeholder="sample placeholder"
      value={fieldValue}
    />
  );
};

export const ReadOnlyExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <FloatField
      onChange={(value) => setFieldValue(String(value))}
      readOnly
      value={fieldValue}
    />
  );
};
