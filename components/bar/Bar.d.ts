import React from 'react';
import { BoxProps } from '../box';
export interface Props extends Omit<BoxProps, 'css'> {
    /** width of the bar */
    width?: string;
    /** percentage value, e.g. 50 which means 50% */
    value: number;
    /** whether to show caption with percentage */
    hasCaption?: boolean;
}
export declare const Bar: ({ value, width, hasCaption, ...props }: Props) => React.JSX.Element;
export declare const inside: {
    height: string;
    display: string;
    position: string;
    pointerEvents: string;
};
