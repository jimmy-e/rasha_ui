import React, { useState } from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { Select, SelectProps } from './Select';
import {
  DefaultExample,
  DisabledExample,
  NoOnClearExample,
  OnClearExample,
  CustomOptionsExample,
  FullWidthExample,
  InvalidExample,
  LoadingExample,
  PlaceholderExample,
} from './Select.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <DemoContainer direction="column" grow label="active">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" grow label="disabled">
        <DisabledExample />
      </DemoContainer>,
    ],
    description: 'A select can either be active or disabled.',
    title: 'Active States',
  },
  {
    components: [
      <DemoContainer direction="column" grow label="no on clear">
        <NoOnClearExample />
      </DemoContainer>,
      <DemoContainer direction="column" grow label="has on clear">
        <OnClearExample />
      </DemoContainer>,
    ],
    description: 'If you pass an on clear function, the component will provide a button to clear the selected value.',
    title: 'On Clear',
  },
  {
    components: [
      <DemoContainer direction="column" grow label="custom options">
        <CustomOptionsExample />
      </DemoContainer>,
    ],
    description: 'The options for the select component can be customized, such as being disabled.',
    title: 'Custom options',
  },
  {
    components: [
      <DemoContainer direction="column" grow label="not full width">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" grow label="full width">
        <FullWidthExample />
      </DemoContainer>,
    ],
    description: 'The component can take up the full width of its parent container.',
    title: 'Full Width',
  },
  {
    components: [
      <DemoContainer direction="column" grow label="not invalid">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" grow label="is invalid">
        <InvalidExample />
      </DemoContainer>,
    ],
    description: 'Should we visually indicate to the user that the value is invalid.',
    title: 'Invalid',
  },
  {
    components: [
      <DemoContainer direction="column" grow label="not loading">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" grow label="loading">
        <LoadingExample />
      </DemoContainer>,
    ],
    description: 'Is the select showing a loading indicator.',
    title: 'Loading',
  },
  {
    components: [
      <DemoContainer direction="column" grow label="no placeholder">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" grow label="has a placeholder">
        <PlaceholderExample />
      </DemoContainer>,
    ],
    description: 'The field can have a placeholder.',
    title: 'Placeholder',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'inputs',
  root: 'atoms',
  title: 'Select',
};

export default createStory(Select, config);

export const SelectDocs: Story<SelectProps> = (args) => {
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
      {...args}
    />
  );
}

export const SelectComponent: Story = () => (
  <DesignTemplate config={config} demo={<DefaultExample />} variations={variations} />
);
