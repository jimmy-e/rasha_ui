import { makeHighContrastColor, transparentize } from '@elastic/eui';
import { css } from '@emotion/css';
import { ButtonColor } from '@ui/types';
import { colors, shadeColors } from '../../../neutrons/colors/colors';

const buttonIconColor = (color: ButtonColor) => css`
  color: ${makeHighContrastColor(colors[color])(shadeColors.white)} !important;
  &:focus {
    background-color: ${transparentize(colors[color], 0.1)} !important;
  }
`;

export default {
  buttonIconColor,
};
