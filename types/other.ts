export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Side = 'left' | 'right';
export type StatusType = 'danger' | 'info' | 'success' | 'warning';
