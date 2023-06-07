import React from 'react';
import { CardProps as RebassCardProps } from 'rebass';
export interface CardProps extends Omit<RebassCardProps, 'css' | 'title'> {
    title?: React.ReactElement | string;
    link?: string;
    actions?: React.ReactNode;
    children?: React.ReactNode;
    contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
    readOnly?: boolean;
    withoutShadow?: boolean;
    expandable?: boolean;
}
declare const _default: React.NamedExoticComponent<CardProps>;
export default _default;
