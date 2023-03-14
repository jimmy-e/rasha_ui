import React, { useEffect, useState } from 'react';
import { EuiFieldText, EuiFieldTextProps } from '@elastic/eui';
import { CommonProps, IconName } from '@ui/types';
import { Icon } from '../../../neutrons/icon/Icon';
import { AdditionalProps } from './TextField.types';

export interface TextFieldProps extends CommonProps {
  /** Is the text field disabled */
  disabled?: boolean;
  /** Does the component take up the full width of its parent container */
  fullWidth?: boolean;
  /** The unique identifier for the field */
  id?: string;
  /** The name of the icon that should appear with the text field */
  iconName?: Extract<IconName, 'search'>;
  /** Should we visually indicate to the user that the value of the component is invalid */
  invalid?: boolean;
  /** Is the text field showing a loading indicator */
  loading?: boolean;
  /** The name of the field for form purposes */
  name?: string;
  /** When the input component loses focus */
  onBlur?: EuiFieldTextProps['onBlur'];
  /** The function invoked when the text field is changed */
  onChange?: EuiFieldTextProps['onChange'];
  /** The text field placeholder */
  placeholder?: string;
  /** Is the component in read only mode */
  readOnly?: boolean;
  /** The text field value */
  value?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((
  {
    'data-testid': dataTestId,
    disabled,
    fullWidth = false,
    id,
    iconName,
    invalid = false,
    loading = false,
    name,
    onBlur,
    onChange,
    placeholder,
    readOnly = false,
    value,
  },
  ref,
) => {
  const [additionalProps, setAdditionalProps] = useState<AdditionalProps>({});

  useEffect(() => {
    if (iconName) {
      const finalProps = {
        icon: () => <Icon name={iconName} />,
      };

      setAdditionalProps((prevState) => ({ ...prevState, ...finalProps }));
    }
  }, []);

  return (
    <EuiFieldText
      data-testid={dataTestId || 'ui-atom-input-text-field'}
      disabled={disabled}
      fullWidth={fullWidth}
      id={id}
      inputRef={ref}
      isInvalid={invalid}
      isLoading={loading}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      value={value}
      {...additionalProps}
    />
  );
});
