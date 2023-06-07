import React from 'react';
import { CardProps as RebassCardProps } from 'rebass';
export interface CardSecondaryProps extends Omit<RebassCardProps, 'css' | 'title'> {
    title?: React.ReactElement | string;
    children: React.ReactNode;
    placeholder?: string;
    contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
    readonly?: boolean;
}
declare const _default: React.NamedExoticComponent<CardSecondaryProps>;
export default _default;
