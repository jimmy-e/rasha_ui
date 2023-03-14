import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { ButtonIcon, ButtonIconProps } from './ButtonIcon';
import {
  DefaultExample,
  DisabledExample,
  BorderExample,
  PrimaryExample,
  SecondaryExample,
  AccentExample,
  SuccessExample,
  WarningExample,
  DangerExample,
  TextExample,
  GhostExample,
  BrandGreenExample,
  HrefExample,
  LoadingExample,
  LargeExample,
  MediumExample,
  SmallExample,
} from './ButtonIcon.examples';

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
    description: 'A button can either be active or disabled.',
    dontGrow: true,
    title: 'Active States',
  },
  {
    components: [
      <DemoContainer label="no border">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="has border">
        <BorderExample />
      </DemoContainer>,
    ],
    description: 'Does the button have a border.',
    dontGrow: true,
    title: 'Border',
  },
  {
    components: [
      <DemoContainer label="primary">
        <PrimaryExample />
      </DemoContainer>,
      <DemoContainer label="secondary">
        <SecondaryExample />
      </DemoContainer>,
      <DemoContainer label="accent">
        <AccentExample />
      </DemoContainer>,
      <DemoContainer label="success">
        <SuccessExample />
      </DemoContainer>,
      <DemoContainer label="warning">
        <WarningExample />
      </DemoContainer>,
      <DemoContainer label="danger">
        <DangerExample />
      </DemoContainer>,
      <DemoContainer label="text">
        <TextExample />
      </DemoContainer>,
      <DemoContainer label="Ghost">
        <GhostExample />
      </DemoContainer>,
      <DemoContainer label="brand green">
        <BrandGreenExample />
      </DemoContainer>,
    ],
    description: 'The button\'s color.',
    dontGrow: true,
    title: 'Color',
  },
  {
    components: [
      <DemoContainer label="no href">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="has href">
        <HrefExample />
      </DemoContainer>,
    ],
    description: 'A link that, if provided, is opened when clicking the button.',
    dontGrow: true,
    title: 'Href',
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
    description: 'Is the button showing a loading indicator.',
    dontGrow: true,
    title: 'Loading',
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
    description: 'The size of a button.',
    dontGrow: true,
    title: 'Size',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'inputs',
  root: 'atoms',
  title: 'Button Icon',
};

export default createStory(ButtonIcon, config);

export const ButtonIconDocs: Story<ButtonIconProps> = (args) => <ButtonIcon iconName="download" {...args} />;

export const ButtonIconComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={<ButtonIcon iconName="download" />}
    variations={variations}
  />
);
