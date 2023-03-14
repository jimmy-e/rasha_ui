import React from 'react';
import merge from 'merge';
import { DeepPartial } from '@ui/types';
import { ToastContext, initialToastState } from './Toast.context';
import { ToastContextProps } from './Toast.types';

interface Props {
  value?: DeepPartial<ToastContextProps>;
}

export const MockToastProvider: React.FC<Props> = ({ children, value }) => {
  const providerValue = value ? merge(initialToastState, value) : initialToastState;

  return (
    <ToastContext.Provider value={providerValue}>
      {children}
    </ToastContext.Provider>
  );
};
