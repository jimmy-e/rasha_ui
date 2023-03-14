import React from 'react';
import { Badge } from './Badge';

export const DefaultExample: React.FC = () => <Badge color="default" label="default" />;
export const WhiteExample: React.FC = () => <Badge color="white" label="white" />;
export const PrimaryExample: React.FC = () => <Badge color="primary" label="primary" />;
export const SecondaryExample: React.FC = () => <Badge color="secondary" label="secondary" />;
export const AccentExample: React.FC = () => <Badge color="accent" label="accent" />;
export const SuccessExample: React.FC = () => <Badge color="success" label="success" />;
export const WarningExample: React.FC = () => <Badge color="warning" label="warning" />;
export const DangerExample: React.FC = () => <Badge color="danger" label="danger" />;
export const NoIconExample: React.FC = () => <Badge label="no icon" />;
export const SmallIconExample: React.FC = () => <Badge iconName="info" label="small" size="s" />;
export const LargeIconExample: React.FC = () => <Badge iconName="info" label="large" size="l" />;
export const SmallExample: React.FC = () => <Badge label="small" size="s" />;
export const LargeExample: React.FC = () => <Badge label="large" size="l" />;
export const NoClickExample: React.FC = () => <Badge label="no onClick event" />;
export const ClickExample: React.FC = () => <Badge label="has onClick event" onClick={() => {}}/>;
