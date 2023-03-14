// ----- COMMON TYPES ----- //

type BrandColor = 'brandGreen';

// ----- EXPORTED TYPES ----- //

export type ButtonColor = ThemeColor | BrandColor | 'ghost' | 'text';

export type Color = ThemeColor | BrandColor | 'black' | 'subdued' | 'white';

export type ShadeColor =
  'white'
  | 'lightestGray'
  | 'lightGray'
  | 'gray'
  | 'darkGray'
  | 'darkestGray'
  | 'black';

export type ThemeColor =
  'accent'
  | 'danger'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';
