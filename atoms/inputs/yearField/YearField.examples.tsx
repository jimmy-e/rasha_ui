import React, { useState } from 'react';
import { YearField } from './YearField';

export const DefaultExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <YearField
      onChange={(value) => setFieldValue(String(value))}
      value={fieldValue}
    />
  );
};

export const NotFullWidthExample: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <YearField
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
    <YearField
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
    <YearField
      onChange={(value) => setFieldValue(String(value))}
      placeholder="sample placeholder"
      value={fieldValue}
    />
  );
};
