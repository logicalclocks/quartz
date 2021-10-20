import { SelectOpt } from '../types';

export interface SelectListProps {
  options: SelectOpt[];
  value: SelectOpt[];
  onChange: (value: SelectOpt[]) => void;
  onClose: () => void;
}
