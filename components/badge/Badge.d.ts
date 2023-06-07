import React from 'react';
import { FlexProps } from 'rebass';
import { IconName } from '../icon/list';
import { BadgeVariant } from './types';
type Mode = 'default' | 'bordered';
export interface Props extends Omit<FlexProps, 'css'> {
    /** Value for the badge. E.g. 'pending' or 18 */
    value: string | number;
    /** One of badge variants. Defined by `BadgeVariant` type. E.g. `light` or `warning`... */
    variant?: BadgeVariant;
    /** Badge mode: `default` or `bordered` */
    mode?: Mode;
    /** Whether to show loading spinner */
    loading?: boolean;
    /** Icon, used as `IconName.nameOfTheIcon` e.g. `IconName.download` */
    icon?: IconName;
}
export declare const Badge: ({ value, variant, mode, loading, icon, sx, ...props }: Props) => React.JSX.Element;
export {};
