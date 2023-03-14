import React from 'react';
import Toast from './Toast';
import { ToastParentProps } from './Toast.types';
import styles from './Toast.emotion';

interface Props {
  toastList: ToastParentProps[];
}

const ToastList: React.FC<Props> = ({ children, toastList }) => (
  <>
    {children}
    <div className={styles.toastList}>
      {toastList.map((toastProps) => <Toast key={toastProps.id} {...toastProps} />)}
    </div>
  </>
);

export default ToastList;
