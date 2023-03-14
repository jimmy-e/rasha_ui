import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { CallOut } from './CallOut';
import { Button } from '../../inputs/button/Button';

export const InfoExample: React.FC = () => <CallOut title="Info" type="info" />;
export const SuccessExample: React.FC = () => <CallOut title="Success" type="success" />;
export const WarningExample: React.FC = () => <CallOut title="Warning" type="warning" />;
export const DangerExample: React.FC = () => <CallOut title="Danger" type="danger" />;
export const ReminderExample: React.FC = () => <CallOut title="Reminder" type="reminder" />;

export const ContentExample: React.FC = () => (
  <CallOut title="Sample Content" type="info">
    <EuiFlexGroup direction="column">
      <EuiFlexItem grow={false}>
        <EuiText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <div>
          <Button label="Submit" onClick={() => {}} />
        </div>
      </EuiFlexItem>
    </EuiFlexGroup>
  </CallOut>
);
