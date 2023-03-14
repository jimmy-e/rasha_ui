import React from 'react';
import { Config, createStory, DesignTemplate, Story, Variations } from '@sb/index';
import { Toggle, ToggleProps } from './Toggle';
import {
  ActiveExample,
  DisabledExample,
  NoLabelExample,
  LabelExample,
  LargeExample,
  SmallExample,
  DemoExample,
} from './Toggle.examples'

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [<ActiveExample />, <DisabledExample />],
    description: 'A toggle can either be active or disabled.',
    title: 'Active States',
  },
  {
    components: [<NoLabelExample />, <LabelExample />],
    description: 'A toggle can have an optional label.',
    title: 'Label',
  },
  {
    components: [<LargeExample />, <SmallExample />],
    description: 'A toggle can either be large or small.',
    title: 'Size',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'inputs',
  root: 'atoms',
  title: 'Toggle',
  usage: {
    donts: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Duis aute irure dolor in reprehenderit',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit' +
      ' anim id est laborum.',
    ],
    dos: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Duis aute irure dolor in reprehenderit',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit' +
      ' anim id est laborum.',
    ],
  },
};

export default createStory(Toggle, config);

export const ToggleDocs: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const ToggleComponent: Story = () => (
  <DesignTemplate config={config} demo={<DemoExample />} variations={variations} />
);
