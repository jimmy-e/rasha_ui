import { css, keyframes } from '@emotion/css';

const toastTransform = keyframes`
  from {
    transform: translateY(-150%) scale(0.95);
    opacity: 0.5;
  }

  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const toast = (animation: any) => css`
  .euiToastHeader {
    align-items: center;
  }
  .euiToastHeader__title {
    width: 100%;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }

  border-top-width: 2px;
  border-top-style: solid;
  border-left: 0 solid transparent;
  position: relative;
  margin: 8px;
  display: block;
  z-index: auto;
  transition: all 0.6s ease-in-out;
  animation: ${`${animation.normal} ${toastTransform} ${animation.resistance}`};
`;

const toastList = css`
  position: fixed;
  top: 24px;
  width: 60%;
  margin-left: -30%; /* half the width */
  left: 50%;
  right: 50%;
  transition: all 0.6s ease-in-out;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;
`;

export default {
  toast,
  toastList,
};
