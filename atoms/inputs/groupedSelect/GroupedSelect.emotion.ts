import { css } from '@emotion/css';

const child = css`
  margin-left: 16px;
`;

const select = css`
  .euiContextMenuItem {
    border: 1px solid green !important;
  }
`;

const parent = (textBlack: string) => css`
  color: ${`${textBlack} !important`};
`;

export default {
  child,
  select,
  parent,
};
