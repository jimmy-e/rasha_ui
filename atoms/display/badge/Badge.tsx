import React, { MouseEventHandler, useEffect, useState } from 'react';
import { EuiBadge, EuiText } from '@elastic/eui';
import { BooleanSize, CommonProps, IconName } from '@ui/types';
import { Icon } from '../../../neutrons/icon/Icon';
import { AdditionalProps, BadgeColor } from './Badge.types';
import styles from './Badge.emotion';

export interface BadgeProps extends CommonProps {
  /** The color of the badge */
  color?: BadgeColor;
  /** The name of the icon that should appear with the badge */
  iconName?: IconName;
  /** The label of the badge */
  label: string;
  /** The function invoked when the badge is clicked */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** The size of the badge */
  size?: BooleanSize;
}

export const Badge: React.FC<BadgeProps> = ({
  'data-testid': dataTestId,
  color = 'default',
  iconName,
  label,
  onClick,
  size = 's',
}) => {
  const [additionalProps, setAdditionalProps] = useState<AdditionalProps>({});
  const [finalColor, setFinalColor] = useState<BadgeColor>(color);

  useEffect(() => {
    if (iconName) {
      const iconSize: Record<string, 's' | 'm'> = { s: 's', l: 'm' };
      const finalProps: AdditionalProps = {
        iconType: () => <Icon name={iconName} size={iconSize[size]} />,
        iconSide: 'right',
      };

      setAdditionalProps((prevState) => ({ ...prevState, ...finalProps }));
    }
  }, []);

  const LargeLabel = (
    <EuiText>
      <h3>{label}</h3>
    </EuiText>
  );

  return (
    <EuiBadge
      data-testid={dataTestId || 'ui-atom-display-badge'}
      className={styles.badge(size)}
      color={finalColor === 'white' ? 'hollow' : finalColor}
      iconOnClick={onClick}
      iconOnClickAriaLabel={label}
      onClick={onClick}
      onClickAriaLabel={label}
      {...additionalProps}
    >
      {size === 'l' ? LargeLabel : label}
    </EuiBadge>
  );
};
