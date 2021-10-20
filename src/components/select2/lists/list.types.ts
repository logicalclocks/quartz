import React from 'react';
import { SelectOpt } from '../types';

export interface SelectListProps {
  options: SelectOpt[];
  value: SelectOpt[];
  onChange: (value: SelectOpt[]) => void;
  additionalComponents?: React.ReactNode[];
  onClose: () => void;
}
