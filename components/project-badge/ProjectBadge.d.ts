import React from 'react';
import { FlexProps } from 'rebass';
export interface Props extends Omit<FlexProps, 'css'> {
    /** Value for the badge. E.g. 'pending' or 18 */
    value: string | number;
    /** Whether to show a lock icon */
    isLock?: boolean;
}
export declare const ProjectBadge: ({ value, isLock, sx, ...props }: Props) => React.JSX.Element;
