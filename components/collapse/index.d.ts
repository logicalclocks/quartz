import { BoxProps } from 'rebass';
import React from 'react';
export interface CollapseProps extends Omit<BoxProps, 'css' | 'title'> {
    title: React.ReactNode;
    secondaryContent?: React.ReactNode;
    contentProps?: Omit<BoxProps, 'css' | 'children'>;
    isOpenProps?: boolean;
    openChange?: (value: boolean) => void;
}
declare const _default: React.NamedExoticComponent<CollapseProps>;
export default _default;
