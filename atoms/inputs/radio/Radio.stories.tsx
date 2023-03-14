import React from 'react';
import { Config, createStory, DesignTemplate, Story, Variations } from '@sb/index';
import { Radio, RadioProps } from './Radio';
import {
  ActiveExample,
  DemoExample,
  DisabledExample,
  LabelExample,
  NoLabelExample,
} from './Radio.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [<ActiveExample />, <DisabledExample />],
    description: 'A radio can either be active or disabled.',
    title: 'Active States',
  },
  {
    components: [<NoLabelExample />, <LabelExample />],
    description: 'A radio can have an optional label.',
    title: 'Label',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'inputs',
  root: 'atoms',
  title: 'Radio',
};

export default createStory(Radio, config);

export const RadioDocs: Story<RadioProps> = (args) => <Radio {...args} />;

export const RadioComponent: Story = () => (
  <DesignTemplate config={config} demo={<DemoExample />} variations={variations} />
);
