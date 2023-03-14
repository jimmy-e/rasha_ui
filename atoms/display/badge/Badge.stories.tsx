import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { Badge, BadgeProps } from './Badge';
import {
  AccentExample,
  ClickExample,
  DangerExample,
  DefaultExample,
  LargeExample,
  LargeIconExample,
  NoClickExample,
  NoIconExample,
  PrimaryExample,
  SecondaryExample,
  SmallExample,
  SmallIconExample,
  SuccessExample,
  WarningExample,
  WhiteExample,
} from './Badge.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <DemoContainer>
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer>
        <WhiteExample />
      </DemoContainer>,
      <DemoContainer>
        <PrimaryExample />
      </DemoContainer>,
      <DemoContainer>
        <SecondaryExample />
      </DemoContainer>,
      <DemoContainer>
        <AccentExample />
      </DemoContainer>,
      <DemoContainer>
        <SuccessExample />
      </DemoContainer>,
      <DemoContainer>
        <WarningExample />
      </DemoContainer>,
      <DemoContainer>
        <DangerExample />
      </DemoContainer>,
    ],
    description: 'A badge can have different colors.',
    dontGrow: true,
    title: 'Colors',
  },
  {
    components: [
      <DemoContainer>
        <NoIconExample />
      </DemoContainer>,
      <DemoContainer>
        <SmallIconExample />
      </DemoContainer>,
      <DemoContainer>
        <LargeIconExample />
      </DemoContainer>,
    ],
    description: 'Does the badge have an icon.',
    dontGrow: true,
    title: 'Icon',
  },
  {
    components: [
      <DemoContainer>
        <SmallExample />
      </DemoContainer>,
      <DemoContainer>
        <LargeExample />
      </DemoContainer>,
    ],
    description: 'The size of the badge.',
    dontGrow: true,
    title: 'Size',
  },
  {
    components: [
      <DemoContainer>
        <NoClickExample />
      </DemoContainer>,
      <DemoContainer>
        <ClickExample />
      </DemoContainer>,
    ],
    description: 'Badge with onClick events.',
    dontGrow: true,
    title: 'Size',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'display',
  root: 'atoms',
  title: 'Badge',
};

export default createStory(Badge, config);

export const BadgeDocs: Story<BadgeProps> = (args) => <Badge label="sample label" {...args} />;

export const BadgeComponent: Story = () => (
  <DesignTemplate config={config} demo={<Badge label="sample label"/>} variations={variations} />
);
