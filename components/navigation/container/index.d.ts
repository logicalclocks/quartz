import React, { FC } from 'react';
import { NavigationCategoryProps } from '../category';
import { NavigationItemProps, TreeNode } from '../types';
type INavigation<P> = FC<P> & {
    Item: FC<NavigationItemProps>;
    Category: FC<NavigationCategoryProps>;
};
export interface NavigationProps {
    children?: React.ReactNode;
    footer?: React.ReactNode;
    header?: React.ReactNode;
    trackBy?: keyof TreeNode;
    tree?: TreeNode[];
    onNavigate?: (node: TreeNode | null) => void;
    onBackCLick?: () => void;
}
declare const Navigation: INavigation<NavigationProps>;
export default Navigation;
