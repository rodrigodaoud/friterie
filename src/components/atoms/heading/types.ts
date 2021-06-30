import { ReactNode } from 'react';
import { HeadingLevel } from '@type/globals';

export interface Props {
  level: HeadingLevel;
  children: ReactNode;
}

export interface StyledProps {
  level: HeadingLevel;
  as: string;
}
