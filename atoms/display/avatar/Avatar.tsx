import React from 'react';
import { EuiAvatar, EuiAvatarProps } from '@elastic/eui';
import { CommonProps } from '@ui/types';
import styles from './Avatar.emotion';

export interface AvatarProps extends CommonProps {
  /** Name of the avatar for the title attribute and creating the initials */
  name: string;
  /** Function invoked when the avatar is clicked */
  onClick?: EuiAvatarProps['onClick'];
  /** Shape of the avatar */
  shape?: 'circle' | 'square';
}

export const Avatar: React.FC<AvatarProps> = ({
  'data-testid': dataTestId,
  name,
  onClick,
  shape = 'circle',
}) => (
  <EuiAvatar
    data-testid={dataTestId || 'ui-atom-display-avatar'}
    className={styles.avatar}
    name={name}
    onClick={onClick}
    size='s'
    type={shape === 'circle' ? 'user' : 'space'}
  />
);
