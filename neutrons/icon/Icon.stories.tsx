import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { Config, createStory, DemoContainer, DesignTemplate, Story, Variations } from '@sb/index';
import { iconNames } from '@ui/types';
import { Icon, IconProps } from './Icon';
import { customSVGIcons } from './Icon.types';

// ----- CONFIGURATION ----- //

interface DemoProps extends IconProps {
  label?: string;
}

const Demo: React.FC<DemoProps> = ({ color, fill, label, name, size = 'l' }) => {
  if (label) {
    return (
      <DemoContainer label={label}>
        <Icon color={color} fill={fill} name={name} size={size} />
      </DemoContainer>
    );
  }

  return (
    <DemoContainer>
      <EuiFlexGroup alignItems="center" gutterSize="l">
        <EuiFlexItem grow={false}>
          <Icon color={color} fill={fill} name={name} />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText>{name}</EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    </DemoContainer>
  );
};

const config: Config = {
  folder: 'theme',
  root: 'neutrons',
  title: 'Icons',
};

const variations: Variations = [
  {
    components: iconNames.map((name) => <Demo name={name} />),
    description: 'The different types of icons.',
    direction: 'row',
    title: 'Name',
    type: 'grid',
  },
  {
    components: customSVGIcons.map((name) => <Demo name={name} />),
    description: 'A list of custom svg icons that we are currently using.',
    direction: 'row',
    title: 'Custom SVG Icons',
    type: 'grid',
  },
  {
    components: [
      <Demo color="primary" name="checkCircle" label="primary" />,
      <Demo color="secondary" name="checkCircle" label="secondary" />,
      <Demo color="accent" name="checkCircle" label="accent" />,
      <Demo color="success" name="checkCircle" label="success" />,
      <Demo color="warning" name="checkCircle" label="warning" />,
      <Demo color="danger" name="checkCircle" label="danger" />,
      <Demo color="brandGreen" name="checkCircle" label="brand green" />,
      <Demo color="white" name="checkCircle" label="white" />,
      <Demo color="black" name="checkCircle" label="black" />,
    ],
    description: 'The different colors an icon can be.',
    title: 'Color',
  },
  {
    components: [
      <Demo color="black" name="alertTriangle" label="no fill" size="xl" />,
      <Demo color="black" fill="warning" name="alertTriangle" label="has fill" size="xl" />,
    ],
    description: 'The different colors an icon can be.',
    title: 'Fill',
  },
  {
    components: [
      <Demo name="checkCircle" label="x-small (8px)" size="xs"/>,
      <Demo name="checkCircle" label="small (12px)" size="s"/>,
      <Demo name="checkCircle" label="medium (16px)" size="m"/>,
      <Demo name="checkCircle" label="large (24px)" size="l"/>,
      <Demo name="checkCircle" label="x-large (32px)" size="xl"/>,
      <Demo name="checkCircle" label="xx-large (40px)" size="xxl"/>,
    ],
    description: 'The different sizes of an icon.',
    title: 'Size',
  },
];

// ----- INVOCATION ----- //

export default createStory(Icon, config);

export const IconsDocs: Story<IconProps> = (args) => <Icon name="checkCircle" {...args} />;

export const IconsComponent: Story = () => (
  <DesignTemplate config={config} demo={<Icon name="checkCircle"/>} variations={variations} />
);
