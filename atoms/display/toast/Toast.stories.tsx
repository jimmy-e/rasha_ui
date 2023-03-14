import React from 'react';
import { Config, createStory, DesignTemplate, Story, Variations } from '@sb/index';
import Toast from './Toast';
import { ToastProps } from './Toast.types';
import {
  ButtonToast,
  DemoToast,
  DangerToast,
  InfoToast,
  LabelToast,
  NoButtonToast,
  NoLabelToast,
  NonStickyToast,
  StickyToast,
  SuccessToast,
  WarningToast,
} from './Toast.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <InfoToast />,
      <SuccessToast />,
      <WarningToast />,
      <DangerToast />,
    ],
    description: 'The type of toast.',
    dontGrow: true,
    title: 'Type',
  },
  {
    components: [
      <NoLabelToast />,
      <LabelToast />,
    ],
    description: 'A toast can have a label.',
    dontGrow: true,
    title: 'Label',
  },
  {
    components: [
      <NonStickyToast />,
      <StickyToast />,
    ],
    description: 'A toast can be sticky (it can remain in place until being dismissed).',
    dontGrow: true,
    title: 'Sticky',
  },
  {
    components: [
      <NoButtonToast />,
      <ButtonToast />,
    ],
    description: 'A toast can have a button for extra functionality.',
    dontGrow: true,
    title: 'Button',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'display',
  root: 'atoms',
  title: 'Toast',
};

export default createStory(Toast, config);

export const ToastDocs: Story<ToastProps> = (args) => <DemoToast />;

export const ToastComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={<DemoToast />}
    variations={variations}
  />
);
