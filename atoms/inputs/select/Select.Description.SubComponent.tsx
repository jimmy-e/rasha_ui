import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';

interface Props {
  description: string;
  label: string;
}

const SelectDescription: React.FC<Props> = ({ description, label }) => (
  <EuiFlexGroup direction="column" gutterSize="none">
    <EuiFlexItem grow={false}>
      <EuiText size="s">
        <p>
          <b>
            {label}
          </b>
        </p>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiText size="s">
        <p>
          {description}
        </p>
      </EuiText>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default SelectDescription;
