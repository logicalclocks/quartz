import React from 'react';
import { BoxProps } from 'rebass';
export interface Props extends Omit<BoxProps, 'css'> {
    /** Text for the badge. E.g. `deployment` */
    text: string;
    /** Value for the badge. E.g. `pending` or 18 */
    value: string | number;
    /** Color variants: e.g. `green` */
    variant?: 'white' | 'gray';
}
export declare const TextValueBadge: ({ text, value, variant, sx, ...props }: Props) => React.JSX.Element;
