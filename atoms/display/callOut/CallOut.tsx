import React from 'react';
import { EuiCallOut } from '@elastic/eui';
import { CommonProps } from '@ui/types';
import styles from './CallOut.emotion';
import { CallOutType } from './CallOut.types';
import { Icon } from '../../../neutrons/icon/Icon';
import { colorList, iconNameList } from './CallOut.utils';

export interface CalloutProps extends CommonProps {
  /** The title of the callout */
  title: string;
  /** The type of callout */
  type?: CallOutType;
}

export const CallOut: React.FC<CalloutProps> = ({
  'data-testid': dataTestId,
  children,
  title,
  type = 'info'
}) => (
  <EuiCallOut
    data-testid={dataTestId || 'ui-atom-display-call-out'}
    className={styles.callOut}
    color={colorList[type]}
    iconType={() => <Icon color={colorList[type]} name={iconNameList[type]} />}
    title={title}
  >
    {children}
  </EuiCallOut>
);
