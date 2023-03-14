import React, { MouseEventHandler, useState, useEffect } from 'react';
import { EuiButtonIcon } from '@elastic/eui';
import { ButtonColor, CommonProps, IconName, Size, SizeXXL } from '@ui/types';
import { Icon } from '../../../neutrons/icon/Icon';
import { Spinner } from '../../../atoms/display/spinner/Spinner';
import {
  AdditionalProps,
  EuiAcceptableButtonIconColors,
  EuiButtonIconSize,
  euiAcceptableButtonIconColors,
} from './ButtonIcon.types';
import styles from './ButtonIcon.emotion';

export interface ButtonIconProps extends CommonProps {
  /** Does the button have a border */
  border?: boolean;
  /** The button color */
  color?: ButtonColor;
  /** Is the button disabled */
  disabled?: boolean;
  /** A url link that is opened if the button is clicked */
  href?: string;
  /** The name of the icon that should appear with the button */
  iconName: IconName;
  /** Is the button showing a loading indicator */
  loading?: boolean;
  /** The function invoked when the button is clicked */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** The size of the button */
  size?: Size;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  'data-testid': dataTestId,
  border = false,
  color = 'primary',
  disabled,
  href,
  iconName,
  loading,
  onClick,
  size = 's',
}) => {
  const [additionalProps, setAdditionalProps] = useState<AdditionalProps>({});

  useEffect(() => {
    if (href) {
      const finalProps = {
        href,
        target: '_blank',
      };

      setAdditionalProps((prevState) => ({ ...prevState, ...finalProps }));
    }
  }, []);

  const finalSize: Record<Size, EuiButtonIconSize> = {
    l: 'm',
    m: 's',
    s: 'xs',
  };

  const iconSize: Record<Size, SizeXXL> = {
    l: 'xl',
    m: 'l',
    s: 'm',
  };

  const colorIsAccepted = euiAcceptableButtonIconColors.includes(color);
  const finalColor = colorIsAccepted ? color as EuiAcceptableButtonIconColors : 'primary';
  const buttonIconClassName = !colorIsAccepted ? styles.buttonIconColor(color) : undefined;

  return (
    <EuiButtonIcon
      data-testid={dataTestId || 'ui-atom-input-button-empty'}
      className={buttonIconClassName}
      color={finalColor}
      display={border ? 'base' : undefined}
      iconType={() => loading ? <Spinner size={iconSize[size]} /> : <Icon name={iconName} size={iconSize[size]} />}
      isDisabled={disabled || loading}
      onClick={onClick}
      size={finalSize[size]}
      {...additionalProps}
    />
  );
};
