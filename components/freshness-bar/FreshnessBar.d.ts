import React from 'react';
type BarSizes = 'sm' | 'md';
export interface Props {
    /** expiration date given as `Date`(e.g. via new Date(model.createdAt)) */
    expirationDate: Date;
    /** Size, short(sm) or medium (md) */
    size?: BarSizes;
}
export declare const FreshnessBar: ({ expirationDate, size, ...props }: Props) => React.JSX.Element;
export default FreshnessBar;
export declare const getProgress: (expirationDate: Date) => number;
