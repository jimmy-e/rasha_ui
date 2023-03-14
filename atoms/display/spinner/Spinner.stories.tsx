import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { Spinner, SpinnerProps } from './Spinner';
import {
  SmallExample,
  MediumExample,
  LargeExample,
  XLargeExample,
  XXLargeExample,
} from './Spinner.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <DemoContainer label="small (8px)">
        <SmallExample />
      </DemoContainer>,
      <DemoContainer label="medium (16px)">
        <MediumExample />
      </DemoContainer>,
      <DemoContainer label="large (24px)">
        <LargeExample />
      </DemoContainer>,
      <DemoContainer label="x-large (32px)">
        <XLargeExample />
      </DemoContainer>,
      <DemoContainer label="xx-large (64px)">
        <XXLargeExample />
      </DemoContainer>,
    ],
    description: 'A spinner can have various sizes.',
    title: 'Sizes',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'display',
  root: 'atoms',
  title: 'Spinner',
};

export default createStory(Spinner, config);

export const SpinnerDocs: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const SpinnerComponent: Story = () => (
  <DesignTemplate config={config} demo={<Spinner />} variations={variations} />
);
