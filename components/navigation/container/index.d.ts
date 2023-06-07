/// <reference types="react" />
import { NavigationCategoryProps } from '../category';
import { NavigationItemProps, TreeNode } from '../types';
type INavigation<P> = React.FC<P> & {
    Item: React.FC<NavigationItemProps>;
    Category: React.FC<NavigationCategoryProps>;
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
