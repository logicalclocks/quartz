import React from 'react';
import { BoxProps } from 'rebass';
import { Props as EmbeddedTabItem } from './Tab';
export interface Props extends Omit<BoxProps, 'css'> {
    tabs: EmbeddedTabItem[];
    initialTab?: number;
    onTabChange?: (tabIndex: number) => void;
}
declare const EmbeddedTabs: ({ onTabChange, initialTab, ...restProps }: Props) => React.JSX.Element;
export default EmbeddedTabs;
export interface ControlledProps extends Omit<Props, 'initialTab'> {
    activeTab: number;
}
export declare const Controlled: ({ tabs, onTabChange, sx, activeTab, ...boxProps }: ControlledProps) => React.JSX.Element;
