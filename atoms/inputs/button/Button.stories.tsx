import React from 'react';
import { Config, createStory, DesignTemplate, Story, Variations } from '../../../../.storybook';
import { Button, ButtonProps } from './Button';
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
  FillExample,
  NoFillExample,
  NoHrefExample,
  HrefExample,
  NoIconExample,
  IconExample,
  LeftIconExample,
  RightIconExample,
  NotLoadingExample,
  LoadingExample,
  LargeExample,
  SmallExample,
  DefaultShapeExample,
  OvalShapeExample,
} from './Button.examples';

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
    components: [<FillExample />, <NoFillExample />],
    description: 'A button can have a solid fill or not.',
    dontGrow: true,
    title: 'Fill',
  },
  {
    components: [<NoHrefExample />, <HrefExample />],
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
    components: [<LargeExample />, <SmallExample />],
    description: 'The size of a button.',
    dontGrow: true,
    title: 'Size',
  },
  {
    components: [<DefaultShapeExample />, <OvalShapeExample />],
    description: 'The button can also be an oval shape.',
    dontGrow: true,
    title: 'Shape',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'inputs',
  root: 'atoms',
  title: 'Button',
};

export default createStory(Button, config);

export const ButtonDocs: Story<ButtonProps> = (args) => <Button label="Button" {...args} />;

export const ButtonComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={<Button label="Button" />}
    variations={variations}
  />
);
