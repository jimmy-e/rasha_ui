import React from 'react';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { YearField, YearFieldProps } from './YearField';
import {
  DefaultExample,
  NotFullWidthExample,
  FullWidthExample,
  PlaceholderExample,
} from './YearField.examples';

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [<NotFullWidthExample />, <FullWidthExample />],
    description: 'The component can take up the full width of its parent container.',
    title: 'Full Width',
  },
  {
    components: [
      <DemoContainer label="no placeholder">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer label="has placeholder">
        <PlaceholderExample />
      </DemoContainer>,
    ],
    description: 'The field can have a placeholder.',
    title: 'Placeholder',
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'inputs',
  root: 'atoms',
  title: 'Year Field',
};

export default createStory(YearField, config);

export const YearFieldDocs: Story<YearFieldProps> = (args) => <YearField {...args} />;

export const YearFieldComponent: Story = () => (
  <DesignTemplate config={config} demo={<DefaultExample />} variations={variations} />
);
