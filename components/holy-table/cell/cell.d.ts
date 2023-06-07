import { FC, ReactNode } from 'react';
import { BoxProps } from 'rebass';
interface Props extends Omit<BoxProps, 'css'> {
    children: ReactNode;
}
declare const Cell: FC<Props>;
export default Cell;
