import React, { useState } from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { IntegerField, IntegerFieldProps } from './IntegerField';
import {
  DefaultExample,
  DisabledExample,
  NotFullWidthExample,
  FullWidthExample,
  PlaceholderExample,
  ReadOnlyExample,
} from './IntegerField.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <DemoContainer label="active">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="disabled">
        <DisabledExample />
      </DemoContainer>,
    ],
    description: 'An integer field can either be active or disabled.',
    title: 'Active States',
  },
  {
    components: [<NotFullWidthExample />, <FullWidthExample />],
    description: 'The component can take up the full width of its parent container.',
    title: 'Full Width',
  },
  {
    components: [
      <DemoContainer label="no placeholder">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="has placeholder">
        <PlaceholderExample />
      </DemoContainer>,
    ],
    description: 'The field can have a placeholder.',
    title: 'Placeholder',
  },
  {
    components: [
      <DemoContainer label="not read only">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="read only">
        <ReadOnlyExample />
      </DemoContainer>,
    ],
    description: 'Is the component in read only mode.',
    title: 'Read Only',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'inputs',
  root: 'atoms',
  title: 'Integer Field',
};

export default createStory(IntegerField, config);

export const IntegerFieldDocs: Story<IntegerFieldProps> = (args) => <IntegerField {...args} />;

export const IntegerFieldComponent: Story = () => (
  <DesignTemplate config={config} demo={<DefaultExample />} variations={variations} />
);
