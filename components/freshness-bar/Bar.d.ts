import React from 'react';
import { BoxProps, SxStyleProp } from 'rebass';
interface Props extends Omit<BoxProps, 'css'> {
    variant?: 'progress' | 'freshness';
    width?: string;
    value: number;
}
export declare const Bar: ({ variant, value, width, ...props }: Props) => React.JSX.Element;
export declare const overflowStyles: (translate: number) => SxStyleProp;
export {};
