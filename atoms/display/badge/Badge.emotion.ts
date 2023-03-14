import { css } from '@emotion/css';
import { BooleanSize } from '@ui/types';

const badge = (size: BooleanSize) => css`
  svg {
    margin-left: ${size === 'l' ? '8px' : '4px'};
  }
`;

export default {
  badge,
};
