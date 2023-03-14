import React from 'react';

export type AdditionalProps = Record<string, string | React.FC>;

export type EuiButtonEmptySize = 'xs' | 's' | 'm';

export const euiAcceptableButtonEmptyColors = ['primary', 'success', 'warning', 'danger', 'ghost', 'text'];
export type EuiAcceptableButtonEmptyColors = 'primary' | 'success' | 'warning' | 'danger' | 'ghost' | 'text';
