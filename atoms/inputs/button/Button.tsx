import React, { AnchorHTMLAttributes, MouseEventHandler, useEffect, useState } from 'react';
import { EuiButton } from '@elastic/eui';
import { ButtonColor, ButtonType, BooleanSize, CommonProps, IconName, Side } from '@ui/types';
import { Icon } from '../../../neutrons/icon/Icon';
import { AdditionalProps } from './Button.types';
import styles from './Button.emotion';

export interface ButtonProps extends CommonProps {
  /** data-tourid used for stream tour */
  'data-tourid'?: string;
  /** The button color */
  color?: ButtonColor;
  /** Is the button disabled */
  disabled?: boolean;
  /** The button's download html attribute */
  download?: AnchorHTMLAttributes<any>['download'];
  /** Is the button filled */
  fill?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** A url link that is opened if the button is clicked */
  href?: string;
  /** The name of the icon that should appear with the button */
  iconName?: IconName;
  /** The side of the label that the icon appears */
  iconSide?: Side;
  /** The label of the button */
  label: string;
  /** Is the button showing a loading indicator */
  loading?: boolean;
  /** The function invoked when the button is clicked */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** The shape of button */
  shape?: 'default' | 'oval';
  /** The size of the button */
  size?: BooleanSize;
  /** The type of button */
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  'data-testid': dataTestId,
  'data-tourid': dataTourId,
  color = 'primary',
  disabled,
  download,
  fill,
  fullWidth = false,
  href,
  iconName,
  iconSide = 'left',
  label,
  loading = false,
  onClick,
  shape = 'default',
  size = 'l',
  type = undefined,
}) => {
  const [additionalProps, setAdditionalProps] = useState<AdditionalProps>({});

  useEffect(() => {
    const finalProps: Partial<AdditionalProps> = {};

    if (download) {
      finalProps.download = download;
    }

    if (href) {
      finalProps.href = href;
      finalProps.target = '_blank';
    }

    if (iconName) {
      finalProps.iconType = () => <Icon name={iconName} />;
      finalProps.iconSide = iconSide;
    }

    setAdditionalProps((prevState) => ({ ...prevState, ...finalProps }));
  }, []);

  return (
    <EuiButton
      data-testid={dataTestId || 'ui-atom-input-button'}
      data-tourid={dataTourId}
      className={[
        color === 'brandGreen' ? styles.brandGreen(fill) : undefined,
        shape === 'oval' ? styles.oval : undefined,
      ].join(' ')}
      color={color === 'brandGreen' ? 'primary' : color}
      disabled={disabled}
      fill={fill}
      fullWidth={fullWidth}
      onClick={onClick}
      size={size === 'l' ? 'm' : size}
      isLoading={loading}
      type={type}
      {...additionalProps}
    >
      {label}
    </EuiButton>
  );
};
