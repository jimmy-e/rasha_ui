import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { Tabs } from './Tabs';
import { Spacer } from '../../layout/spacer/Spacer';
import { Button } from '../../inputs/button/Button';
import { CallOut } from '../../display/callOut/CallOut';
import { Spinner } from '../../display/spinner/Spinner';

export const sampleTabs = [
  {
    id: 'home',
    label: 'Home',
    content: (
      <EuiFlexGroup direction="column">
        <EuiFlexItem grow={false}>
          <Spacer size="m" />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText>
            <h1>Home Page</h1>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <div>
            <Button label="Submit" />
          </div>
        </EuiFlexItem>
      </EuiFlexGroup>
    ),
  },
  {
    id: 'user',
    label: 'User',
    content: (
      <EuiFlexGroup direction="column">
        <EuiFlexItem grow={false}>
          <Spacer size="m" />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText>
            <h1>User Page</h1>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <CallOut title="Lorem ipsum dolor sit amet" />
        </EuiFlexItem>
      </EuiFlexGroup>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    content: (
      <EuiFlexGroup direction="column">
        <EuiFlexItem grow={false}>
          <Spacer size="m" />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText>
            <h1>Settings</h1>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <Spinner size="xl" />
        </EuiFlexItem>
      </EuiFlexGroup>
    ),
  },
];

export const DefaultExample: React.FC = () => <Tabs tabs={sampleTabs} />;

export const SmallExample: React.FC = () => <Tabs size="s" tabs={sampleTabs} />;
