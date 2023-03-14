import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { CurrencyField, CurrencyFieldProps } from './CurrencyField';
import {
  DefaultExample,
  DisabledExample,
  FullWidthExample,
  PlaceholderExample,
  PrependedExample,
  ReadOnlyExample,
} from './CurrencyFields.examples';

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
    description: 'A currency field can either be active or disabled.',
    title: 'Active States',
  },
  {
    components: [
      <DemoContainer label="not full width">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="full width">
        <FullWidthExample />
      </DemoContainer>,
    ],
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
      <DemoContainer label="Nothing prepended">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="$">
        <PrependedExample />
      </DemoContainer>,
    ],
    description: 'A value prepended to the field to provide better context.',
    title: 'Prepend',
  },
  {
    components: [
      <DemoContainer label="Not read only">
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
  title: 'Currency Field',
};

export default createStory(CurrencyField, config);

export const CurrencyFieldDocs: Story<CurrencyFieldProps> = (args) => <CurrencyField {...args} />;

export const CurrencyFieldComponent: Story = () => (
  <DesignTemplate config={config} demo={<DefaultExample />} variations={variations} />
);
