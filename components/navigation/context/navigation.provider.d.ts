/// <reference types="react" />
import { TreeNode } from '../types';
export interface CategoriesProviderProps {
    tree: TreeNode[];
    trackBy?: keyof TreeNode;
    children: React.ReactNode;
    onNavigate?: (node: TreeNode | null) => void;
    onBackCLick?: () => void;
    takeActivePath?: any;
}
declare const NavigationProvider: ({ tree, trackBy, children, onNavigate, onBackCLick, takeActivePath, }: CategoriesProviderProps) => import("react/jsx-runtime").JSX.Element;
export default NavigationProvider;
