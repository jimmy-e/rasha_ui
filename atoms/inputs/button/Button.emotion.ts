import { css } from '@emotion/css';
import { colors, shadeColors } from '../../../neutrons/colors/colors';

const brandGreen = (fill: boolean) => css`
  background: ${fill ? colors.brandGreen : colors.white} !important;
  border-color: ${colors.brandGreen} !important;
  color: ${fill ? colors.white : colors.brandGreen} !important;
`;

const oval = css`
  border-color: ${shadeColors.lightGray} !important;
  border-radius: 40px !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  height: 24px !important;
`;

export default {
  brandGreen,
  oval,
};
