import React, { useState } from 'react';
import { CurrencyField } from './CurrencyField';

export const DefaultExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <CurrencyField
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <CurrencyField
      disabled
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const FullWidthExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <CurrencyField
      fullWidth
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const PlaceholderExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <CurrencyField
      onChange={(value) => setFieldValue(String(value))}
      placeholder="sample placeholder"
      value={fieldValue}
    />
  );
};

export const PrependedExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <CurrencyField
      onChange={(value) => setFieldValue(String(value))}
      prepend="$"
      value={fieldValue}
    />
  );
};

export const ReadOnlyExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <CurrencyField
      onChange={(value) => setFieldValue(String(value))}
      readOnly
      value={fieldValue}
    />
  );
};
