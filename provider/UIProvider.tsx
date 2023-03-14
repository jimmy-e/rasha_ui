import React from 'react';
import { ToastProvider } from '../atoms/display/toast/Toast.context';

export const UIProvider: React.FC = ({ children }) => (
  <ToastProvider>
    {children}
  </ToastProvider>
);
