import React from 'react';
import { NavigationItemProps } from '../types';
export interface NavigationCategoryProps extends Omit<NavigationItemProps, 'isSubItem'> {
    onBackClick?: () => void;
    hideBack?: boolean;
}
declare const _default: React.NamedExoticComponent<NavigationCategoryProps>;
export default _default;
