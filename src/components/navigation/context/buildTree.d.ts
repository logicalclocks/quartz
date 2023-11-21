import { ReactElement } from 'react';
import { NavigationItemProps, TreeNode } from '../types';
declare const buildTree: (children: ReactElement<NavigationItemProps>) => TreeNode[];
export default buildTree;
