import { ReactNode } from 'react';

export interface FormikFieldProp {
  id?: string;
  name: string;
  label: string;
  children?: ReactNode;
}

export type Option = {
  value: string;
  label: string;
};
