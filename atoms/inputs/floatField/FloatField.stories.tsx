import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { FloatField, FloatFieldProps } from './FloatField';
import {
  DefaultExample,
  DisabledExample,
  PercentExample,
  FeetExample,
  MetersExample,
  NotFullWidthExample,
  FullWidthExample,
  PlaceholderExample,
  ReadOnlyExample,
} from './FloatField.examples';

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
    description: 'A float field can either be active or disabled.',
    title: 'Active States',
  },
  {
    components: [
      <DemoContainer label="nothing appended">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="%">
        <PercentExample />
      </DemoContainer>,
      <DemoContainer label="ft²">
        <FeetExample />
      </DemoContainer>,
      <DemoContainer label="m²">
        <MetersExample />
      </DemoContainer>,
    ],
    description: 'A value appended to the field to provide better context.',
    title: 'Append',
  },
  {
    components: [
      <DemoContainer>
        <NotFullWidthExample />
      </DemoContainer>,
      <DemoContainer>
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
  title: 'Float Field',
};

export default createStory(FloatField, config);

export const FloatFieldDocs: Story<FloatFieldProps> = (args) => <FloatField {...args} />;

export const FloatFieldComponent: Story = () => (
  <DesignTemplate config={config} demo={<DefaultExample />} variations={variations} />
);
