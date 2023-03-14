import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { CallOut, CalloutProps } from './CallOut';
import {
  InfoExample,
  SuccessExample,
  WarningExample,
  DangerExample,
  ReminderExample,
  ContentExample,
} from './CallOut.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <DemoContainer>
        <InfoExample />
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
      <DemoContainer>
        <ReminderExample />
      </DemoContainer>,
    ],
    description: 'A call out can have different types.',
    title: 'Types',
  },
  {
    components: [
      <DemoContainer>
        <ContentExample />
      </DemoContainer>,
    ],
    description: 'A call out can content inside of it.',
    title: 'Content',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'display',
  root: 'atoms',
  title: 'Call Out',
};

export default createStory(CallOut, config);

export const CallOutDocs: Story<CalloutProps> = (args) => <CallOut title="Sample Title" {...args} />;

export const CallOutComponent: Story = () => (
  <DesignTemplate config={config} demo={<CallOut title="Sample Title"/>} variations={variations} />
);
