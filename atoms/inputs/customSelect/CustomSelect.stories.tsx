import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { CustomSelect, CustomSelectProps } from './CustomSelect';
import {
  DisabledExample,
  DefaultExample,
  FullWidthExample,
  InvalidExample,
  PlaceholderExample,
  sampleOptions,
} from './CustomSelect.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <DemoContainer direction="column" label="not disabled">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" label="disabled">
        <DisabledExample />
      </DemoContainer>,
    ],
    description: 'The component can either be active or disabled.',
    title: 'Active States',
  },
  {
    components: [
      <DemoContainer direction="column" label="not full width">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" label="full width">
        <FullWidthExample />
      </DemoContainer>,
    ],
    description: 'The component can take up the full width of its parent container.',
    title: 'Full Width',
  },
  {
    components: [
      <DemoContainer direction="column" label="not invalid">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" label="invalid">
        <InvalidExample />
      </DemoContainer>,
    ],
    description: 'Should we visually indicate to the user that the value is invalid.',
    title: 'Invalid',
  },
  {
    components: [
      <DemoContainer direction="column" label="no placeholder">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" label="has a placeholder">
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
  title: 'CustomSelect',
};

export default createStory(CustomSelect, config);

export const CustomSelectDocs: Story<CustomSelectProps> = (args) => (
  <CustomSelect
    onChange={() => {}}
    onCreateOption={() => {}}
    options={sampleOptions}
    {...args}
  />
);

export const CustomSelectComponent: Story = () => (
  <DesignTemplate config={config} demo={<DefaultExample />} variations={variations} />
);
