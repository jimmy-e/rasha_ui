import { CommonProps, StatusType } from "@ui/types";

export interface ToastParentProps extends ToastProps {
  id: string;
  onRemove: () => void;
}

export interface ToastProps extends CommonProps {
  "data-testid"?: string;
  buttonLabel?: string;
  label?: string;
  onClick?: () => void;
  sticky?: boolean;
  title: string;
  type?: StatusType;
}

export type ToastContextProps = (toast: ToastProps) => void;
