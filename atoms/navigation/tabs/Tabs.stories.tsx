import React from 'react';
import { Config, createStory, DesignTemplate, Story, Variations } from '@sb/index';
import { Tabs, TabsProps } from './Tabs';
import { DefaultExample, SmallExample, sampleTabs } from './Tabs.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [<DefaultExample />, <SmallExample />],
    description: 'The size of the tabs.',
    title: 'Size',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'navigation',
  root: 'atoms',
  title: 'Tabs',
};

export default createStory(Tabs, config);

export const TabsDocs: Story<TabsProps> = (args) => <Tabs tabs={sampleTabs} {...args} />;

export const TabsComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={<DefaultExample />}
    variations={variations}
  />
);
