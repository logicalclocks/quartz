import { FC } from 'react';
import { BoxProps } from 'rebass';
export interface Props extends Omit<BoxProps, 'css'> {
}
export declare const Box: FC<Props>;
