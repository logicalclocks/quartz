import React from 'react';
import { FlexProps } from 'rebass';
import TooltipPositions from '../tooltip/positions';
export interface Props extends Omit<FlexProps, 'css'> {
    /** Text to render on hover */
    mainText: string;
    /** Color variants: e.g. `green` */
    variant?: 'green' | 'black' | 'white';
    /** Secondary text on the tooltip */
    secondaryText?: string;
    /** Position of the tooltip, e.g. `top` or `right` */
    tooltipPosition?: TooltipPositions;
}
export declare const Dot: ({ mainText, secondaryText, tooltipPosition: position, variant, sx, ...props }: Props) => React.JSX.Element;
