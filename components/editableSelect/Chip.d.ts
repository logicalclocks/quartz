import { FC } from 'react';
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
declare const Chip: FC<ChipProps>;
export default Chip;
