import React from 'react';
import { Config, createStory, DesignTemplate, Story, Variations } from '@sb/index';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { Spacer, SpacerProps } from './Spacer';
import {
  XSmallExample,
  SmallExample,
  MediumExample,
  LargeExample,
  XLargeExample,
  XXLargeExample,
} from './Spacer.examples';
import styles from './Spacer.stories.emotion';

// ----- WRAPPER ----- //

interface Props {
  label?: string;
}

const Demo: React.FC<Props> = ({ children, label }) => (
  <EuiFlexGroup alignItems="center">
    {label && (
      <EuiFlexItem className={styles.labelContainer} grow={false}>
        {label}
      </EuiFlexItem>
    )}
    <EuiFlexItem className={styles.spacerContainer}>
      {children}
    </EuiFlexItem>
  </EuiFlexGroup>
);

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <Demo label="x-small (4px)">
        <XSmallExample />
      </Demo>,
      <Demo label="small (8px)" size='s'>
        <SmallExample />
      </Demo>,
      <Demo label="medium (16px)">
        <MediumExample />
      </Demo>,
      <Demo label="large (24px)">
        <LargeExample />
      </Demo>,
      <Demo label="x-large (32px)">
        <XLargeExample />
      </Demo>,
      <Demo label="xx-large (40px)">
        <XXLargeExample />
      </Demo>,
    ],
    description: 'The size of the spacer.',
    title: 'Size',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'layout',
  root: 'atoms',
  title: 'Spacer',
};

export default createStory(Spacer, config);

export const SpacerDocs: Story<SpacerProps> = (args) => <Spacer {...args} />;

export const SpacerComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={
      <Demo>
        <LargeExample />
      </Demo>
    }
    variations={variations}
  />
);
