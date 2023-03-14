import React from 'react';
import { Avatar } from './Avatar';

export const NameExampleAcme: React.FC = () => <Avatar name="Acme" />;

export const NameExampleJohnSmith: React.FC = () => <Avatar name="John Smith" />;

export const CircleExample: React.FC = () => <Avatar name="Acme" shape="circle"/>;

export const SquareExample: React.FC = () => <Avatar name="Acme" shape="square"/>;
