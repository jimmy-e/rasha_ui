import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { MultiSelect, MultiSelectProps } from './MultiSelect';
import {
  CreateCustomExample,
  DisabledExample,
  DefaultExample,
  FullWidthExample,
  InvalidExample,
  NoSuggestionsExample,
  PlaceholderExample,
  sampleOptions,
} from './MultiSelect.examples';

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
      <DemoContainer direction="column" label="cannot create custom option">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" label="can create custom option">
        <CreateCustomExample />
      </DemoContainer>,
    ],
    description: 'You can allow the user to create their own custom option by typing it into the field.',
    title: 'Create Custom Option',
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
      <DemoContainer direction="column" label="has suggestions">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" label="no suggestions">
        <NoSuggestionsExample />
      </DemoContainer>,
    ],
    description: 'Doesn\'t show the suggestions list / dropdown',
    title: 'No suggestions',
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
  title: 'MultiSelect',
};

export default createStory(MultiSelect, config);

export const MultiSelectDocs: Story<MultiSelectProps> = (args) => (
  <MultiSelect onChange={() => {}} options={sampleOptions} {...args}/>
);

export const MultiSelectComponent: Story = () => (
  <DesignTemplate config={config} demo={<DefaultExample />} variations={variations} />
);
