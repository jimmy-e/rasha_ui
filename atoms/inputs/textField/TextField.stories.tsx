import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { TextField, TextFieldProps } from './TextField';
import {
  DefaultExample,
  DisabledExample,
  NotFullWidthExample,
  FullWidthExample,
  IconExample,
  InvalidExample,
  LoadingExample,
  PlaceholderExample,
  ReadOnlyExample,
} from './TextField.examples';

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
    description: 'A text field can either be active or disabled.',
    title: 'Active States',
  },
  {
    components: [<NotFullWidthExample />, <FullWidthExample />],
    description: 'The component can take up the full width of its parent container.',
    title: 'Full Width',
  },
  {
    components: [
      <DemoContainer label="no icon">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="has an icon">
        <IconExample />
      </DemoContainer>,
    ],
    description: 'A text field that has an icon.',
    title: 'Icon Name',
  },
  {
    components: [
      <DemoContainer label="not invalid">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="is icon">
        <InvalidExample />
      </DemoContainer>,
    ],
    description: 'Should we visually indicate to the user that the value is invalid.',
    title: 'Invalid',
  },
  {
    components: [
      <DemoContainer label="not loading">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="loading">
        <LoadingExample />
      </DemoContainer>,
    ],
    description: 'Is the text field showing a loading indicator.',
    title: 'Loading',
  },
  {
    components: [
      <DemoContainer label="no placeholder">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="has a placeholder">
        <PlaceholderExample />
      </DemoContainer>,
    ],
    description: 'A text field can have a placeholder.',
    title: 'Placeholder',
  },
  {
    components: [
      <DemoContainer label="not read only">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="is read only">
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
  title: 'Text Field',
};

export default createStory(TextField, config);

export const TextFieldDocs: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const TextFieldComponent: Story = () => (
  <DesignTemplate config={config} demo={<DefaultExample />} variations={variations} />
);
