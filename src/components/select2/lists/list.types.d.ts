import { SelectOpt } from '../types';
export interface SelectListProps {
    options: SelectOpt[];
    value: SelectOpt[];
    onChange: (value: SelectOpt | SelectOpt[]) => void;
    onClose: () => void;
}
