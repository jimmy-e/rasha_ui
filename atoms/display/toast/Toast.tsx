import React from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiToast,
  useEuiTheme,
} from '@elastic/eui';
import { Button } from '../../inputs/button/Button';
import { ButtonIcon } from '../../inputs/buttonIcon/ButtonIcon';
import { Icon } from '../../../neutrons/icon/Icon';
import { ToastProps } from './Toast.types';
import { IconName, StatusType } from '@ui/types';
import styles from './Toast.emotion';

interface Props extends ToastProps {
  onRemove: () => void;
}

const Toast: React.FC<Props> = ({
  'data-testid': dataTestId,
  buttonLabel,
  label,
  onClick,
  onRemove,
  sticky = false,
  title,
  type = 'info',
}) => {
  const { euiTheme } = useEuiTheme();

  const toastColor = type === 'info' ? 'primary' : type;

  const iconName: Record<StatusType, IconName> = {
    danger: 'alertTriangle',
    info: 'info',
    success: 'check',
    warning: 'alertTriangle',
  };

  return (
    <EuiToast
      data-testid={dataTestId || 'ui-atom-display-toast'}
      className={styles.toast(euiTheme.animation)}
      color={toastColor}
      iconType={() => <Icon color={toastColor} name={iconName[type]} />}
      title={
        <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
          <EuiFlexItem grow>
            <EuiText>
              <h4>
                {title}
              </h4>
            </EuiText>
          </EuiFlexItem>
          {buttonLabel && onClick && (
            <EuiFlexItem grow={false}>
              <Button color={toastColor} label={buttonLabel} onClick={onClick} />
            </EuiFlexItem>
          )}
          {sticky && (
            <EuiFlexItem grow={false}>
              <ButtonIcon
                color={toastColor}
                onClick={onRemove}
                iconName="x"
                aria-label="Close"
              />
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      }
    >
      {label}
    </EuiToast>
  );
};

export default Toast;
