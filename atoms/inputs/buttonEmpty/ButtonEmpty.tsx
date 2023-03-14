import React, { MouseEventHandler, useEffect, useState } from "react";
import { EuiButtonEmpty } from "@elastic/eui";
import { ButtonColor, CommonProps, IconName, Side, Size } from "@ui/types";
import {
  AdditionalProps,
  EuiAcceptableButtonEmptyColors,
  EuiButtonEmptySize,
  euiAcceptableButtonEmptyColors,
} from "./ButtonEmpty.types";
import { Icon } from "../../../neutrons/icon/Icon";
import styles from "./ButtonEmpty.emotion";

export interface ButtonEmptyProps extends CommonProps {
  /** data-tourid used for stream tour */
  "data-tourid"?: string;
  /** The button color */
  color?: ButtonColor;
  /** Is the button disabled */
  disabled?: boolean;
  /** This makes sure that the button is flush with the edge of the container, so that it is horizontally aligned
   *  with other content in the container */
  flush?: Side | "both";
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
  /** The size of the button */
  size?: Size;
}

export const ButtonEmpty: React.FC<ButtonEmptyProps> = ({
  "data-testid": dataTestId,
  "data-tourid": dataTourId,
  color = "primary",
  disabled,
  flush,
  href,
  iconName,
  iconSide = "left",
  label,
  loading = false,
  onClick,
  size = "l",
}) => {
  const [additionalProps, setAdditionalProps] = useState<AdditionalProps>({});

  useEffect(() => {
    const finalProps: Partial<AdditionalProps> = {};

    if (href) {
      finalProps.href = href;
      finalProps.target = "_blank";
    }

    if (iconName) {
      finalProps.iconType = () => <Icon name={iconName} />;
      finalProps.iconSide = iconSide;
    }

    setAdditionalProps((prevState) => ({ ...prevState, ...finalProps }));
  }, [href, iconName, iconSide]);

  const colorIsAccepted = euiAcceptableButtonEmptyColors.includes(color);
  const finalColor = colorIsAccepted
    ? (color as EuiAcceptableButtonEmptyColors)
    : "primary";
  const buttonEmptyClassName = !colorIsAccepted
    ? styles.buttonEmptyColor(color)
    : undefined;

  const finalSize: Record<Size, EuiButtonEmptySize> = {
    l: "m",
    m: "s",
    s: "xs",
  };

  return (
    <EuiButtonEmpty
      data-testid={dataTestId || "ui-atom-input-button-empty"}
      data-tourid={dataTourId}
      className={buttonEmptyClassName}
      color={finalColor}
      disabled={disabled}
      flush={flush}
      isLoading={loading}
      onClick={onClick}
      size={finalSize[size]}
      {...additionalProps}
    >
      {label}
    </EuiButtonEmpty>
  );
};
