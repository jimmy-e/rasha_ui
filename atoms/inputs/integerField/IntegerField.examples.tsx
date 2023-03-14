import React, { useState } from 'react';
import { IntegerField } from './IntegerField';

export const DefaultExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <IntegerField
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <IntegerField
      disabled
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const NotFullWidthExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <IntegerField
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
    <IntegerField
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
    <IntegerField
      onChange={(value) => setFieldValue(String(value))}
      placeholder="sample placeholder"
      value={fieldValue}
    />
  );
};

export const ReadOnlyExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <IntegerField
      onChange={(value) => setFieldValue(String(value))}
      readOnly
      value={fieldValue}
    />
  );
};
