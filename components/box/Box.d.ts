import { PropsWithChildren } from 'react';
import { BoxProps } from 'rebass';
export interface Props extends Omit<BoxProps, 'css'> {
}
export declare const Box: import("react").ForwardRefExoticComponent<Omit<PropsWithChildren<Props>, "ref"> & import("react").RefAttributes<unknown>>;
