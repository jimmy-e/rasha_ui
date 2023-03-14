import React from 'react';
import { Config, createStory, DesignTemplate, Story, Variations } from '@sb/index';
import { Checkbox, CheckboxProps } from './Checkbox';
import {
  ActiveExample,
  DisabledExample,
  NoLabelExample,
  LabelExample,
  DemoExample,
} from './Checkbox.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [<ActiveExample />, <DisabledExample />],
    description: 'A checkbox can either be active or disabled.',
    title: 'Active States',
  },
  {
    components: [<NoLabelExample />, <LabelExample />],
    description: 'A checkbox can have an optional label.',
    title: 'Label',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'inputs',
  root: 'atoms',
  title: 'Checkbox',
};

export default createStory(Checkbox, config);

export const CheckboxDocs: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const CheckboxComponent: Story = () => (
  <DesignTemplate config={config} demo={<DemoExample />} variations={variations} />
);
