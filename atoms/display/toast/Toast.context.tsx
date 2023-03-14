import React, { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ToastProps, ToastParentProps, ToastContextProps } from './Toast.types';
import ToastList from './ToastList';

export const initialToastState: ToastContextProps = () => {};
export const ToastContext = createContext<ToastContextProps>(initialToastState);
export const useToast = (): ToastContextProps => useContext(ToastContext);

export const ToastProvider: React.FC = ({ children }) => {
  const [toastList, setToastList] = useState<ToastParentProps[]>([]);

  const removeToast = (id: string) => {
    setToastList((prev) => prev.filter((item) => item.id !== id));
  };

  const onToast = (toast: ToastProps) => {
    const id = uuid();

    const finalToast = {
      ...toast,
      id,
      onRemove: () => removeToast(id),
    };
    setToastList((prev) => [...prev, finalToast]);

    if (!toast.sticky) {
      setTimeout(() => removeToast(id), 6000);
    }
  };

  return (
    <ToastContext.Provider value={onToast}>
      <ToastList toastList={toastList}>
        {children}
      </ToastList>
    </ToastContext.Provider>
  );
};
