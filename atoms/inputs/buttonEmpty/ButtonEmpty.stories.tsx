import React from 'react';
import { Config, createStory, DesignTemplate, Story, Variations } from '../../../../.storybook';
import { ButtonEmpty, ButtonEmptyProps } from './ButtonEmpty';
import {
  ActiveExample,
  DisabledExample,
  PrimaryExample,
  SecondaryExample,
  AccentExample,
  SuccessExample,
  WarningExample,
  DangerExample,
  TextExample,
  GhostExample,
  BrandGreenExample,
  NoFlushExample,
  FlushLeftExample,
  FlushRightExample,
  FlushBothExample,
  NoHrefExample,
  HrefExample,
  NoIconExample,
  IconExample,
  LeftIconExample,
  RightIconExample,
  NotLoadingExample,
  LoadingExample,
  LargeExample,
  MediumExample,
  SmallExample,
} from './ButtonEmpty.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [<ActiveExample />, <DisabledExample />],
    description: 'A button can either be active or disabled.',
    dontGrow: true,
    title: 'Active States',
  },
  {
    components: [
      <PrimaryExample />,
      <SecondaryExample />,
      <AccentExample />,
      <SuccessExample />,
      <WarningExample />,
      <DangerExample />,
      <TextExample />,
      <GhostExample />,
      <BrandGreenExample />,
    ],
    description: 'The button\'s color.',
    dontGrow: true,
    title: 'Color',
  },
  {
    components: [
      <NoFlushExample />,
      <FlushLeftExample />,
      <FlushRightExample />,
      <FlushBothExample />,
    ],
    description: 'This makes sure that the button is flush with the edge of the container, so that it is horizontally'
    + ' aligned with other content in the container.',
    dontGrow: true,
    title: 'Flush',
  },
  {
    components: [
      <NoHrefExample />,
      <HrefExample />,
    ],
    description: 'A link that, if provided, is opened when clicking the button.',
    dontGrow: true,
    title: 'Href',
  },
  {
    components: [<NoIconExample />, <IconExample />],
    description: 'Buttons can also have icons.',
    dontGrow: true,
    title: 'Icon',
  },
  {
    components: [<LeftIconExample />, <RightIconExample />],
    description: 'The side of the label that the icon appears on.',
    dontGrow: true,
    title: 'Icon Side',
  },
  {
    components: [<NotLoadingExample />, <LoadingExample />],
    description: 'Is the button showing a loading indicator.',
    dontGrow: true,
    title: 'Loading',
  },
  {
    components: [
      <LargeExample />,
      <MediumExample />,
      <SmallExample />,
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
  title: 'Button Empty',
};

export default createStory(ButtonEmpty, config);

export const ButtonEmptyDocs: Story<ButtonEmptyProps> = (args) => <ButtonEmpty label="Button Empty" {...args} />;

export const ButtonEmptyComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={<ButtonEmpty label="Button Empty" />}
    variations={variations}
  />
);
