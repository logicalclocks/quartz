import React, { FC } from 'react';
import { TreeNode } from '../types';
export interface CategoriesProviderProps {
    tree: TreeNode[];
    trackBy?: keyof TreeNode;
    children: React.ReactNode;
    onNavigate?: (node: TreeNode | null) => void;
    onBackCLick?: () => void;
    takeActivePath?: any;
}
declare const NavigationProvider: FC<CategoriesProviderProps>;
export default NavigationProvider;
