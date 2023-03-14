import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { Config, createCustomStory, CustomDesignTemplate } from '@sb/index';
import { ColorsContainer } from './ColorsStoryComponents';
import { colors, shadeColors } from './colors';

// ----- INVOCATION ----- //

const config: Config = {
  folder: 'theme',
  root: 'neutrons',
  title: 'Colors',
};

export default createCustomStory(config);

export const ColorsComponent: React.FC = () => (
  <CustomDesignTemplate config={config}>
    <EuiFlexGroup direction="column">
      <EuiFlexItem grow={false}>
        <ColorsContainer
          colors={[
            { color: colors.primary, name: 'Primary' },
            { color: colors.secondary, name: 'Secondary' },
            { color: colors.accent, name: 'Accent' },
          ]}
          title="Brand Colors"
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <ColorsContainer
          colors={[
            { color: colors.success, name: 'Success' },
            { color: colors.warning, name: 'Warning' },
            { color: colors.danger, name: 'Danger' },
            { color: colors.subdued, name: 'Subdued' },
          ]}
          title="Information Colors"
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <ColorsContainer
          colors={[
            { color: shadeColors.white, name: 'White' },
            { color: shadeColors.lightestGray, name: 'Lightest Gray' },
            { color: shadeColors.lightGray, name: 'Light Gray' },
            { color: shadeColors.gray, name: 'Gray' },
            { color: shadeColors.darkGray, name: 'Dark Gray' },
            { color: shadeColors.darkestGray, name: 'Darkest Gray' },
            { color: shadeColors.black, name: 'Black' },
          ]}
          title="Shades"
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <ColorsContainer
          colors={[
            { color: colors.primary, name: 'Primary' },
            { color: colors.secondary, name: 'Secondary' },
            { color: colors.accent, name: 'Accent' },
            { color: colors.success, name: 'Success' },
            { color: colors.warning, name: 'Warning' },
            { color: colors.danger, name: 'Danger' },
            { color: colors.subdued, name: 'Subdued' },
            { color: colors.black, name: 'Black' },
          ]}
          text
          title="Text"
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  </CustomDesignTemplate>
);
