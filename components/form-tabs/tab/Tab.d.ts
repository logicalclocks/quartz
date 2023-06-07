import React from 'react';
import { TabState } from '../types';
export interface TabProps {
    title: string;
    state?: TabState;
    active?: boolean;
    onClick: () => any;
}
declare const _default: React.NamedExoticComponent<TabProps>;
export default _default;
