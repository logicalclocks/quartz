/// <reference types="react" />
import { FlexProps } from 'rebass';
export interface Props extends Omit<FlexProps, 'css'> {
    /** flexbox gap, in pixels, e.g. `40px` */
    gap?: string;
}
export declare const Flex: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<unknown>>;
