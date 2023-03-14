import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '../../../../.storybook';
import { ContextMenu, ContextMenuProps } from './ContextMenu';
import {
  AnchorExample,
  DefaultExample,
  DemoExample,
  IconsExample,
  MultiplePanelsExample,
  TitleExample,
  TypeExample,
} from './ContextMenu.examples';

// ----- DEMO WRAPPER ----- //

interface DemoProps {
  label?: string;
}

const Demo: React.FC<DemoProps> = ({ children, label }) => (
  <DemoContainer label={label}>
    {children}
  </DemoContainer>
);

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <Demo label="no icons">
        <DefaultExample />
      </Demo>,
      <Demo label="has icons">
        <IconsExample />
      </Demo>,
    ],
    description: 'The items in the context menu can have icons.',
    title: 'Icons',
  },
  {
    components: [
      <Demo>
        <MultiplePanelsExample />
      </Demo>,
    ],
    description: 'The menu can have multiple panels for more complex navigation.',
    title: 'Multiple panels',
  },
  {
    components: [
      <Demo label="no title">
        <DefaultExample />
      </Demo>,
      <Demo label="has title">
        <TitleExample />
      </Demo>,
    ],
    description: 'The menu can have a title.',
    title: 'Title',
  },
  {
    components: [
      <Demo>
        <TypeExample />
      </Demo>,
    ],
    description: 'The items in the context menu can have different types.',
    title: 'Type',
  },
  {
    components: [
      <AnchorExample anchorPosition="downLeft" />,
      <AnchorExample anchorPosition="downCenter" />,
      <AnchorExample anchorPosition="downRight" />,
      <AnchorExample anchorPosition="upLeft" />,
      <AnchorExample anchorPosition="upCenter" />,
      <AnchorExample anchorPosition="upRight" />,
      <AnchorExample anchorPosition="leftUp" />,
      <AnchorExample anchorPosition="leftCenter" />,
      <AnchorExample anchorPosition="leftDown" />,
      <AnchorExample anchorPosition="rightUp" />,
      <AnchorExample anchorPosition="rightCenter" />,
      <AnchorExample anchorPosition="rightDown" />,
    ],
    description: 'The anchor position of the menu.',
    title: 'Anchor Position',
    direction: 'row',
    type: 'grid',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'display',
  root: 'atoms',
  title: 'Context Menu',
};

export default createStory(ContextMenu, config);

export const ContextMenuDocs: Story<ContextMenuProps> = (args) => <DemoExample {...args} />;

export const ContextMenuComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={
      <Demo>
        <DemoExample />
      </Demo>
    }
    variations={variations}
  />
);
