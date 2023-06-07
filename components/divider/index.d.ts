import { FC } from 'react';
import { BoxProps } from 'rebass';
export interface DividerProps extends Omit<BoxProps, 'css'> {
    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    width?: string;
    legend?: string;
}
declare const Divider: FC<DividerProps>;
export default Divider;
