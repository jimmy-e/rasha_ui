import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { Badge } from '../../display/badge/Badge';

interface Props {
  badge: string;
  label: string;
}

const SelectBadge: React.FC<Props> = ({ badge, label }) => (
  <EuiFlexGroup alignItems="center" gutterSize="none" justifyContent="spaceBetween">
    <EuiFlexItem grow={false}>
      <EuiText size="s">
        <p>
          {label}
        </p>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <Badge label={badge} />
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default SelectBadge;
