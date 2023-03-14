import { Color, IconName } from '@ui/types';

export interface IndividualIconProps {
  'data-testid': string;
  color?: Color;
  fill?: Color;
  size: number;
}

// This is for storybook purposes only
export const customSVGIcons: Array<IconName> = [
  'air',
  'airFile',
  'buildingEnvelope',
  'construction',
  'documentFile',
  'excelFile',
  'excelFileColor',
  'fileColor',
  'fire',
  'floodRisk',
  'imageFile',
  'imageFileColor',
  'occupancy',
  'pdfFile',
  'pdfFileColor',
  'powerpointFile',
  'property',
  'rapid',
  'rms',
  'rmsFile',
  'stewardship',
  'wordFileColor',
  'zipFile',
];
