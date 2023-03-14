import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { Avatar, AvatarProps } from './Avatar';
import { CircleExample, NameExampleAcme, NameExampleJohnSmith, SquareExample } from './Avatar.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <DemoContainer label="Acme">
        <NameExampleAcme />
      </DemoContainer>,
      <DemoContainer label="John Smith">
        <NameExampleJohnSmith />
      </DemoContainer>,
    ],
    description: "The name / initials for an avatar.",
    title: "Name",
  },
  {
    components: [
      <DemoContainer label="circle">
        <CircleExample />
      </DemoContainer>,
      <DemoContainer label="square">
        <SquareExample />
      </DemoContainer>,
    ],
    description: "The shape of an avatar.",
    title: "Shape",
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'display',
  root: 'atoms',
  title: 'Avatar',
};

export default createStory(Avatar, config);

export const AvatarDocs: Story<AvatarProps> = (args) => <Avatar name="Acme" {...args} />;

export const AvatarComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={<NameExampleAcme />}
    variations={variations}
  />
);
