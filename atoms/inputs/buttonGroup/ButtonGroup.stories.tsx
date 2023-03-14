import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '../../../../.storybook';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import {
  DemoExample,
  NotFullWidthExample,
  FullWidthExample,
  NoIconsExample,
  IconsExample,
  IconsOnlyExample,
  LargeExample,
  MediumExample,
  SmallExample,
} from './ButtonGroup.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <DemoContainer direction="column" label="not full width">
        <NotFullWidthExample />
      </DemoContainer>,
      <DemoContainer direction="column" fullWidth label="full width">
        <FullWidthExample />
      </DemoContainer>,
    ],
    description: 'The component can take up the full width of its parent container.',
    title: 'Full Width',
  },
  {
    components: [
      <DemoContainer label="no icons">
        <NoIconsExample />
      </DemoContainer>,
      <DemoContainer label="has icons">
        <IconsExample />
      </DemoContainer>,
      <DemoContainer label="icons only">
        <IconsOnlyExample />
      </DemoContainer>,
    ],
    description: 'The buttons can also have icons.',
    title: 'Icons',
  },
  {
    components: [
      <DemoContainer label="large">
        <LargeExample />
      </DemoContainer>,
      <DemoContainer label="medium">
        <MediumExample />
      </DemoContainer>,
      <DemoContainer label="small">
        <SmallExample />
      </DemoContainer>,
    ],
    description: 'The size of the buttons in the group.',
    title: 'Size',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'inputs',
  root: 'atoms',
  title: 'Button Group',
};

export default createStory(ButtonGroup, config);

export const ButtonGroupDocs: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup
    legend="button-group-story"
    idSelected="1"
    options={[
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ]}
    {...args}
  />
);

export const ButtonGroupComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={<DemoExample />}
    variations={variations}
  />
);
