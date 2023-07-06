import { FlexProps } from 'rebass';
import { ChipsVariants } from './types';
export interface ChipProps extends Omit<FlexProps, 'css'> {
    value: string;
    boxed: boolean;
    variant?: ChipsVariants;
    disabled?: boolean;
    deletable?: boolean;
    onDelete: (value: string) => void;
}
declare const Chip: ({ value, onDelete, disabled, boxed, deletable, variant, ...props }: ChipProps) => import("react/jsx-runtime").JSX.Element;
export default Chip;
