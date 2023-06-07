import { FC } from 'react';
import { BoxProps } from 'rebass';
export interface SpinnerProps extends Omit<BoxProps, 'css'> {
    size?: number;
    color?: string;
}
declare const Spinner: FC<SpinnerProps>;
export default Spinner;
