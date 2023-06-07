import React, { FC } from 'react';
import { BoxProps } from 'rebass';
export interface Tab {
    /** Title for the tab */
    title: string;
    /** Additional content, e.g. counter */
    altContent?: React.ReactElement | null;
    /** Whether tab is active or not */
    isActive: boolean;
    /** Handler called when tab is clicked */
    onClick: () => void;
}
export interface Props extends Omit<BoxProps, 'css'> {
    /** Title for the tabs bar */
    title?: string;
    /** A list of tabs, defined by `ALternativeHeaderTab` interface */
    tabs: Tab[];
    /** Whether to show a line under the tabs menu */
    withBase?: boolean;
}
export declare const AlternativeHeader: FC<Props>;
